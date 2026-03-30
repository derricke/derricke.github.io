import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { getAllCategories, getCategoryBySlug, getPostsByCategory } from '@/lib/content/api';


export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return constructMetadata({
    title: `${cat.title} | Blog | Derrick Emery`,
    description: cat.description,
    path: `/blog/${cat.slug}`,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return notFound();

  const posts = getPostsByCategory(category);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://derrickemery.com';

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
      <JsonLd
        type="Blog"
        data={{
          name: `${cat.title} — Derrick Emery Blog`,
          url: `${siteUrl}/blog/${cat.slug}`,
          description: cat.description,
          blogPost: posts.map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            url: `${siteUrl}/blog/${cat.slug}/${post.slug}`,
            datePublished: post.publishedAt,
            author: {
              '@type': 'Person',
              name: post.author.name,
            },
          })),
        }}
      />

      {/* Breadcrumb nav */}
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500 dark:text-gray-400">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/blog" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              Blog
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-gray-900 dark:text-gray-100 font-medium">
            {cat.title}
          </li>
        </ol>
      </nav>

      <header className="mb-12">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="inline-block rounded-full bg-purple-100 dark:bg-purple-900/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-300">
            Category
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{cat.title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">{cat.description}</p>
      </header>

      {posts.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No posts in this category yet. Check back soon.</p>
      ) : (
        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="group flex flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.publishedAt} className="text-gray-500">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="relative z-10 rounded-full bg-gray-50 dark:bg-zinc-800 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="group relative">
                <h2 className="mt-3 text-2xl font-semibold leading-6 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-amber-500 transition-colors">
                  <Link href={`/blog/${category}/${post.slug}`}>
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
      )}
    </div>
  );
}
