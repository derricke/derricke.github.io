'use client';

import React, { useEffect, useState } from 'react';
import { Twitter, Facebook, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const timer = setTimeout(() => {
      setYear(currentYear);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between">
          {/* Copyright Text */}
          <div className="text-center sm:text-left mt-4 sm:mt-0">
            <p>&copy; {year || 2026} Derrick Emery. All Rights Reserved.</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-6">
            <a 
              href="https://twitter.com/derrickemery" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter"
              className="hover:text-white transition-colors cursor-pointer"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://www.facebook.com/derrickemeryco" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              className="hover:text-white transition-colors cursor-pointer"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/derrickemery" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="hover:text-white transition-colors cursor-pointer"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/derricke" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="hover:text-white transition-colors cursor-pointer"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
