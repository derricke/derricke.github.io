import React from 'react';

type JsonLdType = 'Article' | 'FAQPage' | 'BreadcrumbList' | 'Organization' | 'Person' | 'ContactPoint' | 'ProfessionalService' | 'Blog' | 'WebSite';

interface JsonLdProps {
  type: JsonLdType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
}

export const JsonLd = ({ type, data }: JsonLdProps) => {
  // Base configuration wrapping the specific schema type
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
