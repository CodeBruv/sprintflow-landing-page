import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section id="cta" className="section-padding bg-sf-dark relative overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-primary/10 blur-3xl opacity-40" />
      </div>

      <div className="section-container text-center relative reveal">

        <h2 className="text-3xl md:text-4xl font-bold text-sf-dark-foreground mb-4 leading-tight">
          Your team isn’t the problem.
          <br />
          <span className="text-primary-foreground">
            Your workflow is.
          </span>
        </h2>

        <p className="text-sf-dark-foreground/70 text-lg max-w-[520px] mx-auto mb-8 leading-relaxed">
          SprintFlow gives you a clear system to manage tasks, track progress,
          and keep everyone aligned—without constant follow-ups.
        </p>

        {/* CTA */}
        <Button
          variant="hero"
          size="xl"
          asChild
          className="bg-primary-foreground text-sf-dark hover:bg-primary-foreground/90"
        >
          <a href="#contact">Start Free Trial →</a>
        </Button>

        {/* Micro trust */}
        <p className="mt-4 text-sm text-sf-dark-foreground/50">
          No credit card required · Setup in minutes
        </p>
      </div>
    </section>
  );
}