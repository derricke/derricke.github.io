import type { Metadata } from "next";
import Script from 'next/script';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../../public/css/fontawesome.css";
import "../../public/css/solid.css";
import "../../public/css/brands.css";

const baseUrl = 'https://derrickemery.com';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Derrick Emery - Developer & Creator",
  description: "Personal Site and Blog of Derrick Emery",
  // Defines the canonical URL, which is the preferred URL for your site's homepage
  metadataBase: new URL(baseUrl),
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  // Open Graph (OG) tags control how your content is displayed when shared on social media
  openGraph: {
    title: 'Derrick Emery - Developer & Creator',
    description: 'The personal website and blog of Derrick Emery.',
    url: baseUrl,
    siteName: 'Derrick Emery',
    images: [
      {
        url: '/og-image.png', // Place this image in your `public` directory
        width: 1536,
        height: 768,
        alt: 'Derrick Emery Website',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter-specific tags
  twitter: {
    card: 'summary_large_image',
    title: 'Derrick Emery - Developer & Creator',
    description: 'The personal website and blog of Derrick Emery.',
    images: [`${baseUrl}/og-image.png`], // Must be an absolute URL
  },

  // Other useful metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Google Analytics Scripts */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-PFCLTP7MEP"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PFCLTP7MEP');
          `}
        </Script>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
