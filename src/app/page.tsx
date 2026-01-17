import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustSignals } from "@/components/ui/TrustSignals";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { AreasServed } from "@/components/sections/AreasServed";
import { FAQ } from "@/components/ui/FAQ";
import { CTABanner } from "@/components/ui/CTABanner";
import { faqData } from "@/data/siteData";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Damp Proofing Essex | Rising Damp Treatment Seven Kings | Essex Damp Solutions",
  description: "Expert damp proofing services in Essex. Specialists in rising damp treatment, condensation, penetrating damp, and basement waterproofing. Free surveys in Seven Kings, Ilford, Barking & surrounding areas. 20-year guarantee. Call today!",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Trust Signals */}
      <TrustSignals showCertifications />

      {/* Services Overview */}
      <ServicesOverview />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Process Steps */}
      <ProcessSteps />

      {/* Common Damp Problems Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Understanding Damp Problems in Essex Homes</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Damp can affect any property, but Essex homes face particular challenges due to
              local soil conditions and the age of housing stock. Understanding the type of
              damp affecting your property is the first step to solving it.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Rising Damp */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-200">
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <svg className="w-24 h-24 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Rising Damp</h3>
                <p className="text-neutral-600 mb-4">
                  Rising damp occurs when groundwater travels up through walls via capillary action.
                  Look for tide marks up to 1.2m high, salt deposits, and peeling decorations.
                </p>
                <h4 className="font-semibold text-sm text-neutral-900 mb-2">Warning Signs:</h4>
                <ul className="text-sm text-neutral-600 space-y-1 mb-4">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Tide marks on walls up to 1.2m high</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>White crystalline salt deposits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Musty smell in ground floor rooms</span>
                  </li>
                </ul>
                <Link href="/rising-damp" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center gap-1">
                  Learn about rising damp treatment
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Penetrating Damp */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-200">
              <div className="h-48 bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center">
                <svg className="w-24 h-24 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Penetrating Damp</h3>
                <p className="text-neutral-600 mb-4">
                  Penetrating damp enters through external walls due to defects like cracked render,
                  damaged pointing, or faulty guttering. It worsens during wet weather.
                </p>
                <h4 className="font-semibold text-sm text-neutral-900 mb-2">Warning Signs:</h4>
                <ul className="text-sm text-neutral-600 space-y-1 mb-4">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Damp patches that spread in wet weather</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Can appear at any height on walls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Visible defects on exterior walls</span>
                  </li>
                </ul>
                <Link href="/penetrating-damp" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center gap-1">
                  Learn about penetrating damp solutions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Condensation */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-200">
              <div className="h-48 bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center">
                <svg className="w-24 h-24 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Condensation</h3>
                <p className="text-neutral-600 mb-4">
                  The most common form of dampness in UK homes. Condensation occurs when moist air
                  meets cold surfaces, often leading to black mould growth.
                </p>
                <h4 className="font-semibold text-sm text-neutral-900 mb-2">Warning Signs:</h4>
                <ul className="text-sm text-neutral-600 space-y-1 mb-4">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Water droplets on windows and walls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Black mould in corners and behind furniture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Worse in winter and in bathrooms/kitchens</span>
                  </li>
                </ul>
                <Link href="/condensation" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center gap-1">
                  Learn about condensation solutions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-neutral-600 mb-4">
              Not sure what type of damp you have? Our expert surveyors can diagnose the problem accurately.
            </p>
            <Link href="/rising-damp/diagnosis" className="btn-primary">
              Read Our Damp Diagnosis Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <AreasServed />

      {/* Blog/Resources Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Helpful Damp Resources</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Free guides and advice to help you understand and tackle damp problems in your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/blog/rising-damp-vs-condensation" className="group">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-200 h-full hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center p-6">
                  <h3 className="text-xl font-bold text-white text-center">Rising Damp vs Condensation: How to Tell the Difference</h3>
                </div>
                <div className="p-6">
                  <p className="text-neutral-600 mb-4">
                    Learn the key differences between rising damp and condensation, including visual signs,
                    diagnostic tests, and why getting it right matters for effective treatment.
                  </p>
                  <span className="text-primary-600 font-medium group-hover:text-primary-700 inline-flex items-center gap-1">
                    Read the guide
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </article>
            </Link>

            <Link href="/cost-guide" className="group">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-200 h-full hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-secondary-500 to-secondary-700 flex items-center justify-center p-6">
                  <h3 className="text-xl font-bold text-white text-center">Damp Proofing Cost Guide 2026</h3>
                </div>
                <div className="p-6">
                  <p className="text-neutral-600 mb-4">
                    Transparent pricing information for all damp proofing treatments. Know what to expect
                    before you book, with no hidden costs or surprises.
                  </p>
                  <span className="text-primary-600 font-medium group-hover:text-primary-700 inline-flex items-center gap-1">
                    View pricing guide
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </article>
            </Link>

            <Link href="/damp-survey" className="group">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-200 h-full hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center p-6">
                  <h3 className="text-xl font-bold text-white text-center">What Happens During a Damp Survey?</h3>
                </div>
                <div className="p-6">
                  <p className="text-neutral-600 mb-4">
                    Everything you need to know about our professional damp surveys, including what
                    we check, equipment used, and what your report will include.
                  </p>
                  <span className="text-primary-600 font-medium group-hover:text-primary-700 inline-flex items-center gap-1">
                    Learn about surveys
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        faqs={faqData.general}
        title="Frequently Asked Questions"
        description="Answers to the most common questions about damp proofing services."
      />

      {/* Final CTA */}
      <CTABanner
        title="Ready to Fix Your Damp Problem?"
        description="Book a free, no-obligation survey today. Our expert team will diagnose the issue and provide a clear solution with transparent pricing."
      />
    </>
  );
}
