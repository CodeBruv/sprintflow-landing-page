import { Button } from "@/components/ui/button";
import dashboardImg from "@/assets/dashboard-mockup.png";

export default function Hero() {
  return (
    <section className="section-padding pt-32 md:pt-40">
      <div className="section-container grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text */}
        <div className="reveal">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08] mb-6">
            Run your remote team
            <br className="hidden sm:block" /> without the chaos
          </h1>
          <p className="text-lg text-muted-foreground max-w-[480px] mb-8 leading-relaxed">
            SprintFlow brings your tasks, updates, and team communication into one
            clear workflow—so you spend less time chasing updates and more time
            shipping.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <Button variant="hero" size="xl">
              Start Free Trial
            </Button>
            <Button variant="hero-outline" size="xl">
              See How It Works
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            No credit card required&nbsp;·&nbsp;Setup in under 5 minutes
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="reveal" style={{ transitionDelay: "120ms" }}>
          <div className="relative">
            <img
              src={dashboardImg}
              alt="SprintFlow dashboard showing task board with To Do, In Progress, and Done columns"
              className="w-full rounded-2xl shadow-2xl border border-border animate-float"
              loading="eager"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
