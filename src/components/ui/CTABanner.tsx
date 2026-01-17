import Link from "next/link";
import { siteData } from "@/data/siteData";

interface CTABannerProps {
  title?: string;
  description?: string;
  variant?: "primary" | "accent";
  showPhone?: boolean;
}

export function CTABanner({
  title = "Ready to Fix Your Damp Problem?",
  description = "Get a free, no-obligation survey from our expert team. We'll diagnose the problem and provide a clear solution.",
  variant = "primary",
  showPhone = true,
}: CTABannerProps) {
  const bgClass =
    variant === "accent"
      ? "bg-gradient-to-r from-accent-500 to-accent-600"
      : "gradient-hero";

  return (
    <section className={`${bgClass} py-16`}>
      <div className="container-custom">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {showPhone && (
              <a
                href={`tel:${siteData.business.phone.replace(/\s/g, "")}`}
                className="btn btn-lg bg-white text-primary-700 hover:bg-neutral-100"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call: {siteData.business.phone}
              </a>
            )}
            <Link
              href="/contact"
              className={`btn btn-lg ${
                variant === "accent"
                  ? "bg-primary-700 text-white hover:bg-primary-800"
                  : "bg-accent-500 text-white hover:bg-accent-600"
              }`}
            >
              Get Free Survey
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
          <p className="mt-6 text-white/80 text-sm">
            Available 7 days a week, 8am - 8pm | 24/7 Emergency Service
          </p>
        </div>
      </div>
    </section>
  );
}
