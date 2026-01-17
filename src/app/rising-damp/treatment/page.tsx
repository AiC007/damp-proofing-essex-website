import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FAQ } from "@/components/ui/FAQ";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { HowToSchema } from "@/components/schema/HowToSchema";
import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Rising Damp Treatment Methods | DPC Injection & Replastering",
  description: "Complete guide to rising damp treatment methods. Chemical DPC injection, replastering specifications, and what to expect. Expert advice from PCA-qualified specialists.",
  alternates: {
    canonical: "/rising-damp/treatment",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Rising Damp", url: "/rising-damp" },
  { name: "Treatment", url: "/rising-damp/treatment" },
];

const faqs = [
  {
    question: "What is the best treatment for rising damp?",
    answer: "The industry-standard treatment is chemical DPC injection using silicone-based creams, combined with specialist replastering. This approach is proven, cost-effective, and comes with long-term guarantees. For very thick walls or special situations, physical DPC insertion may be more appropriate."
  },
  {
    question: "How long does rising damp treatment take?",
    answer: "DPC injection typically takes 1 day for most properties. Replastering adds 2-5 days depending on the extent of affected walls. The full process from survey to completion usually takes 2-4 weeks, including drying time between stages."
  },
  {
    question: "Do I need to replaster after DPC injection?",
    answer: "In most cases, yes. Rising damp carries salts up from the ground which become deposited in the plaster. These salts attract moisture even after the DPC is installed. Removing salt-contaminated plaster and applying specialist renovating plaster is usually necessary for a lasting solution."
  },
  {
    question: "How long until walls dry out after treatment?",
    answer: "Walls typically dry at a rate of about 1 inch per month under normal conditions. A 9-inch solid wall might take 9-12 months to fully dry. However, you can replaster sooner using specialist renovating plasters that tolerate higher moisture levels."
  },
  {
    question: "Will rising damp come back after treatment?",
    answer: "Not if the treatment is done correctly. A properly installed chemical DPC creates a permanent barrier. We use BBA-approved products and provide 20-year insurance-backed guarantees. Recurrence is almost always due to either incorrect original diagnosis or poor installation."
  },
];

const howToSteps = [
  {
    name: "Survey and Diagnosis",
    text: "A PCA-qualified surveyor takes moisture readings and identifies the extent and cause of rising damp, ensuring correct diagnosis before treatment.",
    image: ""
  },
  {
    name: "Drill Injection Holes",
    text: "Holes are drilled at 120mm intervals along the mortar course at the correct height, at an angle into the wall.",
    image: ""
  },
  {
    name: "Inject DPC Cream",
    text: "BBA-approved silicone cream is injected into each hole under low pressure, spreading through the masonry to form a continuous barrier.",
    image: ""
  },
  {
    name: "Remove Contaminated Plaster",
    text: "Salt-contaminated plaster is removed to a height of at least 300mm above the visible damp line, and wall surfaces are prepared.",
    image: ""
  },
  {
    name: "Apply Renovating Plaster",
    text: "Specialist salt-resistant renovating plaster is applied in two coats, providing a breathable but moisture-resistant finish.",
    image: ""
  },
  {
    name: "Allow Drying and Redecorate",
    text: "The replastered area is left to dry (typically 4-6 weeks for replastering, longer for walls), then can be painted or wallpapered.",
    image: ""
  },
];

