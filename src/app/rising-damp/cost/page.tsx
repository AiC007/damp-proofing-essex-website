import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FAQ } from "@/components/ui/FAQ";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Rising Damp Treatment Cost 2026 | Pricing Guide Essex",
  description: "Transparent rising damp treatment costs for 2026. DPC injection from £60/m, replastering from £45/m². See our complete pricing guide with typical property costs.",
  alternates: {
    canonical: "/rising-damp/cost",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Rising Damp", url: "/rising-damp" },
  { name: "Cost", url: "/rising-damp/cost" },
];

const faqs = [
  {
    question: "Why do rising damp treatment costs vary so much?",
    answer: "Costs vary based on several factors: the length of wall affected, wall thickness (thicker walls need more injection cream), the height of damp (determining how much replastering is needed), access difficulties, and whether additional work like floor repairs is needed. We provide exact quotes after survey."
  },
  {
    question: "Is the cheapest quote always the worst?",
    answer: "Not necessarily, but be cautious of quotes significantly below market rates. Check what's included: does it cover replastering? What guarantee is offered? Is it insurance-backed? What products are used? A lower price with inferior products or no replastering can mean the problem returns."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer interest-free payment plans for larger projects. You can spread the cost over 6-12 months, making treatment more affordable. We'll discuss options during your survey appointment."
  },
  {
    question: "Are there any hidden costs?",
    answer: "No. We provide fixed-price quotes that include everything discussed. The only time costs might increase is if hidden problems are discovered during work (e.g., unexpected wall construction), and we always discuss this with you before proceeding. There are no call-out fees or survey charges."
  },
  {
    question: "Can I claim rising damp treatment on insurance?",
    answer: "Standard home insurance typically doesn't cover rising damp as it's considered a maintenance issue. However, if rising damp has caused secondary damage (e.g., timber decay), that damage may be covered. Check your policy or ask your insurer directly."
  },
];

