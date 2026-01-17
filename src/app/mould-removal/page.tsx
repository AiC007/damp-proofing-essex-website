import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FAQ } from "@/components/ui/FAQ";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Mould Removal Essex | Professional Black Mould Treatment",
  description: "Professional mould removal and treatment in Essex. We eliminate black mould and fix the underlying cause. Safe, effective treatment with long-term prevention. Free surveys.",
  alternates: {
    canonical: "/mould-removal",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Mould Removal", url: "/mould-removal" },
];

const faqs = [
  {
    question: "Is black mould dangerous?",
    answer: "Yes, black mould (Stachybotrys chartarum and other species) can cause health problems. Mould spores can trigger allergic reactions, asthma attacks, respiratory infections, and other health issues. Children, the elderly, and those with respiratory conditions are most at risk. It's important to address mould promptly."
  },
  {
    question: "Can I remove mould myself?",
    answer: "Small areas of surface mould (less than 1 square metre) can often be cleaned with appropriate mould removal products. However, if mould covers a larger area, keeps returning, or you have health concerns, professional treatment is recommended. We can identify and fix the underlying cause to prevent recurrence."
  },
  {
    question: "How do you remove mould?",
    answer: "We use professional-grade fungicidal treatments to kill mould spores and remove staining. Where mould has penetrated deeply, affected materials may need removal. Crucially, we identify and address the underlying moisture source - whether condensation, penetrating damp, or rising damp - to prevent regrowth."
  },
  {
    question: "How much does professional mould removal cost?",
    answer: "Costs depend on the extent of the mould and the underlying cause. Surface treatment typically costs £150-£400 per room. If the cause is condensation requiring ventilation, add £300-£900 for a PIV system. Rising or penetrating damp will have additional costs. We provide full quotes after survey."
  },
  {
    question: "How long does mould treatment take?",
    answer: "Treatment application typically takes a few hours to a day depending on the extent. The surface treatment dries within 24 hours. However, if underlying damp issues need fixing (new DPC, ventilation, etc.), this adds time. We schedule treatments efficiently to minimise disruption."
  },
];

