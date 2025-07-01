// Location: src/app/about/page.tsx

import React from 'react';
import Skills from '@/components/Skills';

export default function AboutPage() {
  return (
    // Main container for the page with padding
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      {/* Responsive grid layout. Stacks on mobile, becomes 2 columns on medium screens and up. */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-8">

        {/* Left Column (30% width on medium screens and up) */}
        <div className="md:col-span-3 border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">At Work</h2>
          <p className="text-gray-600 mb-4">
            Leveraging over 20 years of web development expertise and a comprehensive skill set, I have helped companies translate their business goals into effective online solutions. My background includes project management, hands-on development, and solution architecture. I currently concentrate on high-level strategy and execution, leading development efforts through mentorship, setting technical direction, and ensuring quality through final review.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">At Home</h2>
          <p className="text-gray-600">
            When I step away from the keyboard, my love for learning doesn&apos;t stop. I&apos;m just as likely to be diving into a new cooking technique as I am a new piece of tech. To clear my head, you&apos;ll either find me on a bike ride through the woods or lost in a good strategy game with friends.
          </p>
        </div>

        {/* Right Column (70% width on medium screens and up) */}
        <div className="md:col-span-7 border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-gray-600">
            <Skills />
          </div>
        </div>

      </div>
    </div>
  );
}
