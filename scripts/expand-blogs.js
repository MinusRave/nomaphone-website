import { Anthropic } from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';
import 'dotenv/config';

// Load the Anthropic client using the API key from the environment
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// The system prompt explicitly injecting our "NomaPhone Blog Writer" skill and brand voice
const SYSTEM_PROMPT = `
You are the NomaPhone Blog Writer. NomaPhone is a browser-based international calling service for digital nomads, expats, and remote workers.

You must follow these core guidelines strictly:
1. Tone & Style: Confident, direct, factual, benefit-first. Speak directly to digital nomads and expats.
2. Anti-patterns: NEVER use words like "Unlock", "Seamless", "Journey", "Revolutionize", "Discover". No bubbly or toy-like language. Zero marketing fluff.
3. Content Structure: Short paragraphs (1-2 sentences), bullet points for scannability, and markdown headings (H2, H3).
4. Value Prop: Remind users they can call landlines globally directly from their browser, no app or contract required. Mention SMS 2FA capabilities if relevant.

Your task is to take a draft markdown file containing frontmatter and a placeholder, and return a FULLY WRITTEN, SEO-optimized blog post (approx. 800-1000 words).
IMPORTANT: Return the ENTIRE file content, including the original frontmatter at the top. Do not wrap the response in markdown code blocks (\`\`\`md ... \`\`\`), just output the raw text.
`;

const blogDir = path.join(process.cwd(), 'src/content/blog');

async function processBlogs() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("Error: ANTHROPIC_API_KEY environment variable is not set.");
    console.log("Please run the script as: ANTHROPIC_API_KEY=your_token node scripts/expand-blogs.js");
    process.exit(1);
  }

  // Get all the newly generated MDX files
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.mdx') && !f.includes('whatsapp-vs-traditional') && !f.includes('skype-shut-down') && !f.includes('how-to-call-us-banks-from-abroad-without-paying-40-in-roaming') && !f.includes('international-calling-from-uk-brexit-era-guide-2025'));

  console.log(`Found ${files.length} placeholder files to expand.`);

  for (const file of files) {
    const filePath = path.join(blogDir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    // Skip if it looks like it's already been fully written (simple heuristic: > 2000 chars)
    if (content.length > 2000) {
      console.log(`Skipping ${file} (already expanded)`);
      continue;
    }

    console.log(`Expanding ${file}...`);

    try {
      const response = await anthropic.messages.create({
        model: 'claude-sonnet-4-6',
        max_tokens: 4000,
        system: SYSTEM_PROMPT,
        messages: [
          {
            role: 'user',
            content: `Here is the placeholder blog post. Please write the full article based on the title, description, and keyword provided in the placeholder text. Maintain the frontmatter exactly as it is.\n\n${content}`
          }
        ]
      });

      let newContent = response.content[0].text;
      
      // Clean up if Claude accidentally wrapped it in markdown code blocks
      if (newContent.startsWith('```md') || newContent.startsWith('```markdown')) {
          newContent = newContent.replace(/^```(md|markdown)?\n/, '').replace(/\n```$/, '');
      }

      fs.writeFileSync(filePath, newContent);
      console.log(`✅ Successfully wrote ${file}\n`);
      
      // Sleep for a second to respect rate limits
      await new Promise(r => setTimeout(r, 2000));
      
    } catch (error) {
      console.error(`❌ Failed to process ${file}:`, error.message);
    }
  }
  console.log("All blog posts processed!");
}

processBlogs();
