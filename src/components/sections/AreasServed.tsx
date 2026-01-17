import Link from "next/link";
import { siteData } from "@/data/siteData";

export function AreasServed() {
  const mainLocations = siteData.serviceArea.locations.slice(0, 5);
  const otherLocations = siteData.serviceArea.locations.slice(5);

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">Areas We Serve in Essex</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            We provide damp proofing services throughout Essex, covering a 15-mile
            radius from Seven Kings. Our local team offers fast response times and
            expert knowledge of properties in your area.
          </p>
        </div>

        {/* Main Locations */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {mainLocations.map((location) => (
            <Link
              key={location.slug}
              href={`/rising-damp/locations/${location.slug}`}
              className="group bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all border border-neutral-200 hover:border-primary-300"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-600 transition-colors">
                <svg
                  className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                {location.name}
              </h3>
              <p className="text-sm text-neutral-500 mt-1">{location.postcode}</p>
            </Link>
          ))}
        </div>

        {/* Other Locations */}
        <div className="bg-white rounded-xl p-6 border border-neutral-200">
          <h3 className="font-semibold text-neutral-900 mb-4 text-center">
            We Also Cover:
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherLocations.map((location) => (
              <span
                key={location.slug}
                className="px-4 py-2 bg-neutral-100 rounded-full text-sm text-neutral-700"
              >
                {location.name}
              </span>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-neutral-600 mb-4">
              Postcodes covered: {siteData.serviceArea.postcodes.join(", ")}
            </p>
            <Link href="/contact" className="link text-sm">
              Not sure if we cover your area? Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
