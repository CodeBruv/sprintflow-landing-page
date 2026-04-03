import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="section-container max-w-2xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Start your free trial
        </motion.h2>

        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          Get your team organized in minutes. No credit card required.
        </p>

        {/* FORM */}
        <form
          action="https://formspree.io/f/yourformid"
          method="POST"
          className="space-y-4 text-left"
        >

          {/* Name */}
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full p-4 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            required
            placeholder="Work Email"
            className="w-full p-4 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
          />

          {/* Team size (SaaS touch) */}
          <select
            name="team_size"
            required
            className="w-full p-4 border border-border rounded-lg bg-background text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            <option value="">Team size</option>
            <option value="1-5">1–5 people</option>
            <option value="6-20">6–20 people</option>
            <option value="21-50">21–50 people</option>
            <option value="50+">50+ people</option>
          </select>

          {/* Hidden config */}
          <input type="hidden" name="_subject" value="New SprintFlow Signup" />
          <input type="hidden" name="_captcha" value="false" />

          {/* CTA */}
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold hover:brightness-110 transition-all shadow-lg shadow-primary/20"
          >
            Create My Workspace →
          </button>

          {/* Trust */}
          <p className="text-xs text-muted-foreground text-center">
            No spam. Cancel anytime.
          </p>
        </form>
      </div>
    </section>
  );
}