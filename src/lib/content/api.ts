import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { CategoryItem, ContentItem } from '@/lib/content/types';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

// ---------------------------------------------------------------------------
// Categories — each subdirectory is a category, defined by its index.mdx
// ---------------------------------------------------------------------------

export function getCategoryBySlug(slug: string): CategoryItem {
  const fullPath = path.join(contentDirectory, slug, 'index.mdx');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    description: data.description,
    content,
  };
}

export function getAllCategories(): CategoryItem[] {
  if (!fs.existsSync(contentDirectory)) return [];

  return fs
    .readdirSync(contentDirectory, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => getCategoryBySlug(d.name))
    .sort((a, b) => a.title.localeCompare(b.title));
}

// ---------------------------------------------------------------------------
// Posts — every non-index .mdx file within a category subdirectory
// ---------------------------------------------------------------------------

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

export function getPostBySlug(category: string, slug: string): ContentItem {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(contentDirectory, category, `${realSlug}.mdx`);
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
  };
}

export function getAllPosts(): ContentItem[] {
  return getAllPostFiles()
    .map(({ category, filename }) => getPostBySlug(category, filename))
    .sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1));
}

export function getPostsByCategory(category: string): ContentItem[] {
  return getAllPosts().filter((post) => post.category === category);
}
