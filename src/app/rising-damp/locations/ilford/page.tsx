import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FAQ } from "@/components/ui/FAQ";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { siteData, locationData } from "@/data/siteData";

const location = locationData["ilford"];

export const metadata: Metadata = {
  title: "Damp Proofing Ilford | Rising Damp Treatment IG1, IG2, IG6",
  description: `Expert damp proofing services in Ilford, Essex (${location.postcodesCovered.join(", ")}). Specialists in rising damp, condensation, and basement waterproofing. Local team, 20-year guarantee. Free surveys. Call today!`,
  alternates: {
    canonical: "/rising-damp/locations/ilford",
  },
  openGraph: {
    title: "Damp Proofing Ilford | Rising Damp Treatment IG1, IG2, IG6",
    description: `Expert damp proofing services in Ilford, Essex. Local specialists covering ${location.postcodesCovered.join(", ")} postcodes. Free surveys available.`,
    url: "/rising-damp/locations/ilford",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Rising Damp", url: "/rising-damp" },
  { name: "Locations", url: "/rising-damp/locations/seven-kings" },
  { name: "Ilford", url: "/rising-damp/locations/ilford" },
];

const localFaqs = [
  {
    question: "Do you cover all of Ilford including IG1, IG2, and IG6?",
    answer: `Yes, we cover the entire Ilford area including all ${location.postcodesCovered.join(", ")} postcodes. From Ilford town centre to Gants Hill and beyond, we provide comprehensive damp proofing services throughout.`
  },
  {
    question: "What types of properties in Ilford are most prone to damp?",
    answer: "Ilford has diverse housing stock. Victorian terraces near the town centre often suffer from rising damp due to failed DPCs. 1930s semis may have bridged DPCs from patio installations. Modern flats frequently experience condensation issues. We're experienced with all property types in the area."
  },
  {
    question: "How soon can you survey a property in Ilford?",
    answer: "We typically arrange surveys in Ilford within 2-3 working days. For urgent situations, we can often attend the same day. Our proximity to Ilford means we can respond quickly to enquiries from the area."
  },
  {
    question: "Do you work with landlords and letting agents in Ilford?",
    answer: "Yes, we work extensively with landlords and letting agents across Ilford. We understand the legal requirements around damp in rental properties and can provide certificates and documentation for compliance purposes."
  },
];

export default function IlfordPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Damp Proofing Services in Ilford"
        serviceDescription={`Professional damp proofing and rising damp treatment in Ilford, Essex. Covering ${location.postcodesCovered.join(", ")} postcodes with 20-year guarantee.`}
        serviceUrl="/rising-damp/locations/ilford"
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
                {location.name} is a diverse area with a wide range of property types, from
                Victorian terraces near the town centre to 1930s suburban semis and modern
                apartment developments. Each type presents unique damp challenges that require
                specific expertise to address effectively.
              </p>
              <p className="text-neutral-600 mb-6">
                {location.propertyTypes}
              </p>
              <p className="text-neutral-600 mb-6">
                {location.commonIssues}
              </p>

              <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
                <h3 className="font-bold text-primary-900 mb-3">Postcodes We Cover in {location.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {location.postcodesCovered.map((postcode) => (
                    <span
                      key={postcode}
                      className="px-3 py-1 bg-white rounded-full text-sm text-primary-700 border border-primary-200 font-medium"
                    >
                      {postcode}
                    </span>
                  ))}
                </div>
                <p className="text-primary-800 text-sm">
                  Plus all surrounding areas within our 15-mile service radius.
                </p>
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
                    <p className="text-primary-700 font-semibold">{location.name} Service Area</p>
                    <p className="text-primary-600 text-sm">{location.postcodesCovered.join(", ")} postcodes</p>
                  </div>
                </div>
              </div>

              {/* Local Landmarks */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200">
                <h3 className="font-bold text-neutral-900 mb-4">Areas We Serve in {location.name}</h3>
                <ul className="space-y-2">
                  {location.landmarks.map((landmark, index) => (
                    <li key={index} className="flex items-center gap-2 text-neutral-600">
                      <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      Near {landmark}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Damp Issues */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-center mb-4">Common Damp Problems in {location.name} Properties</h2>
          <p className="text-lg text-neutral-600 text-center max-w-3xl mx-auto mb-12">
            Different property types in {location.name} face different damp challenges. Here&apos;s
            what we commonly encounter.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Victorian &amp; Edwardian Terraces</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Found near {location.name} town centre, these older properties often have failed
                or absent DPCs, solid walls, and are prone to rising damp and penetrating damp
                through deteriorated pointing.
              </p>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Rising damp from failed DPC</li>
                <li>• Penetrating damp through solid walls</li>
                <li>• Salt damage to plaster</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">1930s Semi-Detached</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Common in residential {location.name}, these homes have cavity walls but may have
                bridged DPCs from patios, raised flower beds, or rendered plinths.
              </p>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Bridged DPC issues</li>
                <li>• Cavity wall problems</li>
                <li>• Condensation in bathrooms</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Modern Flats &amp; Conversions</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Newer developments and converted buildings in {location.name} often suffer from
                condensation due to high insulation levels and inadequate ventilation.
              </p>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>• Severe condensation</li>
                <li>• Black mould growth</li>
                <li>• Inadequate ventilation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-4">Our Damp Proofing Services in {location.name}</h2>
          <p className="text-lg text-neutral-600 text-center max-w-3xl mx-auto mb-12">
            Complete damp diagnosis and treatment services for all property types in {location.name}.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.services.slice(0, 6).map((service) => (
              <Link key={service.id} href={`/${service.slug}`} className="group">
                <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200 hover:border-primary-300 hover:shadow-xl transition-all h-full">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4">{service.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary-700">{service.priceRange}</span>
                    <span className="text-primary-600 text-sm font-medium">Learn more →</span>
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
            Urgent damp problem in {location.name}? Our emergency team provides rapid response
            to serious damp and water ingress situations across the {location.postcodesCovered.join(", ")} area.
          </p>
          <a
            href={`tel:${siteData.business.phone.replace(/\s/g, "")}`}
            className="btn btn-lg bg-white text-accent-700 hover:bg-neutral-100"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Emergency: {siteData.business.phone}
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        faqs={localFaqs}
        title={`Damp Proofing FAQs for ${location.name}`}
        description={`Common questions about our damp proofing services in ${location.name}.`}
      />

      {/* Nearby Locations */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-8">Other Areas We Serve Near {location.name}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {siteData.serviceArea.locations
              .filter((loc) => loc.slug !== "ilford")
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
        description={`Book a free, no-obligation survey with our local team. We'll diagnose your damp problem and provide a clear solution with transparent pricing.`}
      />
    </>
  );
}
