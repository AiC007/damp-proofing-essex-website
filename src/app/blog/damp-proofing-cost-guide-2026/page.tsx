import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";
import { ArticleSchema } from "@/components/schema/ArticleSchema";

export const metadata: Metadata = {
  title: "Damp Proofing Costs 2026: Complete Price Guide | Essex",
  description: "Comprehensive damp proofing cost guide for 2026. Rising damp, penetrating damp, condensation treatment prices. Transparent pricing from Essex specialists.",
  alternates: {
    canonical: "/blog/damp-proofing-cost-guide-2026",
  },
  openGraph: {
    title: "Damp Proofing Costs 2026: Complete Price Guide",
    description: "Transparent pricing information for all damp proofing services in 2026. What affects costs and how to budget.",
    url: "/blog/damp-proofing-cost-guide-2026",
    type: "article",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Damp Proofing Costs 2026", url: "/blog/damp-proofing-cost-guide-2026" },
];

export default function DampProofingCostGuide2026Page() {
  return (
    <>
      <ArticleSchema
        headline="Damp Proofing Costs 2026: Complete Price Guide"
        description="Transparent pricing information for all damp proofing services in 2026, from surveys to full treatment. What affects costs and how to budget."
        datePublished="2026-01-05"
        dateModified="2026-01-05"
        url="/blog/damp-proofing-cost-guide-2026"
      />

      <section className="gradient-hero py-16 lg:py-24">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-primary-200 mb-4">
              <span>5 January 2026</span>
              <span>•</span>
              <span>9 min read</span>
            </div>
            <h1 className="text-white mb-6">Damp Proofing Costs 2026: Complete Price Guide</h1>
            <p className="text-xl text-primary-100">
              Transparent, up-to-date pricing for all damp proofing services.
              Know what to expect before you get quotes.
            </p>
          </div>
        </div>
      </section>

      <article className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead">
              Damp proofing costs vary widely depending on the type of damp, extent of the
              problem, and property type. This guide gives you realistic 2026 prices to
              help you budget and compare quotes.
            </p>

            <h2>Quick Reference: 2026 Prices</h2>

            <div className="not-prose overflow-x-auto my-8">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                <thead className="bg-primary-600 text-white">
                  <tr>
                    <th className="text-left p-4">Service</th>
                    <th className="text-left p-4">Price Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="p-4 font-medium">Damp Survey</td>
                    <td className="p-4">£150 - £300</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="p-4 font-medium">Rising Damp Treatment (terraced)</td>
                    <td className="p-4">£1,500 - £2,500</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Rising Damp Treatment (semi-detached)</td>
                    <td className="p-4">£2,500 - £4,000</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="p-4 font-medium">Rising Damp Treatment (detached)</td>
                    <td className="p-4">£3,500 - £6,000+</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Penetrating Damp Repair</td>
                    <td className="p-4">£300 - £2,500</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="p-4 font-medium">Condensation/Ventilation</td>
                    <td className="p-4">£300 - £2,000</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Basement Waterproofing</td>
                    <td className="p-4">£3,000 - £15,000</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="p-4 font-medium">Mould Removal</td>
                    <td className="p-4">£150 - £1,500</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Damp Survey Costs</h2>
            <p>
              A professional damp survey is the essential first step. Prices typically range
              from £150 for a basic survey to £300 for comprehensive surveys of larger properties.
            </p>
            <p>
              Many companies, including us, offer free surveys with no obligation. This is
              worthwhile as it gets you professional diagnosis and a quote without commitment.
            </p>

            <h2>Rising Damp Treatment Costs</h2>
            <p>
              Rising damp treatment involves two main elements: DPC injection and replastering.
              Both are usually essential for a lasting solution.
            </p>

            <h3>DPC Injection</h3>
            <ul>
              <li>Single skin wall (4.5&quot;): £60 per linear metre</li>
              <li>Double skin wall (9&quot;): £70 per linear metre</li>
              <li>Cavity wall: £80 per linear metre</li>
              <li>Thick solid wall (13.5&quot;+): £90+ per linear metre</li>
            </ul>

            <h3>Replastering</h3>
            <ul>
              <li>Standard height (to 1m): £45 per m²</li>
              <li>Extended height (to 1.5m): £50 per m²</li>
              <li>Full height: £55 per m²</li>
            </ul>

            <h3>Typical Total Costs</h3>
            <p>
              For a typical Essex property, expect:
            </p>
            <ul>
              <li><strong>Terraced house:</strong> £1,500 - £2,500 (usually one or two walls)</li>
              <li><strong>Semi-detached:</strong> £2,500 - £4,000 (multiple walls often affected)</li>
              <li><strong>Detached:</strong> £3,500 - £6,000+ (potentially full perimeter)</li>
            </ul>

            <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 my-8 not-prose">
              <h3 className="font-bold text-primary-900 mb-3">What&apos;s Included?</h3>
              <p className="text-primary-800 mb-3">
                Good quotes should include:
              </p>
              <ul className="space-y-1 text-primary-800">
                <li>• DPC injection with BBA-approved cream</li>
                <li>• Removal of salt-contaminated plaster</li>
                <li>• Application of specialist renovating plaster</li>
                <li>• All materials and labour</li>
                <li>• Waste removal</li>
                <li>• 20-year guarantee (insurance-backed)</li>
              </ul>
            </div>

            <h2>Penetrating Damp Costs</h2>
            <p>
              Penetrating damp repair costs vary enormously depending on the cause:
            </p>
            <ul>
              <li><strong>Repointing:</strong> £40-£60 per m²</li>
              <li><strong>Render repairs:</strong> £50-£80 per m²</li>
              <li><strong>Waterproofing treatment:</strong> £20-£35 per m²</li>
              <li><strong>Gutter/downpipe repairs:</strong> £100-£300</li>
              <li><strong>Window seal replacement:</strong> £50-£150 per window</li>
            </ul>
            <p>
              Most penetrating damp repairs cost between £300 and £2,500, depending on
              the extent of work required.
            </p>

            <h2>Condensation & Ventilation Costs</h2>
            <p>
              Condensation solutions range from simple fan installations to whole-house
              ventilation systems:
            </p>
            <ul>
              <li><strong>Extractor fan (bathroom/kitchen):</strong> £150-£400 installed</li>
              <li><strong>PIV system:</strong> £500-£900 installed</li>
              <li><strong>MVHR system:</strong> £2,000-£4,000 installed</li>
            </ul>
            <p>
              PIV (Positive Input Ventilation) systems offer the best value for most homes
              with condensation problems.
            </p>

            <h2>Basement Waterproofing Costs</h2>
            <p>
              Basement and cellar waterproofing is typically the most expensive damp treatment
              due to the complexity involved:
            </p>
            <ul>
              <li><strong>Cementitious tanking:</strong> £80-£120 per m²</li>
              <li><strong>Cavity drain system:</strong> £150-£250 per m²</li>
              <li><strong>Sump pump installation:</strong> £500-£1,500</li>
            </ul>
            <p>
              Total costs for basement waterproofing typically range from £3,000 for a small
              cellar to £15,000+ for a large basement conversion project.
            </p>

            <h2>Mould Removal Costs</h2>
            <ul>
              <li><strong>Surface treatment only:</strong> £150-£400 per room</li>
              <li><strong>Treatment + ventilation:</strong> £500-£1,200</li>
              <li><strong>Full remediation:</strong> £1,500+ (includes addressing root cause)</li>
            </ul>
            <p>
              Note: Treating mould without addressing the underlying moisture source is
              usually ineffective long-term.
            </p>

            <h2>What Affects the Price?</h2>

            <h3>Factors That Increase Cost</h3>
            <ul>
              <li>More walls affected</li>
              <li>Thicker walls (need more injection cream)</li>
              <li>Higher damp line (more replastering)</li>
              <li>Difficult access</li>
              <li>Period properties with original features</li>
              <li>Additional issues discovered during work</li>
            </ul>

            <h3>Factors That Might Reduce Cost</h3>
            <ul>
              <li>Smaller area affected</li>
              <li>Easy access</li>
              <li>Simple wall construction</li>
              <li>No replastering required (rare)</li>
            </ul>

            <h2>Getting Value for Money</h2>

            <h3>Do</h3>
            <ul>
              <li>Get at least 2-3 quotes to compare</li>
              <li>Check what&apos;s included in each quote</li>
              <li>Ask about guarantees (length, insurance-backing)</li>
              <li>Check if the company is PCA registered</li>
              <li>Ask what products they use (BBA-approved?)</li>
            </ul>

            <h3>Don&apos;t</h3>
            <ul>
              <li>Automatically choose the cheapest quote</li>
              <li>Accept vague quotes without itemised breakdown</li>
              <li>Pay large deposits upfront</li>
              <li>Accept pressure to decide immediately</li>
              <li>Ignore the need for replastering</li>
            </ul>

            <h2>Payment and Financing</h2>
            <p>
              Most damp proofing companies expect payment on completion. Some offer:
            </p>
            <ul>
              <li><strong>Staged payments:</strong> Deposit + balance on completion</li>
              <li><strong>Interest-free finance:</strong> Spread cost over 6-12 months</li>
              <li><strong>Credit options:</strong> For larger projects</li>
            </ul>
            <p>
              We offer interest-free payment plans for larger projects - ask during your
              survey if this would help.
            </p>

            <h2>Is It Worth the Cost?</h2>
            <p>
              Damp proofing is an investment in your property. Consider:
            </p>
            <ul>
              <li>Untreated damp causes increasing damage over time</li>
              <li>Damp can affect your health</li>
              <li>Damp issues affect property value</li>
              <li>Treatment comes with long-term guarantees</li>
              <li>Energy efficiency improves with dry walls</li>
            </ul>
          </div>
        </div>
      </article>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/cost-guide" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="font-bold mb-2">Full Cost Guide</h3>
                <p className="text-neutral-600 text-sm">Detailed pricing for all our services.</p>
              </Link>
              <Link href="/rising-damp/cost" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="font-bold mb-2">Rising Damp Costs</h3>
                <p className="text-neutral-600 text-sm">Specific pricing for rising damp treatment.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Get Your Free Quote"
        description="No-obligation survey with transparent, fixed-price quote. No hidden extras."
      />
    </>
  );
}