export default function RisingDampTreatmentPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Rising Damp Treatment"
        serviceDescription="Professional rising damp treatment including chemical DPC injection and specialist replastering. BBA-approved products and 20-year guarantees."
        serviceUrl="/rising-damp/treatment"
        priceRange="£1,500 - £5,000"
      />
      <HowToSchema
        name="How to Treat Rising Damp"
        description="The professional process for treating rising damp, from survey through DPC injection to replastering."
        steps={howToSteps}
        totalTime="P14D"
      />

      <section className="gradient-hero py-16 lg:py-24">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl">
            <h1 className="text-white mb-6">Rising Damp Treatment Methods</h1>
            <p className="text-xl text-primary-100 mb-8">
              A complete guide to how rising damp is treated professionally. Understanding
              the process helps you make informed decisions about your property.
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
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">How Rising Damp Treatment Works</h2>
            <p className="text-neutral-600 mb-4">
              Rising damp treatment involves two key elements: installing a new damp proof
              course (DPC) to stop moisture rising, and replacing salt-contaminated plaster
              to prevent ongoing damp problems. Both elements are essential for a lasting solution.
            </p>
            <p className="text-neutral-600 mb-8">
              The most common and cost-effective method is chemical injection, where a
              silicone-based cream is injected into the wall to create a water-repellent
              barrier. This has largely replaced older methods like physical DPC insertion
              for most residential properties.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-center mb-4">The Treatment Process</h2>
          <p className="text-lg text-neutral-600 text-center max-w-3xl mx-auto mb-12">
            Here&apos;s what happens when we treat rising damp in your property.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Professional Survey",
                  desc: "A PCA-qualified surveyor visits your property and takes moisture readings using calibrated equipment. We inspect the DPC position, external ground levels, and look for other potential causes of damp. This ensures we diagnose correctly - many 'rising damp' cases are actually something else entirely.",
                  detail: "Survey takes approximately 45-60 minutes. You receive a written report and fixed-price quotation."
                },
                {
                  step: 2,
                  title: "DPC Injection",
                  desc: "Holes are drilled at 120mm intervals along a mortar course, typically 150mm above external ground level or just above floor level internally. BBA-approved silicone cream is injected into each hole. The cream diffuses through the masonry, creating a continuous water-repellent barrier.",
                  detail: "Injection typically completed in 1 day. Minimal disruption - furniture moved away from walls."
                },
                {
                  step: 3,
                  title: "Remove Contaminated Plaster",
                  desc: "Existing plaster is removed to a height of at least 300mm above the visible damp line. This removes the hygroscopic salts that rising damp has deposited in the plaster over the years. Salt-contaminated plaster will continue to attract moisture even after DPC installation.",
                  detail: "This is the messiest stage. We protect floors and furniture and clean up daily."
                },
                {
                  step: 4,
                  title: "Apply Renovating Plaster",
                  desc: "Once masonry is prepared, specialist renovating plaster is applied in two coats. This plaster is designed to be salt-resistant and breathable, allowing residual moisture to evaporate while providing a sound surface for decoration.",
                  detail: "Replastering takes 2-5 days depending on extent. Two coats applied with drying time between."
                },
                {
                  step: 5,
                  title: "Drying & Redecoration",
                  desc: "The new plaster needs time to dry before painting or wallpapering - typically 4-6 weeks for the plaster itself, though the underlying walls take longer. We advise on the appropriate drying time for your situation.",
                  detail: "We provide guidance on when to redecorate. Using appropriate paints helps the drying process."
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-neutral-600 mb-2">{item.desc}</p>
                    <p className="text-primary-700 text-sm font-medium">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">DPC Treatment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary-200">
              <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Recommended
              </div>
              <h3 className="text-xl font-bold mb-4">Chemical DPC Injection</h3>
              <p className="text-neutral-600 mb-4">
                The industry-standard treatment. Silicone-based cream is injected into
                drilled holes, diffusing through the masonry to create a water-repellent
                barrier. Suitable for most residential properties.
              </p>
              <h4 className="font-bold mb-2">Advantages</h4>
              <ul className="space-y-2 text-neutral-600 text-sm mb-4">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Less disruptive than physical methods
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Cost-effective solution
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  BBA-approved products available
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  20-year guarantees standard
                </li>
              </ul>
              <p className="text-primary-700 font-semibold">From £60-£80 per linear metre</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-neutral-200">
              <h3 className="text-xl font-bold mb-4">Physical DPC</h3>
              <p className="text-neutral-600 mb-4">
                A physical membrane is inserted by cutting into the mortar course and
                fitting a new DPC. Used where injection isn&apos;t suitable, such as very
                thick rubble-filled walls.
              </p>
              <h4 className="font-bold mb-2">Advantages</h4>
              <ul className="space-y-2 text-neutral-600 text-sm mb-4">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Physical barrier - no chemicals
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Suitable for thick/rubble walls
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Lifetime of membrane is indefinite
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Appropriate for listed buildings
                </li>
              </ul>
              <p className="text-primary-700 font-semibold">From £100-£150 per linear metre</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Understanding Replastering</h2>
            <div className="prose prose-lg max-w-none text-neutral-600">
              <p>
                Replastering is a crucial part of rising damp treatment, yet it&apos;s often
                misunderstood. Many DIY attempts fail because they only address the DPC
                without dealing with salt-contaminated plaster.
              </p>

              <h3>Why Replastering is Essential</h3>
              <p>
                As moisture rises through masonry, it carries dissolved salts - primarily
                chlorides and nitrates from the ground. When the water evaporates, these salts
                are left behind in the plaster. The problem is that these salts are hygroscopic:
                they actively attract moisture from the air.
              </p>
              <p>
                Even after a new DPC stops rising damp, salt-contaminated plaster will continue
                to feel damp because it&apos;s pulling moisture from humid air. This is why installing
                a DPC alone often appears to fail - the salts keep the wall damp.
              </p>

              <h3>Specialist Renovating Plaster</h3>
              <p>
                We use specialist renovating plaster systems designed specifically for damp-affected
                walls. These plasters have several important properties:
              </p>
              <ul>
                <li><strong>Salt-resistant:</strong> They don&apos;t allow salts to migrate to the surface</li>
                <li><strong>Breathable:</strong> They allow residual moisture to evaporate</li>
                <li><strong>Moisture-tolerant:</strong> They can be applied to walls with higher-than-normal moisture content</li>
                <li><strong>Durable:</strong> They provide a long-lasting, stable surface for decoration</li>
              </ul>

              <h3>The Replastering Process</h3>
              <p>
                First, all existing plaster is removed to at least 300mm above the visible damp
                line - typically up to 1.2 metres in severe cases. The exposed masonry is prepared
                and any loose material removed. A salt-inhibiting slurry may be applied.
              </p>
              <p>
                The renovating plaster is then applied in two coats. The scratch coat provides
                adhesion and the topcoat gives the finished surface. Total thickness is typically
                20-25mm. The plaster is left proud of any adjacent original plaster and can be
                feathered in during decoration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-primary-900 text-white rounded-xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-white mb-4">Our Quality Guarantee</h2>
                <p className="text-primary-200 mb-6">
                  We stand behind our work with comprehensive guarantees:
                </p>
                <ul className="space-y-3 text-primary-100">
                  {[
                    "20-year guarantee on DPC installation",
                    "Insurance-backed for peace of mind",
                    "Transferable if you sell your property",
                    "Written documentation for your records",
                    "PCA member - independent body oversight",
                    "BBA-approved products used throughout",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-secondary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center lg:text-right">
                <p className="text-primary-200 mb-4">Ready to fix your rising damp?</p>
                <Link href="/contact" className="btn btn-lg bg-accent-500 text-white hover:bg-accent-600">
                  Book Free Survey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} title="Treatment FAQs" />

      <CTABanner
        title="Need Rising Damp Treatment?"
        description="Book a free survey and get a professional diagnosis and fixed-price quote."
      />
    </>
  );
}
