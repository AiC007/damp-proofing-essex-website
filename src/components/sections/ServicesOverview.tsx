import { siteData } from "@/data/siteData";
import { ServiceCard } from "@/components/ui/ServiceCard";
import Link from "next/link";

interface ServicesOverviewProps {
  title?: string;
  description?: string;
  showAll?: boolean;
}

export function ServicesOverview({
  title = "Our Damp Proofing Services",
  description = "We provide comprehensive damp diagnosis and treatment services across Essex. Whatever the cause of your damp problem, we have the expertise and equipment to fix it permanently.",
  showAll = false,
}: ServicesOverviewProps) {
  const services = showAll
    ? siteData.services
    : siteData.services.filter((s) => s.featured);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">{title}</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              slug={service.slug}
              shortDescription={service.shortDescription}
              icon={service.icon}
              priceRange={service.priceRange}
              featured={service.featured}
            />
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-10">
            <Link href="/rising-damp" className="btn-outline">
              View All Services
              <svg
                className="w-4 h-4 ml-2"
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
        )}
      </div>
    </section>
  );
}
