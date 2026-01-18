import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTABanner } from "@/components/ui/CTABanner";
import { ArticleSchema } from "@/components/schema/ArticleSchema";

export const metadata: Metadata = {
  title: "Landlord's Guide to Damp: Legal Obligations | Essex",
  description: "Complete guide for landlords on damp and mould responsibilities. Legal obligations, tenant rights, and practical advice for managing damp in rental properties.",
  alternates: {
    canonical: "/blog/landlord-damp-obligations",
  },
  openGraph: {
    title: "Landlord's Guide to Damp: Legal Obligations",
    description: "Essential information for landlords on their legal responsibilities regarding damp and mould in rental properties.",
    url: "/blog/landlord-damp-obligations",
    type: "article",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Landlord's Guide to Damp", url: "/blog/landlord-damp-obligations" },
];

export default function LandlordDampObligationsPage() {
  return (
    <>
      <ArticleSchema
        headline="Landlord's Guide to Damp: Legal Obligations & Best Practice"
        description="A comprehensive guide for landlords on their legal responsibilities regarding damp and mould, plus practical advice for preventing tenant complaints."
        datePublished="2026-01-10"
        dateModified="2026-01-10"
        url="/blog/landlord-damp-obligations"
      />

      <section className="gradient-hero py-16 lg:py-24">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-primary-200 mb-4">
              <span>10 January 2026</span>
              <span>•</span>
              <span>10 min read</span>
            </div>
            <h1 className="text-white mb-6">Landlord&apos;s Guide to Damp: Legal Obligations & Best Practice</h1>
            <p className="text-xl text-primary-100">
              Everything landlords need to know about their responsibilities regarding
              damp and mould in rental properties, including recent legal changes.
            </p>
          </div>
        </div>
      </section>

      <article className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead">
              Damp and mould are among the most common complaints from tenants, and landlords&apos;
              responsibilities in this area have been strengthened significantly in recent years.
              Understanding your obligations is essential to avoid legal action and maintain
              good tenant relationships.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-8 not-prose">
              <h3 className="font-bold text-red-900 mb-3">Important: Awaab&apos;s Law</h3>
              <p className="text-red-800">
                Following the tragic death of two-year-old Awaab Ishak from mould exposure,
                new legislation requires landlords to address damp and mould hazards within
                specified timeframes. Social housing landlords must now fix hazards within
                strict deadlines, and similar requirements are expected for private landlords.
              </p>
            </div>

            <h2>Your Legal Obligations</h2>

            <h3>Section 11 of the Landlord and Tenant Act 1985</h3>
            <p>
              Under Section 11, landlords are responsible for keeping the structure and exterior
              of the property in repair. This includes:
            </p>
            <ul>
              <li>The roof, walls, and foundations</li>
              <li>Gutters, downpipes, and external drainage</li>
              <li>Windows and external doors</li>
              <li>Installations for water, gas, electricity, and sanitation</li>
            </ul>
            <p>
              If damp is caused by structural defects - such as a leaking roof, failed pointing,
              or broken guttering - the landlord is legally responsible for the repair.
            </p>

            <h3>Homes (Fitness for Human Habitation) Act 2018</h3>
            <p>
              This Act requires that properties are fit for human habitation throughout the
              tenancy. Damp and mould can make a property unfit if they pose a risk to health.
              Landlords can be taken to court if they fail to address these issues.
            </p>

            <h3>Housing Health and Safety Rating System (HHSRS)</h3>
            <p>
              Local authorities assess rental properties using HHSRS. Damp and mould growth
              is a Category 1 hazard (the most serious) if it presents a significant risk to
              health. If identified, the council can require landlords to take action.
            </p>

            <h2>What Are You Responsible For?</h2>

            <h3>Landlord Responsibilities</h3>
            <p>As a landlord, you are responsible for damp caused by:</p>
            <ul>
              <li><strong>Structural defects:</strong> Leaking roofs, failed pointing, cracked walls</li>
              <li><strong>Rising damp:</strong> Failed or absent damp proof course</li>
              <li><strong>Penetrating damp:</strong> Water ingress through walls or windows</li>
              <li><strong>Inadequate ventilation:</strong> If the property lacks sufficient ventilation</li>
              <li><strong>Blocked gutters/drains:</strong> External maintenance issues</li>
            </ul>

            <h3>Tenant Responsibilities</h3>
            <p>Tenants are generally responsible for:</p>
            <ul>
              <li>Using ventilation provided (extractor fans, trickle vents)</li>
              <li>Heating the property adequately</li>
              <li>Not blocking air vents</li>
              <li>Reporting damp problems promptly</li>
              <li>Lifestyle factors (excessive drying of clothes indoors, etc.)</li>
            </ul>

            <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 my-8 not-prose">
              <h3 className="font-bold text-primary-900 mb-3">Important Note</h3>
              <p className="text-primary-800">
                Even if condensation is caused by tenant lifestyle, if the property lacks
                adequate ventilation, the landlord may still be liable. Courts increasingly
                expect landlords to provide properties with sufficient ventilation for normal use.
              </p>
            </div>

            <h2>Common Damp Scenarios for Landlords</h2>

            <h3>Scenario 1: Tenant Reports Mould in Bedroom</h3>
            <p>
              <strong>First step:</strong> Arrange an inspection. Don&apos;t assume it&apos;s the tenant&apos;s
              fault. Check for:
            </p>
            <ul>
              <li>Ventilation provision (are there trickle vents, extractor fans?)</li>
              <li>Signs of penetrating damp from outside</li>
              <li>Window condition and seals</li>
              <li>General property ventilation</li>
            </ul>
            <p>
              If the property lacks adequate ventilation, consider installing a PIV system
              (£500-£900) which is often cheaper than ongoing disputes.
            </p>

            <h3>Scenario 2: Rising Damp in Victorian Terrace</h3>
            <p>
              This is clearly a landlord responsibility. Rising damp requires professional
              treatment - typically DPC injection and replastering. Costs for a terraced
              property are usually £1,500-£3,000, but failure to act can result in:
            </p>
            <ul>
              <li>Council enforcement action</li>
              <li>Tenant compensation claims</li>
              <li>Property damage worsening over time</li>
              <li>Difficulty re-letting the property</li>
            </ul>

            <h3>Scenario 3: Condensation Throughout Property</h3>
            <p>
              While lifestyle factors play a role, a property should be able to cope with
              normal levels of moisture production. If condensation is widespread, consider:
            </p>
            <ul>
              <li>Installing or upgrading extractor fans</li>
              <li>Adding trickle vents to windows</li>
              <li>Installing a PIV system for whole-house ventilation</li>
              <li>Providing tenants with clear guidance on ventilation</li>
            </ul>

            <h2>Best Practice for Landlords</h2>

            <h3>Prevention</h3>
            <ul>
              <li>Ensure adequate ventilation is installed before tenancy starts</li>
              <li>Service extractor fans annually</li>
              <li>Clear gutters regularly</li>
              <li>Address any damp issues before they worsen</li>
              <li>Include ventilation guidance in tenant welcome packs</li>
            </ul>

            <h3>When Issues Arise</h3>
            <ul>
              <li>Respond promptly to tenant reports (within 14 days)</li>
              <li>Get a professional damp survey - don&apos;t guess</li>
              <li>Document everything in writing</li>
              <li>Act on survey recommendations</li>
              <li>Follow up to ensure the issue is resolved</li>
            </ul>

            <h3>Documentation</h3>
            <ul>
              <li>Keep records of all repairs and maintenance</li>
              <li>Document tenant reports and your responses</li>
              <li>Retain survey reports and treatment certificates</li>
              <li>Photograph issues before and after treatment</li>
            </ul>

            <h2>The Cost of Inaction</h2>
            <p>
              Failing to address damp problems promptly can be far more expensive than fixing them:
            </p>
            <ul>
              <li><strong>Council enforcement:</strong> Improvement notices and potential fines</li>
              <li><strong>Rent repayment orders:</strong> Tenants can claim back rent for uninhabitable conditions</li>
              <li><strong>Compensation claims:</strong> For damage to tenant belongings and health impacts</li>
              <li><strong>Legal costs:</strong> If cases go to court</li>
              <li><strong>Property damage:</strong> Untreated damp causes increasingly costly damage</li>
              <li><strong>Void periods:</strong> Difficulty letting properties with known damp issues</li>
            </ul>

            <h2>Getting Professional Help</h2>
            <p>
              A professional damp survey (£150-£300) provides clarity on the cause of damp
              and the appropriate solution. This is money well spent because:
            </p>
            <ul>
              <li>It identifies the true cause (not guesswork)</li>
              <li>It provides evidence of due diligence</li>
              <li>It gives you a clear scope of works needed</li>
              <li>Survey reports are useful if disputes arise</li>
            </ul>

            <h2>Our Services for Landlords</h2>
            <p>
              We work with many landlords and letting agents across Essex. Our services include:
            </p>
            <ul>
              <li>Fast-turnaround damp surveys (usually within 5 working days)</li>
              <li>Clear written reports suitable for tenant communication</li>
              <li>Competitive pricing for multi-property portfolios</li>
              <li>Certificates and guarantees for compliance</li>
              <li>Advice on ventilation improvements</li>
            </ul>
          </div>
        </div>
      </article>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/damp-survey" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="font-bold mb-2">Damp Surveys</h3>
                <p className="text-neutral-600 text-sm">Professional surveys with reports suitable for compliance.</p>
              </Link>
              <Link href="/condensation" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="font-bold mb-2">Ventilation Solutions</h3>
                <p className="text-neutral-600 text-sm">PIV systems and extractor fans for rental properties.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Landlord Damp Surveys"
        description="Fast, professional surveys with clear reports. We work with landlords throughout Essex."
      />
    </>
  );
}
