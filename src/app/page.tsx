import Image from "next/image";
import Features from '@/components/Features';
import Quotes from '@/components/Quotes';

export default function Home() {
  return (
      <>
      <div className="w-full">
        <Image
          src="/images/site-banner.png" // The path to your image in the 'public' folder
          alt="Site banner"
          width={1500} // IMPORTANT: Replace with your image's actual width
          height={318} // IMPORTANT: Replace with your image's actual height
          className="w-full h-auto shadow-md" // Makes the image responsive and adds styling
          priority // Add this to preload the image since it's likely above the fold
        />
      </div>

      <Quotes category="main" />
      
      

      <Features category="main" />

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
