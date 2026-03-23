---
name: nomaphone-blog-writer
description: Write SEO-optimized blog posts for NomaPhone. Use when you need to create, draft, or outline new articles for the NomaPhone marketing site, ensuring brand voice and SEO compliance.
---

# NomaPhone Blog Writer

This skill guides you through the process of writing high-quality, SEO-optimized blog posts for NomaPhone that align with the brand voice, technical constraints, and marketing goals.

## 1. Context & Research Phase

Before writing a new blog post:
1. **Read Brand Context:** If you haven't recently, read the files in the project's `.ai/` directory (e.g., `NomaPhone_Brand_Positioning.md`, `NomaPhone_Target_Audience.md`, `NomaPhone_Value_Proposition.md`). This ensures you understand the "nomad-native" voice: confident, direct, telecom-grade reliability, zero marketing fluff.
2. **Review Existing Posts:** Scan `src/content/blog/` to understand the formatting, frontmatter structure, and to avoid topic cannibalization.
3. **Establish Keywords:** Identify 1 primary keyword and 2-3 secondary long-tail keywords based on the user's prompt or target topic.

## 2. Content Generation Rules

When drafting the content, strictly adhere to the following:

### Tone & Style
- **Voice:** Direct, factual, benefit-first. Maximum 8 words for headlines. 1-2 sentences per paragraph block. No jargon. No filler.
- **Anti-patterns:** NEVER use words like "Unlock", "Seamless", "Journey", "Revolutionize", "Discover". Do not use bubbly or toy-like language.
- **Perspective:** Speak directly to digital nomads, remote workers, and expats who need reliable communication (e.g., calling banks, 2FA, government offices, client calls).

### SEO Guidelines
- **Title (`title` in frontmatter):** 50-60 characters, must include the primary keyword near the beginning.
- **Description (`description` in frontmatter):** 150-160 characters, compelling summary including the primary keyword and a clear value prop.
- **Headings (H2, H3):** Use markdown headings logically. Include secondary keywords in at least one H2. Keep them short and factual.
- **Readability:** Use bullet points, short paragraphs, and bold text for scannability.
- **Internal Linking:** Suggest or implement internal links to other existing blog posts or the NomaPhone homepage/pricing where contextually relevant.

## 3. Formatting & Frontmatter

All blog posts must be created in `src/content/blog/` as `.md` or `.mdx` files. The filename should be the URL slug (lowercase, hyphenated, keyword-rich).

Use exactly this frontmatter template:

```mdx
---
title: "[Primary Keyword]: [Compelling Hook]"
description: "[Brief, 150-char SEO meta description containing the keyword.]"
pubDate: "YYYY-MM-DD"
heroImage: "../../assets/[slug-name].jpg" # Or placeholder
tags: ["nomad", "international-calling", "remote-work"]
author: "NomaPhone Team"
readingTime: "X min read"
---

[Content starts here...]
```

## 4. Image Generation Workflow

Every blog post requires a hero image.
- **Action:** If requested, use available image generation tools/skills (or coordinate with the user to run an external image gen script) to create the hero image.
- **Prompt Guidelines:** Prompts should request images that reflect "NomaPhone Design System": Trust-first, telecom reliability, nomad simplicity. Preferred palettes involve dark navy/midnight blue (`#0B1120`) and signal green (`#10B981`). Avoid cheesy, overly cartoonish stock photos; prefer clean, modern, slightly abstract or pop-art technical illustrations.
- **Placement:** Save the final image to `src/assets/` and reference it correctly in the frontmatter (`../../assets/filename.jpg`).
- **Fallback:** If image generation fails or is skipped, use an existing placeholder like `../../assets/blog-placeholder-1.jpg`.

## 5. Execution Steps

When invoked, follow these steps to fulfill the user's request:
1. **Plan:** Identify the slug, title, and keywords. Share a brief outline with the user if the topic is complex.
2. **Draft:** Write the full markdown content adhering to the Tone & Style rules.
3. **Save:** Write the file to `src/content/blog/<slug>.mdx`.
4. **Assets:** Generate or assign the hero image.
5. **Verify:** Confirm the frontmatter is correct and the markdown renders cleanly.
