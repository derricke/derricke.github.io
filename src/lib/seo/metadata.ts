import { Metadata } from 'next';

interface MetadataProps {
  title: string;
  description: string;
  path: string;
  publishedAt?: string;
  modifiedAt?: string;
  authorName?: string;
  images?: string[];
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://derrickemery.com';

export function constructMetadata({
  title,
  description,
  path,
  publishedAt,
  modifiedAt,
  authorName,
  images = ['/og-image.png'],
}: MetadataProps): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Derrick Emery',
      locale: 'en_US',
      type: publishedAt ? 'article' : 'website',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt || publishedAt,
      authors: authorName ? [authorName] : undefined,
      images: images.map(img => ({
        url: img.startsWith('http') ? img : `${siteUrl}${img}`,
        width: 1200,
        height: 630,
        alt: title,
      })),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: images.map(img => (img.startsWith('http') ? img : `${siteUrl}${img}`)),
    },
  };
}
