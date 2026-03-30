import React from 'react';

type JsonLdType = 'Article' | 'FAQPage' | 'BreadcrumbList' | 'Organization' | 'Person' | 'ContactPoint' | 'ProfessionalService' | 'Blog' | 'WebSite' | 'BlogPosting';

interface JsonLdProps {
  type?: JsonLdType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
}

export const JsonLd = ({ type, data }: JsonLdProps) => {
  // If no type is provided, we assume the data is a full schema object (like a @graph)
  const schema = type ? {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  } : {
    '@context': 'https://schema.org',
    ...data
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
