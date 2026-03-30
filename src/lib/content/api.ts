import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ContentItem } from '@/lib/content/types';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

export function getPostSlugs() {
  if (!fs.existsSync(contentDirectory)) return [];
  return fs.readdirSync(contentDirectory);
}

export function getPostBySlug(slug: string): ContentItem {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(contentDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title,
    description: data.description,
    blufSummary: data.blufSummary,
    author: data.author,
    publishedAt: data.publishedAt?.toISOString ? data.publishedAt.toISOString() : data.publishedAt,
    lastModifiedAt: data.lastModifiedAt?.toISOString ? data.lastModifiedAt.toISOString() : data.lastModifiedAt,
    primarySources: data.primarySources,
    tags: data.tags,
    content: content,
  };
}

export function getAllPosts(): ContentItem[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.publishedAt > post2.publishedAt ? -1 : 1));
  return posts;
}
