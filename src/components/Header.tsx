"use client"; 

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // State to confirm client-side rendering

  // This effect runs only once on the client after the component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Effect to prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-[1001] bg-white shadow-md">
      <nav className={`container mx-auto flex justify-between items-center px-4 transition-all duration-300 ${isScrolled ? 'h-12' : 'h-20'}`}>
        <Link href="/" className="h-full flex items-center" onClick={() => setIsMenuOpen(false)}>
          <Image
              src="/images/logo-192x192.png"
              alt="Derrick Emery Logo"
              width={60}
              height={60}
              className={`w-auto transition-all duration-300 ${isScrolled ? 'h-10' : 'h-14'}`} 
              priority 
            />
        </Link>
        
        {/* Centered Name/Title - hidden on small screens */}
        <div className={`hidden md:flex items-baseline space-x-1.5 transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
          <span className="text-4xl font-bold text-gray-800">Derrick Emery</span>
          <span className="text-xl text-gray-500">Developer</span>
        </div>

        {/* Desktop Navigation - hidden on small screens */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/" className="text-gray-600 hover:text-black text-sm">Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-black text-sm">About Me</Link>
          <Link href="/blog" className="text-gray-600 hover:text-black text-sm">Blog</Link>
          <Link href="/contact" className="text-gray-600 hover:text-black text-sm">Contact</Link>
        </div>

        {/* Hamburger Menu Button - only rendered on the client to prevent hydration error */}
        <div className="md:hidden">
          {isClient && (
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl text-gray-700`}></i>
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay - only rendered on the client */}
      {isClient && (
        <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white z-[5000] transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Close button added to the top right of the menu */}
          <button 
            onClick={() => setIsMenuOpen(false)} 
            className="absolute top-6 right-5 z-[5001]" 
            aria-label="Close menu"
          >
            <i className="fa-solid fa-xmark text-3xl text-gray-700"></i>
          </button>
          {/* - The links are now aligned to the top and left.
              - Padding has been added to give them space from the edges.
          */}
          <div className="flex flex-col items-start justify-start h-full space-y-8 pt-24 pl-8">
            <Link href="/" className="text-2xl text-gray-800 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about" className="text-2xl text-gray-800 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>About Me</Link>
            <Link href="/blog" className="text-2xl text-gray-800 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link href="/contact" className="text-2xl text-gray-800 hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
