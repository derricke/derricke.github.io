import React from 'react';

// --- 1. Mock Data Source ---
// In a real application, you would fetch this data from a CMS, a database,
// or local markdown files.
const posts = [
  { slug: 'my-first-post', title: 'My First Blog Post', content: 'This is the content of my first post.' },
  { slug: 'another-entry', title: 'Another Entry', content: 'Here is some more content for another post.' },
  { slug: 'learning-nextjs', title: 'Learning Next.js', content: 'Static exports are powerful! ' },
];

// --- 2. generateStaticParams Function ---
// This function tells Next.js which slugs to generate at build time. Its structure remains the same.
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// --- 3. The Page Component (Next.js 15 Pattern) ---
// The component is now async and the params prop is a Promise.
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await the params promise to get the slug
  const { slug } = await params;

  // Find the post data that matches the current slug
  const post = posts.find((post) => post.slug === slug);

  // Optional: Handle cases where the post is not found
  if (!post) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold">Post not found</h1>
      </div>
    );
  }

  return (
    <article className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="prose lg:prose-xl">
        <p>{post.content}</p>
      </div>
    </article>
  );
}
