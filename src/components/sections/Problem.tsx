export default function Problem() {
  const pain = [
    "Tasks live in one tool",
    "Conversations happen somewhere else",
    "Updates get lost in endless threads",
  ];

  return (
    <section className="section-padding bg-sf-surface">
      <div className="section-container max-w-[680px] text-center">
        <div className="reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Remote work shouldn't feel this messy
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Your team is working, but everything feels scattered.
          </p>
        </div>

        <ul className="space-y-3 mb-8 reveal" style={{ transitionDelay: "100ms" }}>
          {pain.map((item) => (
            <li
              key={item}
              className="text-muted-foreground text-base flex items-center justify-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-foreground/20 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <p className="text-muted-foreground text-lg leading-relaxed reveal" style={{ transitionDelay: "200ms" }}>
          You spend more time asking for clarity than actually moving work
          forward.
        </p>
      </div>
    </section>
  );
}
