import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Languages, Baby, Users } from "lucide-react";
import businessClass from "@/assets/business-class.jpg";
import languageClass from "@/assets/language-class.jpg";
import kidsProgram from "@/assets/kids-program.jpg";
import teacherTraining from "@/assets/teacher-training.jpg";

const ProgramsSection = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Diploma Programs",
      description: "Professional diploma courses in business, technology, and healthcare designed for career advancement.",
      features: ["Industry-Relevant Curriculum", "Experienced Faculty", "Practical Training"],
      image: businessClass,
      gradient: "from-primary/80 to-primary-dark/80"
    },
    {
      icon: Languages,
      title: "Language Courses",
      description: "Comprehensive English and international language programs for academic and professional success.",
      features: ["IELTS Preparation", "Business English", "Academic Writing"],
      image: languageClass,
      gradient: "from-success/80 to-success-light/80"
    },
    {
      icon: Baby,
      title: "Kids Programs",
      description: "Engaging educational programs designed to develop young minds and prepare them for future success.",
      features: ["Creative Learning", "Skill Development", "Safe Environment"],
      image: kidsProgram,
      gradient: "from-secondary/80 to-secondary-light/80"
    },
    {
      icon: Users,
      title: "Teacher Training",
      description: "Professional development courses for educators to enhance teaching skills and methodologies.",
      features: ["Modern Techniques", "Certification", "Continuous Support"],
      image: teacherTraining,
      gradient: "from-trust/80 to-primary/80"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Program Offerings
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover world-class education programs designed to shape your future and unlock your potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card 
                key={program.title} 
                className="group hover:shadow-elegant-lg transition-all duration-500 hover:scale-105 border-0 overflow-hidden hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-56 relative overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.gradient} transition-opacity duration-300`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent className="w-16 h-16 text-white animate-float group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-success rounded-full animate-glow"></div>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {program.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 hover-glow"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;