import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FAQ } from "@/components/ui/FAQ";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { siteData, locationData } from "@/data/siteData";

const location = locationData["seven-kings"];

export const metadata: Metadata = {
  title: "Damp Proofing Seven Kings | Rising Damp Treatment IG3",
  description: `Expert damp proofing services in Seven Kings, Essex (${location.postcode}). Specialists in rising damp, condensation, and basement waterproofing. Local team, 20-year guarantee. Free surveys. Call today!`,
  alternates: {
    canonical: "/rising-damp/locations/seven-kings",
  },
  openGraph: {
    title: "Damp Proofing Seven Kings | Rising Damp Treatment IG3",
    description: `Expert damp proofing services in Seven Kings, Essex. Local specialists covering ${location.postcodesCovered.join(", ")} postcodes. Free surveys available.`,
    url: "/rising-damp/locations/seven-kings",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Rising Damp", url: "/rising-damp" },
  { name: "Locations", url: "/rising-damp/locations/seven-kings" },
  { name: "Seven Kings", url: "/rising-damp/locations/seven-kings" },
];

const localFaqs = [
  {
    question: "Do you cover Seven Kings and the IG3 postcode area?",
    answer: "Yes, Seven Kings is at the heart of our service area. We cover all IG3 postcodes and the surrounding areas within a 15-mile radius, including Ilford, Goodmayes, Chadwell Heath, and Barking."
  },
  {
    question: "How quickly can you attend a property in Seven Kings?",
    answer: "Being based locally, we can usually arrange a survey within 2-3 working days for Seven Kings properties. For emergencies, we offer same-day call-out where possible."
  },
  {
    question: "Are Seven Kings properties prone to rising damp?",
    answer: "Many Seven Kings properties, particularly the 1930s semi-detached houses and Victorian terraces, can be susceptible to rising damp if the original DPC has failed or been bridged. The clay-heavy London soil in the area can also contribute to damp problems."
  },
  {
    question: "Do you offer free surveys in Seven Kings?",
    answer: "Yes, we offer free initial assessments for straightforward cases in Seven Kings. For comprehensive surveys with detailed reports, fees start from £150, which is deducted from any treatment costs if you proceed."
  },
];

export default function SevenKingsPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Damp Proofing Services in Seven Kings"
        serviceDescription={`Professional damp proofing and rising damp treatment in Seven Kings, Essex. Covering ${location.postcodesCovered.join(", ")} postcodes with 20-year guarantee.`}
        serviceUrl="/rising-damp/locations/seven-kings"
        priceRange="£800 - £3,500"
      />

      {/* Hero Section */}
      <section className="gradient-hero py-16 lg:py-24">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <svg className="w-4 h-4 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-white/90 text-sm font-medium">
                Serving {location.name} &amp; Surrounding Areas
              </span>
            </div>
            <h1 className="text-white mb-6">
              Damp Proofing Services in {location.name}, Essex
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              {location.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${siteData.business.phone.replace(/\s/g, "")}`}
                className="btn btn-lg bg-white text-primary-700 hover:bg-neutral-100"
              >
                Call: {siteData.business.phone}
              </a>
              <Link href="/contact" className="btn btn-lg bg-accent-500 text-white hover:bg-accent-600">
                Book Free Survey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6">Damp Proofing Experts in {location.name}</h2>
              <p className="text-neutral-600 mb-4">
                As local damp proofing specialists based in {location.name}, we have extensive
                experience treating damp problems in properties throughout the {location.postcode} area
                and beyond. Our team understands the unique characteristics of homes in this
                part of Essex and the common damp issues they face.
              </p>
              <p className="text-neutral-600 mb-6">
                {location.propertyTypes}
              </p>
              <p className="text-neutral-600 mb-6">
                {location.commonIssues}
              </p>

              <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
                <h3 className="font-bold text-primary-900 mb-3">Areas We Cover from {location.name}</h3>
                <p className="text-primary-800 text-sm mb-4">
                  We provide damp proofing services throughout {location.name} and the surrounding
                  areas, including:
                </p>
                <div className="flex flex-wrap gap-2">
                  {siteData.serviceArea.locations.slice(0, 8).map((loc) => (
                    <span
                      key={loc.slug}
                      className="px-3 py-1 bg-white rounded-full text-sm text-primary-700 border border-primary-200"
                    >
                      {loc.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              {/* Service Area Map Placeholder */}
              <div className="bg-neutral-100 rounded-xl p-8 mb-6">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-primary-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-primary-700 font-semibold">Service Area Map</p>
                    <p className="text-primary-600 text-sm">15-mile radius from {location.name}</p>
                  </div>
                </div>
              </div>

              {/* Local Landmarks */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200">
                <h3 className="font-bold text-neutral-900 mb-4">Local Landmarks We Serve Near</h3>
                <ul className="space-y-2">
                  {location.landmarks.map((landmark, index) => (
                    <li key={index} className="flex items-center gap-2 text-neutral-600">
                      <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {landmark}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Area */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-center mb-4">Our Damp Proofing Services in {location.name}</h2>
          <p className="text-lg text-neutral-600 text-center max-w-3xl mx-auto mb-12">
            We offer a complete range of damp diagnosis and treatment services to homeowners
            and landlords in {location.name} and the surrounding {location.postcode} area.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.services.map((service) => (
              <Link key={service.id} href={`/${service.slug}`} className="group">
                <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200 hover:border-primary-300 hover:shadow-xl transition-all h-full">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4">{service.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary-700">{service.priceRange}</span>
                    <span className="text-primary-600 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Learn more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Service */}
      <section className="section-padding bg-accent-500">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">24/7 Emergency Damp Service in {location.name}</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Discovered a serious damp problem or water ingress? Our emergency team can
            respond quickly to urgent situations in {location.name} and surrounding areas.
          </p>
          <a
            href={`tel:${siteData.business.phone.replace(/\s/g, "")}`}
            className="btn btn-lg bg-white text-accent-700 hover:bg-neutral-100"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Emergency Call: {siteData.business.phone}
          </a>
        </div>
      </section>

      {/* Postcodes Covered */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Postcodes We Cover</h2>
            <p className="text-neutral-600 mb-8">
              We provide damp proofing services throughout the following postcode areas
              from our base in {location.name}:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {siteData.serviceArea.postcodes.map((postcode) => (
                <span
                  key={postcode}
                  className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg font-medium border border-primary-200"
                >
                  {postcode}
                </span>
              ))}
            </div>
            <p className="text-neutral-500 text-sm">
              Not sure if we cover your area? <Link href="/contact" className="text-primary-600 hover:underline">Contact us</Link> to check.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Why Choose a Local {location.name} Damp Specialist?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Fast Response</h3>
              <p className="text-neutral-600 text-sm">
                Same-day surveys available. No long waits for a local callout.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Local Knowledge</h3>
              <p className="text-neutral-600 text-sm">
                We know {location.name} properties and their common damp issues.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Local Reputation</h3>
              <p className="text-neutral-600 text-sm">
                Trusted by homeowners throughout {location.name} and Essex.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Guaranteed Work</h3>
              <p className="text-neutral-600 text-sm">
                20-year guarantee on all damp proofing treatments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        faqs={localFaqs}
        title={`Damp Proofing FAQs for ${location.name}`}
        description={`Common questions about our damp proofing services in ${location.name} and the ${location.postcode} area.`}
      />

      {/* Nearby Locations */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-8">Other Areas We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {siteData.serviceArea.locations
              .filter((loc) => loc.slug !== "seven-kings")
              .slice(0, 4)
              .map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/rising-damp/locations/${loc.slug}`}
                  className="bg-white rounded-lg p-4 text-center shadow-sm border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-neutral-900">{loc.name}</h3>
                  <p className="text-sm text-neutral-500">{loc.postcode}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        title={`Get Your Free Damp Survey in ${location.name}`}
        description={`Book a free, no-obligation survey with our local ${location.name} team. We'll diagnose your damp problem and provide a clear solution.`}
      />
    </>
  );
}
