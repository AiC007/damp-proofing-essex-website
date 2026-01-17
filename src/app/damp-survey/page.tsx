import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FAQ } from "@/components/ui/FAQ";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { siteData, faqData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Damp Surveys Essex | Professional Damp Assessments",
  description: "Professional damp surveys in Essex with detailed reports. Our PCA-qualified surveyors use advanced moisture meters to accurately diagnose damp problems. Free surveys available. Call today!",
  alternates: {
    canonical: "/damp-survey",
  },
  openGraph: {
    title: "Damp Surveys Essex | Professional Damp Assessments",
    description: "Professional damp surveys in Essex with detailed reports. Our PCA-qualified surveyors use advanced moisture meters to accurately diagnose damp problems.",
    url: "/damp-survey",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Damp Surveys", url: "/damp-survey" },
];

export default function DampSurveyPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Damp Survey and Assessment"
        serviceDescription="Professional damp surveys in Essex with comprehensive reports. Using advanced moisture meters and thermal imaging for accurate diagnosis."
        serviceUrl="/damp-survey"
        priceRange="£150 - £350"
      />

      {/* Hero Section */}
      <section className="gradient-hero py-16 lg:py-24">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl">
            <h1 className="text-white mb-6">
              Professional Damp Surveys in Essex
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Accurate damp diagnosis is essential for effective treatment. Our PCA-qualified
              surveyors use professional equipment to identify the exact cause of your damp
              problem and recommend the most appropriate solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${siteData.business.phone.replace(/\s/g, "")}`}
                className="btn btn-lg bg-white text-primary-700 hover:bg-neutral-100"
              >
                Call: {siteData.business.phone}
              </a>
              <Link href="/contact" className="btn btn-lg bg-accent-500 text-white hover:bg-accent-600">
                Book Your Survey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Damp Survey */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">What is a Damp Survey?</h2>
              <p className="text-neutral-600 mb-4">
                A damp survey is a thorough inspection of your property to identify the type,
                cause, and extent of any damp problems. Unlike a basic visual inspection, a
                professional damp survey uses calibrated equipment to measure moisture levels
                in walls, floors, and other building materials.
              </p>
              <p className="text-neutral-600 mb-4">
                The goal is to provide an accurate diagnosis, distinguishing between rising
                damp, penetrating damp, condensation, and other moisture sources. This ensures
                you receive the correct treatment and don&apos;t waste money on unnecessary work.
              </p>
              <p className="text-neutral-600 mb-6">
                Our surveys are conducted by PCA-qualified surveyors who understand building
                construction and damp pathology. We take the time to investigate thoroughly
                rather than making quick assumptions.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-lg">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-primary-800">PCA Qualified</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-lg">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-primary-800">Professional Equipment</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-lg">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-primary-800">Written Report</span>
                </div>
              </div>
            </div>
            <div className="bg-neutral-100 rounded-xl p-8">
              <div className="aspect-video bg-gradient-to-br from-primary-200 to-primary-300 rounded-lg flex items-center justify-center">
                <svg className="w-24 h-24 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <p className="text-center text-neutral-500 mt-4 text-sm">
                Our surveyors use calibrated moisture meters for accurate readings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Check */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-center mb-4">What We Check During a Damp Survey</h2>
          <p className="text-lg text-neutral-600 text-center max-w-3xl mx-auto mb-12">
            Our comprehensive surveys examine all potential damp sources to provide
            an accurate diagnosis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Internal Walls</h3>
              <ul className="space-y-2 text-neutral-600 text-sm">
                <li>• Moisture readings at multiple heights</li>
                <li>• Visual inspection for tide marks and salt deposits</li>
                <li>• Check for DPC and its condition</li>
                <li>• Assessment of plaster condition</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">External Walls</h3>
              <ul className="space-y-2 text-neutral-600 text-sm">
                <li>• Condition of pointing and render</li>
                <li>• Ground levels relative to DPC</li>
                <li>• Cracks or defects allowing water ingress</li>
                <li>• External drainage and guttering</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Floors</h3>
              <ul className="space-y-2 text-neutral-600 text-sm">
                <li>• Floor type (solid or suspended)</li>
                <li>• Moisture readings on solid floors</li>
                <li>• Sub-floor ventilation check</li>
                <li>• Signs of floor damp or rot</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Roof &amp; Gutters</h3>
              <ul className="space-y-2 text-neutral-600 text-sm">
                <li>• Gutter condition and alignment</li>
                <li>• Downpipe functionality</li>
                <li>• Roof defects (visible from ground)</li>
                <li>• Flashing and seals</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Ventilation</h3>
              <ul className="space-y-2 text-neutral-600 text-sm">
                <li>• Airbrick condition and blockages</li>
                <li>• Extract fan presence and function</li>
                <li>• Window ventilation assessment</li>
                <li>• Humidity-related issues</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Plumbing</h3>
              <ul className="space-y-2 text-neutral-600 text-sm">
                <li>• Visible pipework for leaks</li>
                <li>• Around bathroom and kitchen</li>
                <li>• Signs of historic leaks</li>
                <li>• Waste pipe seals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Used */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">Professional Equipment We Use</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Electrical Moisture Meter</h3>
              <p className="text-neutral-600 text-sm">
                Calibrated meters to measure moisture content in walls and other materials
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Thermal Imaging</h3>
              <p className="text-neutral-600 text-sm">
                Infrared cameras to detect hidden damp patterns and thermal bridges
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Hygrometer</h3>
              <p className="text-neutral-600 text-sm">
                Measures relative humidity to assess condensation risk
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Salts Test Kit</h3>
              <p className="text-neutral-600 text-sm">
                Identifies hygroscopic salts that can cause ongoing damp issues
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Report */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Your Detailed Survey Report</h2>
              <p className="text-neutral-600 mb-6">
                Following your survey, you&apos;ll receive a comprehensive written report that
                documents our findings and provides clear recommendations.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-neutral-900">Diagnosis</strong>
                    <p className="text-neutral-600 text-sm">Clear identification of the type of damp affecting your property</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-neutral-900">Moisture Readings</strong>
                    <p className="text-neutral-600 text-sm">Documented readings from all tested areas with diagrams</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-neutral-900">Photographs</strong>
                    <p className="text-neutral-600 text-sm">Photographic evidence of all issues found</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-neutral-900">Root Cause Analysis</strong>
                    <p className="text-neutral-600 text-sm">Explanation of what&apos;s causing the damp problem</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-neutral-900">Treatment Recommendations</strong>
                    <p className="text-neutral-600 text-sm">Detailed specification of recommended remedial work</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-neutral-900">Cost Estimate</strong>
                    <p className="text-neutral-600 text-sm">Clear pricing for recommended treatments</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 border border-neutral-200">
              <h3 className="text-xl font-bold mb-6">Survey Pricing</h3>
              <div className="space-y-4">
                <div className="p-4 bg-secondary-50 border border-secondary-200 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-secondary-900">Free Assessment</span>
                      <p className="text-sm text-secondary-700">Initial visit for straightforward cases</p>
                    </div>
                    <span className="text-2xl font-bold text-secondary-700">FREE</span>
                  </div>
                </div>
                <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-neutral-900">Standard Survey</span>
                      <p className="text-sm text-neutral-600">Comprehensive survey with report</p>
                    </div>
                    <span className="text-2xl font-bold text-primary-700">£150-£300</span>
                  </div>
                </div>
                <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-neutral-900">Commercial Survey</span>
                      <p className="text-sm text-neutral-600">Larger properties, multiple issues</p>
                    </div>
                    <span className="text-2xl font-bold text-primary-700">£350-£600</span>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-neutral-500">
                Survey fee is deducted from treatment costs if you proceed with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        faqs={faqData.survey}
        title="Damp Survey FAQs"
        description="Common questions about our damp survey service."
      />

      {/* Final CTA */}
      <CTABanner
        title="Book Your Damp Survey Today"
        description="Get an accurate diagnosis from our PCA-qualified surveyors. We'll identify the true cause of your damp problem and recommend the right solution."
      />
    </>
  );
}
