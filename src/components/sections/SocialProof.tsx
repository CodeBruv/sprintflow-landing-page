const companies = ["NovaLabs", "PixelCraft", "Syncly", "OrbitHQ"];

const testimonials = [
  {
    quote: "We cut our weekly meetings in half within the first 2 weeks.",
    author: "Product Lead",
    company: "NovaLabs",
  },
  {
    quote: "SprintFlow gave us clarity we didn't even realize we were missing.",
    author: "Founder",
    company: "Syncly",
  },
];

export default function SocialProof() {
  return (
    <section className="section-padding pb-16 md:pb-20">
      <div className="section-container">
        {/* Logo row */}
        <div className="reveal text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
            Used by fast-moving teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {companies.map((name) => (
              <span
                key={name}
                className="text-lg font-semibold text-foreground/25 hover:text-foreground transition-colors duration-300 select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 reveal-stagger">
          {testimonials.map((t) => (
            <blockquote
              key={t.company}
              className="reveal bg-sf-surface rounded-2xl p-8 border border-border"
            >
              <p className="text-foreground text-lg leading-relaxed mb-4">
                "{t.quote}"
              </p>
              <footer className="text-sm text-muted-foreground">
                — {t.author}, {t.company}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
