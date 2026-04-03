/**
 * NomaPhone Blog Image Generator
 * 
 * PURPOSE:
 * Automatically generates hero images for blog posts using the Gemini API.
 * It scans the `src/content/blog` directory, identifies posts missing a hero image
 * (or using a placeholder), and generates a vibrant pop-art style illustration 
 * based on the post's title and description.
 * 
 * HOW IT WORKS:
 * 1. Scans all .md and .mdx files in the blog directory.
 * 2. Parses the frontmatter to extract title, description, and pubDate.
 * 3. Sorts posts by their proximity to today's date (closest dates first).
 * 4. Checks if an image already exists in `src/assets`.
 * 5. Calls the Gemini API (`gemini-3.1-flash-image-preview`) with a specific pop-art style prompt.
 * 6. Saves the generated image as a .jpg in `src/assets`.
 * 7. Updates the blog post frontmatter with the new `heroImage` path.
 * 
 * USAGE:
 * GEMINI_API_KEY=your_api_key_here node scripts/generate-blog-images.js
 * 
 * PREREQUISITES:
 * - A valid Google Gemini API Key with access to the image generation preview.
 * - Node.js environment with `dotenv`.
 */

import fs from 'fs';
import path from 'path';
import 'dotenv/config';

// Configuration
const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');
const ASSETS_DIR = path.join(process.cwd(), 'src/assets');
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const MODEL = "gemini-3.1-flash-image-preview";
const STYLE_PROMPT = "Vibrant and bold pop art illustration. High-contrast, bright colors, thick black outlines, Roy Lichtenstein inspired style with digital Ben-Day dots for shading. The theme is digital nomads and international communication. Professional digital art, high-resolution, no text, clean composition.";

// Check for API Key
if (!GEMINI_API_KEY) {
  console.error("Error: GEMINI_API_KEY environment variable is not set.");
  process.exit(1);
}

// Ensure assets directory exists
if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

/**
 * Calls the Gemini API to generate an image with a retry mechanism and exponential backoff.
 */
async function generateImage(title, description, slug, retries = 3) {
  console.log(`🎨 Generating image for: ${title}`);
  
  const prompt = `${STYLE_PROMPT} \n\nScene: ${description} \n\nFocus on: ${title}. Digital nomad lifestyle, global connectivity.`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${GEMINI_API_KEY}`;
  
  const payload = {
    contents: [{
      parts: [{ text: prompt }]
    }],
    generationConfig: {
      response_modalities: ["IMAGE"],
      image_config: {
        aspect_ratio: "16:9",
        image_size: "1K"
      }
    }
  };

  const MAX_RETRIES = 3;
  const currentAttempt = MAX_RETRIES - retries + 1;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      // Increased timeout to 90 seconds for image generation
      signal: AbortSignal.timeout(90000) 
    });

    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch (e) {
        errorData = { message: await response.text() };
      }
      throw new Error(`Gemini API Error (${response.status}): ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    
    // Check for safety filters or other non-generation stops
    if (data.candidates?.[0]?.finishReason && data.candidates[0].finishReason !== 'STOP') {
      console.warn(`⚠️ Generation finished with reason: ${data.candidates[0].finishReason} for ${slug}`);
    }

    const imagePart = data.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
    
    if (!imagePart) {
      // Sometimes the API returns success but no image due to safety filters
      console.error("DEBUG: Response structure:", JSON.stringify(data, null, 2));
      throw new Error("No image data returned in response (possible safety filter block).");
    }

    const imageBuffer = Buffer.from(imagePart.inlineData.data, 'base64');
    const fileName = `${slug}.jpg`;
    const filePath = path.join(ASSETS_DIR, fileName);

    fs.writeFileSync(filePath, imageBuffer);
    return `../../assets/${fileName}`;
    
  } catch (error) {
    const isNetworkError = error.message.includes('fetch failed') || 
                           error.name === 'TimeoutError' || 
                           error.code === 'ECONNRESET' ||
                           error.code === 'ETIMEDOUT';

    if (retries > 0 && isNetworkError) {
      const waitTime = Math.pow(2, currentAttempt) * 5000; // 10s, 20s, 40s...
      console.warn(`⚠️ Network error for ${slug} (${error.message}). Retrying in ${waitTime/1000}s... (${retries} attempts left)`);
      await new Promise(r => setTimeout(r, waitTime));
      return generateImage(title, description, slug, retries - 1);
    }

    console.error(`❌ Failed to generate image for ${slug}:`, error);
    return null;
  }
}

