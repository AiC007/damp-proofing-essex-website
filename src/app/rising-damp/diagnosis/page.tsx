import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FAQ } from "@/components/ui/FAQ";
import { CTABanner } from "@/components/ui/CTABanner";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "How to Identify Rising Damp | Complete Diagnosis Guide",
  description: "Learn how to identify if you have rising damp with our comprehensive diagnosis guide. Visual identification tips, DIY tests, and when to call a professional. Free damp surveys in Essex.",
  alternates: {
    canonical: "/rising-damp/diagnosis",
  },
  openGraph: {
    title: "How to Identify Rising Damp | Complete Diagnosis Guide",
    description: "Learn how to identify if you have rising damp with our comprehensive diagnosis guide. Visual identification tips, DIY tests, and when to call a professional.",
    url: "/rising-damp/diagnosis",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Rising Damp", url: "/rising-damp" },
  { name: "Diagnosis Guide", url: "/rising-damp/diagnosis" },
];

const diagnosisFaqs = [
  {
    question: "How do I know if I have rising damp or condensation?",
    answer: "Rising damp creates a tide mark up to 1.2m high with salt deposits and affects ground floor walls only. Condensation causes water droplets on windows and mould in corners/ceilings, worsening in winter. Rising damp stays consistent year-round; condensation varies with temperature and humidity."
  },
  {
    question: "Can I test for rising damp myself?",
    answer: "You can perform a basic foil test: tape a piece of kitchen foil flat against the damp wall for 24-48 hours. If moisture appears on the wall side of the foil, moisture is coming from within the wall (possibly rising damp). If moisture is on the room side, it's condensation. However, professional testing with calibrated moisture meters is needed for accurate diagnosis."
  },
  {
    question: "What does rising damp smell like?",
    answer: "Rising damp typically produces a musty, earthy smell similar to damp soil or an old cellar. This smell is consistent and doesn't improve with ventilation, unlike condensation-related mustiness which often improves when windows are opened."
  },
  {
    question: "Can rising damp appear suddenly?",
    answer: "Rising damp usually develops gradually over months or years. Sudden damp appearance is more likely to indicate a leak, penetrating damp, or condensation. If you notice sudden dampness, check for plumbing leaks, blocked gutters, or changes in heating/ventilation patterns."
  },
  {
    question: "Why is my damp higher than 1.2 metres?",
    answer: "If dampness extends above 1.2 metres, it's unlikely to be rising damp alone. Possible causes include: penetrating damp from outside, condensation, plumbing leaks, hygroscopic salts attracting moisture from the air after previous rising damp, or a combination of issues. A professional survey will identify the cause."
  },
  {
    question: "Is black mould a sign of rising damp?",
    answer: "Black mould is more commonly associated with condensation than rising damp. Rising damp typically causes white salt deposits, not black mould. If you have black mould with damp walls, condensation may be contributing to the problem, possibly alongside other damp sources."
  },
];

