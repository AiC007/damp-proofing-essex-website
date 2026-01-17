import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FAQ } from "@/components/ui/FAQ";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Rising Damp Treatment Romford | Local Damp Proofing Specialists",
  description: "Expert rising damp treatment in Romford, Essex. Local damp proofing specialists serving RM1, RM2, RM3, RM7 areas. Free surveys, 20-year guarantees. Call today!",
  alternates: {
    canonical: "/rising-damp/locations/romford",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Rising Damp", url: "/rising-damp" },
  { name: "Locations", url: "/rising-damp/locations" },
  { name: "Romford", url: "/rising-damp/locations/romford" },
];

const faqs = [
  {
    question: "Do you cover all of Romford and Havering?",
    answer: "Yes, we cover all of Romford and the wider Havering area including Hornchurch, Upminster, Harold Wood, Harold Hill, Collier Row, Gidea Park, and Emerson Park. Our team is local to Essex and can respond quickly."
  },
  {
    question: "How do I know if I have rising damp or just condensation?",
    answer: "Rising damp typically shows as a 'tide mark' up to about 1 metre on walls, often with white salt deposits. Condensation usually affects cold spots like corners and window reveals. We provide a proper diagnosis during our free survey - many 'rising damp' cases are actually condensation."
  },
  {
    question: "Will I need to move out during treatment?",
    answer: "No, you can stay in your home throughout the treatment. We work room by room, and while there will be some dust and disruption during replastering, most families continue living normally. We clean up each area as we complete it."
  },
  {
    question: "How long does the work take?",
    answer: "For a typical Romford semi, the DPC injection takes 1 day. Replastering depends on the number of affected walls but usually takes 2-4 days. We schedule work to minimise disruption and complete everything as efficiently as possible."
  },
];

const localAreas = [
  "Romford Town Centre",
  "Gidea Park",
  "Harold Wood",
  "Harold Hill",
  "Collier Row",
  "Chase Cross",
  "Rise Park",
  "Havering-atte-Bower",
];

const nearbyAreas = [
  "Hornchurch",
  "Upminster",
  "Emerson Park",
  "Elm Park",
  "Rainham",
  "Brentwood",
];

const postcodes = ["RM1", "RM2", "RM3", "RM7"];

