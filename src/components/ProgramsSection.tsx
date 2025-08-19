import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, BookOpen, Clock, Users, Download, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// Import program images
import businessClass from "@/assets/business-class.jpg";
import languageClass from "@/assets/language-class.jpg";
import kidsProgram from "@/assets/kids-program.jpg";
import teacherTraining from "@/assets/teacher-training.jpg";
import computerLab from "@/assets/computer-lab.jpg";
import libraryStudy from "@/assets/library-study.jpg";

const ProgramsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const programs = [
    {
      id: 1,
      title: "Business Administration Diploma",
      shortDescription: "Comprehensive business skills for modern leaders",
      image: businessClass,
      duration: "18 months",
      students: "250+ enrolled",
      features: ["International certification", "Practical training", "Industry connections"],
      fullDescription: "Our Business Administration Diploma provides comprehensive training in modern business practices, leadership, and management. Students gain practical skills through real-world projects and internships.",
      syllabus: ["Business Fundamentals", "Financial Management", "Marketing Strategy", "Leadership Skills", "International Business"]
    },
    {
      id: 2,
      title: "English Language Program",
      shortDescription: "Master English for academic and professional success",
      image: languageClass,
      duration: "12 months",
      students: "400+ enrolled",
      features: ["IELTS preparation", "Academic writing", "Speaking confidence"],
      fullDescription: "Intensive English language training designed for academic and professional advancement. Our program includes IELTS preparation and practical communication skills.",
      syllabus: ["Grammar & Vocabulary", "Academic Writing", "Speaking & Pronunciation", "IELTS Preparation", "Business English"]
    },
    {
      id: 3,
      title: "Kids Educational Program",
      shortDescription: "Creative learning for children aged 5-12",
      image: kidsProgram,
      duration: "Ongoing",
      students: "180+ enrolled",
      features: ["Creative arts", "STEM activities", "Language development"],
      fullDescription: "Engaging educational programs for children that combine creativity, STEM learning, and language development in a fun, supportive environment.",
      syllabus: ["Creative Arts", "Basic Mathematics", "Science Exploration", "Language Skills", "Social Development"]
    },
    {
      id: 4,
      title: "Teacher Training Certificate",
      shortDescription: "Professional development for educators",
      image: teacherTraining,
      duration: "6 months",
      students: "120+ enrolled",
      features: ["Teaching methodologies", "Classroom management", "Assessment techniques"],
      fullDescription: "Professional teacher training program covering modern teaching methodologies, classroom management, and student assessment techniques.",
      syllabus: ["Teaching Methods", "Classroom Management", "Student Assessment", "Educational Technology", "Professional Ethics"]
    },
    {
      id: 5,
      title: "Computer Technology Diploma",
      shortDescription: "Modern IT skills for the digital workplace",
      image: computerLab,
      duration: "15 months",
      students: "200+ enrolled",
      features: ["Programming languages", "Web development", "Database management"],
      fullDescription: "Comprehensive computer technology program covering programming, web development, and database management for modern IT careers.",
      syllabus: ["Programming Fundamentals", "Web Development", "Database Design", "Network Security", "Software Engineering"]
    },
    {
      id: 6,
      title: "Academic Research Program",
      shortDescription: "Advanced research skills and methodology",
      image: libraryStudy,
      duration: "24 months",
      students: "80+ enrolled",
      features: ["Research methodology", "Data analysis", "Academic writing"],
      fullDescription: "Advanced academic research program focusing on research methodology, data analysis, and scholarly writing for postgraduate studies.",
      syllabus: ["Research Methods", "Statistical Analysis", "Academic Writing", "Literature Review", "Thesis Development"]
    }
  ];

  const visibleCards = 3;
  const maxIndex = programs.length - visibleCards;

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    
    return () => clearInterval(timer);
  }, [isAutoPlaying, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-5" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 gradient-text">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover world-class educational programs designed to unlock your potential and shape your future
          </p>
        </div>

        {/* Programs Carousel */}
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-background/90 hover:bg-background border-primary/20 hover:border-primary/50 shadow-elegant"
            aria-label="Previous programs"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-background/90 hover:bg-background border-primary/20 hover:border-primary/50 shadow-elegant"
            aria-label="Next programs"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Cards Container */}
          <div className="mx-4 md:mx-12 overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${(currentIndex * 100) / visibleCards}%)` }}
            >
              {programs.map((program) => (
                <div
                  key={program.id}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2 md:px-3"
                >
                  <Card className="group bg-background border border-muted-foreground/10 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant hover:scale-105 overflow-hidden h-full">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        srcSet={`${program.image} 1x`}
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                      
                      {/* Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-lg font-bold mb-1 line-clamp-2">
                          {program.title}
                        </h3>
                        <p className="text-sm opacity-90 line-clamp-1">
                          {program.shortDescription}
                        </p>
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {program.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {program.students}
                        </div>
                      </div>
                      
                      <ul className="text-sm space-y-1 mb-4">
                        {program.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-muted-foreground">
                            <ArrowRight className="w-3 h-3 mr-2 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            className="w-full group hover-lift"
                            tabIndex={0}
                            aria-label={`Learn more about ${program.title}`}
                          >
                            <BookOpen className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                            Learn More
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl gradient-text">{program.title}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6">
                            <img
                              src={program.image}
                              alt={program.title}
                              className="w-full aspect-video object-cover rounded-lg"
                            />
                            
                            <p className="text-muted-foreground leading-relaxed">
                              {program.fullDescription}
                            </p>
                            
                            <div>
                              <h4 className="font-semibold mb-3 text-primary">Course Syllabus</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {program.syllabus.map((item, index) => (
                                  <div key={index} className="flex items-center text-sm">
                                    <ArrowRight className="w-3 h-3 mr-2 text-primary" />
                                    {item}
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-3">
                              <Button className="flex-1 hover-lift">
                                <Download className="w-4 h-4 mr-2" />
                                Download Brochure
                              </Button>
                              <Button variant="cta" className="flex-1 hover-lift hover-glow">
                                Apply Now
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary scale-125'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;