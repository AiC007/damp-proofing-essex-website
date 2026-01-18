import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Damp Proofing Blog | Expert Advice & Guides",
  description: "Expert advice on damp proofing, rising damp, condensation, and moisture problems. Guides, tips, and information from Essex damp specialists.",
  alternates: {
    canonical: "/blog",
  },
};

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
];

const blogPosts = [
  {
    title: "Rising Damp vs Condensation: How to Tell the Difference",
    excerpt: "Learn the key differences between rising damp and condensation, with practical tests you can do yourself to identify which problem you have.",
    slug: "rising-damp-vs-condensation",
    date: "2026-01-15",
    readTime: "8 min read",
  },
  {
    title: "Why Foggy Windows Don't Always Mean Damp Problems",
    excerpt: "Condensation on windows is common, but it doesn't always indicate a serious damp issue. Learn when to worry and when it's normal.",
    slug: "foggy-windows-damp",
    date: "2026-01-12",
    readTime: "6 min read",
  },
  {
    title: "Landlord's Guide to Damp: Legal Obligations & Best Practice",
    excerpt: "A comprehensive guide for landlords on their legal responsibilities regarding damp and mould, plus practical advice for preventing tenant complaints.",
    slug: "landlord-damp-obligations",
    date: "2026-01-10",
    readTime: "10 min read",
  },
  {
    title: "How to Tell If You Have Rising Damp: A Complete Guide",
    excerpt: "A step-by-step guide to identifying rising damp in your property, including the signs to look for and common misdiagnoses to avoid.",
    slug: "how-to-tell-rising-damp",
    date: "2026-01-08",
    readTime: "7 min read",
  },
  {
    title: "Damp Proofing Costs 2026: Complete Price Guide",
    excerpt: "Transparent pricing information for all damp proofing services in 2026, from surveys to full treatment. What affects costs and how to budget.",
    slug: "damp-proofing-cost-guide-2026",
    date: "2026-01-05",
    readTime: "9 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="gradient-hero py-16 lg:py-24">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl">
            <h1 className="text-white mb-6">Damp Proofing Blog</h1>
            <p className="text-xl text-primary-100">
              Expert advice, guides, and tips on identifying and treating damp problems
              in your home. Written by our PCA-qualified surveyors.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-200 hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <svg className="w-16 h-16 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                    <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-neutral-600 text-sm">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
