import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import certificateCeremony from "@/assets/certificate-ceremony.jpg";
import sarahJohnson from "@/assets/student-portraits/sarah-johnson.jpg";
import ahmedHassan from "@/assets/student-portraits/ahmed-hassan.jpg";
import mariaRodriguez from "@/assets/student-portraits/maria-rodriguez.jpg";
import chenWei from "@/assets/student-portraits/chen-wei.jpg";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "United Kingdom",
      course: "Diploma in Business Administration",
      rating: 5,
      text: "Amazon College provided me with exceptional education and support. The international environment helped me grow both personally and professionally.",
      image: sarahJohnson
    },
    {
      name: "Ahmed Hassan",
      country: "Egypt", 
      course: "English Language Course",
      rating: 5,
      text: "The English program here is outstanding. I improved my language skills significantly and gained confidence for my career advancement.",
      image: ahmedHassan
    },
    {
      name: "Maria Rodriguez",
      country: "Spain",
      course: "Teacher Training Program",
      rating: 5,
      text: "The teacher training course transformed my teaching methods. The practical approach and experienced instructors made all the difference.",
      image: mariaRodriguez
    },
    {
      name: "Chen Wei",
      country: "China",
      course: "International Foundation Program", 
      rating: 5,
      text: "Amazon College helped me transition smoothly to university studies. The support and guidance I received were invaluable.",
      image: chenWei
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
    <section className="py-12 md:py-20 relative overflow-hidden bg-gradient-to-br from-primary/95 to-secondary/95">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 animate-slide-up">
            Student Testimonials
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Hear from our graduates who have achieved success worldwide
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative animate-zoom-in" style={{ animationDelay: '0.4s' }}>
          <Card className="shadow-elegant-xl border-0 overflow-visible bg-white/10 backdrop-blur-sm hover-lift">
            <CardContent className="p-0">
              <div className="relative min-h-[400px] sm:min-h-[380px] md:min-h-[350px] lg:h-96 flex items-center">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 p-4 sm:p-6 md:p-8 lg:p-12 transition-all duration-500 ${
                      index === currentTestimonial 
                        ? 'opacity-100 transform translate-x-0' 
                        : 'opacity-0 transform translate-x-full'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 h-full justify-center">
                      <div className="flex-shrink-0 mb-4 md:mb-0">
                        <div className="relative">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full object-cover shadow-elegant mx-auto"
                          />
                          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-secondary p-1.5 sm:p-2 rounded-full animate-glow">
                            <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-secondary-foreground animate-float" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1 text-center md:text-left w-full">
                        <div className="flex justify-center md:justify-start mb-3 md:mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-secondary text-secondary animate-glow" style={{ animationDelay: `${i * 0.1}s` }} />
                          ))}
                        </div>
                        
                        <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-4 sm:mb-5 md:mb-6 italic leading-relaxed font-medium">
                          "{testimonial.text}"
                        </blockquote>
                        
                        <div className="space-y-1">
                          <h4 className="text-base sm:text-lg md:text-xl font-bold text-secondary">
                            {testimonial.name}
                          </h4>
                          <p className="text-white/90 text-sm md:text-base font-medium">
                            {testimonial.country}
                          </p>
                          <p className="text-xs md:text-sm text-white/70">
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
            className="absolute left-1 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 hover:scale-110 transition-all duration-300 hover-glow z-20"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-1 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 hover:scale-110 transition-all duration-300 hover-glow z-20"
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