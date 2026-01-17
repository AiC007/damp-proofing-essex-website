import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FAQ } from "@/components/ui/FAQ";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Rising Damp Treatment Barking | Local Damp Proofing Specialists",
  description: "Expert rising damp treatment in Barking, East London. Local damp proofing specialists serving IG11 and surrounding areas. Free surveys, 20-year guarantees. Call today!",
  alternates: {
    canonical: "/rising-damp/locations/barking",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Rising Damp", url: "/rising-damp" },
  { name: "Locations", url: "/rising-damp/locations" },
  { name: "Barking", url: "/rising-damp/locations/barking" },
];

const faqs = [
  {
    question: "Do you cover all of Barking?",
    answer: "Yes, we cover all areas of Barking including Barking Town Centre, Thames View, Upney, Eastbury, and surrounding streets. We also cover nearby areas including Ilford, Dagenham, and East Ham."
  },
  {
    question: "How quickly can you survey my Barking property?",
    answer: "We typically offer survey appointments within 3-5 working days for Barking properties. For urgent cases with visible water ingress or significant damage, we offer priority appointments and can often attend within 24-48 hours."
  },
  {
    question: "What does a rising damp survey in Barking involve?",
    answer: "We take multiple moisture readings throughout your property using professional-grade meters, inspect the external ground levels and DPC position, check for salt contamination, and examine the overall condition. The survey typically takes 45-60 minutes and we explain our findings as we go."
  },
  {
    question: "Are your treatments guaranteed?",
    answer: "Yes, all our rising damp treatments come with a 20-year guarantee. For Barking properties, this guarantee is insurance-backed, meaning it remains valid even if our company were to cease trading. We also provide certification for your property records."
  },
];

const localAreas = [
  "Barking Town Centre",
  "Thames View",
  "Upney",
  "Eastbury",
  "Gascoigne Estate",
  "Abbey Road",
  "Longbridge Road",
  "Ripple Road",
];

const postcodes = ["IG11"];

