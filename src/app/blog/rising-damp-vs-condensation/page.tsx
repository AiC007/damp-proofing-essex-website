import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FAQ } from "@/components/ui/FAQ";
import { CTABanner } from "@/components/ui/CTABanner";
import { ArticleSchema } from "@/components/schema/ArticleSchema";
import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Rising Damp vs Condensation: How to Tell the Difference | Complete Guide",
  description: "Learn the key differences between rising damp and condensation. Visual identification guide, DIY tests, and expert advice on diagnosing your damp problem correctly. Free surveys in Essex.",
  alternates: {
    canonical: "/blog/rising-damp-vs-condensation",
  },
  openGraph: {
    title: "Rising Damp vs Condensation: How to Tell the Difference",
    description: "Complete guide to identifying whether your damp problem is rising damp or condensation. Visual signs, diagnostic tests, and treatment differences explained.",
    url: "/blog/rising-damp-vs-condensation",
    type: "article",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog/rising-damp-vs-condensation" },
  { name: "Rising Damp vs Condensation", url: "/blog/rising-damp-vs-condensation" },
];

const articleFaqs = [
  {
    question: "Is it rising damp or condensation if I have mould?",
    answer: "Black mould is more commonly associated with condensation than rising damp. Rising damp creates conditions too salty for most mould to thrive. If you have black mould growth, especially in corners, behind furniture, or on ceilings, condensation is likely the primary cause - even if you also have other damp issues."
  },
  {
    question: "Can I have both rising damp and condensation at the same time?",
    answer: "Yes, it's possible to have multiple damp sources simultaneously. For example, rising damp on ground floor walls combined with condensation issues in bathrooms or bedrooms. This is why professional diagnosis is important - treating only one cause will leave the other problems unresolved."
  },
  {
    question: "Why does the damp seem worse in winter?",
    answer: "If damp significantly worsens in winter, this points strongly towards condensation. Cold weather creates larger temperature differences between warm indoor air and cold surfaces, leading to more condensation. Rising damp, by contrast, remains fairly consistent throughout the year."
  },
  {
    question: "My windows are always foggy - is this rising damp?",
    answer: "No, foggy windows are a clear sign of condensation, not rising damp. Rising damp affects walls from the ground up, not windows. Foggy windows indicate high humidity levels in your home, which needs to be addressed through improved ventilation, heating, or dehumidification."
  },
  {
    question: "How much does it cost to fix rising damp vs condensation?",
    answer: "Condensation solutions are generally less expensive, ranging from £300-£2,000 for ventilation improvements. Rising damp treatment typically costs £1,500-£3,500 for chemical DPC injection plus plastering. Getting the diagnosis right is crucial - treating condensation as rising damp wastes money on unnecessary DPC work."
  },
];

