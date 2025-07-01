"use client";

import React, { useState, useEffect } from 'react';
import QuotesBlock from './QuotesBlock';

const QuotesData = [
  {
    category: 'main',
    person: 'Chris Riha, AllMySoccer, LLC',
    description: 'Derrick has been a crucial part of our site developement and his attention to details of our project were outstanding. ',
  },
  {
    category: 'main',
    person: 'Nicholas Gomez, ProposalNet',
    description: 'As a developer, one of the best I’ve had the opportunity to work with. As a colleague, he was a great team player and really brought a lot to the table when innovating solutions. A rare mix of being easy to work with and having expert proficiency in his coding ability.',
  },
  {
    category: 'main',
    person: 'Henning Huncke, Questback',
    description: 'The first thing that comes to my mind about Derrick is that he has a wide knowledge which he knows to use.',
  },
  {
    category: 'main',
    person: 'Josh Blankenship, TopSpot',
    description: 'Derrick is a great collaborator who always has his eye out for improvements in process efficiency and campaign effectiveness. Derrick is reliable on deadlines and consistently gives you more than you ask. ',
  },
  {
    category: 'main',
    person: 'Shannon Stokes, Newpark',
    description: 'Derrick was very organized and timely in hitting deadlines. Derrick is also very proactive and helped by providing feedback and suggestions for improvements.',
  },
];

interface QuotesProps {
  category: 'main' | 'main2';
}

export default function Quotes({ category }: QuotesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const filteredQuotes = QuotesData.filter(quote => quote.category === category);

  // The minimum distance in pixels for a swipe to be registered
  const minSwipeDistance = 50;

  useEffect(() => {
    if (filteredQuotes.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % filteredQuotes.length);
    }, 8000); 

    return () => clearInterval(interval);
  }, [filteredQuotes.length, activeIndex]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  // Touch event handlers for swipe gestures
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // Reset touch end on new touch
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setActiveIndex((prevIndex) => (prevIndex + 1) % filteredQuotes.length);
    } else if (isRightSwipe) {
      setActiveIndex((prevIndex) => (prevIndex - 1 + filteredQuotes.length) % filteredQuotes.length);
    }
  };

  if (filteredQuotes.length === 0) {
    return null;
  }

  return (
    <div className="py-10 bg-black">
      {/* The container has a fixed height and overflow-hidden to create the carousel effect */}
      <div 
        className="container mx-auto text-center relative h-60 flex items-center justify-center overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* We map over all quotes and position them in a line using transform */}
        {filteredQuotes.map((quote, index) => (
          <div
            key={index}
            className="absolute w-full h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(${(index - activeIndex) * 100}%)` }}
          >
            {/* This inner div ensures content is vertically centered within the slide */}
            <div className="h-full flex items-center justify-center">
                <QuotesBlock
                    person={quote.person}
                    description={quote.description}
                />
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-8">
        {filteredQuotes.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === activeIndex ? 'bg-gray-800' : 'bg-gray-400 hover:bg-gray-600'
            }`}
            aria-label={`Go to quote ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
