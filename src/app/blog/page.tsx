import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '@/lib/content/api';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = constructMetadata({
  title: 'Blog | Derrick Emery',
  description: 'Articles, tutorials, and thoughts on technology.',
  path: '/blog',
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://derrickemery.com';

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
      <JsonLd 
        type="Blog" 
        data={{
          name: 'Derrick Emery Blog',
          url: `${siteUrl}/blog`,
          description: 'Thoughts, tutorials, and deep dives into everything software engineering.',
          blogPost: posts.map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            url: `${siteUrl}/blog/${post.slug}`,
            datePublished: post.publishedAt,
            author: {
              '@type': 'Person',
              name: post.author.name
            }
          }))
        }} 
      />

      <header className="mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Thoughts, tutorials, and deep dives into everything software engineering.
        </p>
      </header>

      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.slug} className="group flex flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post.publishedAt} className="text-gray-500">
                {new Date(post.publishedAt).toLocaleDateString()}
              </time>
              {post.tags?.map(tag => (
                <span key={tag} className="relative z-10 rounded-full bg-gray-50 dark:bg-zinc-800 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="group relative">
              <h2 className="mt-3 text-2xl font-semibold leading-6 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-amber-500 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h2>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {post.blufSummary}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}