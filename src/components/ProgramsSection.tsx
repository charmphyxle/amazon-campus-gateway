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

  const visibleCards = 4;
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
    <section className="py-8 bg-gradient-to-br from-background via-background/95 to-muted/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-dots opacity-5" />
      <div className="absolute top-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-secondary/5 rounded-full blur-2xl" />
      
      <div className="relative z-10 container mx-auto px-4">

        {/* Desktop and Tablet View */}
        <div className="hidden md:block">
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
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-background/95 backdrop-blur-sm hover:bg-background border-border hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Previous programs"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-background/95 backdrop-blur-sm hover:bg-background border-border hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Next programs"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            {/* Cards Container */}
            <div className="mx-16 overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${(currentIndex * 100) / visibleCards}%)` }}
              >
                {programs.map((program) => (
                  <div
                    key={program.id}
                    className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 px-4"
                  >
                     <Card className="group bg-background/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] overflow-hidden h-full">
                       <div className="relative aspect-[3/4] overflow-hidden">
                         {/* Background Image */}
                         <div 
                           className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                           style={{ backgroundImage: `url(${program.image})` }}
                         />
                         {/* Foreground Image for better layering */}
                         <img
                           src={program.image}
                           alt={program.title}
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                           loading="lazy"
                         />
                        {/* Modern Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-85 group-hover:opacity-95 transition-all duration-500" />
                        
                        {/* Floating Info */}
                        <div className="absolute top-4 right-4 flex flex-col gap-2">
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                            {program.duration}
                          </span>
                          <span className="px-3 py-1 bg-secondary/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                            {program.students}
                          </span>
                        </div>
                        
                        {/* All Content Overlay */}
                        <div className="absolute inset-0 p-6 text-white flex flex-col justify-between">
                          <div className="flex-1" />
                          
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-xl font-bold mb-2 leading-tight">
                                {program.title}
                              </h3>
                              <p className="text-sm opacity-90 line-clamp-2 mb-4">
                                {program.shortDescription}
                              </p>
                            </div>
                            
                            <div className="space-y-2">
                              {program.features.slice(0, 3).map((feature, index) => (
                                <div key={index} className="flex items-center text-xs">
                                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 flex-shrink-0" />
                                  {feature}
                                </div>
                              ))}
                            </div>

                            <Dialog>
                              <DialogTrigger asChild>
                                <Button 
                                  className="w-full group hover-lift bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 hover:border-white/50 rounded-xl py-2 text-sm font-semibold mt-4"
                                  tabIndex={0}
                                  aria-label={`Learn more about ${program.title}`}
                                >
                                  <BookOpen className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                                  Explore Program
                                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                              </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-2xl md:text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                {program.title}
                              </DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                              <img
                                src={program.image}
                                alt={program.title}
                                className="w-full aspect-video object-cover rounded-xl"
                              />
                              
                              <p className="text-muted-foreground leading-relaxed text-lg">
                                {program.fullDescription}
                              </p>
                              
                              <div>
                                <h4 className="font-semibold mb-4 text-primary text-xl">Course Syllabus</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                  {program.syllabus.map((item, index) => (
                                    <div key={index} className="flex items-center p-3 bg-muted/50 rounded-lg">
                                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                                      <span className="text-sm font-medium">{item}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              <div className="flex flex-col sm:flex-row gap-4">
                                <Button 
                                  className="flex-1 hover-lift bg-gradient-to-r from-muted to-muted/80 text-foreground border-0 rounded-xl"
                                  onClick={() => window.open('/amazon-college-brochure.pdf', '_blank')}
                                >
                                  <Download className="w-4 h-4 mr-2" />
                                  Download Brochure
                                </Button>
                                <Button className="flex-1 hover-lift hover-glow bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground border-0 rounded-xl" asChild>
                                  <a href="/apply">Apply Now</a>
                                </Button>
                              </div>
                            </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pagination Indicators */}
          {/* <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125 shadow-lg'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}
        </div>

        {/* Mobile View - Grid Layout */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
          {programs.map((program) => (
             <Card key={program.id} className="group bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl overflow-hidden">
               <div className="relative aspect-[3/4] overflow-hidden">
                 {/* Background Image */}
                 <div 
                   className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                   style={{ backgroundImage: `url(${program.image})` }}
                 />
                 {/* Foreground Image */}
                 <img
                   src={program.image}
                   alt={program.title}
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                   loading="lazy"
                 />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-85" />
                
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                    {program.duration}
                  </span>
                  <span className="px-2 py-1 bg-secondary/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                    {program.students}
                  </span>
                </div>
                
                <div className="absolute inset-0 p-4 text-white flex flex-col justify-between">
                  <div className="flex-1" />
                  
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-bold mb-1">
                        {program.title}
                      </h3>
                      <p className="text-sm opacity-90 mb-3">
                        {program.shortDescription}
                      </p>
                    </div>
                    
                    <div className="space-y-1">
                      {program.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-xs">
                          <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 hover:border-white/50 rounded-lg text-sm mt-3"
                          size="sm"
                        >
                          <BookOpen className="w-4 h-4 mr-2" />
                          Learn More
                        </Button>
                      </DialogTrigger>
                  <DialogContent className="max-w-[95vw] max-h-[85vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {program.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
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
                        <div className="space-y-2">
                          {program.syllabus.map((item, index) => (
                            <div key={index} className="flex items-center p-2 bg-muted/50 rounded-lg">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        <Button 
                          className="hover-lift bg-gradient-to-r from-muted to-muted/80 text-foreground border-0"
                          onClick={() => window.open('/amazon-college-brochure.pdf', '_blank')}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download Brochure
                        </Button>
                        <Button className="hover-lift bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground border-0" asChild>
                          <a href="/apply">Apply Now</a>
                        </Button>
                      </div>
                    </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;