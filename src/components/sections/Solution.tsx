import dashboardImg from "@/assets/dashboard-mockup.png";

export default function Solution() {
  return (
    <section className="section-padding">
      <div className="section-container grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image */}
        <div className="reveal order-2 md:order-1">
          <img
            src={dashboardImg}
            alt="SprintFlow dashboard overview showing aligned team workflow"
            className="w-full rounded-2xl shadow-xl border border-border hover:shadow-2xl transition-shadow duration-500"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div className="reveal order-1 md:order-2" style={{ transitionDelay: "100ms" }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            One place where your team actually stays aligned
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            SprintFlow brings structure to your workflow without adding
            complexity. Track work, share updates, and keep everyone
            aligned—without constant meetings.
          </p>
        </div>
      </div>
    </section>
  );
}