export default function DiagnosisPage() {
  return (
    <>
      <FAQSchema faqs={diagnosisFaqs} />

      {/* Hero Section */}
      <section className="gradient-hero py-16 lg:py-24">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl">
            <h1 className="text-white mb-6">
              How to Identify Rising Damp: Complete Diagnosis Guide
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Is it rising damp, condensation, or something else? This comprehensive guide
              helps you understand the signs and determine what type of damp you&apos;re dealing with.
            </p>
          </div>
        </div>
      </section>

      {/* Why Accurate Diagnosis Matters */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-center">Why Accurate Diagnosis Matters</h2>
            <p className="text-neutral-600 mb-6 text-lg text-center">
              Misdiagnosing damp is extremely common and can waste thousands of pounds on
              unnecessary treatments that don&apos;t solve the problem.
            </p>

            <div className="bg-accent-50 border border-accent-200 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-accent-900 mb-3">The Misdiagnosis Problem</h3>
              <p className="text-accent-800 mb-4">
                Studies suggest that up to 90% of damp problems diagnosed as &quot;rising damp&quot; are
                actually caused by condensation, penetrating damp, or other issues. This leads to:
              </p>
              <ul className="space-y-2 text-accent-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>Expensive DPC treatments that don&apos;t fix the real problem</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>Ongoing damp problems despite treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>Damage to property from the real cause being untreated</span>
                </li>
              </ul>
            </div>

            <p className="text-neutral-600">
              This guide will help you understand the differences between damp types so you
              can have an informed conversation with any surveyor and avoid unnecessary work.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Rising Damp vs Condensation vs Penetrating Damp</h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-primary-700 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Characteristic</th>
                  <th className="px-6 py-4 text-left font-semibold">Rising Damp</th>
                  <th className="px-6 py-4 text-left font-semibold">Condensation</th>
                  <th className="px-6 py-4 text-left font-semibold">Penetrating Damp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-neutral-900">Location</td>
                  <td className="px-6 py-4 text-neutral-600">Ground floor walls only, from floor level upward</td>
                  <td className="px-6 py-4 text-neutral-600">Windows, corners, ceilings, behind furniture</td>
                  <td className="px-6 py-4 text-neutral-600">Any wall, often localised patches at any height</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-6 py-4 font-medium text-neutral-900">Height</td>
                  <td className="px-6 py-4 text-neutral-600">Up to ~1.2m (rarely higher)</td>
                  <td className="px-6 py-4 text-neutral-600">Any height, often upper walls/ceilings</td>
                  <td className="px-6 py-4 text-neutral-600">Any height, depends on defect location</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-neutral-900">Tide Mark</td>
                  <td className="px-6 py-4 text-neutral-600">Yes, horizontal line clearly visible</td>
                  <td className="px-6 py-4 text-neutral-600">No clear tide mark</td>
                  <td className="px-6 py-4 text-neutral-600">No tide mark, irregular patches</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-6 py-4 font-medium text-neutral-900">Salt Deposits</td>
                  <td className="px-6 py-4 text-neutral-600">Yes, white crystalline deposits</td>
                  <td className="px-6 py-4 text-neutral-600">No salt deposits</td>
                  <td className="px-6 py-4 text-neutral-600">Sometimes, depending on water source</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-neutral-900">Mould</td>
                  <td className="px-6 py-4 text-neutral-600">Rare (too salty for mould)</td>
                  <td className="px-6 py-4 text-neutral-600">Common, especially black mould</td>
                  <td className="px-6 py-4 text-neutral-600">Possible if persistently damp</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-6 py-4 font-medium text-neutral-900">Seasonal Variation</td>
                  <td className="px-6 py-4 text-neutral-600">Consistent year-round</td>
                  <td className="px-6 py-4 text-neutral-600">Worse in winter</td>
                  <td className="px-6 py-4 text-neutral-600">Worse during/after rain</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-neutral-900">Window Condensation</td>
                  <td className="px-6 py-4 text-neutral-600">Not related</td>
                  <td className="px-6 py-4 text-neutral-600">Yes, often visible</td>
                  <td className="px-6 py-4 text-neutral-600">Not related</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Visual Decision Tree */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-4">Diagnostic Decision Tree</h2>
          <p className="text-lg text-neutral-600 text-center max-w-3xl mx-auto mb-12">
            Use this flowchart to help narrow down the type of damp affecting your property.
          </p>

          <div className="max-w-4xl mx-auto">
            {/* Decision Node 1 */}
            <div className="bg-primary-100 rounded-xl p-6 mb-4">
              <h3 className="font-bold text-primary-900 mb-2">Is the damp on a ground floor wall?</h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white rounded-lg p-4 border-2 border-primary-300">
                  <span className="font-semibold text-primary-700">YES</span>
                  <p className="text-sm text-neutral-600 mt-1">Continue to next question</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-accent-300">
                  <span className="font-semibold text-accent-700">NO</span>
                  <p className="text-sm text-neutral-600 mt-1">Not rising damp → Check for penetrating damp or condensation</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Decision Node 2 */}
            <div className="bg-primary-100 rounded-xl p-6 mb-4">
              <h3 className="font-bold text-primary-900 mb-2">Is there a clear tide mark up to ~1.2m high?</h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white rounded-lg p-4 border-2 border-primary-300">
                  <span className="font-semibold text-primary-700">YES</span>
                  <p className="text-sm text-neutral-600 mt-1">Possible rising damp → Continue</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-accent-300">
                  <span className="font-semibold text-accent-700">NO</span>
                  <p className="text-sm text-neutral-600 mt-1">Likely not rising damp → Check for other sources</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Decision Node 3 */}
            <div className="bg-primary-100 rounded-xl p-6 mb-4">
              <h3 className="font-bold text-primary-900 mb-2">Are there white salt deposits (efflorescence)?</h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white rounded-lg p-4 border-2 border-secondary-300">
                  <span className="font-semibold text-secondary-700">YES</span>
                  <p className="text-sm text-neutral-600 mt-1">Strong indicator of rising damp</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-accent-300">
                  <span className="font-semibold text-accent-700">NO</span>
                  <p className="text-sm text-neutral-600 mt-1">May still be rising damp, but consider other causes</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Decision Node 4 */}
            <div className="bg-primary-100 rounded-xl p-6 mb-4">
              <h3 className="font-bold text-primary-900 mb-2">Is the problem consistent year-round (not worse in winter)?</h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white rounded-lg p-4 border-2 border-secondary-300">
                  <span className="font-semibold text-secondary-700">YES</span>
                  <p className="text-sm text-neutral-600 mt-1">Consistent with rising damp</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-2 border-accent-300">
                  <span className="font-semibold text-accent-700">NO (worse in winter)</span>
                  <p className="text-sm text-neutral-600 mt-1">Likely condensation or combination</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary-100 rounded-xl p-6 mt-8">
              <h3 className="font-bold text-secondary-900 mb-2">Result: Probable Rising Damp</h3>
              <p className="text-secondary-800">
                If you answered YES to most questions above, rising damp is a likely cause.
                However, professional testing with calibrated moisture meters is essential for
                definitive diagnosis before any treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIY Tests */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-center mb-4">DIY Tests You Can Perform</h2>
          <p className="text-lg text-neutral-600 text-center max-w-3xl mx-auto mb-12">
            These simple tests can help narrow down the cause, but remember they&apos;re not
            substitutes for professional diagnosis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Foil Test */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">The Foil Test</h3>
              <ol className="space-y-2 text-neutral-600 text-sm">
                <li className="flex gap-2">
                  <span className="font-bold text-primary-600">1.</span>
                  <span>Dry the wall surface thoroughly with a cloth</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary-600">2.</span>
                  <span>Tape a piece of kitchen foil flat against the wall (seal all edges)</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary-600">3.</span>
                  <span>Leave for 24-48 hours</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary-600">4.</span>
                  <span>Check where moisture appears</span>
                </li>
              </ol>
              <div className="mt-4 p-4 bg-neutral-50 rounded-lg">
                <p className="text-sm"><strong>Wall side wet:</strong> Moisture from within wall (rising damp, penetrating damp, leak)</p>
                <p className="text-sm mt-2"><strong>Room side wet:</strong> Condensation from the air</p>
              </div>
            </div>

            {/* Observation Test */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3">Seasonal Observation</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Monitor the damp over several months and note:
              </p>
              <ul className="space-y-2 text-neutral-600 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Is it worse in winter? → Likely condensation</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Is it worse after rain? → Likely penetrating damp</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Is it consistent year-round? → Possible rising damp</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* When to Call Professional */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">When to Call a Professional</h2>
            <p className="text-lg text-neutral-600 mb-8">
              While these guides help you understand your damp problem, professional diagnosis
              is essential before any treatment. A qualified surveyor will:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200">
                <h3 className="font-bold text-lg mb-3">Use Professional Equipment</h3>
                <ul className="space-y-2 text-neutral-600 text-sm">
                  <li>• Calibrated electrical moisture meters</li>
                  <li>• Carbide moisture testing for masonry</li>
                  <li>• Thermal imaging to detect damp patterns</li>
                  <li>• Salts analysis if required</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200">
                <h3 className="font-bold text-lg mb-3">Provide Expert Analysis</h3>
                <ul className="space-y-2 text-neutral-600 text-sm">
                  <li>• Distinguish between different damp types</li>
                  <li>• Identify the root cause, not just symptoms</li>
                  <li>• Check for contributing factors</li>
                  <li>• Recommend appropriate treatment</li>
                </ul>
              </div>
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-primary-900 mb-4">
                Get a Professional Diagnosis
              </h3>
              <p className="text-primary-800 mb-6">
                Our surveyors are PCA-qualified and use professional equipment to provide
                accurate diagnosis. We&apos;ll identify exactly what&apos;s causing your damp and
                recommend the most appropriate solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${siteData.business.phone.replace(/\s/g, "")}`}
                  className="btn-primary"
                >
                  Call: {siteData.business.phone}
                </a>
                <Link href="/contact" className="btn-accent">
                  Book Free Survey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        faqs={diagnosisFaqs}
        title="Damp Diagnosis FAQs"
        description="Common questions about identifying and diagnosing damp problems."
      />

      {/* Related Pages */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/blog/rising-damp-vs-condensation" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200 hover:border-primary-300 transition-all h-full">
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  Rising Damp vs Condensation
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  In-depth comparison of rising damp and condensation, with detailed
                  visual guides and treatment differences.
                </p>
                <span className="text-primary-600 font-medium text-sm">Read article →</span>
              </div>
            </Link>
            <Link href="/rising-damp" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200 hover:border-primary-300 transition-all h-full">
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  Rising Damp Treatment
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  Learn about professional rising damp treatment, including what&apos;s
                  involved, costs, and our guarantee.
                </p>
                <span className="text-primary-600 font-medium text-sm">Learn more →</span>
              </div>
            </Link>
            <Link href="/damp-survey" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200 hover:border-primary-300 transition-all h-full">
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  Professional Damp Surveys
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  What to expect from a professional damp survey, including
                  equipment used and what your report will include.
                </p>
                <span className="text-primary-600 font-medium text-sm">Learn more →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        title="Get Expert Diagnosis Today"
        description="Don't guess - get an accurate diagnosis from our qualified surveyors. We'll identify the true cause of your damp and recommend the right solution."
      />
    </>
  );
}