export default function MouldRemovalPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Mould Removal"
        serviceDescription="Professional mould removal and treatment in Essex. We eliminate black mould and address the underlying cause to prevent recurrence."
        serviceUrl="/mould-removal"
        priceRange="£150 - £1,500"
      />

      <section className="gradient-hero py-16 lg:py-24">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl">
            <h1 className="text-white mb-6">Mould Removal in Essex</h1>
            <p className="text-xl text-primary-100 mb-8">
              Professional mould treatment that eliminates the problem at its source.
              We remove existing mould and fix the underlying cause to stop it returning.
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
              <h2 className="mb-6">Understanding Mould in Your Home</h2>
              <p className="text-neutral-600 mb-4">
                Mould is a fungus that grows wherever there&apos;s moisture and organic material
                to feed on. In homes, this usually means damp walls, ceilings, or areas with
                poor ventilation. Black mould is the most common and recognisable type, but
                mould can appear in various colours including green, grey, and white.
              </p>
              <p className="text-neutral-600 mb-4">
                The key to successful mould removal isn&apos;t just killing the visible mould -
                it&apos;s identifying and fixing the moisture source that allowed it to grow.
                Without addressing the underlying cause, mould will keep returning no matter
                how many times you clean it.
              </p>
              <p className="text-neutral-600 mb-6">
                Common causes of mould include condensation (the most frequent), penetrating
                damp from building defects, rising damp, and water leaks from plumbing or roofs.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="font-bold text-red-900 mb-3">Health Warning Signs</h3>
                <p className="text-red-800 text-sm mb-3">
                  If you or family members experience these symptoms that improve when away from home,
                  mould could be the cause:
                </p>
                <ul className="space-y-2 text-red-800 text-sm">
                  <li>• Persistent coughing or wheezing</li>
                  <li>• Worsening asthma symptoms</li>
                  <li>• Allergic reactions (sneezing, itchy eyes)</li>
                  <li>• Skin irritation or rashes</li>
                  <li>• Headaches or fatigue</li>
                </ul>
              </div>
            </div>
            <div className="bg-neutral-100 rounded-xl p-8">
              <div className="aspect-video bg-gradient-to-br from-neutral-300 to-neutral-400 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-24 h-24 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <p className="text-neutral-500 text-center text-sm">
                Mould is a health hazard that requires professional treatment
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-center mb-4">Where Mould Grows</h2>
          <p className="text-lg text-neutral-600 text-center max-w-3xl mx-auto mb-12">
            Mould thrives in specific conditions. Understanding where it grows helps identify the cause.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                location: "Window Reveals & Sills",
                cause: "Condensation from cold bridging",
                solution: "Improved ventilation, secondary glazing, or insulation"
              },
              {
                location: "Corners of Rooms",
                cause: "Poor air circulation, cold spots",
                solution: "PIV system, furniture spacing from walls"
              },
              {
                location: "Behind Furniture",
                cause: "Blocked airflow on cold external walls",
                solution: "Gap furniture from walls, improve heating/ventilation"
              },
              {
                location: "Bathroom Ceilings",
                cause: "High humidity from bathing/showering",
                solution: "Extractor fan, improved ventilation"
              },
              {
                location: "Kitchen Walls",
                cause: "Steam from cooking, drying clothes",
                solution: "Extractor hood, ventilation, moisture management"
              },
              {
                location: "Wardrobes & Cupboards",
                cause: "Enclosed spaces with poor airflow",
                solution: "Ventilated doors, don't overfill, allow air circulation"
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold mb-2">{item.location}</h3>
                <p className="text-neutral-600 text-sm mb-2"><strong>Cause:</strong> {item.cause}</p>
                <p className="text-primary-700 text-sm"><strong>Solution:</strong> {item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Mould Treatment Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Survey", desc: "Identify the type and extent of mould, and crucially, the underlying moisture source" },
              { step: "2", title: "Treatment", desc: "Apply professional fungicidal treatment to kill all mould spores and remove staining" },
              { step: "3", title: "Root Cause", desc: "Fix the underlying moisture problem - ventilation, damp proofing, or repairs" },
              { step: "4", title: "Prevention", desc: "Advise on ongoing measures to prevent mould returning in the future" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white mb-6">Mould Causes & Solutions</h2>
              <p className="text-primary-200 mb-6">
                Different types of damp cause mould in different ways. We identify which
                type you have and provide the appropriate solution.
              </p>
              <div className="space-y-4">
                <div className="bg-primary-800 rounded-lg p-4">
                  <h3 className="font-bold text-white mb-2">Condensation (Most Common)</h3>
                  <p className="text-primary-200 text-sm">
                    Caused by poor ventilation and excess moisture in the air. Solution: PIV systems,
                    extractor fans, lifestyle changes.
                    <Link href="/condensation" className="text-secondary-400 hover:underline ml-1">
                      Learn more →
                    </Link>
                  </p>
                </div>
                <div className="bg-primary-800 rounded-lg p-4">
                  <h3 className="font-bold text-white mb-2">Penetrating Damp</h3>
                  <p className="text-primary-200 text-sm">
                    Water entering through building defects. Solution: External repairs, pointing,
                    render, waterproofing.
                    <Link href="/penetrating-damp" className="text-secondary-400 hover:underline ml-1">
                      Learn more →
                    </Link>
                  </p>
                </div>
                <div className="bg-primary-800 rounded-lg p-4">
                  <h3 className="font-bold text-white mb-2">Rising Damp</h3>
                  <p className="text-primary-200 text-sm">
                    Ground moisture rising through walls. Solution: DPC injection, replastering.
                    <Link href="/rising-damp" className="text-secondary-400 hover:underline ml-1">
                      Learn more →
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-primary-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Mould Prevention Tips</h3>
              <ul className="space-y-4">
                {[
                  "Ventilate your home daily - open windows for at least 15 minutes",
                  "Use extractor fans when cooking and bathing",
                  "Keep heating on low consistently rather than high for short bursts",
                  "Don't dry clothes on radiators - use a vented tumble dryer or outdoors",
                  "Leave gaps behind furniture on external walls",
                  "Keep wardrobes and cupboards slightly open for airflow",
                  "Wipe condensation from windows in the morning",
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-primary-100">
                    <svg className="w-5 h-5 text-secondary-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-center mb-12">Mould Treatment Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200">
              <h3 className="text-lg font-bold mb-3">Surface Treatment</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Professional fungicidal treatment to kill mould and remove staining from
                walls and ceilings.
              </p>
              <p className="text-primary-700 font-semibold">£150-£400 per room</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200">
              <h3 className="text-lg font-bold mb-3">Treatment + Ventilation</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Surface treatment plus installation of ventilation system to prevent
                recurrence.
              </p>
              <p className="text-primary-700 font-semibold">£500-£1,200</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-200">
              <h3 className="text-lg font-bold mb-3">Full Remediation</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Complete solution including treatment, damp proofing works, replastering,
                and ventilation.
              </p>
              <p className="text-primary-700 font-semibold">From £1,500+</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} title="Mould Removal FAQs" />

      <CTABanner
        title="Got a Mould Problem?"
        description="Book a free survey and we'll identify the cause and provide a lasting solution."
      />
    </>
  );
}
