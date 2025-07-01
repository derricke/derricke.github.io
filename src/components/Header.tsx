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
      <nav className={`container mx-auto flex relative bg-white z-[5002] justify-between items-center px-4 transition-all duration-300 ${isScrolled ? 'h-12' : 'h-20'}`}>
        
        {/* Left Section: Hamburger Menu on Mobile */}
        <div className="w-1/3">
          <div className="md:hidden">
            {isClient && (
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl text-gray-700`}></i>
              </button>
            )}
          </div>
        </div>

        {/* Center Section: Logo */}
        <div className="w-1/3 flex justify-center">
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
        </div>
        
        {/* Right Section: Desktop Navigation */}
        <div className="w-1/3 flex justify-end">
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-600 hover:text-black text-sm">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-black text-sm">About Me</Link>
            <Link href="/blog" className="text-gray-600 hover:text-black text-sm">Blog</Link>
            <Link href="/contact" className="text-gray-600 hover:text-black text-sm">Contact</Link>
          </div>
        </div>

      </nav>

      {/* Mobile Menu - only rendered on the client */}
      {isClient && (
        <>
          {/* Overlay for the background */}
          <div 
            className={`md:hidden fixed inset-0 bg-black/50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          ></div>
          
          {/* Menu Panel */}
          <div className={`md:hidden fixed top-0 left-0 w-[90%] h-screen bg-white z-[5000] transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            {/*<button 
              onClick={() => setIsMenuOpen(false)} 
              className="absolute top-6 pl-4 z-[4999]" 
              aria-label="Close menu"
            >
              <i className="fa-solid fa-xmark text-3xl text-gray-700"></i>
            </button>*/}
            <div className="flex flex-col items-start justify-start h-full space-y-8 pt-24 pl-4">
              <Link href="/" className="text-2xl text-black hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/about" className="text-2xl text-black hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>About Me</Link>
              <Link href="/blog" className="text-2xl text-black hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <Link href="/contact" className="text-2xl text-black hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
