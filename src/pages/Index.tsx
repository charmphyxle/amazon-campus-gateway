import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import VerificationSection from "@/components/VerificationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AccreditationsSection from "@/components/AccreditationsSection";
import NewsEventsSection from "@/components/NewsEventsSection";
import InternationalSection from "@/components/InternationalSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <HeroSection />
      <ProgramsSection />
      <WhyChooseSection />
      <StatsSection />
      <FeaturesSection />
      <VerificationSection />
      <TestimonialsSection />
      <AccreditationsSection />
      <NewsEventsSection />
      <InternationalSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
