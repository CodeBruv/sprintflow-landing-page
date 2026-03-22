import { MessageSquare, CheckCircle2, Calendar, Feather } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: MessageSquare,
    title: "Async Team Updates",
    description:
      "Share progress without scheduling another meeting. Everyone stays informed on their own time.",
  },
  {
    icon: CheckCircle2,
    title: "Task Clarity",
    description:
      "See who's doing what, what's blocked, and what shipped—all in one glance.",
  },
  {
    icon: Calendar,
    title: "Team Timeline",
    description:
      "A shared timeline of milestones, launches, and deadlines that keeps the whole team oriented.",
  },
  {
    icon: Feather,
    title: "Lightweight by Design",
    description:
      "No bloated features. Just the essentials your team needs to stay aligned and move fast.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section-padding bg-sf-surface">
      <div className="section-container">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything your team needs, nothing it doesn't
          </h2>
          <p className="text-muted-foreground text-lg max-w-[520px] mx-auto">
            Focused tools that solve real collaboration problems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger">
          {features.map((f) => (
            <div
              key={f.title}
              className="reveal bg-sf-surface-elevated rounded-2xl p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <f.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
