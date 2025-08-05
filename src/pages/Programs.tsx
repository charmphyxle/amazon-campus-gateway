import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GraduationCap, Languages, Baby, Users, Clock, Calendar, Download, CheckCircle } from "lucide-react";

const Programs = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [floatingApplyVisible, setFloatingApplyVisible] = useState(true);

  const categories = ["All", "English Courses", "Diplomas", "Kids Learning", "Teacher Training"];

  const programs = [
    {
      id: 1,
      category: "English Courses",
      title: "IELTS Preparation",
      description: "Comprehensive IELTS preparation course designed to help you achieve your target band score.",
      duration: "3 Months",
      schedule: "Mon-Fri, 2 hours/day",
      image: "bg-gradient-to-br from-success to-success-light",
      icon: Languages,
      features: ["Speaking Practice", "Writing Workshops", "Mock Tests", "Individual Feedback"],
      requirements: ["Basic English Level", "Placement Test"],
      fee: "$800",
      brochure: "/brochures/ielts-prep.pdf"
    },
    {
      id: 2,
      category: "Diplomas",
      title: "Diploma in Business Administration",
      description: "Professional diploma course covering modern business practices and management principles.",
      duration: "12 Months",
      schedule: "Weekend Classes",
      image: "bg-gradient-to-br from-primary to-primary-light",
      icon: GraduationCap,
      features: ["Management Skills", "Financial Planning", "Marketing Strategies", "Internship Opportunities"],
      requirements: ["High School Certificate", "English Proficiency"],
      fee: "$2,500",
      brochure: "/brochures/business-admin.pdf"
    },
    {
      id: 3,
      category: "Kids Learning",
      title: "Creative Kids Academy",
      description: "Engaging educational programs for children aged 4-12 focusing on creativity and skill development.",
      duration: "6 Months",
      schedule: "Weekends, 3 hours/day",
      image: "bg-gradient-to-br from-secondary to-secondary-light",
      icon: Baby,
      features: ["Art & Craft", "Science Experiments", "Language Development", "Social Skills"],
      requirements: ["Age 4-12", "Parent Consent"],
      fee: "$600",
      brochure: "/brochures/kids-academy.pdf"
    },
    {
      id: 4,
      category: "Teacher Training",
      title: "TESOL Certification",
      description: "Professional teacher training program for Teaching English to Speakers of Other Languages.",
      duration: "4 Months",
      schedule: "Flexible Timing",
      image: "bg-gradient-to-br from-trust to-primary",
      icon: Users,
      features: ["Methodology Training", "Practical Teaching", "Certification", "Job Placement Support"],
      requirements: ["Bachelor's Degree", "English Fluency"],
      fee: "$1,200",
      brochure: "/brochures/tesol-cert.pdf"
    },
    {
      id: 5,
      category: "English Courses",
      title: "Business English",
      description: "Specialized English course for professional communication in business environments.",
      duration: "2 Months",
      schedule: "Evening Classes",
      image: "bg-gradient-to-br from-success to-success-light",
      icon: Languages,
      features: ["Professional Communication", "Presentation Skills", "Email Writing", "Meeting Etiquette"],
      requirements: ["Intermediate English", "Work Experience"],
      fee: "$600",
      brochure: "/brochures/business-english.pdf"
    },
    {
      id: 6,
      category: "Diplomas",
      title: "Diploma in IT",
      description: "Comprehensive IT program covering programming, databases, and web development.",
      duration: "18 Months",
      schedule: "Full-time",
      image: "bg-gradient-to-br from-primary to-primary-light",
      icon: GraduationCap,
      features: ["Programming Languages", "Database Management", "Web Development", "Industry Projects"],
      requirements: ["High School Certificate", "Basic Computer Skills"],
      fee: "$3,000",
      brochure: "/brochures/diploma-it.pdf"
    }
  ];

  const filteredPrograms = activeFilter === "All" 
    ? programs 
    : programs.filter(program => program.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative h-96 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Programs</h1>
            <p className="text-xl md:text-2xl opacity-90">Discover Your Path to Success</p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => {
              const IconComponent = program.icon;
              return (
                <Card 
                  key={program.id}
                  className="group hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0 overflow-hidden"
                >
                  <div className={`h-48 ${program.image} flex items-center justify-center relative`}>
                    <IconComponent className="w-16 h-16 text-white" />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="shadow-md">
                        {program.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {program.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {program.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2" />
                        Duration: {program.duration}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule: {program.schedule}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                          >
                            Learn More
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl">{program.title}</DialogTitle>
                            <DialogDescription className="text-lg">
                              {program.description}
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="grid md:grid-cols-2 gap-8 mt-6">
                            <div>
                              <h3 className="text-lg font-semibold mb-4 text-primary">Course Features</h3>
                              <ul className="space-y-2">
                                {program.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-center text-sm">
                                    <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>

                              <h3 className="text-lg font-semibold mb-4 mt-6 text-primary">Entry Requirements</h3>
                              <ul className="space-y-2">
                                {program.requirements.map((req, idx) => (
                                  <li key={idx} className="flex items-center text-sm">
                                    <CheckCircle className="w-4 h-4 text-trust mr-2 flex-shrink-0" />
                                    {req}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <div className="bg-muted/50 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold mb-4 text-primary">Course Details</h3>
                                <div className="space-y-3">
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Duration:</span>
                                    <span className="font-medium">{program.duration}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Schedule:</span>
                                    <span className="font-medium">{program.schedule}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Course Fee:</span>
                                    <span className="font-bold text-primary text-lg">{program.fee}</span>
                                  </div>
                                </div>

                                <div className="mt-6 space-y-3">
                                  <Button className="w-full">
                                    Apply Now
                                  </Button>
                                  <Button variant="outline" className="w-full">
                                    <Download className="w-4 h-4 mr-2" />
                                    Download Brochure
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Floating Apply Button */}
      {floatingApplyVisible && (
        <div className="fixed bottom-8 right-8 z-50">
          <Button 
            size="lg" 
            className="shadow-elegant-lg animate-pulse hover:animate-none"
            onClick={() => setFloatingApplyVisible(false)}
          >
            Apply Now
          </Button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Programs;