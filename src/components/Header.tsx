// Location: src/components/Header.tsx
"use client"; 

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if user has scrolled more than 10px, false otherwise
      setIsScrolled(window.scrollY > 10);
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* - The height of the nav is set to 30px using h-[30px].
        - Padding was changed from p-4 to px-4 to remove vertical padding and keep horizontal padding.
      */}
      <nav className={`container mx-auto flex justify-between items-center px-4 transition-all duration-300 ${isScrolled ? 'h-10' : 'h-20'}`}>
        <Link href="/" className="text-xl font-bold h-full flex items-center">
          <Image
              src="/images/logo-192x192.png" // The path to your image in the 'public' folder
              alt="Derrick Emery Logo"
              width={60} // Adjusted for better optimization at a smaller size
              height={60} // Adjusted for better optimization at a smaller size
              // - The height of the logo is constrained to fit within the header.
              // - Width is set to auto to maintain aspect ratio.
              className={`${isScrolled ? 'h-10' : 'h-20'} w-auto`} 
              priority 
            />
            {/*}
            <div className="flex flex-col justify-center">
              <span className="block text-sm font-bold leading-none text-gray-800">Derrick Emery</span>
              <span className="block text-[10px] leading-tight text-gray-500">Developer</span>
            </div> */}
        </Link>
        <div className={`flex items-baseline space-x-1.5 ${isScrolled ? 'hidden' : ''}`}>
              <span className="text-4xl font-bold text-gray-800">Derrick Emery</span>
              <span className="text-xl text-gray-500">Developer</span>
            </div>
        <div className="space-x-4">
          <Link href="/" className="text-gray-600 hover:text-black text-sm">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-black text-sm">
            About Me
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-black text-sm">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-black text-sm">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
