import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { getAllCategories, getCategoryBySlug, getPostsByCategory } from '@/lib/content/api';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { getAuthorProfile } from '@/lib/content/authors';


import { PostCard } from '@/components/PostCard';

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
          publisher: {
            '@type': 'Organization',
            name: 'Derrick Emery',
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}/logo.png`, // Placeholder for future logo
            }
          },
          blogPost: posts.map((post) => {
            const author = getAuthorProfile(post.author.name);
            return {
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.description,
              url: `${siteUrl}/blog/${cat.slug}/${post.slug}`,
              datePublished: post.publishedAt,
              author: {
                '@type': 'Person',
                name: post.author.name,
                url: author?.links.linkedin || `${siteUrl}/about`,
                sameAs: author?.sameAs || []
              },
            };
          }),
        }}
      />

      {/* Breadcrumbs Nav */}
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: cat.title, href: `/blog/${cat.slug}`, current: true },
        ]}
      />

      <header className="mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-8">
        <div className="flex items-center gap-2 mb-2 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
          <span>DIR:</span>
          <span className="uppercase tracking-widest">{cat.title}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-100 font-outfit">
          {cat.title}
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl font-outfit">
          {cat.description}
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No posts in this category yet. Check back soon.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} categoryTitle={cat.title} />
          ))}
        </div>
      )}
    </div>
  );
}
