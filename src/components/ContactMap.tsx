"use client"; // This directive is essential

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Map component with SSR turned off inside a Client Component
const Map = dynamic(() => import('@/components/Map'), { 
  ssr: false,
  // Optional: Add a loading state while the map is being imported
  loading: () => <div className="h-[400px] w-full bg-gray-200 animate-pulse rounded-lg"></div>
});

export default function ContactMap() {
  return <Map />;
}
