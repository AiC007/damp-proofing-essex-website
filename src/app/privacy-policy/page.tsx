import { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Privacy Policy | Essex Damp Solutions",
  description: "Privacy policy for Essex Damp Solutions. How we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Privacy Policy", url: "/privacy-policy" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="gradient-hero py-16">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="text-white">Privacy Policy</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead">
              This privacy policy explains how {siteData.business.name} collects, uses,
              and protects your personal information when you use our website or services.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul>
              <li>Name and contact details (phone number, email address)</li>
              <li>Property address and postcode</li>
              <li>Details about your damp problem</li>
              <li>Information you provide via our contact form</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Respond to your enquiries</li>
              <li>Arrange and conduct damp surveys</li>
              <li>Provide quotations for work</li>
              <li>Carry out damp proofing services</li>
              <li>Send you relevant information about our services (with your consent)</li>
            </ul>

            <h2>Data Protection</h2>
            <p>
              We are committed to ensuring your information is secure. We have implemented
              suitable physical, electronic, and managerial procedures to safeguard the
              information we collect.
            </p>

            <h2>Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience. Cookies are
              small files stored on your device that help us understand how you use our
              website. You can choose to disable cookies through your browser settings.
            </p>

            <h2>Third-Party Sharing</h2>
            <p>
              We do not sell, trade, or transfer your personal information to third parties
              without your consent, except where required by law or to provide our services
              (e.g., guarantee registration).
            </p>

            <h2>Your Rights</h2>
            <p>Under data protection law, you have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Request transfer of your data</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this privacy policy or your personal data,
              please contact us at:
            </p>
            <ul>
              <li>Email: {siteData.business.email}</li>
              <li>Phone: {siteData.business.phone}</li>
            </ul>

            <h2>Updates to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Any changes will be
              posted on this page with an updated revision date.
            </p>

            <p className="text-sm text-neutral-500 mt-8">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
