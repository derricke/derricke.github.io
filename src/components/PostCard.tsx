import React from 'react';
import Link from 'next/link';
import { ContentItem } from '@/lib/content/types';
import { getAuthorProfile } from '@/lib/content/authors';

interface PostCardProps {
  post: ContentItem;
  categoryTitle: string;
}

export function PostCard({ post, categoryTitle }: PostCardProps) {
  const publishDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="group relative flex flex-col items-start h-full rounded-xl border border-emerald-100 dark:border-zinc-800 bg-[#edf7f5] dark:bg-zinc-900/50 p-6 sm:p-8 transition-all hover:shadow-md dark:hover:shadow-zinc-900/50">
      {/* Top row: Category, Read Time */}
      <div className="flex items-center gap-3 mb-6 text-sm relative z-10">
        <Link 
          href={`/blog/${post.category}`}
          className="font-medium text-gray-900 dark:text-gray-100 underline decoration-gray-900/30 dark:decoration-gray-100/30 underline-offset-4 decoration-1 hover:decoration-gray-900 dark:hover:decoration-gray-100 transition-all font-outfit"
        >
          {categoryTitle}
        </Link>
        <span className="text-gray-600 dark:text-gray-400">
          {post.readTime}
        </span>
      </div>

      {/* Title with Absolute Overlay Link */}
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4 font-outfit">
        <Link 
          href={`/blog/${post.category}/${post.slug}`} 
          className="underline decoration-gray-900/30 dark:decoration-gray-100/30 underline-offset-8 decoration-2 hover:decoration-gray-900 dark:hover:decoration-gray-100 transition-all"
        >
          <span className="absolute inset-0 z-0" aria-hidden="true" />
          {post.title}
        </Link>
      </h2>

      {/* Summary */}
      <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl font-outfit text-sm sm:text-base flex-grow">
        {post.description}
      </p>

      {/* Bottom row: Author, Date */}
      <div className="flex items-center gap-4 text-sm font-outfit mt-auto relative z-10">
        {(() => {
          const author = getAuthorProfile(post.author.name);
          return author ? (
            <a 
              href={author.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 dark:text-gray-100 underline decoration-gray-900/30 dark:decoration-gray-100/30 underline-offset-4 hover:decoration-gray-900 dark:hover:decoration-gray-100 transition-all font-medium"
            >
              {post.author.name}
            </a>
          ) : (
            <span className="text-gray-900 dark:text-gray-100 font-medium">
              {post.author.name}
            </span>
          );
        })()}
        <time dateTime={post.publishedAt} className="text-gray-600 dark:text-gray-400">
          {publishDate}
        </time>
      </div>
    </article>
  );
}
