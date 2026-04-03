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
            clear workflow, so you spend less time chasing updates and more time
            shipping.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">

            {/* PRIMARY CTA */}
            <Button
              variant="hero"
              size="xl"
              asChild
            >
              <a href="#contact">Start Free Trial</a>
            </Button>

            {/* SECONDARY CTA */}
            <Button
              variant="hero-outline"
              size="xl"
              asChild
            >
              <a href="#how-it-works">See How It Works</a>
            </Button>

          </div>

          <p className="text-sm text-muted-foreground">
            No credit card required · Setup in under 5 minutes
          </p>
        </div>

        {/* Dashboard */}
        <div className="reveal" style={{ transitionDelay: "120ms" }}>
          <div className="relative">
            <img
              src={dashboardImg}
              alt="SprintFlow dashboard showing task board"
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