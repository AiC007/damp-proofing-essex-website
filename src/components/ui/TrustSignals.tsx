import { siteData } from "@/data/siteData";

interface TrustSignalsProps {
  variant?: "light" | "dark";
  showCertifications?: boolean;
}

export function TrustSignals({ variant = "light", showCertifications = false }: TrustSignalsProps) {
  const bgClass = variant === "dark" ? "bg-primary-900" : "bg-neutral-50";
  const textClass = variant === "dark" ? "text-white" : "text-neutral-900";
  const subtextClass = variant === "dark" ? "text-primary-200" : "text-neutral-600";

  return (
    <section className={`${bgClass} py-12`}>
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {siteData.trustSignals.map((signal) => (
            <div key={signal.id} className="text-center">
              <div className={`text-4xl md:text-5xl font-bold ${textClass} mb-2`}>
                {signal.value}
              </div>
              <div className={`text-sm ${subtextClass}`}>{signal.label}</div>
            </div>
          ))}
        </div>

        {showCertifications && (
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <p className={`text-center text-sm ${subtextClass} mb-6`}>
              Trusted & Certified
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {siteData.certifications.map((cert) => (
                <div
                  key={cert.abbrev}
                  className={`px-6 py-3 rounded-lg border ${
                    variant === "dark"
                      ? "border-primary-700 bg-primary-800/50"
                      : "border-neutral-200 bg-white"
                  }`}
                >
                  <span
                    className={`font-semibold text-sm ${
                      variant === "dark" ? "text-white" : "text-neutral-700"
                    }`}
                  >
                    {cert.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
