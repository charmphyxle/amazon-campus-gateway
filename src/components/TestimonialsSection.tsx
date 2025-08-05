import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Student Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our graduates who have achieved success worldwide
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="shadow-elegant-lg border-0 overflow-hidden">
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
                          <div className="absolute -top-2 -right-2 bg-secondary p-2 rounded-full">
                            <Quote className="w-4 h-4 text-secondary-foreground" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                          ))}
                        </div>
                        
                        <blockquote className="text-lg md:text-xl text-foreground mb-6 italic leading-relaxed">
                          "{testimonial.text}"
                        </blockquote>
                        
                        <div>
                          <h4 className="text-xl font-bold text-primary mb-1">
                            {testimonial.name}
                          </h4>
                          <p className="text-muted-foreground mb-1">
                            {testimonial.country}
                          </p>
                          <p className="text-sm font-medium text-trust">
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-primary scale-125'
                    : 'bg-muted hover:bg-muted-foreground/50'
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