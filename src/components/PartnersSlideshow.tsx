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

  // Auto-slide functionality - responsive
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const itemsPerView = window.innerWidth >= 1280 ? 5 : window.innerWidth >= 768 ? 3 : 1;
        return (prev + 1) % Math.max(1, partners.length - itemsPerView + 1);
      });
    }, 3000);
    return () => clearInterval(timer);
  }, [partners.length]);

  const getItemsPerView = () => {
    if (typeof window === 'undefined') return 5;
    if (window.innerWidth >= 1280) return 5; // xl
    if (window.innerWidth >= 768) return 3;  // md
    return 1; // mobile
  };

  const nextSlide = () => {
    const itemsPerView = getItemsPerView();
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, partners.length - itemsPerView + 1));
  };

  const prevSlide = () => {
    const itemsPerView = getItemsPerView();
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, partners.length - itemsPerView + 1)) % Math.max(1, partners.length - itemsPerView + 1));
  };

  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 via-orange-50 to-blue-50 dark:from-blue-950/20 dark:via-orange-950/20 dark:to-blue-950/20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-orange-100/30 to-blue-100/30 dark:from-blue-900/20 dark:via-orange-900/20 dark:to-blue-900/20" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 bg-gradient-to-r from-blue-600 via-primary to-orange-600 bg-clip-text text-transparent">
            Trusted Partners & Accreditations
          </h2>
          <p className="text-lg font-semibold text-muted-foreground max-w-2xl mx-auto">
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
            className="absolute left-0 md:left-0 top-1/2 transform -translate-y-1/2 z-20 bg-background/80 hover:bg-background border-muted-foreground/20 hover:border-primary/30 shadow-lg"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 md:right-0 top-1/2 transform -translate-y-1/2 z-20 bg-background/80 hover:bg-background border-muted-foreground/20 hover:border-primary/30 shadow-lg"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Logo Grid - Responsive */}
          <div className="mx-8 md:mx-12 overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (window.innerWidth >= 1280 ? 100 / 5 : window.innerWidth >= 768 ? 100 / 3 : 100)}%)` 
              }}
            >
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/3 xl:w-1/5 px-2 md:px-4"
                >
                   <div className="group bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-lg p-4 md:p-6 shadow-elegant border-2 border-blue-200 dark:border-blue-800 hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:rotate-1 h-24 md:h-32 flex items-center justify-center">
                     <img
                       src={partner.logo}
                       alt={partner.name}
                       className="max-w-full max-h-12 md:max-h-16 object-contain filter brightness-110 contrast-110 hover:brightness-125 transition-all duration-300"
                     />
                   </div>
                  <div className="mt-2 md:mt-3 text-center">
                    <p className="text-xs md:text-sm font-medium text-foreground truncate">
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
        <div className="flex justify-center mt-6 md:mt-8 space-x-2">
          {Array.from({ 
            length: Math.max(1, partners.length - (window.innerWidth >= 1280 ? 4 : window.innerWidth >= 768 ? 2 : 0)) 
          }).map((_, index) => (
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

      </div>
    </section>
  );
};

export default PartnersSlideshow;