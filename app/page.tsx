import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyWhiteLoop from "@/components/sections/WhyWhiteLoop";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import FooterSection from "@/components/sections/FooterSection";
import StickyCTA from "@/components/sections/StickyCTA";
import TestimonialsSection from "@/components/sections/TestimonialSection";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "hsl(0 0% 2%)" }}>
      <Navbar />
      <HeroSection />
      <TestimonialsSection />
      <ProblemSection />
      <HowItWorks />
      <WhyWhiteLoop />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <FooterSection />
      <StickyCTA />
    </div>
  );
};

export default Index;