export default function BarkingRisingDampPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Rising Damp Treatment Barking"
        serviceDescription="Professional rising damp treatment in Barking, East London. Local specialists serving IG11 with free surveys and 20-year guarantees."
        serviceUrl="/rising-damp/locations/barking"
        priceRange="£1,500 - £4,500"
      />

      <section className="gradient-hero py-16 lg:py-24">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl">
            <h1 className="text-white mb-6">Rising Damp Treatment in Barking</h1>
            <p className="text-xl text-primary-100 mb-8">
              Local damp proofing specialists serving Barking and surrounding East London areas.
              Expert diagnosis and guaranteed treatment for rising damp problems.
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
              <h2 className="mb-6">Rising Damp Specialists in Barking</h2>
              <p className="text-neutral-600 mb-4">
                Barking has a rich mix of property types, from Victorian terraces near the town
                centre to 1930s semis and post-war housing estates. Many of these properties
                are susceptible to rising damp due to failed or absent damp proof courses.
              </p>
              <p className="text-neutral-600 mb-4">
                Our team regularly works throughout Barking, from the older properties around
                Abbey Road and the Town Centre to the housing stock in Thames View and Eastbury.
                We understand the local building styles and common damp issues affecting properties
                in the IG11 postcode area.
              </p>
              <p className="text-neutral-600 mb-6">
                As local specialists, we provide prompt service to Barking residents. We offer
                free, no-obligation surveys with honest advice - we&apos;ll only recommend treatment
                if you genuinely have rising damp.
              </p>

              <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
                <h3 className="font-bold text-primary-900 mb-3">Why Choose Us in Barking?</h3>
                <ul className="space-y-2 text-primary-800 text-sm">
                  <li>• Local team based in Essex - quick response times</li>
                  <li>• Experience with Barking&apos;s Victorian and Edwardian properties</li>
                  <li>• Understanding of local ground conditions and building styles</li>
                  <li>• Insurance-backed 20-year guarantees</li>
                  <li>• PCA-qualified surveyors</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="bg-neutral-100 rounded-xl p-6 mb-6">
                <h3 className="font-bold mb-4">Areas We Cover in Barking</h3>
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

              <div className="bg-neutral-100 rounded-xl p-6">
                <h3 className="font-bold mb-4">Postcodes Covered</h3>
                <div className="flex flex-wrap gap-2">
                  {postcodes.map((code, i) => (
                    <span key={i} className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {code}
                    </span>
                  ))}
                </div>
                <p className="text-neutral-500 text-sm mt-4">
                  We also cover nearby areas including Ilford, Dagenham, East Ham, and Becontree.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-center mb-4">Common Damp Issues in Barking Properties</h2>
          <p className="text-lg text-neutral-600 text-center max-w-3xl mx-auto mb-12">
            Different property types in Barking present different damp challenges.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold mb-3">Victorian Terraces</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Older properties around the Town Centre and Abbey Road often have failed or
                missing DPCs. Solid walls and original features require careful treatment.
              </p>
              <p className="text-primary-700 font-semibold text-sm">Common issue: Failed slate DPC</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold mb-3">1930s Semis</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Many semis in Barking have cavity walls with bitumen felt DPCs. These can
                deteriorate over time, or become bridged by raised external ground levels.
              </p>
              <p className="text-primary-700 font-semibold text-sm">Common issue: Bridged DPC</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold mb-3">Council-Built Housing</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Post-war housing stock in areas like Thames View and Gascoigne Estate may have
                various DPC types, some of which have reached the end of their lifespan.
              </p>
              <p className="text-primary-700 font-semibold text-sm">Common issue: DPC at end of life</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-primary-900 text-white rounded-xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-white mb-4">Our Rising Damp Treatment Process</h2>
                <p className="text-primary-200 mb-6">
                  We follow the same professional process for every Barking property:
                </p>
                <ol className="space-y-3 text-primary-100">
                  <li className="flex items-start gap-3">
                    <span className="bg-secondary-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <span>Free survey with calibrated moisture readings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-secondary-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <span>Written report and fixed-price quotation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-secondary-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <span>DPC injection using BBA-approved products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-secondary-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                    <span>Replastering with salt-resistant specification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-secondary-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                    <span>20-year insurance-backed guarantee</span>
                  </li>
                </ol>
              </div>
              <div className="text-center lg:text-right">
                <p className="text-primary-200 mb-4">Ready to solve your damp problem?</p>
                <Link href="/contact" className="btn btn-lg bg-accent-500 text-white hover:bg-accent-600">
                  Book Free Survey in Barking
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-center mb-8">Typical Costs for Barking Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 className="font-bold mb-2">Terraced House</h3>
              <p className="text-neutral-600 text-sm mb-4">Front and/or rear walls</p>
              <p className="text-2xl font-bold text-primary-700">£1,500 - £2,500</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border-2 border-primary-500">
              <div className="bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-full inline-block mb-2">MOST COMMON</div>
              <h3 className="font-bold mb-2">Semi-Detached</h3>
              <p className="text-neutral-600 text-sm mb-4">Multiple affected walls</p>
              <p className="text-2xl font-bold text-primary-700">£2,500 - £4,000</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <h3 className="font-bold mb-2">Detached House</h3>
              <p className="text-neutral-600 text-sm mb-4">Full perimeter if needed</p>
              <p className="text-2xl font-bold text-primary-700">£3,500 - £6,000+</p>
            </div>
          </div>
          <p className="text-center text-neutral-500 mt-6">
            Prices include DPC injection and replastering. Exact quotes provided after survey.
          </p>
        </div>
      </section>

      <FAQ faqs={faqs} title="Rising Damp in Barking - FAQs" />

      <CTABanner
        title="Need Rising Damp Treatment in Barking?"
        description="Book a free survey with our local team. We'll diagnose the problem and provide an honest quote."
      />
    </>
  );
}
