export interface Author {
  name: string;
  url?: string;
  credentials?: string[]; // e.g., ["MS in Computer Science", "Principal SEO"]
}

// Frontmatter schema for articles/pages enforcing E-E-A-T signals
export interface ContentItem {
  slug: string;
  title: string;
  description: string;
  // AIO Focus: The "Bottom Line Up Front" summary engineered for LLM consumption
  blufSummary: string;
  author: Author;
  publishedAt: string; // ISO 8601
  lastModifiedAt?: string; // ISO 8601
  primarySources?: string[]; // Citations/links to original sources
  tags?: string[];
  content?: string; // Markdown/HTML body (optional depending on how layout wraps it)
}
