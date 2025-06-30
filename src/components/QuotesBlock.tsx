import React from 'react';

interface QuotesBlockProps {
  person: string;
  description: string;
}

export default function QuotesBlock({ person, description }: QuotesBlockProps) {
  return (
    <div className="px-4 md:px-8 max-w-3xl mx-auto">
      <blockquote className="text-xl italic text-white">
        <p>"{description}"</p>
      </blockquote>
      <cite className="block text-right mt-4 not-italic font-semibold text-white">
        - {person}
      </cite>
    </div>
  );
}
