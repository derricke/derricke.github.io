import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { CategoryItem, ContentItem } from '@/lib/content/types';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

// --- Utilities ---

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const noOfWords = (content || '').split(/\s/g).length;
  const minutes = Math.max(1, Math.ceil(noOfWords / wordsPerMinute));
  return `${minutes} min read`;
}

function getAllPostFiles(): Array<{ category: string; filename: string }> {
  if (!fs.existsSync(contentDirectory)) return [];

  const categoryDirs = fs
    .readdirSync(contentDirectory, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const results: Array<{ category: string; filename: string }> = [];
  for (const category of categoryDirs) {
    const categoryPath = path.join(contentDirectory, category);
    const files = fs
      .readdirSync(categoryPath)
      .filter((f) => f.endsWith('.mdx') && f !== 'index.mdx');
    for (const filename of files) {
      results.push({ category, filename });
    }
  }
  return results;
}

// --- Categories ---

export function getCategoryBySlug(slug: string): CategoryItem {
  const fullPath = path.join(contentDirectory, slug, 'index.mdx');
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Category metadata not found: ${fullPath}`);
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug,
    description: data.description || '',
    content,
  };
}

export function getAllCategories(): CategoryItem[] {
  if (!fs.existsSync(contentDirectory)) return [];

  return fs
    .readdirSync(contentDirectory, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => {
        try {
            return getCategoryBySlug(d.name);
        } catch (e) {
            console.error(e);
            return null;
        }
    })
    .filter((c): c is CategoryItem => c !== null)
    .sort((a, b) => a.title.localeCompare(b.title));
}

// --- Posts ---

export function getPostBySlug(category: string, slug: string): ContentItem {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(contentDirectory, category, `${realSlug}.mdx`);
  if (!fs.existsSync(fullPath)) {
      throw new Error(`Post not found: ${fullPath}`);
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    category,
    title: data.title,
    description: data.description,
    blufSummary: data.blufSummary,
    author: data.author,
    publishedAt: data.publishedAt?.toISOString ? data.publishedAt.toISOString() : data.publishedAt,
    lastModifiedAt: data.lastModifiedAt?.toISOString
      ? data.lastModifiedAt.toISOString()
      : data.lastModifiedAt,
    primarySources: data.primarySources,
    tags: data.tags,
    content,
    readTime: calculateReadTime(content),
  };
}

export function getAllPosts(): ContentItem[] {
  return getAllPostFiles()
    .map(({ category, filename }) => {
        try {
            return getPostBySlug(category, filename);
        } catch (e) {
            console.error(e);
            return null;
        }
    })
    .filter((p): p is ContentItem => p !== null)
    .sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1));
}

export function getPostsByCategory(category: string): ContentItem[] {
  return getAllPosts().filter((post) => post.category === category);
}
