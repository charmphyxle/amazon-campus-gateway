import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, BookOpen, UserPlus, Search, Star, Users, GraduationCap, Globe, Award, Clock } from "lucide-react";
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

      {/* Trust Indicators */}
      <div className="absolute top-6 left-6 z-20 flex flex-col gap-2 animate-slide-in-left">
        <Badge variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
          <Award className="w-4 h-4 mr-2" />
          Accredited Institution
        </Badge>
        <Badge variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
          <Star className="w-4 h-4 mr-2" />
          5-Star Rated
        </Badge>
      </div>

      {/* Quick Stats */}
      <div className="absolute top-6 right-6 z-20 hidden lg:block animate-slide-in-right">
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardContent className="p-4 text-white">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">50+</div>
                <div className="text-xs opacity-80">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">15K+</div>
                <div className="text-xs opacity-80">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">98%</div>
                <div className="text-xs opacity-80">Success Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-bounce-in">
          {/* Quick Features */}
          <div className="flex justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Badge variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Globe className="w-4 h-4 mr-2" />
              International Campus
            </Badge>
            <Badge variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Clock className="w-4 h-4 mr-2" />
              Flexible Schedules
            </Badge>
            <Badge variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 hidden sm:flex">
              <GraduationCap className="w-4 h-4 mr-2" />
              Expert Faculty
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-text-glow gradient-text">
            {slides[currentSlide].title}
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-light text-secondary animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {slides[currentSlide].subtitle}
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {slides[currentSlide].description}
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search programs, courses..."
                className="w-full pl-10 pr-4 py-3 rounded-full bg-white/90 backdrop-blur-sm text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary border-0"
              />
            </div>
          </div>
          
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

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-slide-up" style={{ animationDelay: '0.7s' }}>
            <button className="text-white/80 hover:text-white transition-colors text-sm underline-offset-4 hover:underline">
              Virtual Campus Tour
            </button>
            <button className="text-white/80 hover:text-white transition-colors text-sm underline-offset-4 hover:underline">
              Download Brochure
            </button>
            <button className="text-white/80 hover:text-white transition-colors text-sm underline-offset-4 hover:underline">
              Student Portal
            </button>
            <button className="text-white/80 hover:text-white transition-colors text-sm underline-offset-4 hover:underline">
              Contact Advisor
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 lg:hidden">
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardContent className="p-4 text-white">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-xl font-bold text-secondary">50+</div>
                <div className="text-xs opacity-80">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-secondary">15K+</div>
                <div className="text-xs opacity-80">Students</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-secondary">98%</div>
                <div className="text-xs opacity-80">Success Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>
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