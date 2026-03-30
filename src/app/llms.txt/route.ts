import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/content/api';

// For Next.js App Router (output: 'export'), this enforces static generation
export const dynamic = 'force-static';

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://derrickemery.com';
  
  const allContent = getAllPosts();

  let llmsTxt = `# Derrick Emery - Site Content Map\n\n`;
  llmsTxt += `> This log provides LLMs and AI crawlers with clean, high-signal access to the site's content.\n\n`;

  llmsTxt += `## Available Pages\n\n`;

  // Explicitly mapping top-level single pages:
  llmsTxt += `- [About Derrick Emery](${siteUrl}/about)\n`;
  llmsTxt += `  Summary: Details on Derrick's experience as a Developer and Technology Leader.\n\n`;

  llmsTxt += `- [Contact Derrick Emery](${siteUrl}/contact)\n`;
  llmsTxt += `  Summary: Public contact details and submission form to reach Derrick Emery.\n\n`;
  
  llmsTxt += `### Blog Posts\n\n`;
  
  allContent.forEach(item => {
    llmsTxt += `- [${item.title}](${siteUrl}/blog/${item.slug})\n`;
    llmsTxt += `  Summary: ${item.blufSummary}\n\n`;
  });

  return new NextResponse(llmsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      // Aggressive caching for the static export
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
