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
    <section className="py-20 relative overflow-hidden">
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-up">
            Student Testimonials
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Hear from our graduates who have achieved success worldwide
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative animate-zoom-in" style={{ animationDelay: '0.4s' }}>
          <Card className="shadow-elegant-xl border-0 overflow-hidden bg-white/10 backdrop-blur-sm hover-lift">
            <CardContent className="p-0">
              <div className="relative h-96 flex items-center">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 p-8 md:p-12 transition-all duration-500 ${
                      index === currentTestimonial 
                        ? 'opacity-100 transform translate-x-0' 
                        : 'opacity-0 transform translate-x-full'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row items-center gap-8 h-full">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-32 h-32 rounded-full object-cover shadow-elegant"
                          />
                          <div className="absolute -top-2 -right-2 bg-secondary p-2 rounded-full animate-glow">
                            <Quote className="w-4 h-4 text-secondary-foreground animate-float" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-secondary text-secondary animate-glow" style={{ animationDelay: `${i * 0.1}s` }} />
                          ))}
                        </div>
                        
                        <blockquote className="text-lg md:text-xl text-white mb-6 italic leading-relaxed">
                          "{testimonial.text}"
                        </blockquote>
                        
                        <div>
                          <h4 className="text-xl font-bold text-secondary mb-1">
                            {testimonial.name}
                          </h4>
                          <p className="text-white/80 mb-1">
                            {testimonial.country}
                          </p>
                          <p className="text-sm font-medium text-white/70">
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 hover:scale-110 transition-all duration-300 hover-glow"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 hover:scale-110 transition-all duration-300 hover-glow"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
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