export default function RisingDampVsCondensationPage() {
  return (
    <>
      <ArticleSchema
        headline="Rising Damp vs Condensation: How to Tell the Difference"
        description="Complete guide to identifying whether your damp problem is rising damp or condensation. Visual signs, diagnostic tests, and treatment differences explained."
        url="/blog/rising-damp-vs-condensation"
        datePublished="2026-01-15"
        dateModified="2026-01-15"
      />

      {/* Hero Section */}
      <section className="gradient-hero py-16 lg:py-24">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-white/90 text-sm font-medium mb-4">
              Damp Diagnosis Guide
            </span>
            <h1 className="text-white mb-6">
              Rising Damp vs Condensation: How to Tell the Difference
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Misdiagnosing damp is one of the most common and costly mistakes homeowners make.
              This comprehensive guide explains the key differences between rising damp and
              condensation, helping you identify what&apos;s really causing your damp problem.
            </p>
            <div className="flex items-center gap-4 text-primary-200 text-sm">
              <span>Updated: January 2026</span>
              <span>•</span>
              <span>10 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2>Why Getting the Diagnosis Right Matters</h2>
              <p>
                The difference between rising damp and condensation isn&apos;t just academic - it
                fundamentally affects how the problem should be treated. Treating condensation
                as rising damp (a common occurrence) means paying for expensive DPC injection
                work that won&apos;t solve the actual problem.
              </p>
              <p>
                Studies suggest that the majority of damp problems diagnosed as &quot;rising damp&quot;
                are actually caused by condensation, penetrating damp, or other issues. Getting
                an accurate diagnosis first saves money, time, and frustration.
              </p>

              <div className="bg-accent-50 border border-accent-200 rounded-xl p-6 my-8 not-prose">
                <h3 className="font-bold text-accent-900 mb-3">Quick Summary: The Key Differences</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-primary-800 mb-2">Rising Damp</h4>
                    <ul className="text-sm text-primary-700 space-y-1">
                      <li>• Ground floor walls only</li>
                      <li>• Tide mark up to ~1.2m</li>
                      <li>• White salt deposits</li>
                      <li>• Consistent year-round</li>
                      <li>• No window condensation</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-accent-800 mb-2">Condensation</h4>
                    <ul className="text-sm text-accent-700 space-y-1">
                      <li>• Any floor, any wall</li>
                      <li>• Corners, ceilings, windows</li>
                      <li>• Black mould growth</li>
                      <li>• Worse in winter</li>
                      <li>• Foggy windows common</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Rising Damp */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6">Understanding Rising Damp</h2>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold mb-4">What Causes Rising Damp?</h3>
              <p className="text-neutral-600 mb-4">
                Rising damp occurs when groundwater travels upward through porous building
                materials (brick, stone, mortar) via capillary action. Think of it like
                dipping a sugar cube in tea - the liquid is drawn upward through the tiny
                gaps in the material.
              </p>
              <p className="text-neutral-600 mb-4">
                In properly constructed buildings, a damp proof course (DPC) - either physical
                (slate, engineering bricks) or chemical - prevents this moisture from rising
                into the wall. Rising damp only occurs when:
              </p>
              <ul className="space-y-2 text-neutral-600 mb-4">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>The DPC is missing (common in pre-1875 buildings)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>The DPC has failed or deteriorated over time</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>The DPC has been &quot;bridged&quot; by raised ground levels, patios, or internal plastering</span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold mb-4">Visual Signs of Rising Damp</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-600">1</span>
                </div>
                <h4 className="font-bold mb-2">Tide Marks</h4>
                <p className="text-neutral-600 text-sm">
                  A distinct horizontal line or &quot;tide mark&quot; on the wall, typically between
                  30cm and 1.2m from the floor. This represents the maximum height the
                  moisture has reached.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-600">2</span>
                </div>
                <h4 className="font-bold mb-2">Salt Deposits</h4>
                <p className="text-neutral-600 text-sm">
                  White, crystalline deposits (efflorescence) on the wall surface. These
                  are hygroscopic salts carried up by the rising water and deposited as
                  it evaporates.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-600">3</span>
                </div>
                <h4 className="font-bold mb-2">Damaged Decorations</h4>
                <p className="text-neutral-600 text-sm">
                  Paint bubbling and flaking, wallpaper peeling, or plaster becoming soft
                  and crumbly - all concentrated in the lower portion of the wall below
                  the tide mark.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-600">4</span>
                </div>
                <h4 className="font-bold mb-2">Musty Smell</h4>
                <p className="text-neutral-600 text-sm">
                  A persistent damp, earthy smell in ground floor rooms that doesn&apos;t
                  improve with ventilation - unlike condensation-related mustiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Condensation */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6">Understanding Condensation</h2>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-neutral-200">
              <h3 className="text-xl font-bold mb-4">What Causes Condensation?</h3>
              <p className="text-neutral-600 mb-4">
                Condensation is the most common cause of dampness in UK homes. It occurs when
                warm, moisture-laden air comes into contact with cold surfaces. The air can no
                longer hold as much moisture, so water droplets form on the cold surface.
              </p>
              <p className="text-neutral-600 mb-4">
                Modern lifestyle factors contribute significantly to condensation problems:
              </p>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Improved insulation and draught-proofing reduces natural ventilation</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Drying laundry indoors releases significant moisture</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Cooking and showering without adequate extraction</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-accent-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Uneven or inadequate heating creates cold spots</span>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold mb-4">Visual Signs of Condensation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-accent-600">1</span>
                </div>
                <h4 className="font-bold mb-2">Window Condensation</h4>
                <p className="text-neutral-600 text-sm">
                  Water droplets or &quot;steaming up&quot; on windows, especially in bedrooms in
                  the morning or in bathrooms/kitchens. This is the most obvious sign.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-accent-600">2</span>
                </div>
                <h4 className="font-bold mb-2">Black Mould</h4>
                <p className="text-neutral-600 text-sm">
                  Black spotty mould growth, typically in corners where walls meet ceilings,
                  behind furniture, in wardrobes, or around windows. Mould needs moisture
                  and still air to thrive.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-accent-600">3</span>
                </div>
                <h4 className="font-bold mb-2">Damp on External Walls</h4>
                <p className="text-neutral-600 text-sm">
                  Damp patches on external walls (which are colder than internal walls),
                  especially in corners or behind furniture where air doesn&apos;t circulate.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-accent-600">4</span>
                </div>
                <h4 className="font-bold mb-2">Seasonal Pattern</h4>
                <p className="text-neutral-600 text-sm">
                  Problems that are significantly worse in winter when the temperature
                  difference between inside and outside is greatest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Side-by-Side Comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary-700 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-left font-semibold">Rising Damp</th>
                    <th className="px-6 py-4 text-left font-semibold">Condensation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Location</td>
                    <td className="px-6 py-4 text-neutral-600">Ground floor walls only</td>
                    <td className="px-6 py-4 text-neutral-600">Any floor, any room</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-6 py-4 font-medium">Height</td>
                    <td className="px-6 py-4 text-neutral-600">Up to ~1.2m from floor</td>
                    <td className="px-6 py-4 text-neutral-600">Any height, often upper areas</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Pattern</td>
                    <td className="px-6 py-4 text-neutral-600">Horizontal tide mark</td>
                    <td className="px-6 py-4 text-neutral-600">Corners, cold surfaces</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-6 py-4 font-medium">Salt deposits</td>
                    <td className="px-6 py-4 text-neutral-600">Yes - white crystals</td>
                    <td className="px-6 py-4 text-neutral-600">No</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Black mould</td>
                    <td className="px-6 py-4 text-neutral-600">Rare</td>
                    <td className="px-6 py-4 text-neutral-600">Common</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-6 py-4 font-medium">Window fog</td>
                    <td className="px-6 py-4 text-neutral-600">Not related</td>
                    <td className="px-6 py-4 text-neutral-600">Yes, common</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Seasonal</td>
                    <td className="px-6 py-4 text-neutral-600">Consistent year-round</td>
                    <td className="px-6 py-4 text-neutral-600">Worse in winter</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-6 py-4 font-medium">Treatment</td>
                    <td className="px-6 py-4 text-neutral-600">DPC injection + replaster</td>
                    <td className="px-6 py-4 text-neutral-600">Ventilation + heating</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Typical cost</td>
                    <td className="px-6 py-4 text-neutral-600">£1,500 - £3,500</td>
                    <td className="px-6 py-4 text-neutral-600">£300 - £2,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* DIY Test */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6">The Foil Test: A Simple DIY Check</h2>
            <p className="text-neutral-600 mb-8">
              While not definitive, this simple test can help indicate whether moisture is
              coming from within the wall or from condensation in the room.
            </p>

            <div className="bg-primary-50 border border-primary-200 rounded-xl p-8 mb-8">
              <h3 className="font-bold text-primary-900 mb-4">How to Perform the Foil Test</h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                  <p className="text-primary-800">Dry the wall surface thoroughly with a cloth or towel</p>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                  <p className="text-primary-800">Tape a piece of kitchen foil (about 30cm square) flat against the wall, sealing all edges with tape</p>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                  <p className="text-primary-800">Leave in place for 24-48 hours</p>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                  <p className="text-primary-800">Remove the foil and check where moisture has appeared</p>
                </li>
              </ol>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-primary-800 mb-2">Wall Side Wet?</h4>
                  <p className="text-sm text-primary-700">
                    Moisture is coming from within the wall - possible rising damp,
                    penetrating damp, or a leak.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-accent-800 mb-2">Room Side Wet?</h4>
                  <p className="text-sm text-accent-700">
                    Moisture is condensation from the air in the room, not from
                    within the wall.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent-50 border border-accent-200 rounded-xl p-6">
              <h4 className="font-bold text-accent-900 mb-2">Important Note</h4>
              <p className="text-accent-800 text-sm">
                This test is indicative only and cannot replace professional diagnosis.
                The presence of hygroscopic salts from historic rising damp can attract
                moisture from the air, giving false results. For accurate diagnosis,
                professional moisture meters and expertise are needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When to Get Professional Help */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">When to Get Professional Help</h2>
            <p className="text-neutral-600 mb-8">
              If you&apos;re unsure about the cause of your damp problem, or if your DIY
              investigations suggest it might be rising damp, professional diagnosis is
              essential before committing to any treatment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Accurate Diagnosis</h3>
                <p className="text-neutral-600 text-sm">
                  Calibrated moisture meters can accurately measure moisture levels at
                  different heights and depths.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Save Money</h3>
                <p className="text-neutral-600 text-sm">
                  Avoid paying for expensive DPC treatment when the real problem
                  is condensation or another issue.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Right Solution</h3>
                <p className="text-neutral-600 text-sm">
                  Get the correct treatment for your specific problem, backed by
                  appropriate guarantees.
                </p>
              </div>
            </div>

            <div className="bg-primary-900 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Get a Professional Diagnosis</h3>
              <p className="text-primary-200 mb-6">
                Our PCA-qualified surveyors use professional equipment to accurately
                diagnose your damp problem. We&apos;ll tell you honestly what&apos;s causing it
                and recommend the most appropriate solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        faqs={articleFaqs}
        title="Frequently Asked Questions"
        description="Common questions about distinguishing rising damp from condensation."
      />

      {/* Related Articles */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link href="/rising-damp/diagnosis" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200 hover:border-primary-300 transition-all h-full">
                <h3 className="font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  Complete Damp Diagnosis Guide
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  More detailed information on diagnosing all types of damp including
                  penetrating damp.
                </p>
                <span className="text-primary-600 text-sm font-medium">Read guide →</span>
              </div>
            </Link>
            <Link href="/rising-damp" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200 hover:border-primary-300 transition-all h-full">
                <h3 className="font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  Rising Damp Treatment
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  Learn about how rising damp is treated professionally, including
                  costs and guarantees.
                </p>
                <span className="text-primary-600 text-sm font-medium">Learn more →</span>
              </div>
            </Link>
            <Link href="/condensation" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200 hover:border-primary-300 transition-all h-full">
                <h3 className="font-bold mb-3 group-hover:text-primary-600 transition-colors">
                  Condensation Solutions
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  Effective solutions for condensation problems, from ventilation
                  improvements to lifestyle changes.
                </p>
                <span className="text-primary-600 text-sm font-medium">Learn more →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        title="Not Sure What Type of Damp You Have?"
        description="Book a free survey with our expert team. We'll accurately diagnose your damp problem and recommend the right solution."
      />
    </>
  );
}
