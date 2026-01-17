import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FAQ } from "@/components/ui/FAQ";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Damp Proof Course Installation Essex | DPC Injection & Replacement",
  description: "Professional damp proof course installation in Essex. Chemical DPC injection, physical DPC replacement. BBA-approved products, 20-year guarantees. Free surveys available.",
  alternates: {
    canonical: "/damp-proof-course",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Damp Proof Course", url: "/damp-proof-course" },
];

const faqs = [
  {
    question: "What is a damp proof course (DPC)?",
    answer: "A damp proof course is a barrier built into walls to prevent moisture from rising up from the ground. In older properties this might be slate or engineering bricks; in modern properties it's usually a plastic membrane. When the original DPC fails or is absent, a new one can be installed by injection."
  },
  {
    question: "How long does DPC injection last?",
    answer: "A properly installed chemical DPC injection using BBA-approved products typically lasts 20+ years, which is why we provide a 20-year guarantee on our installations. The silicone-based creams we use create a permanent water-repellent barrier within the masonry."
  },
  {
    question: "How much does a new damp proof course cost?",
    answer: "The cost depends on the length of wall being treated and wall thickness. For a typical terraced house, DPC injection costs £1,500-£3,000. Semi-detached properties typically cost £2,500-£4,500. We provide fixed-price quotes after survey."
  },
  {
    question: "How long does DPC installation take?",
    answer: "The injection itself is typically completed in one day for most properties. However, the walls will need time to dry out afterwards, which can take 6-12 months depending on the extent of the dampness. We advise on replastering timelines during survey."
  },
  {
    question: "Do I need to replaster after DPC installation?",
    answer: "Usually yes. Walls affected by rising damp contain salts that have been drawn up from the ground. These salts are hygroscopic (attract moisture) and will continue to cause damp patches even after the DPC is installed. Removing contaminated plaster and re-plastering with a salt-resistant specification is usually necessary."
  },
];

export default function DampProofCoursePage() {
  return (
    <>
      <ServiceSchema
        serviceName="Damp Proof Course Installation"
        serviceDescription="Professional damp proof course installation in Essex. Chemical DPC injection using BBA-approved products with 20-year guarantees."
        serviceUrl="/damp-proof-course"
        priceRange="£1,500 - £4,500"
      />

      <section className="gradient-hero py-16 lg:py-24">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl">
            <h1 className="text-white mb-6">Damp Proof Course Installation in Essex</h1>
            <p className="text-xl text-primary-100 mb-8">
              Professional DPC injection and replacement using BBA-approved products.
              Stop rising damp permanently with our guaranteed damp proof course solutions.
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
              <h2 className="mb-6">What is a Damp Proof Course?</h2>
              <p className="text-neutral-600 mb-4">
                A damp proof course (DPC) is a horizontal barrier built into walls near ground
                level to prevent moisture from the ground rising up through the masonry. All
                buildings constructed after 1875 should have some form of DPC, though materials
                and effectiveness vary.
              </p>
              <p className="text-neutral-600 mb-4">
                Original DPCs can fail due to age, bridging (where external ground levels have
                risen above the DPC), or physical damage. Many pre-1875 properties have no DPC
                at all. In either case, a new damp proof course can be installed to stop rising
                damp permanently.
              </p>
              <p className="text-neutral-600 mb-6">
                Modern DPC installation uses chemical injection to create a water-repellent
                barrier within the wall. This is less disruptive than traditional physical DPC
                insertion and is highly effective when installed correctly.
              </p>

              <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
                <h3 className="font-bold text-primary-900 mb-3">Signs You Need a New DPC</h3>
                <ul className="space-y-2 text-primary-800 text-sm">
                  <li>• Tide mark of damp on internal walls up to 1 metre high</li>
                  <li>• White salt deposits (efflorescence) on walls</li>
                  <li>• Peeling wallpaper or bubbling paint at low level</li>
                  <li>• Damp, musty smell at ground floor level</li>
                  <li>• External ground level higher than internal floor</li>
                </ul>
              </div>
            </div>
            <div className="bg-neutral-100 rounded-xl p-8">
              <div className="aspect-video bg-gradient-to-br from-primary-200 to-primary-300 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-24 h-24 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-neutral-500 text-center text-sm">
                A DPC creates a barrier to prevent moisture rising through walls
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-center mb-4">Our DPC Installation Process</h2>
          <p className="text-lg text-neutral-600 text-center max-w-3xl mx-auto mb-12">
            We follow a proven process to ensure effective, long-lasting damp proof course installation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Survey & Diagnosis", desc: "We confirm rising damp with moisture readings and identify the best injection height and approach." },
              { step: "2", title: "Preparation", desc: "Holes are drilled at the correct spacing and angle along the mortar course at the chosen injection level." },
              { step: "3", title: "Injection", desc: "BBA-approved silicone cream is injected under pressure, spreading through the masonry to form a complete barrier." },
              { step: "4", title: "Completion", desc: "Holes are made good, and we advise on replastering timelines and specifications for long-term protection." },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-14 h-14 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">DPC Installation Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary-200">
              <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Most Common
              </div>
              <h3 className="text-xl font-bold mb-4">Chemical DPC Injection</h3>
              <p className="text-neutral-600 mb-4">
                A silicone-based cream is injected into drilled holes along the mortar course,
                creating a water-repellent barrier within the masonry. Suitable for most wall types.
              </p>
              <ul className="space-y-2 text-neutral-600 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  BBA-approved products
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Minimal disruption
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  20-year guarantee
                </li>
              </ul>
              <p className="text-primary-700 font-semibold text-lg">From £60-£80 per linear metre</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-neutral-200">
              <h3 className="text-xl font-bold mb-4">Physical DPC</h3>
              <p className="text-neutral-600 mb-4">
                A physical membrane is inserted into the wall by cutting out a mortar course and
                inserting the DPC. Used where injection isn&apos;t suitable, such as very thick walls.
              </p>
              <ul className="space-y-2 text-neutral-600 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Physical barrier
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Suitable for thick walls
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Lifetime guarantee
                </li>
              </ul>
              <p className="text-primary-700 font-semibold text-lg">From £100-£150 per linear metre</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-center mb-8">Why Choose Our DPC Installation?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "PCA Qualified", desc: "Our surveyors hold CSRT and CSSW qualifications from the Property Care Association" },
                { title: "BBA Approved Products", desc: "We only use products with independent BBA certification for proven performance" },
                { title: "20-Year Guarantee", desc: "All DPC installations come with a 20-year guarantee, insurance-backed for peace of mind" },
                { title: "Honest Diagnosis", desc: "We won't recommend DPC work if it's not needed - many damp issues aren't rising damp" },
                { title: "Complete Solution", desc: "We advise on replastering specifications and can complete the full works if required" },
                { title: "Fair Pricing", desc: "Transparent, fixed-price quotes with no hidden extras or pressure selling" },
              ].map((item, i) => (
                <div key={i} className="bg-primary-800 rounded-lg p-6">
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-primary-200 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">After DPC Installation: The Drying Process</h2>
            <div className="prose prose-lg max-w-none text-neutral-600">
              <p>
                It&apos;s important to understand that installing a new DPC doesn&apos;t instantly dry out
                your walls. The DPC stops new moisture from rising, but existing moisture in the
                masonry needs time to evaporate naturally.
              </p>
              <p>
                The drying time depends on several factors: wall thickness, how wet the walls are,
                ventilation, and heating. As a general guide, walls dry at about 1 inch per month
                under normal conditions. A 9-inch solid wall might take 9-12 months to dry fully.
              </p>
              <p>
                <strong>Replastering too soon is the most common mistake</strong> after DPC installation.
                If you replaster before walls have dried sufficiently, moisture gets trapped behind the
                new plaster and the problem appears to return. We advise waiting at least 6 months
                before replastering, or using specialist renovating plaster that can tolerate higher
                moisture levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} title="Damp Proof Course FAQs" />

      <CTABanner
        title="Need a New Damp Proof Course?"
        description="Book a free survey to find out if DPC injection is the right solution for your rising damp problem."
      />
    </>
  );
}
