import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";
import { siteData, pricingData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Damp Proofing Cost Guide 2026 | Essex Pricing",
  description: "Transparent damp proofing costs for Essex. See our pricing for rising damp treatment, penetrating damp, condensation solutions, basement waterproofing, and damp surveys. No hidden costs.",
  alternates: {
    canonical: "/cost-guide",
  },
  openGraph: {
    title: "Damp Proofing Cost Guide 2026 | Essex Pricing",
    description: "Transparent damp proofing costs for Essex. See our pricing for all damp treatments including surveys, rising damp, basement waterproofing, and more.",
    url: "/cost-guide",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Cost Guide", url: "/cost-guide" },
];

export default function CostGuidePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero py-16 lg:py-24">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl">
            <h1 className="text-white mb-6">
              Damp Proofing Cost Guide 2026
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Transparent pricing for all our damp proofing services in Essex. We believe
              you should know what to expect before you book. No hidden costs, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-6">Understanding Damp Proofing Costs</h2>
            <p className="text-neutral-600 mb-4">
              The cost of damp proofing varies significantly depending on the type of damp,
              the extent of the problem, and the size of the affected area. This guide
              provides realistic price ranges based on typical Essex properties.
            </p>
            <p className="text-neutral-600">
              All prices are guide figures for 2026. For an accurate quote tailored to
              your property, we recommend booking a survey.
            </p>
          </div>

          {/* Price Factors */}
          <div className="bg-accent-50 border border-accent-200 rounded-xl p-6 max-w-3xl mx-auto">
            <h3 className="font-bold text-accent-900 mb-4">Factors That Affect Cost</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-accent-800 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-accent-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Type and severity of damp</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-accent-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Linear metres of wall affected</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-accent-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Wall thickness and construction</span>
                </li>
              </ul>
              <ul className="space-y-2 text-accent-800 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-accent-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Access and working conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-accent-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Whether plastering is included</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-accent-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Additional repairs needed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Service Pricing</h2>

          {/* Damp Surveys */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              Damp Surveys
            </h3>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-primary-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Survey Type</th>
                    <th className="px-6 py-4 text-left font-semibold">Description</th>
                    <th className="px-6 py-4 text-right font-semibold">Price Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Free Assessment</td>
                    <td className="px-6 py-4 text-neutral-600">Initial visit for straightforward cases</td>
                    <td className="px-6 py-4 text-right font-bold text-secondary-600">FREE</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-6 py-4 font-medium">Standard Survey</td>
                    <td className="px-6 py-4 text-neutral-600">Full survey with comprehensive written report</td>
                    <td className="px-6 py-4 text-right font-bold text-primary-700">£{pricingData.survey.standard.min} - £{pricingData.survey.standard.max}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Comprehensive Survey</td>
                    <td className="px-6 py-4 text-neutral-600">Complex issues, multiple damp types, larger properties</td>
                    <td className="px-6 py-4 text-right font-bold text-primary-700">£{pricingData.survey.comprehensive.min} - £{pricingData.survey.comprehensive.max}</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-6 py-4 font-medium">Commercial Survey</td>
                    <td className="px-6 py-4 text-neutral-600">Commercial properties, multiple units</td>
                    <td className="px-6 py-4 text-right font-bold text-primary-700">£{pricingData.survey.commercial.min} - £{pricingData.survey.commercial.max}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-neutral-500">
              Survey fee is deducted from treatment cost if you proceed with us.
            </p>
          </div>

          {/* Rising Damp */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              Rising Damp Treatment
            </h3>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-primary-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Treatment</th>
                    <th className="px-6 py-4 text-left font-semibold">Description</th>
                    <th className="px-6 py-4 text-right font-semibold">Price Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Single Wall</td>
                    <td className="px-6 py-4 text-neutral-600">DPC injection only (excludes plastering)</td>
                    <td className="px-6 py-4 text-right font-bold text-primary-700">£{pricingData.risingDamp.singleWall.min.toLocaleString()} - £{pricingData.risingDamp.singleWall.max.toLocaleString()}</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-6 py-4 font-medium">Multiple Walls</td>
                    <td className="px-6 py-4 text-neutral-600">2-4 walls, DPC injection only</td>
                    <td className="px-6 py-4 text-right font-bold text-primary-700">£{pricingData.risingDamp.multipleWalls.min.toLocaleString()} - £{pricingData.risingDamp.multipleWalls.max.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Whole House</td>
                    <td className="px-6 py-4 text-neutral-600">Complete DPC treatment, all affected walls</td>
                    <td className="px-6 py-4 text-right font-bold text-primary-700">£{pricingData.risingDamp.wholeHouse.min.toLocaleString()} - £{pricingData.risingDamp.wholeHouse.max.toLocaleString()}</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-6 py-4 font-medium">DPC per Metre</td>
                    <td className="px-6 py-4 text-neutral-600">Chemical injection per linear metre</td>
                    <td className="px-6 py-4 text-right font-bold text-primary-700">£{pricingData.dpc.injection.min} - £{pricingData.dpc.injection.max} {pricingData.dpc.injection.unit}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-neutral-500">
              Prices exclude plastering. Add £40-£60 per m² for salt-resistant renovating plaster.
            </p>
          </div>

          {/* Other Services */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              Other Damp Treatments
            </h3>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-primary-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Service</th>
                    <th className="px-6 py-4 text-left font-semibold">Description</th>
                    <th className="px-6 py-4 text-right font-semibold">Price Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Penetrating Damp (Minor)</td>
                    <td className="px-6 py-4 text-neutral-600">Small areas, simple repairs</td>
                    <td className="px-6 py-4 text-right font-bold text-primary-700">£{pricingData.penetratingDamp.minor.min} - £{pricingData.penetratingDamp.minor.max}</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-6 py-4 font-medium">Penetrating Damp (Moderate)</td>
                    <td className="px-6 py-4 text-neutral-600">Multiple areas, external repairs needed</td>
                    <td className="px-6 py-4 text-right font-bold text-primary-700">£{pricingData.penetratingDamp.moderate.min.toLocaleString()} - £{pricingData.penetratingDamp.moderate.max.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Condensation (Ventilation)</td>
                    <td className="px-6 py-4 text-neutral-600">Improved ventilation, air bricks, trickle vents</td>
                    <td className="px-6 py-4 text-right font-bold text-primary-700">£{pricingData.condensation.ventilation.min} - £{pricingData.condensation.ventilation.max}</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-6 py-4 font-medium">Condensation (Extraction)</td>
                    <td className="px-6 py-4 text-neutral-600">Extractor fans, humidity-controlled vents</td>
                    <td className="px-6 py-4 text-right font-bold text-primary-700">£{pricingData.condensation.extraction.min} - £{pricingData.condensation.extraction.max.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Mould Removal (Small)</td>
                    <td className="px-6 py-4 text-neutral-600">One room, surface treatment</td>
                    <td className="px-6 py-4 text-right font-bold text-primary-700">£{pricingData.mould.small.min} - £{pricingData.mould.small.max}</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-6 py-4 font-medium">Mould Removal (Large)</td>
                    <td className="px-6 py-4 text-neutral-600">Multiple rooms, extensive treatment</td>
                    <td className="px-6 py-4 text-right font-bold text-primary-700">£{pricingData.mould.large.min.toLocaleString()} - £{pricingData.mould.large.max.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Basement Waterproofing */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              Basement Waterproofing
            </h3>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-primary-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Size</th>
                    <th className="px-6 py-4 text-left font-semibold">Description</th>
                    <th className="px-6 py-4 text-right font-semibold">Price Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Small Basement</td>
                    <td className="px-6 py-4 text-neutral-600">Up to 15m², tanking system</td>
                    <td className="px-6 py-4 text-right font-bold text-primary-700">£{pricingData.basement.small.min.toLocaleString()} - £{pricingData.basement.small.max.toLocaleString()}</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-6 py-4 font-medium">Medium Basement</td>
                    <td className="px-6 py-4 text-neutral-600">15-30m², cavity drain or tanking</td>
                    <td className="px-6 py-4 text-right font-bold text-primary-700">£{pricingData.basement.medium.min.toLocaleString()} - £{pricingData.basement.medium.max.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Large Basement</td>
                    <td className="px-6 py-4 text-neutral-600">30m²+, comprehensive waterproofing</td>
                    <td className="px-6 py-4 text-right font-bold text-primary-700">£{pricingData.basement.large.min.toLocaleString()} - £{pricingData.basement.large.max.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-neutral-500">
              Basement waterproofing is highly variable. These are typical ranges - we provide detailed quotes after survey.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">What&apos;s Included in Our Prices</h2>
              <p className="text-neutral-600 mb-6">
                Our quotes are transparent and comprehensive. Here&apos;s what&apos;s included
                as standard in all our damp proofing treatments.
              </p>

              <ul className="space-y-4">
                {[
                  "Professional survey and diagnosis",
                  "All materials and labour",
                  "BBA-approved treatment products",
                  "Site preparation and clean-up",
                  "Written guarantee certificate",
                  "Aftercare advice and support",
                  "Insurance-backed guarantee (where applicable)",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-secondary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary-900 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get Your Free Quote</h3>
              <p className="text-primary-200 mb-6">
                Every property is different. For an accurate quote tailored to your
                specific situation, book a free survey with our team.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-primary-100">
                  <svg className="w-5 h-5 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  No obligation
                </li>
                <li className="flex items-center gap-2 text-primary-100">
                  <svg className="w-5 h-5 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Written quote provided
                </li>
                <li className="flex items-center gap-2 text-primary-100">
                  <svg className="w-5 h-5 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Price guaranteed for 30 days
                </li>
              </ul>
              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${siteData.business.phone.replace(/\s/g, "")}`}
                  className="btn btn-lg bg-white text-primary-700 hover:bg-neutral-100 justify-center"
                >
                  Call: {siteData.business.phone}
                </a>
                <Link href="/contact" className="btn btn-lg bg-accent-500 text-white hover:bg-accent-600 justify-center">
                  Book Free Survey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        title="Ready for Your Free Quote?"
        description="Contact us today for a no-obligation survey and accurate quote. Transparent pricing with no hidden costs."
      />
    </>
  );
}
