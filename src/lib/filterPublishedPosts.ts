// src/utils/filterPublishedPosts.ts
export function isPublished(pubDate: string | Date): boolean {
  const postDate = new Date(pubDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return postDate <= today;
}