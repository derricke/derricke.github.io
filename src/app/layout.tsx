import type { Metadata } from "next";
import Script from 'next/script';
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const baseUrl = 'https://derrickemery.com';

const BUILD = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 14); // YYYYMMDDHHmmss

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "optional",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "optional",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
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
      <link rel="preconnect" href="https://ik.imagekit.io" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://ik.imagekit.io" />
      <meta name="build" content={BUILD} />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Google Analytics Scripts */}
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-PFCLTP7MEP"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PFCLTP7MEP');
          `}
        </Script>
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
