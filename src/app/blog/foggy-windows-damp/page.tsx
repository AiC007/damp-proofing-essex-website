import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";
import { ArticleSchema } from "@/components/schema/ArticleSchema";

export const metadata: Metadata = {
  title: "Why Foggy Windows Don't Always Mean Damp | Expert Guide",
  description: "Learn why condensation on windows doesn't always indicate a damp problem. Expert advice on when foggy windows are normal and when they signal issues.",
  alternates: {
    canonical: "/blog/foggy-windows-damp",
  },
  openGraph: {
    title: "Why Foggy Windows Don't Always Mean Damp",
    description: "Expert advice on window condensation - when it's normal and when it signals damp problems.",
    url: "/blog/foggy-windows-damp",
    type: "article",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Foggy Windows & Damp", url: "/blog/foggy-windows-damp" },
];

export default function FoggyWindowsDampPage() {
  return (
    <>
      <ArticleSchema
        headline="Why Foggy Windows Don't Always Mean Damp Problems"
        description="Understanding window condensation: when it's normal and when it indicates a damp issue that needs addressing."
        datePublished="2026-01-12"
        dateModified="2026-01-12"
        url="/blog/foggy-windows-damp"
      />

      <section className="gradient-hero py-16 lg:py-24">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-primary-200 mb-4">
              <span>12 January 2026</span>
              <span>•</span>
              <span>6 min read</span>
            </div>
            <h1 className="text-white mb-6">Why Foggy Windows Don&apos;t Always Mean Damp Problems</h1>
            <p className="text-xl text-primary-100">
              Waking up to condensation on your windows can be alarming, but it doesn&apos;t
              always signal a serious damp problem. Here&apos;s how to tell the difference.
            </p>
          </div>
        </div>
      </section>

      <article className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead">
              Every winter, we receive calls from worried homeowners who&apos;ve noticed
              condensation on their windows. While persistent condensation can indicate
              problems, in many cases it&apos;s a normal phenomenon that can be managed
              with simple lifestyle changes.
            </p>

            <h2>Why Windows Get Foggy</h2>
            <p>
              Condensation forms when warm, moist air comes into contact with a cold surface.
              Windows are typically the coldest surfaces in a room, especially single-glazed
              or older double-glazed units, making them the first place where moisture in
              the air condenses into water droplets.
            </p>
            <p>
              This is basic physics, not necessarily a sign of damp. The moisture has to
              come from somewhere, and in most homes, it comes from normal daily activities.
            </p>

            <h2>Normal Sources of Moisture</h2>
            <p>
              A typical household generates significant amounts of moisture every day:
            </p>
            <ul>
              <li><strong>Breathing:</strong> A sleeping person releases about 200ml of moisture per night</li>
              <li><strong>Cooking:</strong> Boiling a pan of water releases 1.5 litres into the air</li>
              <li><strong>Showering/bathing:</strong> Up to 1.5 litres per shower</li>
              <li><strong>Drying clothes indoors:</strong> Up to 5 litres per wash load</li>
              <li><strong>Gas heating:</strong> Unflued gas heaters produce moisture as a byproduct</li>
            </ul>
            <p>
              A family of four can easily produce 10-15 litres of moisture daily. If this
              isn&apos;t ventilated away, it has to go somewhere - and that&apos;s usually
              your windows.
            </p>

            <h2>When Window Condensation is Normal</h2>
            <p>
              Condensation on windows is generally normal and not a cause for concern when:
            </p>
            <ul>
              <li>It appears mainly in winter mornings and clears during the day</li>
              <li>It&apos;s worst in bathrooms and kitchens (high moisture areas)</li>
              <li>It improves significantly when you open windows</li>
              <li>It&apos;s only on the glass, not streaming down walls</li>
              <li>There&apos;s no black mould growth around the windows</li>
            </ul>

            <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 my-8 not-prose">
              <h3 className="font-bold text-primary-900 mb-3">Quick Test</h3>
              <p className="text-primary-800">
                Open your bedroom window for 15 minutes each morning for a week. If the
                condensation problem improves significantly, it&apos;s a ventilation issue,
                not a damp problem. This is good news - it&apos;s much easier and cheaper to fix.
              </p>
            </div>

            <h2>When to Be Concerned</h2>
            <p>
              Window condensation becomes a problem worth investigating when:
            </p>
            <ul>
              <li><strong>It persists all day:</strong> Not just mornings but constant dampness</li>
              <li><strong>Mould is growing:</strong> Black spots around window frames or on walls</li>
              <li><strong>Walls are damp:</strong> Moisture spreading beyond the window area</li>
              <li><strong>Condensation is between panes:</strong> Inside double glazing (this is a window seal failure)</li>
              <li><strong>It&apos;s happening in summer too:</strong> Year-round condensation suggests bigger issues</li>
              <li><strong>Soft window frames:</strong> Wood rot in the frames indicates long-term moisture damage</li>
            </ul>

            <h2>Condensation Between Double Glazing</h2>
            <p>
              If the fog is between the two panes of your double glazing, this is a different
              problem entirely - it means the seal has failed. This isn&apos;t a damp problem
              in your home; it&apos;s a window problem. The unit needs replacing, but it&apos;s
              not causing damp in your property.
            </p>

            <h2>Simple Solutions for Normal Condensation</h2>
            <p>
              If your window condensation is the normal ventilation-related type, these
              steps will help:
            </p>
            <ol>
              <li><strong>Improve ventilation:</strong> Open windows for 15 minutes daily, even in winter</li>
              <li><strong>Use extractor fans:</strong> Always when cooking or showering</li>
              <li><strong>Don&apos;t dry clothes on radiators:</strong> Use a vented tumble dryer or dry outdoors</li>
              <li><strong>Keep lids on pans:</strong> Reduces cooking moisture by up to 90%</li>
              <li><strong>Maintain heating:</strong> Low consistent heat is better than short high bursts</li>
              <li><strong>Wipe windows:</strong> Remove condensation each morning to prevent mould</li>
            </ol>

            <h2>When Ventilation Alone Isn&apos;t Enough</h2>
            <p>
              If you&apos;ve tried improving ventilation and the problem persists, you may
              benefit from mechanical ventilation. A PIV (Positive Input Ventilation) system
              gently pushes fresh air through your home, displacing moist air and dramatically
              reducing condensation.
            </p>
            <p>
              PIV systems typically cost £500-£900 installed and are very effective at
              eliminating condensation throughout the home. They&apos;re much more affordable
              than most people expect and make a noticeable difference within days.
            </p>

            <h2>Could It Actually Be Rising Damp?</h2>
            <p>
              Rising damp and condensation are frequently confused, but they&apos;re very
              different problems. If you&apos;re seeing damp patches on walls as well as
              window condensation, it&apos;s worth understanding the difference:
            </p>

            <div className="bg-neutral-100 rounded-xl p-6 my-8 not-prose">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-neutral-900 mb-2">Condensation</h4>
                  <ul className="text-neutral-700 text-sm space-y-1">
                    <li>• Affects any floor level</li>
                    <li>• Worse in winter</li>
                    <li>• Improves with ventilation</li>
                    <li>• Water droplets visible</li>
                    <li>• Black mould common</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-2">Rising Damp</h4>
                  <ul className="text-neutral-700 text-sm space-y-1">
                    <li>• Ground floor only</li>
                    <li>• Year-round problem</li>
                    <li>• Doesn&apos;t improve with ventilation</li>
                    <li>• Tide mark pattern</li>
                    <li>• White salt deposits</li>
                  </ul>
                </div>
              </div>
            </div>

            <p>
              For a detailed comparison, see our guide to{" "}
              <Link href="/blog/rising-damp-vs-condensation" className="text-primary-600 hover:text-primary-700">
                rising damp vs condensation
              </Link>.
            </p>

            <h2>Getting Professional Advice</h2>
            <p>
              If you&apos;re unsure whether your condensation is normal or indicates a bigger
              problem, we offer free damp surveys. We&apos;ll take moisture readings, assess
              your ventilation, and give you honest advice - even if that advice is simply
              to open your windows more often.
            </p>
            <p>
              Many of the properties we survey turn out to have condensation issues rather
              than structural damp problems. When that&apos;s the case, we&apos;ll tell you
              and suggest appropriate solutions - we don&apos;t recommend treatments you don&apos;t need.
            </p>
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
                <p className="text-neutral-600 text-sm">How to tell the difference between these commonly confused problems.</p>
              </Link>
              <Link href="/condensation" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="font-bold mb-2">Condensation Solutions</h3>
                <p className="text-neutral-600 text-sm">Professional ventilation solutions for persistent condensation.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Concerned About Condensation?"
        description="Book a free survey and we'll identify whether it's normal condensation or something more serious."
      />
    </>
  );
}
