// Location: src/app/about/page.tsx

import { Metadata } from 'next';
import Image from 'next/image';
import { constructMetadata } from '@/lib/seo/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = constructMetadata({
  title: 'About Derrick Emery',
  description: 'Technical strategy, team leadership and development expert. Discover the experience and philosophy behind Muted Tech.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <JsonLd
        data={{
          "@graph": [
            {
              "@type": "Person",
              "@id": "https://derrickemery.com/#person",
              "name": "Derrick Emery",
              "url": "https://derrickemery.com",
              "image": "https://ik.imagekit.io/derricke/portrait.png",
              "sameAs": [
                "https://www.linkedin.com/in/derrickemery",
                "https://github.com/derrickemery"
              ],
              "jobTitle": "Technical strategy, team leadership and development expert",
              "description": "Staff Software Engineer and Technical Strategist focused on AI, SEO, and building high-performance web applications that drive real business value.",
              "worksFor": {
                "@type": "Organization",
                "name": "Parivie",
                "url": "https://parivie.com"
              },
              "knowsAbout": [
                "Technical Strategy",
                "Software Engineering",
                "Team Leadership",
                "Architectural Design",
                "AI/ML Implementation",
                "SEO Optimization",
                "Continuous Improvement"
              ]
            },
            {
              "@type": "WebSite",
              "@id": "https://derrickemery.com/#website",
              "url": "https://derrickemery.com",
              "name": "Derrick Emery",
              "publisher": { "@id": "https://derrickemery.com/#person" },
              "inLanguage": "en-US"
            },
            {
              "@type": "ProfilePage",
              "@id": "https://derrickemery.com/about/#webpage",
              "url": "https://derrickemery.com/about",
              "name": "About Derrick Emery",
              "description": "Technical strategy, team leadership and development expert. Discover the experience and philosophy behind Muted Tech.",
              "mainEntity": { "@id": "https://derrickemery.com/#person" }
            }
          ]
        }}
      />


      {/* Hero Section with Mesh Gradient */}
      <section className="relative overflow-hidden pt-8 pb-6 md:pt-16 md:pb-12 border-b border-zinc-200 dark:border-zinc-800">
        <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3f3f46,transparent)]" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-zinc-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zinc-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            {/* Image Container */}
            <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 shrink-0">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 transform rotate-3">
                <Image
                  src="/images/portrait.png"
                  alt="Derrick Emery"
                  fill
                  className="object-cover transform -rotate-3 transition-transform duration-700 hover:scale-110"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-zinc-900 dark:bg-white rounded-full flex items-center justify-center p-4 border-8 border-zinc-50 dark:border-zinc-950 hidden md:flex">
                <span className="text-white dark:text-black font-bold text-xs uppercase tracking-widest text-center">20+ Years Expertise</span>
              </div>
            </div>

            {/* Content Header */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6 leading-tight">
                Derrick Emery
              </h1>
              <p className="text-xl md:text-2xl font-light text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                Technical strategy, team leadership and development expert
              </p>
              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                <span className="px-4 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-600 dark:text-zinc-400">Architect</span>
                <span className="px-4 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-600 dark:text-zinc-400">Mentor</span>
                <span className="px-4 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-600 dark:text-zinc-400">Strategist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-8 md:py-12 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

            {/* Sidebar Columns (Work & Home) */}
            <div className="lg:col-span-4 space-y-12">
              <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800/50">
                <h3 className="text-xl font-bold mb-6 text-zinc-900 dark:text-zinc-100 italic">At Work</h3>
                <p className="text-zinc-900 dark:text-zinc-100 leading-relaxed italic mb-4 font-medium">
                  &ldquo;I believe the best products are built by empowered teams.&rdquo;
                </p>
                <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    I am driven by an innate love for learning and adapt quickly to new technologies and shifting landscapes. While I remain deeply technical, my true passion at work lies in leadership.
                  </p>
                  <p>
                    I dedicate my focus to mentoring fellow engineers, setting clear technical direction, and fostering a collaborative culture where individuals grow just as fast as the applications we build.
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800/50">
                <h3 className="text-xl font-bold mb-6 text-zinc-900 dark:text-zinc-100 italic">At Home</h3>
                <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    My passion for creating and learning extends well beyond the office. To stay sharp, I continually experiment with emerging technologies—frequently integrating AI tooling into my workflow—and have autonomously built and deployed several full-stack web applications along with a dedicated mobile app.
                  </p>
                  <p>
                    When I do step entirely away from the keyboard, my love for learning doesn&apos;t stop. I&apos;m just as likely to be diving into a new cooking technique as I am a new piece of tech, and to clear my head, you&apos;ll either find me on a bike ride through the woods or lost in a good strategy game with friends.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience & Deep Dive (Main Column) */}
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">Experience & Capabilities</h2>
              <div className="prose prose-zinc dark:prose-invert max-w-none space-y-6 text-zinc-600 dark:text-zinc-400">
                <p className="text-lg leading-relaxed">
                  With over two decades of experience in the technology sector, I have cultivated a deep expertise in transforming complex business requirements into robust, highly scalable digital platforms. My career has been heavily anchored in the fast-paced world of e-commerce, where I specialize in architecting expansive digital ecosystems and driving technical strategy from the ground up. Whether leading high-complexity platform migrations across enterprise systems or establishing unified coding standards for massive global teams, my focus remains steadfast on delivering solutions that directly support long-term revenue growth and operational excellence.
                </p>
                <p className="text-lg leading-relaxed">
                  My technical foundation spans the full stack architecture, utilizing modern technologies like React, Node.js, PHP, and progressive CSS frameworks, alongside deep enterprise API integrations. I combine this hands-on engineering proficiency with a strategic approach to infrastructure and cloud server administration across platforms like AWS and GCP, ensuring bulletproof stability under heavy user traffic. By integrating lean methodologies into active engineering workflows, I ensure that development cycles run efficiently, securely, and always perfectly aligned with the most pressing business targets.
                </p>
                <p className="text-lg leading-relaxed">
                  A significant core of my expertise involves serving as the vital bridge between deep technology capabilities and overarching business strategy. I possess a strong track record of partnering seamlessly with executive and marketing leadership to ensure that technical roadmaps tightly align with demanding campaign schedules. By engineering complex internal reporting tools and custom applications that unify disparate data APIs, I continuously streamline marketing workflows and empower cross-functional teams with the rapid insights they need.
                </p>
                <p className="text-lg leading-relaxed">
                  Beyond the code, my approach relies heavily on process optimization and cross-functional leadership. Drawing on certified continuous improvement frameworks and agile principles, I constantly look for ways to strip away friction, streamline deployment pipelines, and elevate system reliability. I foster a collaborative culture among engineering units focused on uncompromised code quality. Ultimately, my mission is to mentor teams, remove their roadblocks, and steer a sweepingly impactful technical vision to build the stable tools that businesses rely on.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
