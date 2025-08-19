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
      description:
        "Empowering students worldwide with quality education and international opportunities",
    },
    {
      image: heroClassroom,
      title: "World-Class Education",
      subtitle: "Excellence in Learning",
      description:
        "Modern classrooms with experienced faculty and cutting-edge technology",
    },
    {
      image: heroCampus,
      title: "International Community",
      subtitle: "Global Connections",
      description:
        "Join students from around the world in our vibrant academic community",
    },
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
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Transparent overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          <p
            className="text-xl md:text-2xl mb-4 font-light text-white/90 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {slides[currentSlide].subtitle}
          </p>
          <p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {slides[currentSlide].description}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              variant="outline"
              size="xl"
              className="group backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20 transition-all"
            >
              <BookOpen className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Explore Programs
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="group backdrop-blur-md bg-primary/20 border-primary/40 text-white hover:bg-primary/30 transition-all"
            >
              <UserPlus className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Register Now
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-md transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-md transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125 shadow-md"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

/* Animations (Tailwind add in globals.css) */
@layer utilities {
  .animate-fade-in {
    animation: fadeInUp 1s ease forwards;
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
