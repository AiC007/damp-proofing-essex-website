export function ProcessSteps() {
  const steps = [
    {
      number: "1",
      title: "Free Survey",
      description: "We conduct a thorough inspection of your property using professional moisture meters to identify the type and extent of damp.",
    },
    {
      number: "2",
      title: "Detailed Report",
      description: "You receive a comprehensive report explaining the cause of the damp, recommended treatment options, and a clear, itemised quote.",
    },
    {
      number: "3",
      title: "Professional Treatment",
      description: "Our certified technicians carry out the agreed work using industry-leading products and techniques for a lasting solution.",
    },
    {
      number: "4",
      title: "20 Year Guarantee",
      description: "All work comes with our comprehensive guarantee, giving you complete peace of mind and protecting your investment.",
    },
  ];

  return (
    <section className="section-padding bg-primary-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">How It Works</h2>
          <p className="text-lg text-primary-200 max-w-3xl mx-auto">
            From your first call to a damp-free home, we make the process simple
            and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary-700 -translate-x-1/2 z-0" />
              )}

              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-primary-200 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
