// Location: src/app/about/page.tsx

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about Derrick Emery, his background, skills, and what drives him.',
  
  // Open Graph tags for the About page
  openGraph: {
    title: 'About Derrick Emery',
    description: 'Discover the story behind the developer.',
    // You could create a specific OG image for this page if you want
    // images: ['/about-og-image.png'], 
  },

  // Twitter-specific tags for the About page
  twitter: {
    title: 'About Derrick Emery',
    description: 'Discover the story behind the developer.',
    // You could also specify a different image for Twitter cards
    // images: ['/about-twitter-image.png'], 
  },
};

export default function AboutPage() {
  return (
    // Main container for the page with padding
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 min-h-[70vh]">
      {/* Responsive grid layout. Stacks on mobile, becomes 2 columns on medium screens and up. */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-8">

        {/* Left Column (30% width on medium screens and up) */}
        <div className="md:col-span-3 border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">At Work</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            I am driven by an innate love for learning and adapt quickly to new technologies and shifting landscapes. While I remain deeply technical, my true passion at work lies in leadership. I believe the best products are built by empowered teams, which is why I dedicate my focus to mentoring fellow engineers, setting clear technical direction, and fostering a collaborative culture where individuals grow just as fast as the applications we build.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">At Home</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            My passion for creating and learning extends well beyond the office. To stay sharp, I continually experiment with emerging technologies—frequently integrating AI tooling into my workflow—and have autonomously built and deployed several full-stack web applications along with a dedicated mobile app. When I do step entirely away from the keyboard, my love for learning doesn&apos;t stop. I&apos;m just as likely to be diving into a new cooking technique as I am a new piece of tech, and to clear my head, you&apos;ll either find me on a bike ride through the woods or lost in a good strategy game with friends.
          </p>
        </div>

        {/* Right Column (70% width on medium screens and up) */}
        <div className="md:col-span-7 border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Experience & Capabilities</h2>
          <div className="text-gray-600 space-y-4 leading-relaxed">
            <p>
              With over two decades of experience in the technology sector, I have cultivated a deep expertise in transforming complex business requirements into robust, highly scalable digital platforms. My career has been heavily anchored in the fast-paced world of e-commerce, where I specialize in architecting expansive digital ecosystems and driving technical strategy from the ground up. Whether leading high-complexity platform migrations across enterprise systems or establishing unified coding standards for massive global teams, my focus remains steadfast on delivering solutions that directly support long-term revenue growth and operational excellence.
            </p>
            <p>
              My technical foundation spans the full stack architecture, utilizing modern technologies like React, Node.js, PHP, and progressive CSS frameworks, alongside deep enterprise API integrations. I combine this hands-on engineering proficiency with a strategic approach to infrastructure and cloud server administration across platforms like AWS and GCP, ensuring bulletproof stability under heavy user traffic. By integrating lean methodologies into active engineering workflows, I ensure that development cycles run efficiently, securely, and always perfectly aligned with the most pressing business targets.
            </p>
            <p>
              A significant core of my expertise involves serving as the vital bridge between deep technology capabilities and overarching business strategy. I possess a strong track record of partnering seamlessly with executive and marketing leadership to ensure that technical roadmaps tightly align with demanding campaign schedules. By engineering complex internal reporting tools and custom applications that unify disparate data APIs, I continuously streamline marketing workflows and empower cross-functional teams with the rapid insights they need.
            </p>
            <p>
              Beyond the code, my approach relies heavily on process optimization and cross-functional leadership. Drawing on certified continuous improvement frameworks and agile principles, I constantly look for ways to strip away friction, streamline deployment pipelines, and elevate system reliability. I foster a collaborative culture among engineering units focused on uncompromised code quality. Ultimately, my mission is to mentor teams, remove their roadblocks, and steer a sweepingly impactful technical vision to build the stable tools that businesses rely on.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
