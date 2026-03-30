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
    month: 'short',
    day: 'numeric',
  });

  return (
    <article className="group relative flex flex-col items-start h-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 sm:p-8 transition-all hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5">
      {/* Top row: Category, Read Time */}
      <div className="flex items-center gap-3 mb-6 text-xs font-mono tracking-tight relative z-10">
        <Link 
          href={`/blog/${post.category}`}
          className="font-bold text-emerald-600 dark:text-emerald-400 uppercase hover:text-emerald-500 transition-colors"
        >
          [{categoryTitle}]
        </Link>
        <span className="text-zinc-500 dark:text-zinc-500 border-l border-zinc-200 dark:border-zinc-800 pl-3">
          {post.readTime}
        </span>
      </div>

      {/* Title with Absolute Overlay Link */}
      <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4 font-outfit leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
        <Link 
          href={`/blog/${post.category}/${post.slug}`} 
          className="relative inline-block"
        >
          <span className="absolute inset-0 z-0" aria-hidden="true" />
          {post.title}
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300" />
        </Link>
      </h2>

      {/* Summary */}
      <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed max-w-2xl font-outfit text-sm sm:text-base flex-grow">
        {post.description}
      </p>

      {/* Bottom row: Author, Date */}
      <div className="flex items-center justify-between w-full text-xs font-mono mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-900 relative z-10">
        <div className="flex items-center gap-2">
          <span className="text-zinc-400">auth:</span>
          {(() => {
            const author = getAuthorProfile(post.author.name);
            return author ? (
              <a 
                href={author.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 dark:hover:text-emerald-400 font-bold transition-all"
              >
                {post.author.name}
              </a>
            ) : (
              <span className="text-zinc-900 dark:text-zinc-100 font-bold">
                {post.author.name}
              </span>
            );
          })()}
        </div>
        <time dateTime={post.publishedAt} className="text-zinc-500 uppercase">
          {publishDate}
        </time>
      </div>
    </article>
  );
}
