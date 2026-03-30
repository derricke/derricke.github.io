import React from 'react';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPosts, getPostBySlug } from '@/lib/content/api';
import { getCategoryBySlug } from '@/lib/content/api';
import { BlufLayout } from '@/components/layouts/BlufLayout';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  try {
    const post = getPostBySlug(category, slug);
    return constructMetadata({
      title: post.title,
      description: post.description,
      path: `/blog/${post.category}/${post.slug}`,
      publishedAt: post.publishedAt,
      authorName: post.author.name,
    });
  } catch {
    return {};
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;

  const cat = getCategoryBySlug(category);
  if (!cat) return notFound();

  let post;
  try {
    post = getPostBySlug(category, slug);
  } catch {
    return notFound();
  }

  return (
    <BlufLayout
      contentInfo={post}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Blog', item: '/blog' },
        { name: cat.title, item: `/blog/${category}` },
        { name: post.title, item: `/blog/${category}/${post.slug}` },
      ]}
    >
      <MDXRemote source={post.content || ''} />
    </BlufLayout>
  );
}
