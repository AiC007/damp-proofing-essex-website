import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";
import { ArticleSchema } from "@/components/schema/ArticleSchema";

export const metadata: Metadata = {
  title: "How to Tell If You Have Rising Damp | Complete Guide",
  description: "Step-by-step guide to identifying rising damp in your home. Learn the signs, do simple tests, and avoid common misdiagnoses. Expert advice from PCA-qualified surveyors.",
  alternates: {
    canonical: "/blog/how-to-tell-rising-damp",
  },
  openGraph: {
    title: "How to Tell If You Have Rising Damp",
    description: "A complete guide to identifying rising damp, with tests you can do yourself and signs to look for.",
    url: "/blog/how-to-tell-rising-damp",
    type: "article",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "How to Tell Rising Damp", url: "/blog/how-to-tell-rising-damp" },
];

export default function HowToTellRisingDampPage() {
  return (
    <>
      <ArticleSchema
        headline="How to Tell If You Have Rising Damp: A Complete Guide"
        description="A step-by-step guide to identifying rising damp in your property, including the signs to look for and common misdiagnoses to avoid."
        datePublished="2026-01-08"
        dateModified="2026-01-08"
        url="/blog/how-to-tell-rising-damp"
      />

      <section className="gradient-hero py-16 lg:py-24">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-primary-200 mb-4">
              <span>8 January 2026</span>
              <span>•</span>
              <span>7 min read</span>
            </div>
            <h1 className="text-white mb-6">How to Tell If You Have Rising Damp: A Complete Guide</h1>
            <p className="text-xl text-primary-100">
              Rising damp is often misdiagnosed. This guide helps you identify the real
              signs and avoid unnecessary treatment.
            </p>
          </div>
        </div>
      </section>

      <article className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead">
              Rising damp is frequently blamed for damp problems that have entirely different
              causes. Studies suggest that as many as 90% of &quot;rising damp&quot; diagnoses are
              incorrect. Understanding the true signs of rising damp can save you thousands
              on unnecessary treatment.
            </p>

            <h2>What is Rising Damp?</h2>
            <p>
              Rising damp is moisture from the ground that travels upward through porous
              masonry by capillary action - like water being drawn up through a sponge.
              It only occurs when a damp proof course (DPC) is absent, damaged, or has
              been bridged.
            </p>
            <p>
              Genuine rising damp is relatively rare in modern properties but can affect
              older buildings, particularly those built before 1875 when DPCs became
              standard, or where the original DPC has failed.
            </p>

            <h2>The Definitive Signs of Rising Damp</h2>

            <h3>1. Location: Ground Floor Only</h3>
            <p>
              Rising damp can only affect ground floor walls that are in contact with the
              ground. If you have damp patches on upper floors, or on ground floor internal
              walls that don&apos;t connect to external walls, it&apos;s not rising damp.
            </p>

            <h3>2. Height: The Tide Mark</h3>
            <p>
              Rising damp typically rises to a maximum height of about 1 metre (roughly 3 feet)
              above floor level. This is because evaporation eventually equals the rate of
              rise. You should see a distinct &quot;tide mark&quot; - a horizontal line where the damp
              stops.
            </p>
            <p>
              If damp patches extend higher than 1.2 metres, or appear at random heights,
              the cause is likely something else.
            </p>

            <h3>3. Salt Deposits (Efflorescence)</h3>
            <p>
              As groundwater rises through masonry, it carries dissolved salts from the soil.
              When the water evaporates, these salts are left behind on the wall surface,
              appearing as white, fluffy or crystalline deposits.
            </p>
            <p>
              The presence of hygroscopic salts (salts that absorb moisture from the air)
              is a key indicator of rising damp. These salts can be tested for, and their
              presence strongly suggests water has been rising from the ground.
            </p>

            <h3>4. Pattern: Consistent Across the Wall</h3>
            <p>
              Rising damp affects walls relatively evenly. You should see a consistent
              pattern of dampness across the base of affected walls, not random patches
              or isolated spots.
            </p>

            <h3>5. Timing: Year-Round Problem</h3>
            <p>
              Unlike condensation which is worst in winter, rising damp is a year-round
              problem. In fact, it&apos;s often more noticeable in summer when higher evaporation
              rates bring more salts to the surface.
            </p>

            <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 my-8 not-prose">
              <h3 className="font-bold text-primary-900 mb-3">Rising Damp Checklist</h3>
              <ul className="space-y-2 text-primary-800">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Ground floor external walls only
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Damp rises to no more than ~1 metre
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Clear horizontal tide mark
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  White salt deposits visible
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Problem persists year-round
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Doesn&apos;t improve with ventilation
                </li>
              </ul>
            </div>

            <h2>A Simple Test You Can Do</h2>
            <p>
              The foil test can help you distinguish rising damp from condensation:
            </p>
            <ol>
              <li>Tape a piece of kitchen foil (about 30cm square) to the affected wall, sealing all edges with tape</li>
              <li>Leave it in place for 24-48 hours</li>
              <li>Remove and check both sides of the foil</li>
            </ol>
            <p>
              <strong>If moisture is on the wall side of the foil:</strong> Water is coming through the wall (could be rising or penetrating damp)
            </p>
            <p>
              <strong>If moisture is on the room side of the foil:</strong> It&apos;s condensation from the air in the room
            </p>
            <p>
              This test isn&apos;t definitive but gives a useful indication.
            </p>

            <h2>Common Misdiagnoses</h2>

            <h3>Condensation</h3>
            <p>
              The most common misdiagnosis. Condensation affects cold spots including
              the base of external walls. Key differences: condensation is worse in winter,
              affects any floor, and improves dramatically with better ventilation.
            </p>

            <h3>Penetrating Damp</h3>
            <p>
              Water coming through the wall horizontally from outside. Often confused with
              rising damp but has different characteristics: patches are often irregular,
              may appear at any height, and are usually worse during or after rain.
            </p>

            <h3>Bridged DPC</h3>
            <p>
              Sometimes the original DPC is fine, but it&apos;s been bypassed. Common causes:
            </p>
            <ul>
              <li>External ground level raised above the DPC</li>
              <li>Render or paving bridging the DPC</li>
              <li>Internal floor level raised above the DPC</li>
              <li>Debris blocking wall cavity at DPC level</li>
            </ul>
            <p>
              In these cases, the solution isn&apos;t a new DPC - it&apos;s removing the bridge.
            </p>

            <h3>Plumbing Leaks</h3>
            <p>
              Slow leaks from pipes can cause damp patches that look like rising damp.
              Check for leaks if damp is near radiator pipes, bathroom/kitchen plumbing,
              or appears suddenly.
            </p>

            <h2>When to Get a Professional Survey</h2>
            <p>
              While this guide helps you understand what to look for, diagnosing damp
              correctly requires experience and proper equipment. A professional survey
              is recommended when:
            </p>
            <ul>
              <li>You&apos;re considering buying a property with potential damp</li>
              <li>Damp is affecting your health or comfort</li>
              <li>You&apos;ve tried improving ventilation without success</li>
              <li>You need certainty before spending money on treatment</li>
              <li>A previous treatment hasn&apos;t worked</li>
            </ul>

            <h2>What a Professional Survey Involves</h2>
            <p>
              A proper damp survey includes:
            </p>
            <ul>
              <li><strong>Moisture meter readings:</strong> Using calibrated equipment to map moisture levels</li>
              <li><strong>Visual inspection:</strong> Looking for all the signs described above</li>
              <li><strong>External inspection:</strong> Checking ground levels, DPC position, drainage</li>
              <li><strong>Salt analysis:</strong> Testing for hygroscopic salts if appropriate</li>
              <li><strong>Written report:</strong> Explaining findings and recommendations</li>
            </ul>

            <div className="bg-secondary-50 border border-secondary-200 rounded-xl p-6 my-8 not-prose">
              <h3 className="font-bold text-secondary-900 mb-3">Our Commitment to Honest Diagnosis</h3>
              <p className="text-secondary-800">
                We don&apos;t profit from misdiagnosis. If your problem isn&apos;t rising damp, we&apos;ll tell
                you - even if that means we can&apos;t help. We&apos;d rather give you honest advice than
                sell you a treatment you don&apos;t need.
              </p>
            </div>
          </div>
        </div>
      </article>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/rising-damp-vs-condensation" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="font-bold mb-2">Rising Damp vs Condensation</h3>
                <p className="text-neutral-600 text-sm">Detailed comparison of these commonly confused problems.</p>
              </Link>
              <Link href="/rising-damp/diagnosis" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="font-bold mb-2">Full Diagnosis Guide</h3>
                <p className="text-neutral-600 text-sm">Our comprehensive guide to damp diagnosis.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Not Sure What You Have?"
        description="Book a free survey and get an honest, professional diagnosis."
      />
    </>
  );
}
