import { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Terms & Conditions | Essex Damp Solutions",
  description: "Terms and conditions for Essex Damp Solutions services. Important information about our damp proofing services and guarantees.",
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Terms & Conditions", url: "/terms" },
];

export default function TermsPage() {
  return (
    <>
      <section className="gradient-hero py-16">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="text-white">Terms & Conditions</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead">
              These terms and conditions govern your use of the {siteData.business.name}{" "}
              website and our damp proofing services.
            </p>

            <h2>Services</h2>
            <p>
              We provide damp proofing surveys, diagnosis, and treatment services across
              Essex and surrounding areas. All work is carried out by qualified professionals
              in accordance with industry standards.
            </p>

            <h2>Quotations</h2>
            <ul>
              <li>All quotations are valid for 30 days from the date of issue</li>
              <li>Quotations are based on the conditions observed at survey</li>
              <li>Additional work discovered during treatment may incur extra costs, which will be discussed before proceeding</li>
              <li>Prices include VAT where applicable</li>
            </ul>

            <h2>Payment Terms</h2>
            <ul>
              <li>A deposit may be required for larger projects</li>
              <li>Balance is due on completion of work</li>
              <li>We accept payment by bank transfer, card, or cheque</li>
              <li>Interest-free payment plans are available for qualifying customers</li>
            </ul>

            <h2>Guarantees</h2>
            <ul>
              <li>DPC injection work carries a 20-year guarantee</li>
              <li>Guarantees are insurance-backed for your protection</li>
              <li>Guarantees are transferable to new property owners</li>
              <li>Guarantee conditions are detailed in your certificate</li>
            </ul>

            <h2>Our Obligations</h2>
            <p>We will:</p>
            <ul>
              <li>Carry out work with reasonable care and skill</li>
              <li>Use materials of satisfactory quality</li>
              <li>Complete work within a reasonable timeframe</li>
              <li>Leave the work area clean and tidy</li>
              <li>Provide appropriate certificates and documentation</li>
            </ul>

            <h2>Customer Obligations</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate information about your property</li>
              <li>Allow reasonable access to carry out work</li>
              <li>Clear the work area of furniture and belongings</li>
              <li>Make payment in accordance with agreed terms</li>
            </ul>

            <h2>Cancellation</h2>
            <p>
              You have the right to cancel within 14 days of accepting a quotation,
              provided work has not commenced. If work has started, you may be liable
              for costs incurred to date.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              Our liability is limited to the value of the work undertaken. We are not
              liable for consequential losses. This does not affect your statutory rights.
            </p>

            <h2>Disputes</h2>
            <p>
              In the event of a dispute, we encourage you to contact us directly to resolve
              the matter. If we cannot reach a resolution, the matter may be referred to
              the Property Care Association for mediation.
            </p>

            <h2>Website Use</h2>
            <p>
              The content on this website is for general information purposes. While we
              strive for accuracy, we make no warranties about completeness or reliability.
              Prices and services are subject to change.
            </p>

            <h2>Contact</h2>
            <p>For questions about these terms, please contact us:</p>
            <ul>
              <li>Email: {siteData.business.email}</li>
              <li>Phone: {siteData.business.phone}</li>
            </ul>

            <p className="text-sm text-neutral-500 mt-8">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