/**
 * Extracts the slug from filename or frontmatter.
 */
function getSlug(fileName, frontmatter) {
  if (frontmatter.slug) return frontmatter.slug;
  return fileName.replace(/\.mdx?$/, '');
}

/**
 * Simple frontmatter parser.
 */
function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]+?)\r?\n---/);
  if (!match) return { data: {}, body: content };
  
  const yaml = match[1];
  const data = {};
  yaml.split(/\r?\n/).forEach(line => {
    const [key, ...value] = line.split(':');
    if (key && value.length > 0) {
      data[key.trim()] = value.join(':').trim().replace(/^"(.*)"$/, '$1');
    }
  });
  
  return { data, body: content.slice(match[0].length), rawFrontmatter: match[1] };
}

/**
 * Main process: Reads, sorts, and processes blog posts.
 */
async function processBlogs() {
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
  const now = new Date();
  
  const posts = files.map(file => {
    const filePath = path.join(BLOG_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data, body, rawFrontmatter } = parseFrontmatter(content);
    const pubDate = data.pubDate ? new Date(data.pubDate) : new Date(0);
    
    return {
      file,
      filePath,
      data,
      body,
      rawFrontmatter,
      slug: getSlug(file, data),
      pubDate,
      diff: Math.abs(pubDate - now)
    };
  });

  posts.sort((a, b) => a.diff - b.diff);

  console.log(`🔍 Found ${posts.length} blog posts. Processing by pubDate proximity...`);

  for (const post of posts) {
    const expectedImagePath = path.join(ASSETS_DIR, `${post.slug}.jpg`);
    const hasImageFile = fs.existsSync(expectedImagePath);
    const heroImageInFrontmatter = post.data.heroImage;
    const isPlaceholder = heroImageInFrontmatter && heroImageInFrontmatter.includes('placeholder');

    if (heroImageInFrontmatter && !isPlaceholder && hasImageFile) {
      // Post already has a valid, non-placeholder image linked and present
      continue;
    }

    if (!heroImageInFrontmatter) {
      console.log(`✨ Processing ${post.slug} (Missing heroImage field)...`);
    } else if (isPlaceholder) {
      console.log(`✨ Processing ${post.slug} (Currently using placeholder: ${heroImageInFrontmatter})...`);
    } else if (!hasImageFile) {
      console.log(`✨ Processing ${post.slug} (Linked image file missing on disk: ${expectedImagePath})...`);
    }
    
    const heroImagePath = await generateImage(post.data.title, post.data.description, post.slug);
    
    if (heroImagePath) {
      let newFrontmatter = post.rawFrontmatter;
      if (post.data.heroImage) {
        newFrontmatter = newFrontmatter.replace(/heroImage\s*:\s*.*?\r?\n/, `heroImage: "${heroImagePath}"\n`);
      } else {
        newFrontmatter += `\nheroImage: "${heroImagePath}"`;
      }
      
      const newContent = `---\n${newFrontmatter.trim()}\n---${post.body}`;
      fs.writeFileSync(post.filePath, newContent);
      console.log(`✅ Updated ${post.file} with new hero image.`);
    }
    
    // Throttling to respect API limits (2s delay)
    await new Promise(r => setTimeout(r, 2000));
  }
  
  console.log("🏁 All blog posts processed!");
}

processBlogs();
