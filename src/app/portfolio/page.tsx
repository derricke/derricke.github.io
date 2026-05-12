import { Metadata } from 'next';
import Image from 'next/image';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Portfolio | Derrick Emery',
  description: 'Senior E-Commerce Technology Leader with 20+ years of experience driving growth across Health & Wellness and Beauty/Skincare brands.',
  path: '/portfolio',
});

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <section className="relative overflow-hidden pt-8 pb-6 md:pt-16 md:pb-12 border-b border-zinc-200 dark:border-zinc-800">
        <div className="absolute inset-0 -z-10 opacity-25 dark:opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#52525b,transparent)] md:bg-[radial-gradient(circle_at_50%_-20%,#3f3f46,transparent)]" />
          <div className="hidden md:block absolute top-0 left-1/4 w-96 h-96 bg-zinc-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="hidden md:block absolute bottom-0 right-1/4 w-96 h-96 bg-zinc-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 shrink-0">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 transform rotate-3">
                <Image
                  src="/images/portrait.png"
                  alt="Derrick Emery"
                  fill
                  sizes="(max-width: 768px) 160px, (max-width: 1024px) 224px, 288px"
                  className="object-cover transform -rotate-3 transition-transform duration-700 hover:scale-110"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-zinc-900 dark:bg-white rounded-full flex items-center justify-center p-4 border-8 border-zinc-50 dark:border-zinc-950 hidden md:flex">
                <span className="text-white dark:text-black font-bold text-xs uppercase tracking-widest text-center">20+ Years Expertise</span>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6 leading-tight">
                Portfolio
              </h1>
              <p className="text-xl md:text-2xl font-light text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                E-Commerce Technology Leader
              </p>
              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                <span className="px-4 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-600 dark:text-zinc-400">Health & Wellness</span>
                <span className="px-4 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-600 dark:text-zinc-400">Beauty & Skincare</span>
                <span className="px-4 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-600 dark:text-zinc-400">Shopify Plus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-8 lg:col-start-3">
              <h2 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">Professional Experience</h2>
              <div className="prose prose-zinc dark:prose-invert max-w-none space-y-6 text-zinc-600 dark:text-zinc-400">
                <p className="text-lg leading-relaxed">
                  I am an E-Commerce Technology Leader with over 20 years of experience orchestrating high-performance digital architectures for enterprise brands. My background includes directing technical strategy for a $30M+ ARR Health & Wellness brand and a portfolio of $10M+ ARR storefronts in the Health & Beauty sector.
                </p>
                <div className="not-prose mt-8">
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-5">Portfolio</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <a href="https://globalhealing.com" target="_blank" rel="noopener noreferrer" className="block w-full overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
                      <img src="/images/portfolio/globalhealing-thumb.jpg" alt="globalhealing.com preview" className="w-full h-10 object-cover block" loading="lazy" />
                      <div className="px-3 py-1">
                        <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">Global Healing</div>
                        <div className="text-xs">globalhealing.com</div>
                      </div>
                    </a>
                    <a href="https://parivie.com/pages/lp-earlyaccessbfcm" target="_blank" rel="noopener noreferrer" className="block w-full overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
                      <img src="/images/portfolio/parivie-thumb.jpg" alt="parivie.com preview" className="w-full h-10 object-cover block" loading="lazy" />
                      <div className="px-3 py-1">
                        <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">Pairive</div>
                        <div className="text-xs">parivie.com</div>
                      </div>
                    </a>
                    <a href="https://kindscience.com" target="_blank" rel="noopener noreferrer" className="block w-full overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
                      <img src="/images/portfolio/kindscience-thumb.jpg" alt="kindscience.com preview" className="w-full h-10 object-cover block" loading="lazy" />
                      <div className="px-3 py-1">
                        <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">Kind Science</div>
                        <div className="text-xs">kindscience.com</div>
                      </div>
                    </a>
                    <a href="https://smileactives.com" target="_blank" rel="noopener noreferrer" className="block w-full overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
                      <img src="/images/portfolio/smileactives-thumb.jpg" alt="smileactives.com preview" className="w-full h-10 object-cover block" loading="lazy" />
                      <div className="px-3 py-1">
                        <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">Smile Actives</div>
                        <div className="text-xs">smileactives.com</div>
                      </div>
                    </a>
                    <a href="https://crepeerase.com/products/rejuvenate-restore-kit?selling_plan=3763175576" target="_blank" rel="noopener noreferrer" className="block w-full overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
                      <img src="/images/portfolio/crepeerase-thumb.jpg" alt="crepeerase.com preview" className="w-full h-10 object-cover block" loading="lazy" />
                      <div className="px-3 py-1">
                        <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">Crepe Erase</div>
                        <div className="text-xs">crepeerase.com</div>
                      </div>
                    </a>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mt-8">Strategic Impact & Expertise</h3>
                <p className="text-lg leading-relaxed">
                  <strong>Revenue Growth Levers:</strong> I drive revenue by optimizing PDP performance and site speed to increase CVR and CRO. I scale subscription systems through complex recurring billing integrations and optimize the customer lifecycle by engineering automated ERP and 3PL fulfillment workflows.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong>Regulated DTC Categories:</strong> I have extensive experience navigating the technical restrictions of the supplement and skincare industries, including maintaining PCI compliance, managing FDA-required disclosures, and securing sensitive data during high-volume migrations.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong>Leadership & Collaboration:</strong> I have built and led Shopify-focused development teams, implementing rigorous repository governance and coding standards. I partner cross-functionally with paid media, creative, and operations teams to translate commercial objectives into scalable technical architectures.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong>Operational Metrics:</strong> I am proficient in leveraging Shopify Analytics, GA4, and custom dashboards to track key performance indicators such as CVR, AOV, and LTV to inform daily operational decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
