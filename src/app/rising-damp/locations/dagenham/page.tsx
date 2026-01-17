import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FAQ } from "@/components/ui/FAQ";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Rising Damp Treatment Dagenham | Local Damp Proofing Specialists",
  description: "Expert rising damp treatment in Dagenham, East London. Local damp proofing specialists serving RM8, RM9, RM10 areas. Free surveys, 20-year guarantees. Call today!",
  alternates: {
    canonical: "/rising-damp/locations/dagenham",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Rising Damp", url: "/rising-damp" },
  { name: "Locations", url: "/rising-damp/locations" },
  { name: "Dagenham", url: "/rising-damp/locations/dagenham" },
];

const faqs = [
  {
    question: "Do you cover all of Dagenham?",
    answer: "Yes, we cover all areas of Dagenham including Becontree, Dagenham East, Dagenham Heathway, Rush Green, and Chadwell Heath. We're local to the area and can attend quickly for surveys and treatments."
  },
  {
    question: "Why is rising damp common in Dagenham?",
    answer: "Dagenham has a high proportion of 1920s-1930s housing built during the Becontree Estate development - one of the largest council housing projects in the world. Many of these properties have original DPCs that have now reached the end of their effective lifespan after 90+ years."
  },
  {
    question: "How much does rising damp treatment cost in Dagenham?",
    answer: "For a typical Dagenham semi-detached or terraced property, rising damp treatment including DPC injection and replastering typically costs £2,000-£4,000. We provide exact fixed-price quotes after our free survey."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we understand that damp treatment is often an unexpected expense. We offer interest-free payment plans for larger projects, allowing you to spread the cost over 6-12 months. Ask about this during your survey."
  },
];

const localAreas = [
  "Becontree",
  "Dagenham East",
  "Dagenham Heathway",
  "Rush Green",
  "Chadwell Heath",
  "Becontree Heath",
  "Parsloes",
  "Village Ward",
];

const postcodes = ["RM8", "RM9", "RM10"];

export default function DagenhamRisingDampPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Rising Damp Treatment Dagenham"
        serviceDescription="Professional rising damp treatment in Dagenham, East London. Local specialists serving RM8, RM9, RM10 with free surveys and 20-year guarantees."
        serviceUrl="/rising-damp/locations/dagenham"
        priceRange="£1,500 - £4,500"
      />

      <section className="gradient-hero py-16 lg:py-24">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl">
            <h1 className="text-white mb-6">Rising Damp Treatment in Dagenham</h1>
            <p className="text-xl text-primary-100 mb-8">
              Local damp proofing experts serving Dagenham and the Becontree Estate area.
              Specialists in treating the 1920s-30s housing stock common to this area.
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
              <h2 className="mb-6">Dagenham&apos;s Rising Damp Challenge</h2>
              <p className="text-neutral-600 mb-4">
                Dagenham is home to the famous Becontree Estate, built between 1921 and 1935
                as the largest public housing development in the world. This means a huge
                proportion of Dagenham&apos;s housing stock is now 90-100 years old - and the
                original damp proof courses are reaching the end of their lifespan.
              </p>
              <p className="text-neutral-600 mb-4">
                The semi-detached and terraced houses that characterise Becontree were built
                with bitumen felt or slate DPCs. After decades of service, these materials
                break down, allowing ground moisture to rise through the walls.
              </p>
              <p className="text-neutral-600 mb-6">
                Our team has extensive experience with Dagenham&apos;s inter-war housing. We
                understand the construction methods used and the most effective treatment
                approaches for these property types.
              </p>

              <div className="bg-secondary-50 border border-secondary-200 rounded-xl p-6">
                <h3 className="font-bold text-secondary-900 mb-3">Becontree Estate Properties</h3>
                <p className="text-secondary-800 text-sm mb-3">
                  If you live in a Becontree Estate property built 1921-1935, look out for:
                </p>
                <ul className="space-y-2 text-secondary-800 text-sm">
                  <li>• Damp patches on ground floor walls up to 1 metre high</li>
                  <li>• White salt deposits on internal walls</li>
                  <li>• Peeling wallpaper or bubbling paint at low level</li>
                  <li>• Musty smell in ground floor rooms</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="bg-neutral-100 rounded-xl p-6 mb-6">
                <h3 className="font-bold mb-4">Areas We Cover in Dagenham</h3>
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
                  We also serve Barking, Romford, Hornchurch, and surrounding Essex areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-center mb-4">Why Dagenham Properties Get Rising Damp</h2>
          <p className="text-lg text-neutral-600 text-center max-w-3xl mx-auto mb-12">
            Understanding the causes helps you make informed decisions about treatment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Ageing DPCs",
                desc: "Original 1920s-30s DPCs have exceeded their design lifespan and are failing",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              {
                title: "Bridged DPCs",
                desc: "Garden alterations, patios, or raised beds can bridge the existing DPC",
                icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z"
              },
              {
                title: "High Water Table",
                desc: "Parts of Dagenham have high groundwater levels that increase pressure on DPCs",
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              },
              {
                title: "Poor Ventilation",
                desc: "Blocked air bricks and solid floors without membranes contribute to damp",
                icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
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
          <div className="bg-primary-900 text-white rounded-xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-white mb-4">Complete Damp Proofing Service</h2>
                <p className="text-primary-200 mb-6">
                  Our full service for Dagenham properties includes:
                </p>
                <ul className="space-y-3 text-primary-100">
                  {[
                    "Free survey with detailed moisture readings",
                    "Written report explaining findings and recommendations",
                    "Fixed-price quote with no hidden extras",
                    "DPC injection using BBA-approved silicone cream",
                    "Removal of salt-contaminated plaster",
                    "Replastering with renovating plaster specification",
                    "20-year insurance-backed guarantee",
                    "Certificate for your property records",
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
                <div className="bg-primary-800 rounded-xl p-6 mb-6">
                  <p className="text-primary-200 text-sm mb-2">Typical Dagenham treatment cost:</p>
                  <p className="text-3xl font-bold text-white">£2,000 - £4,000</p>
                  <p className="text-primary-300 text-sm mt-2">For semi-detached properties</p>
                </div>
                <Link href="/contact" className="btn btn-lg bg-accent-500 text-white hover:bg-accent-600">
                  Get Your Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-center mb-8">What Our Dagenham Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-600 mb-4">
                &quot;Had rising damp in our 1930s Becontree semi for years. These guys diagnosed
                it properly and did a thorough job. Two years on and it&apos;s still bone dry.&quot;
              </p>
              <p className="font-semibold">Michael T., Becontree</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-600 mb-4">
                &quot;Very professional from survey to completion. Explained everything clearly
                and the quote was exactly what we paid. Would definitely recommend to anyone
                in Dagenham with damp problems.&quot;
              </p>
              <p className="font-semibold">Sarah J., Dagenham Heathway</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} title="Rising Damp in Dagenham - FAQs" />

      <CTABanner
        title="Rising Damp in Your Dagenham Home?"
        description="Book a free survey today. Local team, honest advice, guaranteed results."
      />
    </>
  );
}
