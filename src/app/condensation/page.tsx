import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FAQ } from "@/components/ui/FAQ";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Condensation Treatment Essex | Ventilation & Mould Solutions",
  description: "Expert condensation treatment in Essex. We solve condensation and mould problems with effective ventilation solutions. Extractor fans, PIV systems, humidity control. Free surveys.",
  alternates: {
    canonical: "/condensation",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Condensation", url: "/condensation" },
];

const faqs = [
  {
    question: "Why do I have condensation in my home?",
    answer: "Condensation occurs when warm, moist air meets cold surfaces. Modern homes are often well-insulated but poorly ventilated, trapping moisture from cooking, bathing, drying clothes, and breathing. This moisture condenses on cold surfaces like windows and external walls."
  },
  {
    question: "Is condensation dangerous?",
    answer: "While condensation itself isn't dangerous, the mould growth it causes can be. Mould spores can trigger allergies, asthma, and respiratory problems, particularly in children, the elderly, and those with existing conditions. Persistent dampness also damages decorations and can affect timber."
  },
  {
    question: "How can I reduce condensation?",
    answer: "Key steps include: improving ventilation (opening windows, using extractor fans), reducing moisture production (covering pans, venting tumble dryers outside, drying clothes outdoors), heating your home adequately and consistently, and not blocking air vents. For persistent problems, mechanical ventilation may be needed."
  },
  {
    question: "What is a PIV system?",
    answer: "A Positive Input Ventilation (PIV) system is a whole-house ventilation solution. It draws fresh, filtered air from outside (usually via the loft) and gently pushes it into the home, displacing stale, moist air. PIV systems are highly effective at eliminating condensation and associated mould."
  },
];

export default function CondensationPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Condensation Treatment"
        serviceDescription="Professional condensation treatment and ventilation solutions in Essex. Effective solutions for condensation and mould problems."
        serviceUrl="/condensation"
        priceRange="£300 - £2,000"
      />

      <section className="gradient-hero py-16 lg:py-24">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl">
            <h1 className="text-white mb-6">Condensation Treatment in Essex</h1>
            <p className="text-xl text-primary-100 mb-8">
              Eliminate condensation and black mould for good with effective ventilation
              solutions. We diagnose the cause and install systems that work.
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
              <h2 className="mb-6">Understanding Condensation</h2>
              <p className="text-neutral-600 mb-4">
                Condensation is the most common form of dampness in UK homes, affecting
                millions of properties. It occurs when warm, moisture-laden air comes into
                contact with cold surfaces, causing the moisture to condense into water droplets.
              </p>
              <p className="text-neutral-600 mb-4">
                Modern lifestyle factors make condensation worse: well-sealed homes trap
                moisture, drying clothes indoors releases litres of water, and inadequate
                heating creates cold spots where condensation forms.
              </p>
              <p className="text-neutral-600 mb-6">
                Left untreated, condensation leads to black mould growth, which can cause
                health problems and damage to your property. The good news is that
                condensation is very treatable with the right approach.
              </p>

              <div className="bg-accent-50 border border-accent-200 rounded-xl p-6">
                <h3 className="font-bold text-accent-900 mb-3">Signs of Condensation</h3>
                <ul className="space-y-2 text-accent-800 text-sm">
                  <li>• Water droplets on windows (especially in mornings)</li>
                  <li>• Black mould in corners, behind furniture, in wardrobes</li>
                  <li>• Damp patches on external walls</li>
                  <li>• Musty smell that improves with ventilation</li>
                  <li>• Problems worse in winter months</li>
                </ul>
              </div>
            </div>
            <div className="bg-neutral-100 rounded-xl p-8">
              <div className="aspect-video bg-gradient-to-br from-accent-200 to-accent-300 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-24 h-24 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <p className="text-neutral-500 text-center text-sm">
                Condensation forms when warm moist air meets cold surfaces
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-center mb-4">Our Condensation Solutions</h2>
          <p className="text-lg text-neutral-600 text-center max-w-3xl mx-auto mb-12">
            We offer a range of ventilation solutions to suit different properties and budgets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Extractor Fans</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Humidity-controlled extractor fans for bathrooms and kitchens that
                automatically activate when moisture levels rise.
              </p>
              <p className="text-primary-700 font-semibold">From £150-£400 installed</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">PIV Systems</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Positive Input Ventilation provides whole-house ventilation by gently
                pushing fresh air through your home, displacing moist air.
              </p>
              <p className="text-primary-700 font-semibold">From £500-£900 installed</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">MVHR Systems</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Mechanical Ventilation with Heat Recovery provides balanced ventilation
                while recovering heat from extracted air.
              </p>
              <p className="text-primary-700 font-semibold">From £2,000-£4,000 installed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">Tips to Reduce Condensation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Ventilate", desc: "Open windows when cooking, bathing, or drying clothes. Use extractor fans." },
                { title: "Heat Consistently", desc: "Maintain steady, low-level heating rather than short bursts of high heat." },
                { title: "Reduce Moisture", desc: "Cover pans, vent tumble dryers outside, dry clothes outdoors when possible." },
                { title: "Allow Air Flow", desc: "Leave gaps behind furniture on external walls. Don't block air vents." },
              ].map((tip, i) => (
                <div key={i} className="bg-primary-50 rounded-lg p-4">
                  <h3 className="font-bold text-primary-900 mb-1">{tip.title}</h3>
                  <p className="text-primary-800 text-sm">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} title="Condensation FAQs" />

      <CTABanner
        title="Struggling with Condensation & Mould?"
        description="Book a free survey and we'll recommend the right ventilation solution for your home."
      />
    </>
  );
}
