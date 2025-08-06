import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, BookOpen, UserPlus } from "lucide-react";
import heroGraduation from "@/assets/hero-graduation.jpg";
import heroClassroom from "@/assets/hero-classroom.jpg";
import heroCampus from "@/assets/hero-campus.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: heroGraduation,
      title: "Welcome to Amazon College International Campus",
      subtitle: "Where Success Begins",
      description: "Empowering students worldwide with quality education and international opportunities"
    },
    {
      image: heroClassroom,
      title: "World-Class Education",
      subtitle: "Excellence in Learning",
      description: "Modern classrooms with experienced faculty and cutting-edge technology"
    },
    {
      image: heroCampus,
      title: "International Community",
      subtitle: "Global Connections",
      description: "Join students from around the world in our vibrant academic community"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-bounce-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-text-glow gradient-text">
            {slides[currentSlide].title}
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-light text-secondary animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {slides[currentSlide].subtitle}
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {slides[currentSlide].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="xl" className="group hover-lift hover-glow animate-pulse-glow">
              <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform animate-float" />
              Explore Programs
            </Button>
            <Button variant="cta" size="xl" className="group hover-lift hover-glow">
              <UserPlus className="w-5 h-5 group-hover:scale-110 transition-transform animate-float" style={{ animationDelay: '0.5s' }} />
              Register Now
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-secondary scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;