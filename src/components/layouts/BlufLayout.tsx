import React from 'react';
import { JsonLd } from '@/components/seo/JsonLd';
import { ContentItem } from '@/lib/content/types';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { getAuthorProfile } from '@/lib/content/authors';

interface BlufLayoutProps {
  contentInfo: ContentItem;
  children: React.ReactNode; // The rich text / MDX output
  breadcrumbs?: Array<{ name: string; item: string }>;
}

export function BlufLayout({ contentInfo, children, breadcrumbs }: BlufLayoutProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://derrickemery.com';
  const currentUrl = `${siteUrl}/blog/${contentInfo.category}/${contentInfo.slug}`;

  // Organization info can be defined globally and passed down, or hardcoded if single-author
  const orgSchema = {
    '@type': 'Organization',
    name: 'Derrick Emery',
    url: siteUrl,
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {breadcrumbs && (
        <Breadcrumbs 
          items={breadcrumbs.map((b, i) => ({ 
            name: b.name, 
            href: b.item, 
            current: i === breadcrumbs.length - 1 
          }))} 
        />
      )}
      {/* JSON-LD Schemas injected safely into the DOM */}
      <JsonLd 
        type="BlogPosting" 
        data={{
          headline: contentInfo.title,
          description: contentInfo.description,
          author: (() => {
            const author = getAuthorProfile(contentInfo.author.name);
            return {
              '@type': 'Person',
              name: contentInfo.author.name,
              url: author?.links.linkedin || `${siteUrl}/about`,
              description: author?.bio,
              sameAs: author?.sameAs || []
            };
          })(),
          publisher: orgSchema,
          datePublished: contentInfo.publishedAt,
          dateModified: contentInfo.lastModifiedAt || contentInfo.publishedAt,
          mainEntityOfPage: { '@type': 'WebPage', '@id': currentUrl },
          wordCount: contentInfo.content ? contentInfo.content.split(/\s/g).length : undefined,
          timeRequired: contentInfo.readTime,
          inLanguage: 'en-US',
        }} 
      />

      <header className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{contentInfo.title}</h1>
        
        {/* E-E-A-T Metadata Block */}
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6 space-x-4">
          <span>
            By{' '}
            {(() => {
              const author = getAuthorProfile(contentInfo.author.name);
              return author ? (
                <a 
                  href={author.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 dark:text-zinc-100 font-bold hover:text-zinc-950 dark:hover:text-white transition-colors underline decoration-zinc-200/0 hover:decoration-zinc-200/50 underline-offset-4"
                >
                  {contentInfo.author.name}
                </a>
              ) : (
                contentInfo.author.name
              );
            })()}
          </span>
          <time dateTime={contentInfo.publishedAt}>
            {new Date(contentInfo.publishedAt).toLocaleDateString()}
          </time>
        </div>

        {/* BLUF Summary - Engineered for LLM Extraction */}
        <aside 
          aria-label="Key Takeaways" 
          className="bg-zinc-50 dark:bg-zinc-900/30 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 border-l-4 border-l-emerald-600/50 shadow-sm"
        >
          <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] mb-2 text-zinc-500 dark:text-zinc-400">
            [EXECUTIVE_SUMMARY]
          </h2>
          <p className="text-base leading-relaxed text-zinc-800 dark:text-zinc-300 font-outfit">
            {contentInfo.blufSummary}
          </p>
        </aside>
      </header>

      {/* Main Content Area - Semantically grouped into section */}
      <section className="prose prose-lg dark:prose-invert max-w-none">
        {children}
      </section>

      {/* Citations/Sources to boost E-E-A-T signals */}
      {contentInfo.primarySources && contentInfo.primarySources.length > 0 && (
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-xl font-bold mb-4">Sources & Citations</h3>
          <ul className="list-disc pl-5 space-y-2">
            {contentInfo.primarySources.map((source, i) => (
              <li key={i}>
                <a href={source} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline">
                  {source}
                </a>
              </li>
            ))}
          </ul>
        </footer>
      )}
    </article>
  );
}
