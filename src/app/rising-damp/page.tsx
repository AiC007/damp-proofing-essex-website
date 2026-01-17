import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FAQ } from "@/components/ui/FAQ";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { HowToSchema } from "@/components/schema/HowToSchema";
import { siteData, faqData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Rising Damp Treatment Essex | Expert Rising Damp Solutions",
  description: "Professional rising damp treatment in Essex. We diagnose and fix rising damp problems permanently with chemical DPC injection. 20-year guarantee. Free surveys in Seven Kings, Ilford, Barking. Call today!",
  alternates: {
    canonical: "/rising-damp",
  },
  openGraph: {
    title: "Rising Damp Treatment Essex | Expert Rising Damp Solutions",
    description: "Professional rising damp treatment in Essex. We diagnose and fix rising damp problems permanently with chemical DPC injection. 20-year guarantee.",
    url: "/rising-damp",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Rising Damp Treatment", url: "/rising-damp" },
];

const treatmentSteps = [
  {
    name: "Initial Assessment",
    text: "Our surveyor conducts a thorough inspection using professional moisture meters to confirm rising damp and determine the extent of the problem.",
  },
  {
    name: "Remove Affected Plaster",
    text: "Contaminated plaster is removed to a height of at least 300mm above the damp line to expose the masonry for treatment.",
  },
  {
    name: "Drill Injection Holes",
    text: "Holes are drilled at regular intervals along the base of the wall at a precise angle to ensure proper distribution of the DPC fluid.",
  },
  {
    name: "Inject DPC Fluid",
    text: "A silicone-based damp proof course fluid is injected under pressure, creating an impermeable barrier that stops moisture rising.",
  },
  {
    name: "Allow Drying Time",
    text: "The walls are left to dry naturally over 6-12 months. Dehumidifiers can speed this process in severe cases.",
  },
  {
    name: "Re-plaster with Salt-Resistant Plaster",
    text: "Once dry, walls are re-plastered using specialist renovating plaster that resists salt contamination and allows remaining moisture to escape.",
  },
];

export default function RisingDampPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Rising Damp Treatment"
        serviceDescription="Professional rising damp treatment and remediation services in Essex. Chemical DPC injection with 20-year guarantee."
        serviceUrl="/rising-damp"
        priceRange="£1,500 - £3,500"
      />
      <HowToSchema
        name="How Rising Damp is Treated"
        description="Professional rising damp treatment process using chemical damp proof course injection."
        steps={treatmentSteps}
        totalTime="PT2D"
        estimatedCost={{ currency: "GBP", minValue: 1500, maxValue: 3500 }}
      />

      {/* Hero Section */}
      <section className="gradient-hero py-16 lg:py-24">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl">
            <h1 className="text-white mb-6">
              Rising Damp Treatment in Essex
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Expert diagnosis and permanent treatment for rising damp. We fix the root cause
              with modern chemical DPC injection, backed by a 20-year insurance-backed guarantee.
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

      {/* What is Rising Damp */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">What is Rising Damp?</h2>
              <p className="text-neutral-600 mb-4">
                Rising damp is a specific type of dampness that occurs when groundwater travels upward
                through porous building materials like brick, stone, and mortar. This happens through
                a process called capillary action, where water is drawn up through tiny gaps in the
                material, much like water being absorbed by a sponge.
              </p>
              <p className="text-neutral-600 mb-4">
                In a healthy building, a physical damp proof course (DPC) prevents this moisture from
                rising. However, in older properties built before the 1870s, or where the DPC has
                failed, been bridged, or is absent, groundwater can travel up to about 1.2 metres
                into your walls.
              </p>
              <p className="text-neutral-600 mb-6">
                The moisture carries dissolved salts (chlorides and nitrates) from the ground, which
                are deposited in the plaster as the water evaporates. These hygroscopic salts then
                attract more moisture from the air, making the problem progressively worse.
              </p>
              <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-primary-800 mb-3">Key Facts About Rising Damp</h3>
                <ul className="space-y-2 text-primary-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Only affects ground floor walls in direct contact with the ground</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Rarely rises above 1.2 metres (capillary action limit)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Always accompanied by salt deposits (efflorescence)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Consistent throughout the year (unlike condensation)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-neutral-100 rounded-xl p-8 lg:p-12">
              <div className="aspect-square bg-gradient-to-br from-primary-200 to-primary-300 rounded-lg flex items-center justify-center">
                <svg className="w-32 h-32 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <p className="text-center text-neutral-500 mt-4 text-sm">
                Diagram: Rising damp travels up through porous masonry via capillary action
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Identification Guide */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">How to Identify Rising Damp</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              True rising damp has distinctive characteristics that set it apart from other
              types of dampness. Here&apos;s what to look for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sign 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-32 bg-neutral-300 rounded relative mx-auto">
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-primary-400 rounded-b opacity-60"></div>
                    <div className="absolute bottom-16 left-0 right-0 h-1 bg-primary-600"></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Tide Marks</h3>
                <p className="text-neutral-600 text-sm">
                  A horizontal line or &quot;tide mark&quot; on the wall, typically up to 1.2 metres
                  from the floor. This marks the maximum height the moisture has reached and
                  is often the most visible sign of rising damp.
                </p>
              </div>
            </div>

            {/* Sign 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-lg shadow-inner relative">
                  <div className="absolute inset-2 bg-neutral-50 rounded">
                    <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute top-4 right-3 w-3 h-2 bg-white rounded-full"></div>
                    <div className="absolute bottom-3 left-4 w-2 h-3 bg-white rounded-full"></div>
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Salt Deposits (Efflorescence)</h3>
                <p className="text-neutral-600 text-sm">
                  White, crystalline deposits on the wall surface. These are hygroscopic salts
                  carried up by the rising water and left behind when it evaporates. They may
                  appear fluffy or crusty.
                </p>
              </div>
            </div>

            {/* Sign 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center">
                <div className="w-24 h-20 bg-neutral-200 rounded relative">
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-accent-300 to-transparent rounded-b"></div>
                  <div className="absolute bottom-2 left-2 w-6 h-4 bg-accent-200 rounded transform -rotate-6 border-2 border-accent-300"></div>
                  <div className="absolute bottom-3 right-4 w-4 h-3 bg-accent-200 rounded transform rotate-12 border-2 border-accent-300"></div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Peeling Paint &amp; Wallpaper</h3>
                <p className="text-neutral-600 text-sm">
                  Paint bubbling and flaking, or wallpaper peeling away from the wall, typically
                  concentrated in the lower portion of the wall below the tide mark.
                </p>
              </div>
            </div>

            {/* Sign 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center">
                <div className="w-24 h-16 bg-neutral-300 rounded relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-400/40 to-transparent rounded"></div>
                  <div className="absolute bottom-1 left-2 w-4 h-2 bg-secondary-500/30 rounded"></div>
                  <div className="absolute bottom-2 right-6 w-6 h-3 bg-secondary-500/30 rounded"></div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Dark Staining</h3>
                <p className="text-neutral-600 text-sm">
                  Dark, discoloured patches on the lower portion of walls. Unlike condensation
                  staining, this follows the tide mark pattern and doesn&apos;t appear in upper
                  corners or ceilings.
                </p>
              </div>
            </div>

            {/* Sign 5 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-primary-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Musty Smell</h3>
                <p className="text-neutral-600 text-sm">
                  A persistent damp, musty odour in ground floor rooms, especially noticeable
                  when entering from outside. This is caused by moisture in the masonry.
                </p>
              </div>
            </div>

            {/* Sign 6 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center">
                <div className="w-20 h-16 bg-neutral-300 rounded-lg relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-neutral-400 to-neutral-300">
                    <div className="absolute -bottom-1 left-1 w-3 h-4 bg-neutral-500 rounded-t-lg"></div>
                    <div className="absolute -bottom-1 left-6 w-4 h-3 bg-neutral-500 rounded-t-lg"></div>
                    <div className="absolute -bottom-1 right-2 w-3 h-5 bg-neutral-500 rounded-t-lg"></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Crumbling Plaster</h3>
                <p className="text-neutral-600 text-sm">
                  Plaster that is soft, crumbly, or blown (separated from the wall). Salt
                  crystallisation within the plaster causes it to break down over time.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-accent-50 border border-accent-200 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-accent-900 mb-3">Not Sure If It&apos;s Rising Damp?</h3>
            <p className="text-accent-800 mb-6 max-w-2xl mx-auto">
              Misdiagnosis is common because other issues like condensation, penetrating damp,
              or plumbing leaks can look similar. Our comprehensive diagnosis guide explains
              how to tell the difference.
            </p>
            <Link href="/rising-damp/diagnosis" className="btn-accent">
              Read Our Diagnosis Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">How We Treat Rising Damp</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Our treatment process follows industry best practices to provide a permanent
              solution. Here&apos;s what to expect when you choose us.
            </p>
          </div>

          <div className="space-y-8">
            {treatmentSteps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>
                <div className="flex-1 bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
                  <h3 className="text-lg font-bold mb-2">{step.name}</h3>
                  <p className="text-neutral-600">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Rising Damp Treatment Costs</h2>
              <p className="text-neutral-600 mb-6">
                The cost of rising damp treatment depends on the extent of the problem, the
                length of wall affected, and whether you need plastering included. We provide
                transparent, itemised quotes with no hidden costs.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white rounded-lg p-4 border border-neutral-200">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Damp Survey</span>
                    <span className="text-primary-600 font-bold">£150 - £300</span>
                  </div>
                  <p className="text-sm text-neutral-500 mt-1">Comprehensive assessment with written report</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-neutral-200">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Single Wall Treatment</span>
                    <span className="text-primary-600 font-bold">£800 - £1,500</span>
                  </div>
                  <p className="text-sm text-neutral-500 mt-1">DPC injection only (excludes plastering)</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-neutral-200">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Multiple Walls</span>
                    <span className="text-primary-600 font-bold">£1,500 - £3,500</span>
                  </div>
                  <p className="text-sm text-neutral-500 mt-1">2-4 walls, DPC injection only</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-neutral-200">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Full Treatment + Plastering</span>
                    <span className="text-primary-600 font-bold">£3,000 - £6,000</span>
                  </div>
                  <p className="text-sm text-neutral-500 mt-1">Complete solution including re-plastering</p>
                </div>
              </div>

              <Link href="/cost-guide" className="link">
                View our complete cost guide →
              </Link>
            </div>

            <div className="bg-primary-900 text-white rounded-xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold mb-6">What&apos;s Included in Our Service</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-secondary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Professional moisture meter survey</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-secondary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Written diagnosis report with photos</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-secondary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>BBA-approved silicone DPC fluid</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-secondary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>20-year insurance-backed guarantee</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-secondary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Certificate for property sale</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-secondary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Aftercare advice and support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Rising Damp Treatment Across Essex</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We provide rising damp treatment services throughout Essex, covering a 15-mile
              radius from our base in Seven Kings.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {siteData.serviceArea.locations.slice(0, 5).map((location) => (
              <Link
                key={location.slug}
                href={`/rising-damp/locations/${location.slug}`}
                className="bg-white rounded-lg p-4 text-center shadow-sm border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-neutral-900">{location.name}</h3>
                <p className="text-sm text-neutral-500">{location.postcode}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        faqs={faqData.risingDamp}
        title="Rising Damp FAQs"
        description="Common questions about rising damp diagnosis and treatment."
      />

      {/* Related Services */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/rising-damp/diagnosis" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200 hover:border-primary-300 transition-all h-full">
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  Damp Diagnosis Guide
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  Learn how to identify different types of damp and determine if you have
                  rising damp, condensation, or penetrating damp.
                </p>
                <span className="text-primary-600 font-medium text-sm">Read the guide →</span>
              </div>
            </Link>
            <Link href="/damp-survey" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200 hover:border-primary-300 transition-all h-full">
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  Professional Damp Surveys
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  Comprehensive damp surveys using professional equipment to accurately
                  diagnose your damp problem.
                </p>
                <span className="text-primary-600 font-medium text-sm">Learn more →</span>
              </div>
            </Link>
            <Link href="/damp-proof-course" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200 hover:border-primary-300 transition-all h-full">
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  DPC Installation
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  New damp proof course installation and repair services for properties
                  without adequate DPC protection.
                </p>
                <span className="text-primary-600 font-medium text-sm">Learn more →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        title="Get Your Rising Damp Fixed Today"
        description="Book a free survey and get an accurate diagnosis with a clear treatment plan. Our 20-year guarantee gives you complete peace of mind."
      />
    </>
  );
}
