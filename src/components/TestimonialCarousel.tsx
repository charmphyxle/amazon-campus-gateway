import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronLeft, ChevronRight, Quote, GraduationCap } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  program: string;
  year: string;
  rating: number;
  quote: string;
  image?: string;
  currentRole: string;
  beforeAfter: {
    before: string;
    after: string;
  };
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

const TestimonialCarousel = ({ 
  testimonials, 
  autoPlay = true, 
  interval = 5000 
}: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  if (testimonials.length === 0) return null;

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0">
              <Card className="border-0 shadow-elegant-lg bg-gradient-to-br from-background to-muted/30">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
                    {/* Student Photo/Avatar */}
                    <div className="text-center">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                        {testimonial.image ? (
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          <GraduationCap className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
                        )}
                      </div>
                      <Badge variant="secondary" className="mb-2 text-xs sm:text-sm">
                        {testimonial.program}
                      </Badge>
                      <p className="text-xs sm:text-sm text-muted-foreground">Class of {testimonial.year}</p>
                    </div>

                    {/* Testimonial Content */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-2 mb-4">
                        <Quote className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                        <div className="flex items-center gap-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                      
                      <blockquote className="text-base sm:text-lg lg:text-xl text-foreground mb-4 lg:mb-6 italic leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="mb-4">
                        <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm sm:text-base text-muted-foreground">
                          {testimonial.currentRole}
                        </p>
                      </div>

                      <div className="bg-muted/50 rounded-lg p-3 lg:p-4">
                        <h5 className="font-semibold text-foreground mb-2 text-sm lg:text-base">Career Transformation</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                          <div>
                            <span className="text-muted-foreground font-medium">Before:</span>
                            <p className="text-foreground">{testimonial.beforeAfter.before}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground font-medium">After:</span>
                            <p className="text-foreground">{testimonial.beforeAfter.after}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        onClick={goToPrev}
        className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background shadow-elegant z-10"
        disabled={testimonials.length <= 1}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        onClick={goToNext}
        className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background shadow-elegant z-10"
        disabled={testimonials.length <= 1}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 lg:mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentIndex
                ? 'bg-primary scale-125'
                : 'bg-muted-foreground/50 hover:bg-muted-foreground/75'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;