import React from 'react';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPosts, getPostBySlug } from '@/lib/content/api';
import { BlufLayout } from '@/components/layouts/BlufLayout';
import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';

// Generate static params for all MDX files
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Optional metadata for the page to tie into SEO architecture
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return constructMetadata({
      title: post.title,
      description: post.description,
      path: `/blog/${post.slug}`,
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
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    return notFound();
  }

  return (
    <BlufLayout 
      contentInfo={post}
      breadcrumbs={[
        { name: 'Home', item: '/' },
        { name: 'Blog', item: '/blog' },
        { name: post.title, item: `/blog/${post.slug}` }
      ]}
    >
      <MDXRemote source={post.content || ''} />
    </BlufLayout>
  );
}
