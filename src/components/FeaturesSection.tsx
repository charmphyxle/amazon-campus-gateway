import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Wifi, 
  Car, 
  Coffee,
  BookOpen,
  Users,
  Monitor,
  Shield
} from "lucide-react";
import libraryStudy from "@/assets/library-study.jpg";
import computerLab from "@/assets/computer-lab.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Morning, afternoon, and evening classes to fit your schedule"
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Easily accessible campus in the heart of the city"
    },
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "High-speed internet access throughout the campus"
    },
    {
      icon: Car,
      title: "Parking Available",
      description: "Convenient parking facilities for students and visitors"
    },
    {
      icon: Coffee,
      title: "Student Lounge",
      description: "Comfortable spaces to relax and socialize between classes"
    },
    {
      icon: Monitor,
      title: "Modern Labs",
      description: "State-of-the-art computer and language labs"
    },
    {
      icon: BookOpen,
      title: "Library Access",
      description: "Extensive collection of books and digital resources"
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "24/7 security and CCTV monitoring for student safety"
    }
  ];

  const facilities = [
    {
      title: "Modern Library & Study Areas",
      description: "Access to thousands of books, journals, and digital resources in a quiet, conducive learning environment.",
      image: libraryStudy,
      highlights: ["Digital Catalog", "Study Rooms", "Research Support", "Extended Hours"]
    },
    {
      title: "Advanced Computer Labs",
      description: "Latest technology and software for hands-on learning in programming, design, and digital skills.",
      image: computerLab,
      highlights: ["Latest Software", "High-Speed Internet", "Technical Support", "Project Labs"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-accent/20">
      <div className="container mx-auto px-4">
        {/* Campus Features */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-slide-up">
            Campus Features & Facilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Everything you need for a comfortable and productive learning experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="group hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0 hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="text-center p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Facilities */}
        <div className="grid lg:grid-cols-2 gap-12">
          {facilities.map((facility, index) => (
            <Card 
              key={facility.title}
              className="group hover:shadow-elegant-xl transition-all duration-500 border-0 overflow-hidden hover-lift animate-zoom-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{facility.title}</h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {facility.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {facility.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-success rounded-full mr-2 flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 hover-glow"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;