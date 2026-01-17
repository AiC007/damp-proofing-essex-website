import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FAQ } from "@/components/ui/FAQ";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Penetrating Damp Treatment Essex | Water Ingress Solutions",
  description: "Expert penetrating damp treatment in Essex. We identify and fix water ingress through walls and roofs. Pointing repairs, render, waterproofing. Free surveys. Call today!",
  alternates: {
    canonical: "/penetrating-damp",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Penetrating Damp", url: "/penetrating-damp" },
];

const faqs = [
  {
    question: "What causes penetrating damp?",
    answer: "Penetrating damp is caused by water entering through the external fabric of the building. Common causes include: damaged or missing pointing, cracked render, faulty gutters and downpipes, damaged roof tiles or flashing, porous brickwork, and defective window seals."
  },
  {
    question: "How do I know if I have penetrating damp?",
    answer: "Penetrating damp typically appears as damp patches that get worse during or after rain. Unlike rising damp, it can appear at any height on walls and doesn't have a tide mark. The damp patches often correspond to defects on the exterior of the building."
  },
  {
    question: "How much does penetrating damp treatment cost?",
    answer: "Costs depend on the cause and extent of the problem. Minor repairs like repointing might cost £300-£800, while more extensive work involving render repairs or waterproofing typically costs £800-£2,500. We provide detailed quotes after survey."
  },
  {
    question: "Can penetrating damp cause structural damage?",
    answer: "Yes, if left untreated, penetrating damp can cause timber decay, damage to plaster and decorations, and in severe cases can affect the structural integrity of walls. Early treatment prevents costly repairs later."
  },
];

export default function PenetratingDampPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Penetrating Damp Treatment"
        serviceDescription="Professional penetrating damp treatment in Essex. We identify and fix water ingress through walls, roofs, and other building defects."
        serviceUrl="/penetrating-damp"
        priceRange="£300 - £2,500"
      />

      <section className="gradient-hero py-16 lg:py-24">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl">
            <h1 className="text-white mb-6">Penetrating Damp Treatment in Essex</h1>
            <p className="text-xl text-primary-100 mb-8">
              Expert diagnosis and repair of penetrating damp. We identify the source of
              water ingress and provide lasting repairs to protect your property.
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
              <h2 className="mb-6">What is Penetrating Damp?</h2>
              <p className="text-neutral-600 mb-4">
                Penetrating damp occurs when water enters your property horizontally through
                the external walls, roof, or around windows and doors. Unlike rising damp
                which travels upward from the ground, penetrating damp can appear at any
                height and is usually linked to defects in the building fabric.
              </p>
              <p className="text-neutral-600 mb-6">
                The key characteristic of penetrating damp is that it typically worsens
                during or after rainfall, and the location of internal damp often corresponds
                to visible defects on the exterior of the building.
              </p>

              <h3 className="text-xl font-bold mb-4">Common Causes</h3>
              <ul className="space-y-3">
                {[
                  "Damaged or deteriorated pointing between bricks",
                  "Cracked or blown render",
                  "Blocked or damaged gutters and downpipes",
                  "Missing or damaged roof tiles",
                  "Defective flashing around chimneys or roof junctions",
                  "Failed window or door seals",
                  "Porous brickwork (especially in exposed locations)",
                ].map((cause, i) => (
                  <li key={i} className="flex items-start gap-2 text-neutral-600">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {cause}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-neutral-100 rounded-xl p-8">
              <div className="aspect-video bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-24 h-24 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <p className="text-neutral-500 text-center text-sm">
                Penetrating damp enters horizontally through building defects
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Treatment Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Survey", desc: "Thorough inspection to identify the source of water ingress" },
              { step: "2", title: "Diagnose", desc: "Detailed report explaining the cause and recommended repairs" },
              { step: "3", title: "Repair", desc: "Professional repairs to eliminate the water entry point" },
              { step: "4", title: "Restore", desc: "Internal repairs and redecoration as needed" },
            ].map((item) => (
              <div key={item.step} className="text-center">
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
          <h2 className="text-center mb-12">Treatment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200">
              <h3 className="text-lg font-bold mb-3">Repointing</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Removing damaged mortar and replacing with new, weather-resistant pointing
                to seal gaps between bricks.
              </p>
              <p className="text-primary-700 font-semibold">From £40-£60 per m²</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200">
              <h3 className="text-lg font-bold mb-3">Render Repairs</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Patching or replacing damaged render to restore the protective layer
                on external walls.
              </p>
              <p className="text-primary-700 font-semibold">From £50-£80 per m²</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200">
              <h3 className="text-lg font-bold mb-3">Waterproofing</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Applying specialist waterproofing treatments to porous masonry to
                prevent water penetration.
              </p>
              <p className="text-primary-700 font-semibold">From £20-£35 per m²</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} title="Penetrating Damp FAQs" />

      <CTABanner
        title="Water Coming Through Your Walls?"
        description="Don't let penetrating damp damage your property. Book a free survey and we'll identify the source and fix it."
      />
    </>
  );
}
