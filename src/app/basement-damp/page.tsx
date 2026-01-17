import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FAQ } from "@/components/ui/FAQ";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Basement Waterproofing Essex | Cellar Damp Proofing",
  description: "Professional basement waterproofing and cellar tanking in Essex. Transform damp basements into dry, usable space. Cavity drain systems, tanking, sump pumps. Free surveys.",
  alternates: {
    canonical: "/basement-damp",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Basement Waterproofing", url: "/basement-damp" },
];

const faqs = [
  {
    question: "What causes basement damp?",
    answer: "Basements are below ground level and surrounded by soil, making them vulnerable to groundwater pressure (hydrostatic pressure), lateral water penetration through walls, and condensation due to cooler temperatures. Water can enter through walls, floors, and the junction between them."
  },
  {
    question: "What is the difference between tanking and cavity drain?",
    answer: "Tanking creates a waterproof barrier on the inside of walls/floors to prevent water entry. Cavity drain systems accept that water will enter but manage it via a membrane and drainage channel that directs water to a sump pump. Both are effective but suit different situations."
  },
  {
    question: "How much does basement waterproofing cost?",
    answer: "Costs vary significantly based on basement size and the chosen system. Simple tanking of a small cellar might cost £3,000-£5,000, while comprehensive cavity drain systems for larger basements typically cost £5,000-£15,000 or more. We provide detailed quotes after survey."
  },
  {
    question: "Can I convert my basement into living space?",
    answer: "Yes, with proper waterproofing a basement can become a comfortable, habitable room. This may require building regulations approval. We can advise on the requirements and waterproofing needed for your specific conversion project."
  },
];

export default function BasementDampPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Basement Waterproofing"
        serviceDescription="Professional basement waterproofing and cellar tanking in Essex. Transform damp basements into dry, usable living space."
        serviceUrl="/basement-damp"
        priceRange="£3,000 - £15,000"
      />

      <section className="gradient-hero py-16 lg:py-24">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl">
            <h1 className="text-white mb-6">Basement Waterproofing in Essex</h1>
            <p className="text-xl text-primary-100 mb-8">
              Transform your damp basement or cellar into dry, usable space. We provide
              professional waterproofing solutions with long-term guarantees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${siteData.business.phone.replace(/\s/g, "")}`} className="btn btn-lg bg-white text-primary-700 hover:bg-neutral-100">
                Call: {siteData.business.phone}
              </a>
              <Link href="/contact" className="btn btn-lg bg-accent-500 text-white hover:bg-accent-600">
                Book Free Survey
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6">Why Basements Get Damp</h2>
              <p className="text-neutral-600 mb-4">
                Basements and cellars are inherently challenging environments. Being below
                ground level, they&apos;re surrounded by soil that holds water, creating
                constant pressure trying to push moisture through walls and floors.
              </p>
              <p className="text-neutral-600 mb-6">
                Many older basements were never designed to be waterproof - they were
                built for storage, not habitation. Converting them into usable living
                space requires comprehensive waterproofing to manage the inevitable
                water pressure.
              </p>

              <h3 className="text-xl font-bold mb-4">Common Basement Damp Issues</h3>
              <ul className="space-y-3">
                {[
                  "Water seeping through walls or floor",
                  "Damp patches, especially after rain",
                  "Efflorescence (white salt deposits)",
                  "Musty smell and high humidity",
                  "Visible water ingress or flooding",
                  "Mould growth on walls and stored items",
                ].map((issue, i) => (
                  <li key={i} className="flex items-start gap-2 text-neutral-600">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {issue}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-neutral-100 rounded-xl p-8">
              <div className="aspect-video bg-gradient-to-br from-primary-200 to-primary-300 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-24 h-24 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-neutral-500 text-center text-sm">
                Basement waterproofing creates a dry, protected space below ground
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-center mb-4">Waterproofing Solutions</h2>
          <p className="text-lg text-neutral-600 text-center max-w-3xl mx-auto mb-12">
            We offer different waterproofing systems to suit your basement and intended use.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-neutral-200">
              <h3 className="text-xl font-bold mb-4">Cementitious Tanking</h3>
              <p className="text-neutral-600 mb-4">
                A waterproof render or slurry applied directly to walls and floors,
                creating a barrier that prevents water entry. Best suited for light
                water pressure and where maximum floor area is needed.
              </p>
              <ul className="space-y-2 text-neutral-600 text-sm mb-4">
                <li>• Applied directly to substrate</li>
                <li>• Maximises usable space</li>
                <li>• Can be painted or tiled over</li>
                <li>• Suitable for low-medium water pressure</li>
              </ul>
              <p className="text-primary-700 font-semibold">From £80-£120 per m²</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-neutral-200">
              <h3 className="text-xl font-bold mb-4">Cavity Drain System</h3>
              <p className="text-neutral-600 mb-4">
                A studded membrane is fixed to walls and floors, creating a cavity that
                allows water to drain to a sump chamber where it&apos;s pumped away. Ideal
                for higher water pressure situations.
              </p>
              <ul className="space-y-2 text-neutral-600 text-sm mb-4">
                <li>• Manages water rather than blocking it</li>
                <li>• Handles high water pressure</li>
                <li>• Reliable long-term solution</li>
                <li>• Suitable for habitable conversions</li>
              </ul>
              <p className="text-primary-700 font-semibold">From £150-£250 per m²</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-primary-900 text-white rounded-xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-white mb-4">Basement Conversion Projects</h2>
                <p className="text-primary-200 mb-6">
                  Planning to convert your basement into living space? We work with
                  architects and builders on basement conversion projects, ensuring
                  the waterproofing meets Building Regulations and provides a
                  comfortable, healthy environment.
                </p>
                <ul className="space-y-2 text-primary-100">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Building Regs compliant systems
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Insurance-backed guarantees
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    PCA-qualified installers
                  </li>
                </ul>
              </div>
              <div className="text-center lg:text-right">
                <Link href="/contact" className="btn btn-lg bg-accent-500 text-white hover:bg-accent-600">
                  Discuss Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} title="Basement Waterproofing FAQs" />

      <CTABanner
        title="Transform Your Damp Basement"
        description="Book a free survey to discuss waterproofing options for your basement or cellar."
      />
    </>
  );
}
