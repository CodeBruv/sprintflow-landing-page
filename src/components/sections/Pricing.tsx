import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface Plan {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["Up to 5 team members", "Core features", "Basic support"],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "per user / month",
    features: [
      "Unlimited team members",
      "Advanced workflow tools",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
];

export default function Pricing() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCTA = () => {
    // If already on homepage → scroll directly
    if (location.pathname === "/") {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // If on another page → go home first, then scroll
      navigate("/");

      setTimeout(() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 80);
    }
  };

  return (
    <section id="pricing" className="section-padding bg-sf-surface">
      <div className="section-container">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple pricing that scales with your team
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-[720px] mx-auto reveal-stagger">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`reveal rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg ${
                plan.highlighted
                  ? "border-primary bg-sf-surface-elevated shadow-md ring-1 ring-primary/10"
                  : "border-border bg-sf-surface-elevated"
              }`}
            >
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {plan.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-foreground tabular-nums">
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  /{plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Check size={16} className="text-sf-green shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "hero" : "hero-outline"}
                size="lg"
                className="w-full"
                onClick={handleCTA}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}