import { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ContactForm } from "@/components/ui/ContactForm";
import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Contact Us | Essex Damp Solutions - Free Surveys",
  description: "Contact Essex Damp Solutions for free damp surveys and quotes. Call us today or use our online form. Serving Essex, East London, and surrounding areas.",
  alternates: {
    canonical: "/contact",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Contact", url: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <section className="gradient-hero py-16 lg:py-24">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl">
            <h1 className="text-white mb-6">Contact Us</h1>
            <p className="text-xl text-primary-100 mb-8">
              Get in touch for a free damp survey and no-obligation quote.
              We respond to all enquiries within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6">Get in Touch</h2>
              <p className="text-neutral-600 mb-8">
                Whether you have a question about damp problems, want to book a survey,
                or need advice on treatment options, we&apos;re here to help. Fill in the
                form and we&apos;ll get back to you promptly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <a href={`tel:${siteData.business.phone.replace(/\s/g, "")}`} className="text-primary-600 hover:text-primary-700 font-semibold text-lg">
                      {siteData.business.phone}
                    </a>
                    <p className="text-neutral-500 text-sm">Mon-Fri 8am-6pm, Sat 9am-1pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a href={`mailto:${siteData.business.email}`} className="text-primary-600 hover:text-primary-700 font-semibold">
                      {siteData.business.email}
                    </a>
                    <p className="text-neutral-500 text-sm">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Service Area</h3>
                    <p className="text-neutral-600">
                      Essex, East London & surrounding areas
                    </p>
                    <p className="text-neutral-500 text-sm">15-mile radius from Seven Kings</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-primary-50 rounded-xl p-6">
                <h3 className="font-bold text-primary-900 mb-3">What Happens Next?</h3>
                <ol className="space-y-2 text-primary-800 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="bg-primary-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                    <span>We&apos;ll call you within 24 hours to discuss your enquiry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                    <span>We&apos;ll arrange a convenient time for your free survey</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                    <span>You&apos;ll receive a written report and fixed-price quote</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                    <span>No pressure - take your time to decide</span>
                  </li>
                </ol>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl shadow-lg p-8 border border-neutral-200">
                <h2 className="text-xl font-bold mb-6">Request a Free Survey</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-center mb-8">Areas We Cover</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Seven Kings",
                "Ilford",
                "Barking",
                "Dagenham",
                "Romford",
                "Hornchurch",
                "Upminster",
                "Rainham",
                "Chadwell Heath",
                "Goodmayes",
                "Becontree",
                "Harold Wood",
                "Gidea Park",
                "Collier Row",
                "East Ham",
                "Manor Park",
              ].map((area, i) => (
                <div key={i} className="flex items-center gap-2 text-neutral-600">
                  <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {area}
                </div>
              ))}
            </div>
            <p className="text-center text-neutral-500 mt-6">
              And all surrounding areas within 15 miles of Seven Kings, Essex
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-primary-900 text-white rounded-xl p-8 lg:p-12 text-center">
            <h2 className="text-white mb-4">Prefer to Call?</h2>
            <p className="text-primary-200 mb-6 max-w-2xl mx-auto">
              Speak directly with our team about your damp problem. We&apos;re available
              Monday to Friday 8am-6pm and Saturday 9am-1pm.
            </p>
            <a href={`tel:${siteData.business.phone.replace(/\s/g, "")}`} className="btn btn-lg bg-white text-primary-700 hover:bg-neutral-100">
              Call: {siteData.business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