export default function RisingDampCostPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Rising Damp Treatment Cost Guide"
        serviceDescription="Transparent pricing guide for rising damp treatment in Essex. DPC injection and replastering costs with typical property examples."
        serviceUrl="/rising-damp/cost"
        priceRange="£1,500 - £5,000"
      />

      <section className="gradient-hero py-16 lg:py-24">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl">
            <h1 className="text-white mb-6">Rising Damp Treatment Costs 2026</h1>
            <p className="text-xl text-primary-100 mb-8">
              Transparent pricing for rising damp treatment. We believe in honest, upfront
              costs with no hidden extras. Here&apos;s what you can expect to pay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${siteData.business.phone.replace(/\s/g, "")}`} className="btn btn-lg bg-white text-primary-700 hover:bg-neutral-100">
                Call: {siteData.business.phone}
              </a>
              <Link href="/contact" className="btn btn-lg bg-accent-500 text-white hover:bg-accent-600">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-4">Component Pricing</h2>
            <p className="text-lg text-neutral-600 text-center mb-12">
              Rising damp treatment has two main components: DPC installation and replastering.
              Here are our prices for each element.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200">
                <h3 className="text-xl font-bold mb-4">DPC Injection</h3>
                <p className="text-neutral-600 mb-6">
                  Chemical DPC injection using BBA-approved silicone cream to create a
                  new damp proof course.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                    <span className="text-neutral-600">Single skin wall (4.5&quot;)</span>
                    <span className="font-bold text-primary-700">£60 per linear metre</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                    <span className="text-neutral-600">Double skin wall (9&quot;)</span>
                    <span className="font-bold text-primary-700">£70 per linear metre</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                    <span className="text-neutral-600">Cavity wall</span>
                    <span className="font-bold text-primary-700">£80 per linear metre</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-neutral-600">Thick solid wall (13.5&quot;+)</span>
                    <span className="font-bold text-primary-700">From £90 per linear metre</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200">
                <h3 className="text-xl font-bold mb-4">Replastering</h3>
                <p className="text-neutral-600 mb-6">
                  Removal of salt-contaminated plaster and application of specialist
                  renovating plaster system.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                    <span className="text-neutral-600">Standard replaster (to 1m height)</span>
                    <span className="font-bold text-primary-700">£45 per m²</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                    <span className="text-neutral-600">Extended replaster (to 1.5m)</span>
                    <span className="font-bold text-primary-700">£50 per m²</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                    <span className="text-neutral-600">Full height replaster</span>
                    <span className="font-bold text-primary-700">£55 per m²</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-neutral-600">Minimum charge (small areas)</span>
                    <span className="font-bold text-primary-700">£350</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-center mb-4">Typical Property Costs</h2>
          <p className="text-lg text-neutral-600 text-center max-w-3xl mx-auto mb-12">
            Here are realistic cost ranges for common property types in Essex. Actual costs
            depend on the extent of the problem - these are guides based on typical jobs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 className="font-bold mb-2">Terraced House</h3>
              <p className="text-neutral-600 text-sm mb-4">Front or rear wall affected</p>
              <p className="text-3xl font-bold text-primary-700 mb-2">£1,500 - £2,500</p>
              <p className="text-neutral-500 text-sm">DPC + replastering included</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border-2 border-primary-500">
              <div className="bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-full inline-block mb-2">MOST COMMON</div>
              <h3 className="font-bold mb-2">Semi-Detached</h3>
              <p className="text-neutral-600 text-sm mb-4">Multiple walls affected</p>
              <p className="text-3xl font-bold text-primary-700 mb-2">£2,500 - £4,000</p>
              <p className="text-neutral-500 text-sm">DPC + replastering included</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 className="font-bold mb-2">Detached House</h3>
              <p className="text-neutral-600 text-sm mb-4">Full perimeter if needed</p>
              <p className="text-3xl font-bold text-primary-700 mb-2">£3,500 - £6,000</p>
              <p className="text-neutral-500 text-sm">DPC + replastering included</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 className="font-bold mb-2">Large/Period Property</h3>
              <p className="text-neutral-600 text-sm mb-4">Extensive work required</p>
              <p className="text-3xl font-bold text-primary-700 mb-2">£5,000 - £10,000+</p>
              <p className="text-neutral-500 text-sm">Depends on size and complexity</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-8 bg-primary-100 rounded-xl p-6">
            <p className="text-primary-800 text-center">
              <strong>Note:</strong> These are guide prices only. Every property is different and
              we provide exact, fixed-price quotes after our free survey. There are no hidden extras.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">What Affects the Cost?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold mb-3">Factors That Increase Cost</h3>
                <ul className="space-y-2 text-neutral-600 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    More walls affected = longer DPC line
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Thicker walls need more injection cream
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Higher damp line = more replastering
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Difficult access (e.g., conservatories)
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Additional work (timber treatment, floor repairs)
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold mb-3">What&apos;s Included in Our Price</h3>
                <ul className="space-y-2 text-neutral-600 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Full DPC injection with BBA-approved cream
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Removal of contaminated plaster
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Specialist renovating plaster application
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    All materials and labour
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Waste removal and clean-up
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    20-year insurance-backed guarantee
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white mb-6">Comparing Quotes? Read This First</h2>
            <p className="text-primary-200 mb-8">
              When comparing rising damp treatment quotes, make sure you&apos;re comparing like with like.
              Here&apos;s what to check:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-primary-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">Check the Products</h3>
                <p className="text-primary-200 text-sm">
                  Are they using BBA-approved DPC cream? Cheap alternatives may not work as
                  effectively. Ask for product specifications.
                </p>
              </div>
              <div className="bg-primary-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">Check What&apos;s Included</h3>
                <p className="text-primary-200 text-sm">
                  Does the quote include replastering? Some contractors quote low for DPC only,
                  then add replastering as an extra.
                </p>
              </div>
              <div className="bg-primary-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">Check the Guarantee</h3>
                <p className="text-primary-200 text-sm">
                  How long is the guarantee? Is it insurance-backed? A 10-year guarantee with
                  no insurance protection may be worthless.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Get Your Free, No-Obligation Quote</h2>
            <p className="text-lg text-neutral-600 mb-8">
              The only way to get an accurate price for your property is with a professional survey.
              Our surveys are completely free, with no pressure or obligation. We&apos;ll provide a
              detailed written quote that&apos;s valid for 30 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${siteData.business.phone.replace(/\s/g, "")}`} className="btn btn-lg bg-primary-600 text-white hover:bg-primary-700">
                Call: {siteData.business.phone}
              </a>
              <Link href="/contact" className="btn btn-lg bg-accent-500 text-white hover:bg-accent-600">
                Book Free Survey
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} title="Cost FAQs" />

      <CTABanner
        title="Ready for a Free Quote?"
        description="Book your free survey and get a fixed-price quote with no hidden extras."
      />
    </>
  );
}
