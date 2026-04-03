import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import FinalCTA from "@/components/sections/FinalCTA";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Index() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <Pricing />
        <FinalCTA />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
