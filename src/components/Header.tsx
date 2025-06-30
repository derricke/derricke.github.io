// Location: src/components/Header.tsx
import Link from 'next/link';
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* - The height of the nav is set to 30px using h-[30px].
        - Padding was changed from p-4 to px-4 to remove vertical padding and keep horizontal padding.
      */}
      <nav className="container mx-auto flex justify-between items-center h-20 px-4">
        <Link href="/" className="text-xl font-bold h-full flex items-center">
          <Image
              src="/images/logo-192x192.png" // The path to your image in the 'public' folder
              alt="Derrick Emery Logo"
              width={60} // Adjusted for better optimization at a smaller size
              height={60} // Adjusted for better optimization at a smaller size
              // - The height of the logo is constrained to fit within the header.
              // - Width is set to auto to maintain aspect ratio.
              className="h-auto w-auto" 
              priority 
            />
        </Link>
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
