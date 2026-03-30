export interface Author {
  name: string;
  url?: string;
  credentials?: string[]; // e.g., ["MS in Computer Science", "Principal SEO"]
}

// Frontmatter schema for articles/pages enforcing E-E-A-T signals
export interface ContentItem {
  slug: string;
  category: string; // Category slug, e.g. "seo", "ai-tools"
  title: string;
  description: string;
  // AIO Focus: The "Bottom Line Up Front" summary engineered for LLM extraction
  blufSummary: string;
  author: Author;
  publishedAt: string; // ISO 8601
  lastModifiedAt?: string; // ISO 8601
  primarySources?: string[]; // Citations/links to original sources
  tags?: string[];
  content?: string; // Markdown/HTML body
  readTime?: string; // E.g., "5 min read"
}

// Frontmatter schema for category index.mdx files.
// Architecturally a category is just a blog post whose children are its posts.
export interface CategoryItem {
  slug: string;     // Derived from the directory name
  title: string;
  description: string;
  content?: string; // Body of the index.mdx (intro text)
}

