import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PartnersSlideshow from "@/components/PartnersSlideshow";
import WelcomeVisionSection from "@/components/WelcomeVisionSection";
import ProgramsSection from "@/components/ProgramsSection";
import EventsCalendar from "@/components/EventsCalendar";
import WhyChooseSection from "@/components/WhyChooseSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import VerificationSection from "@/components/VerificationSection";
import GalleryPreview from "@/components/GalleryPreview";
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
      <PartnersSlideshow />
      <WelcomeVisionSection />
      <ProgramsSection />
      <EventsCalendar />
      <WhyChooseSection />
      <StatsSection />
      <FeaturesSection />
      <VerificationSection />
      <GalleryPreview />
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