export default function RomfordRisingDampPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Rising Damp Treatment Romford"
        serviceDescription="Professional rising damp treatment in Romford, Essex. Local specialists serving RM1, RM2, RM3, RM7 with free surveys and 20-year guarantees."
        serviceUrl="/rising-damp/locations/romford"
        priceRange="£1,500 - £5,000"
      />

      <section className="gradient-hero py-16 lg:py-24">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl">
            <h1 className="text-white mb-6">Rising Damp Treatment in Romford</h1>
            <p className="text-xl text-primary-100 mb-8">
              Local damp proofing experts serving Romford and the wider Havering area.
              From Victorian terraces to modern estates, we treat all property types.
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
              <h2 className="mb-6">Rising Damp Experts in Romford</h2>
              <p className="text-neutral-600 mb-4">
                Romford and the surrounding Havering borough has a diverse housing stock,
                from period properties in Gidea Park to 1930s semis in Harold Wood and
                more modern developments throughout. Each property type presents different
                damp proofing challenges.
              </p>
              <p className="text-neutral-600 mb-4">
                Our team regularly works across Romford, providing professional damp surveys
                and treatment for homeowners, landlords, and property developers. We&apos;re
                particularly experienced with the substantial Victorian and Edwardian housing
                around Gidea Park and the older parts of Romford town.
              </p>
              <p className="text-neutral-600 mb-6">
                Whether your property is a listed Victorian villa or a 1980s townhouse,
                we&apos;ll provide an honest assessment of your damp problem and recommend
                appropriate treatment - or tell you if it&apos;s not rising damp at all.
              </p>

              <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
                <h3 className="font-bold text-primary-900 mb-3">Romford Service Highlights</h3>
                <ul className="space-y-2 text-primary-800 text-sm">
                  <li>• Free surveys within 3-5 working days</li>
                  <li>• Experience with Romford&apos;s varied property types</li>
                  <li>• Understanding of local building regulations</li>
                  <li>• 20-year insurance-backed guarantees</li>
                  <li>• PCA-qualified surveyors and installers</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="bg-neutral-100 rounded-xl p-6 mb-6">
                <h3 className="font-bold mb-4">Areas We Cover in Romford</h3>
                <div className="grid grid-cols-2 gap-2">
                  {localAreas.map((area, i) => (
                    <div key={i} className="flex items-center gap-2 text-neutral-600 text-sm">
                      <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {area}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-neutral-100 rounded-xl p-6 mb-6">
                <h3 className="font-bold mb-4">Nearby Areas Also Covered</h3>
                <div className="grid grid-cols-2 gap-2">
                  {nearbyAreas.map((area, i) => (
                    <div key={i} className="flex items-center gap-2 text-neutral-600 text-sm">
                      <svg className="w-4 h-4 text-secondary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {area}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-neutral-100 rounded-xl p-6">
                <h3 className="font-bold mb-4">Postcodes Covered</h3>
                <div className="flex flex-wrap gap-2">
                  {postcodes.map((code, i) => (
                    <span key={i} className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {code}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-center mb-4">Property Types in Romford</h2>
          <p className="text-lg text-neutral-600 text-center max-w-3xl mx-auto mb-12">
            We&apos;re experienced with all the property types found across Romford and Havering.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold mb-3">Victorian & Edwardian</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Period properties in Gidea Park and central Romford. Often solid walls
                with original slate or lead DPCs that may have failed.
              </p>
              <p className="text-primary-700 font-semibold text-sm">Treatment from £2,500</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold mb-3">1930s Semis</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Classic inter-war housing throughout Harold Wood, Collier Row, and
                surrounding areas. Common DPC issues after 90 years.
              </p>
              <p className="text-primary-700 font-semibold text-sm">Treatment from £2,000</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold mb-3">Post-War Housing</h3>
              <p className="text-neutral-600 text-sm mb-4">
                1950s-60s housing with various DPC types. Some areas had experimental
                construction methods that can cause unique damp issues.
              </p>
              <p className="text-primary-700 font-semibold text-sm">Treatment from £1,800</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold mb-3">Modern Properties</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Even newer properties can develop rising damp if the DPC was incorrectly
                installed or has been bridged by later work.
              </p>
              <p className="text-primary-700 font-semibold text-sm">Treatment from £1,500</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Our Complete Romford Service</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="font-bold text-primary-900 mb-4">Survey & Diagnosis</h3>
                <ul className="space-y-3 text-primary-800 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Calibrated electronic moisture readings
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    External inspection of DPC and ground levels
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Salt analysis where required
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Written report with photos
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Fixed-price quotation
                  </li>
                </ul>
              </div>

              <div className="bg-secondary-50 rounded-xl p-6">
                <h3 className="font-bold text-secondary-900 mb-4">Treatment & Guarantee</h3>
                <ul className="space-y-3 text-secondary-800 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-secondary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    BBA-approved DPC injection
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-secondary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Removal of contaminated plaster
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-secondary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Salt-resistant replastering
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-secondary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    20-year guarantee included
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-secondary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Insurance-backed for peace of mind
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-white mb-4">Gidea Park & Conservation Areas</h2>
              <p className="text-primary-200 mb-6">
                Romford is home to Gidea Park, an important garden suburb with many listed and
                locally listed Arts and Crafts properties. We have experience working sensitively
                in conservation areas and on period properties where maintaining original features
                is important.
              </p>
              <p className="text-primary-200">
                Our treatment methods are suitable for listed buildings and we can advise on any
                special considerations for your property. Where required, we work with conservation
                officers to ensure treatments meet planning requirements.
              </p>
            </div>
            <div className="text-center lg:text-right">
              <Link href="/contact" className="btn btn-lg bg-accent-500 text-white hover:bg-accent-600">
                Discuss Your Property
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} title="Rising Damp in Romford - FAQs" />

      <CTABanner
        title="Need Rising Damp Treatment in Romford?"
        description="Book a free survey with our local Essex team. Expert diagnosis, honest advice, guaranteed results."
      />
    </>
  );
}
