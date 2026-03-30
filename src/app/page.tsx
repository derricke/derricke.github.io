import Image from "next/image";
import Features from '@/components/Features';
import Quotes from '@/components/Quotes';
import { JsonLd } from '@/components/seo/JsonLd';
import { constructMetadata } from '@/lib/seo/metadata';
import { Metadata } from 'next';

export const metadata: Metadata = constructMetadata({
  title: 'Derrick Emery - Principal SEO & Expert Next.js Developer',
  description: 'Experienced in transforming complex business requirements into robust, highly scalable digital platforms.',
  path: '/',
});

export default function Home() {
  return (
      <>
      <JsonLd 
        type="WebSite"
        data={{
          name: 'Derrick Emery',
          url: 'https://derrickemery.com',
          description: 'Consulting and development services from an Expert Next.js Developer and Principal SEO Strategist.',
          author: {
            '@type': 'Person',
            name: 'Derrick Emery'
          }
        }}
      />
      <h1 className="sr-only">Derrick Emery - Expert Next.js Developer & SEO Strategist</h1>

      <div className="w-full">
        <Image
          src="https://ik.imagekit.io/derricke/site-banner.png" // The path to your image in the 'public' folder
          alt="Site banner"
          width={1500} // IMPORTANT: Replace with your image's actual width
          height={318} // IMPORTANT: Replace with your image's actual height
          className="w-full h-auto shadow-md" // Makes the image responsive and adds styling
          priority // Add this to preload the image since it's likely above the fold
        />
      </div>

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

      <div className="w-full h-30 bg-black flex items-center justify-center text-center shadow-md px-4">
        <p className="text-white text-2xl sm:text-4xl font-medium tracking-wider">Coded to pixel perfection.</p>
      </div>

    </>

  );
}
