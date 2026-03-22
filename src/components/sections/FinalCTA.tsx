import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="section-padding bg-sf-dark">
      <div className="section-container text-center reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-sf-dark-foreground mb-4">
          Stop chasing updates. Start shipping faster.
        </h2>
        <p className="text-sf-dark-foreground/60 text-lg max-w-[520px] mx-auto mb-8 leading-relaxed">
          Join teams using SprintFlow to stay aligned and move work forward,
          without the chaos.
        </p>
        <Button
          variant="hero"
          size="xl"
          className="bg-primary-foreground text-sf-dark hover:bg-primary-foreground/90"
        >
          Start Free Trial
        </Button>
      </div>
    </section>
  );
}
