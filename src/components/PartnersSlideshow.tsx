import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import logo images
import university1 from "@/assets/logos/university-1.png";
import accreditation1 from "@/assets/logos/accreditation-1.png";
import partner1 from "@/assets/logos/partner-1.png";
import university2 from "@/assets/logos/university-2.png";
import accreditation2 from "@/assets/logos/accreditation-2.png";
import partner2 from "@/assets/logos/partner-2.png";
import university3 from "@/assets/logos/university-3.png";
import accreditation3 from "@/assets/logos/accreditation-3.png";

const PartnersSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const partners = [
    { logo: university1, name: "Global University Network", type: "University Partner" },
    { logo: accreditation1, name: "International Education Council", type: "Accreditation Body" },
    { logo: partner1, name: "World Education Alliance", type: "Strategic Partner" },
    { logo: university2, name: "Technology Institute", type: "University Partner" },
    { logo: accreditation2, name: "Quality Assurance Board", type: "Accreditation Body" },
    { logo: partner2, name: "Global Partnership Network", type: "Strategic Partner" },
    { logo: university3, name: "International Business School", type: "University Partner" },
    { logo: accreditation3, name: "Standards Organization", type: "Accreditation Body" },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, partners.length - 4));
    }, 3000);
    return () => clearInterval(timer);
  }, [partners.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, partners.length - 4));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, partners.length - 4)) % Math.max(1, partners.length - 4));
  };

  const visiblePartners = partners.slice(currentIndex, currentIndex + 5);

  return (
    <section className="py-12 bg-muted/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-muted/50 via-background to-muted/50" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Trusted Partners & Accreditations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Amazon College is proudly affiliated with leading universities, accreditation bodies, 
            and international organizations that recognize our commitment to educational excellence.
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-background/80 hover:bg-background border-muted-foreground/20 hover:border-primary/30 shadow-lg"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-background/80 hover:bg-background border-muted-foreground/20 hover:border-primary/30 shadow-lg"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Logo Grid */}
          <div className="mx-12 overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 5)}%)` }}
            >
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-1/5 px-4"
                >
                  <div className="group bg-background rounded-lg p-6 shadow-sm border border-muted-foreground/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-105 h-32 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <p className="text-sm font-medium text-foreground truncate">
                      {partner.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {partner.type}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.max(1, partners.length - 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary scale-125'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Trust Message */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground italic">
            "Quality education backed by global recognition and accreditation standards"
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSlideshow;