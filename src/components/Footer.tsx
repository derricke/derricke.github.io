import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          {/* Copyright Text */}
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p>&copy; 2025 Derrick Emery. All Rights Reserved.</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://twitter.com/derrickemery" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter"
              className="hover:text-white transition-colors"
            >
              <i className="fa-brands fa-twitter text-xl"></i>
            </a>
            <a 
              href="https://www.facebook.com/derrickemeryco" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              className="hover:text-white transition-colors"
            >
              <i className="fa-brands fa-facebook-f text-xl"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/derrickemery" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <i className="fa-brands fa-linkedin-in text-xl"></i>
            </a>
            <a 
              href="https://github.com/derricke" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="hover:text-white transition-colors"
            >
              <i className="fa-brands fa-github text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
