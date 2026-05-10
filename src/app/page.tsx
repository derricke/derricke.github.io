import Link from "next/link";
import dynamic from 'next/dynamic';
import { JsonLd } from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { Metadata } from 'next';

const Quotes = dynamic(() => import('@/components/Quotes'), {
  loading: () => <div className="min-h-[320px] bg-black" aria-hidden="true" />,
});

const Features = dynamic(() => import('@/components/Features'), {
  loading: () => <div className="min-h-[200px]" aria-hidden="true" />,
});

export const metadata: Metadata = constructMetadata({
  title: 'Derrick Emery - Strategic Technical Leader',
  description: 'Strategic Technical Leader specializing in architectural excellence and high-performance digital platforms that drive real business value.',
  path: '/',
});

export default function Home() {
  return (
    <>
      {/* Preload LCP images for both mobile and desktop */}
      <link
        rel="preload"
        as="image"
        href="https://ik.imagekit.io/derricke/site-banner.png?tr=w-828,q-72,f-auto"
        media="(max-width: 767px)"
      />
      <link
        rel="preload"
        as="image"
        href="https://ik.imagekit.io/derricke/site-banner.png?tr=w-1500,q-72,f-auto"
        media="(min-width: 768px)"
        fetchPriority="high"
      />

      <section className="relative flex flex-col group overflow-hidden">
        <div className="w-full">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="https://ik.imagekit.io/derricke/site-banner.png?tr=w-828,q-72,f-auto"
            />
            <img
              src="https://ik.imagekit.io/derricke/site-banner.png?tr=w-1500,q-72,f-auto"
              alt="Site banner"
              width={1500}
              height={318}
              className="w-full h-auto shadow-md"
              fetchPriority="high"
              loading="eager"
            />
          </picture>
        </div>

        {/* 
          Main Hero Content:
          - Mobile (default): static block below the image with dark background.
          - Desktop (md:): absolute overlay with gradient.
        */}
        <div className="bg-zinc-900 md:bg-transparent md:absolute md:inset-0 md:bg-gradient-to-r md:from-black/80 md:via-black/30 md:to-transparent flex flex-col justify-center px-6 py-10 md:py-0 md:px-12 lg:px-24">
          <h1 className="text-white text-3xl md:text-5xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-4 max-w-4xl drop-shadow-lg leading-tight md:text-left text-center">
            Strategic Technical Leader
          </h1>
          <p className="text-zinc-400 md:text-gray-200 text-lg md:text-xl mb-8 md:mb-8 max-w-xl font-light drop-shadow-md md:text-left text-center">
            Transforming complex requirements into scalable digital platforms.
          </p>
          <div className="flex md:justify-start justify-center">
            <Link
              href="/about"
              className="inline-block bg-white text-black hover:bg-black hover:text-white border-2 border-white px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 transform md:hover:-translate-y-1 shadow-lg"
            >
              Learn More About Derrick
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="testimonials">
        <h2 id="testimonials" className="sr-only">Client Testimonials</h2>
        <Quotes category="main" />
      </section>

      <section aria-labelledby="core-features">
        <h2 id="core-features" className="sr-only">Core Capabilities</h2>
        <Features category="main" />
      </section>

      <div className="w-full bg-gray-700 flex items-center justify-center text-center shadow-md px-4 py-8">
        <p className="text-white text-2xl sm:text-4xl font-medium tracking-wider">Stop blending in with the rest of the crowd and start leaving your mark on the web.</p>
      </div>

      <Features category="main2" />

      <div className="w-full h-32 bg-black flex items-center justify-center text-center shadow-md px-4">
        <p className="text-white text-2xl sm:text-4xl font-medium tracking-wider">Coded to pixel perfection.</p>
      </div>

      <JsonLd
        data={{
          "@graph": [
            {
              "@type": "Person",
              "@id": "https://derrickemery.com/#person",
              "name": "Derrick Emery",
              "url": "https://derrickemery.com",
              "image": "https://ik.imagekit.io/derricke/site-banner.png",
              "sameAs": [
                "https://www.linkedin.com/in/derrickemery",
                "https://github.com/derrickemery",
                "https://dev.to/derrickemery"
              ],
              "jobTitle": "Strategic Technical Leader",
              "description": "Strategic Technical Leader focused on AI, SEO, and building high-performance web applications that drive real business value."
            },
            {
              "@type": "WebSite",
              "@id": "https://derrickemery.com/#website",
              "url": "https://derrickemery.com",
              "name": "Derrick Emery",
              "publisher": { "@id": "https://derrickemery.com/#person" },
              "inLanguage": "en-US",
              "description": "Strategic Technical Leader with expertise in software engineering and technical strategy."
            },
            {
              "@type": "ProfessionalService",
              "name": "Derrick Emery - Technical Strategy & Leadership",
              "url": "https://derrickemery.com",
              "image": "https://ik.imagekit.io/derricke/site-banner.png",
              "description": "Consulting services specializing in strategic technology leadership and technical strategy.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              }
            }
          ]
        }}
      />
    </>
  );
}
