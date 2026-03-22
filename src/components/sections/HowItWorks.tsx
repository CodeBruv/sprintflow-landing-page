const steps = [
  {
    number: "01",
    title: "Create your workspace",
    description: "Set up your team and projects quickly.",
  },
  {
    number: "02",
    title: "Add tasks and updates",
    description: "Keep everything structured and visible.",
  },
  {
    number: "03",
    title: "Stay aligned automatically",
    description: "No constant check-ins needed.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get your team in sync in minutes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 reveal-stagger">
          {steps.map((step) => (
            <div key={step.number} className="reveal text-center md:text-left">
              <span className="inline-block text-sm font-bold text-primary mb-3 tabular-nums">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
