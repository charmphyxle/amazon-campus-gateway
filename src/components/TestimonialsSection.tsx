import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import certificateCeremony from "@/assets/certificate-ceremony.jpg";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "United Kingdom",
      course: "Diploma in Business Administration",
      rating: 5,
      text: "Amazon College provided me with exceptional education and support. The international environment helped me grow both personally and professionally.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ahmed Hassan",
      country: "Egypt",
      course: "English Language Course",
      rating: 5,
      text: "The English program here is outstanding. I improved my language skills significantly and gained confidence for my career advancement.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Maria Rodriguez",
      country: "Spain",
      course: "Teacher Training Program",
      rating: 5,
      text: "The teacher training course transformed my teaching methods. The practical approach and experienced instructors made all the difference.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Chen Wei",
      country: "China",
      course: "International Foundation Program",
      rating: 5,
      text: "Amazon College helped me transition smoothly to university studies. The support and guidance I received were invaluable.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={certificateCeremony} 
          alt="Certificate Ceremony"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90" />
        <div className="absolute inset-0 pattern-dots opacity-30" />
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 animate-slide-up">
            Student Testimonials
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Hear from our graduates who have achieved success worldwide
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative animate-zoom-in" style={{ animationDelay: '0.4s' }}>
          <Card className="shadow-elegant-xl border-0 overflow-hidden bg-white/10 backdrop-blur-sm hover-lift">
            <CardContent className="p-0">
              <div className="relative h-auto md:h-96 flex items-center">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 p-4 sm:p-6 md:p-8 lg:p-12 transition-all duration-500 ${
                      index === currentTestimonial 
                        ? 'opacity-100 transform translate-x-0' 
                        : 'opacity-0 transform translate-x-full'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 h-full min-h-[300px] md:min-h-0">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover shadow-elegant"
                          />
                          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-secondary p-1.5 sm:p-2 rounded-full animate-glow">
                            <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-secondary-foreground animate-float" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-3 md:mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-secondary text-secondary animate-glow" style={{ animationDelay: `${i * 0.1}s` }} />
                          ))}
                        </div>
                        
                        <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-3 sm:mb-4 md:mb-6 italic leading-relaxed">
                          "{testimonial.text}"
                        </blockquote>
                        
                        <div>
                          <h4 className="text-base sm:text-lg md:text-xl font-bold text-secondary mb-1">
                            {testimonial.name}
                          </h4>
                          <p className="text-white/80 mb-1 text-sm md:text-base">
                            {testimonial.country}
                          </p>
                          <p className="text-xs md:text-sm font-medium text-white/70">
                            {testimonial.course}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 hover:scale-110 transition-all duration-300 hover-glow z-10"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 hover:scale-110 transition-all duration-300 hover-glow z-10"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentTestimonial
                    ? 'bg-secondary scale-125 animate-glow'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;