import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Clock, Camera, Building, Wifi, Car, Users, BookOpen, Coffee, Shield, Accessibility, Calendar } from "lucide-react";

const Campus = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const galleryImages = [
    {
      src: "/src/assets/campus-entrance.jpg",
      alt: "Modern campus entrance with glass facade",
      title: "Campus Entrance",
      description: "Welcome to our state-of-the-art educational facility"
    },
    {
      src: "/src/assets/campus-exterior.jpg", 
      alt: "Beautiful campus exterior with landscaped gardens",
      title: "Campus Grounds",
      description: "Spacious and well-maintained outdoor areas"
    },
    {
      src: "/src/assets/campus-walkway.jpg",
      alt: "Tree-lined walkways connecting campus buildings", 
      title: "Campus Walkways",
      description: "Scenic pathways throughout the campus"
    },
    {
      src: "/src/assets/computer-lab.jpg",
      alt: "Modern computer laboratory with latest technology",
      title: "Computer Lab",
      description: "Cutting-edge technology for IT programs"
    },
    {
      src: "/src/assets/library-study.jpg",
      alt: "Quiet library with extensive book collection",
      title: "Library & Study Areas", 
      description: "Comprehensive resources for research and study"
    },
    {
      src: "/src/assets/student-lounge.jpg",
      alt: "Comfortable student lounge area",
      title: "Student Lounge",
      description: "Relaxation and social spaces for students"
    }
  ];

  const facilities = [
    {
      icon: Building,
      title: "Modern Classrooms",
      description: "Air-conditioned, well-lit classrooms equipped with multimedia projectors and interactive whiteboards.",
      features: ["40+ classrooms", "Interactive technology", "Comfortable seating", "Natural lighting"]
    },
    {
      icon: BookOpen,
      title: "Digital Library", 
      description: "Extensive collection of books, journals, and digital resources accessible 24/7.",
      features: ["10,000+ books", "Digital databases", "Study cubicles", "Research support"]
    },
    {
      icon: Users,
      title: "Computer Labs",
      description: "State-of-the-art computer laboratories with latest software and high-speed internet.",
      features: ["200+ computers", "Latest software", "High-speed internet", "Technical support"]
    },
    {
      icon: Coffee,
      title: "Cafeteria & Food Court",
      description: "Variety of dining options serving healthy and affordable meals throughout the day.",
      features: ["Multiple food outlets", "Healthy options", "Affordable prices", "Comfortable seating"]
    },
    {
      icon: Shield,
      title: "Security & Safety",
      description: "24/7 security with CCTV surveillance and emergency response systems.",
      features: ["24/7 security", "CCTV monitoring", "Emergency systems", "Safe environment"]
    },
    {
      icon: Car,
      title: "Parking & Transport",
      description: "Ample parking space and convenient public transport connections.",
      features: ["200+ parking spots", "Bus connections", "Taxi services", "Bicycle parking"]
    }
  ];

  const campusInfo = {
    address: "294, 2nd Floor Galle Road, Colombo-4, Sri Lanka",
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 9:00 PM" },
      { day: "Saturday", time: "9:00 AM - 6:00 PM" },
      { day: "Sunday", time: "10:00 AM - 4:00 PM (Library Only)" }
    ],
    contact: {
      phone: "+94 114-386-126",
      email: "info@amazoncollege.lk",
      website: "www.amazoncollege.lk"
    }
  };

  const virtualTourPoints = [
    {
      title: "Main Reception",
      description: "Modern reception area with student services desk and information displays.",
      image: "/src/assets/campus-entrance.jpg"
    },
    {
      title: "Academic Block",
      description: "Multiple floors housing classrooms, faculty offices, and administrative departments.",
      image: "/src/assets/hero-classroom.jpg"
    },
    {
      title: "Technology Center",
      description: "Computer labs, multimedia rooms, and technical support services.",
      image: "/src/assets/computer-lab.jpg"
    },
    {
      title: "Learning Commons",
      description: "Collaborative study spaces, library, and research facilities.",
      image: "/src/assets/library-study.jpg"
    },
    {
      title: "Student Hub",
      description: "Cafeteria, lounge areas, and recreational facilities for students.",
      image: "/src/assets/student-lounge.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-trust to-primary overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="text-white max-w-4xl mx-auto">
            <Building className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Campus</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Modern facilities designed for exceptional learning experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Camera className="w-4 h-4 mr-2" />
                Virtual Tour
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-foreground bg-white/10 backdrop-blur-sm">
                <MapPin className="w-4 h-4 mr-2" />
                Visit Campus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                A Modern Learning Environment
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our purpose-built campus in the heart of Colombo provides students with world-class 
                facilities and a conducive learning environment. From state-of-the-art classrooms 
                to modern laboratories, every space is designed to enhance your educational experience.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="w-fit text-success">
                    <Building className="w-3 h-3 mr-1" />
                    50,000 sq ft
                  </Badge>
                  <span className="text-sm text-muted-foreground">Campus Area</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="w-fit text-primary">
                    <Users className="w-3 h-3 mr-1" />
                    2,000+
                  </Badge>
                  <span className="text-sm text-muted-foreground">Student Capacity</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="w-fit text-trust">
                    <BookOpen className="w-3 h-3 mr-1" />
                    8 Floors
                  </Badge>
                  <span className="text-sm text-muted-foreground">Academic Levels</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="w-fit">
                    <Wifi className="w-3 h-3 mr-1" />
                    Free WiFi
                  </Badge>
                  <span className="text-sm text-muted-foreground">Campus-wide</span>
                </div>
              </div>
              <Button className="mr-4">
                Book Campus Tour
              </Button>
              <Button variant="outline">
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </div>
            
            <div className="relative">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-96 object-cover rounded-lg shadow-elegant-lg"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <Card className="bg-white/90 backdrop-blur-sm border-0">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground">{galleryImages[selectedImage].title}</h3>
                    <p className="text-sm text-muted-foreground">{galleryImages[selectedImage].description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Campus Gallery</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our beautiful campus through these images
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {galleryImages.map((image, index) => (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 border-2 overflow-hidden ${
                    selectedImage === index ? 'border-primary shadow-elegant' : 'border-transparent hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-24 object-cover"
                  />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Campus Facilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a successful academic journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <Card 
                  key={index}
                  className="hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0"
                >
                  <CardHeader>
                    <IconComponent className="w-12 h-12 text-primary mb-4" />
                    <CardTitle className="text-xl">{facility.title}</CardTitle>
                    <CardDescription className="text-base">
                      {facility.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {facility.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Virtual Tour */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Virtual Campus Tour</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Take a virtual walk through our campus from anywhere in the world
            </p>
          </div>

          <Tabs defaultValue="overview" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="library">Library</TabsTrigger>
              <TabsTrigger value="student">Student Life</TabsTrigger>
            </TabsList>
            
            {virtualTourPoints.map((point, index) => (
              <TabsContent key={index} value={index === 0 ? "overview" : index === 1 ? "academic" : index === 2 ? "technology" : index === 3 ? "library" : "student"} className="mt-8">
                <Card className="overflow-hidden border-0 shadow-elegant-lg">
                  <div className="grid md:grid-cols-2 gap-0">
                    <img
                      src={point.image}
                      alt={point.title}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    <div className="p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-foreground mb-4">{point.title}</h3>
                      <p className="text-muted-foreground text-lg mb-6">{point.description}</p>
                      <Button className="w-fit">
                        <Camera className="w-4 h-4 mr-2" />
                        360° Virtual Tour
                      </Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Location Info */}
            <Card className="shadow-elegant-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  Location & Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground">{campusInfo.address}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Contact Information</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Phone: {campusInfo.contact.phone}</p>
                    <p>Email: {campusInfo.contact.email}</p>
                    <p>Website: {campusInfo.contact.website}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button className="w-full">
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Car className="w-4 h-4 mr-2" />
                    Parking Information
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Operating Hours */}
            <Card className="shadow-elegant-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Clock className="w-6 h-6 text-success" />
                  Campus Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {campusInfo.hours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <span className="font-medium text-foreground">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.time}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Special Hours</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Extended hours during exam periods</li>
                    <li>• Holiday schedules may vary</li>
                    <li>• 24/7 access to online resources</li>
                  </ul>
                </div>

                <Button variant="outline" className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  View Academic Calendar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accessibility & Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Accessibility & Support Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing an inclusive environment for all students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Accessibility,
                title: "Wheelchair Access",
                description: "Full wheelchair accessibility throughout the campus"
              },
              {
                icon: Shield,
                title: "Security Services",
                description: "24/7 security and emergency response systems"
              },
              {
                icon: Wifi,
                title: "Free WiFi",
                description: "High-speed internet access across the entire campus"
              },
              {
                icon: Coffee,
                title: "Student Services",
                description: "Cafeteria, lounge areas, and support services"
              }
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index}
                  className="text-center hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0"
                >
                  <CardHeader>
                    <IconComponent className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Visit Our Campus?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience our world-class facilities in person. Book a campus tour or visit us during our open hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-elegant">
              <Calendar className="w-4 h-4 mr-2" />
              Book Campus Tour
            </Button>
            <Button variant="outline" size="lg">
              <MapPin className="w-4 h-4 mr-2" />
              Get Directions
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Campus;