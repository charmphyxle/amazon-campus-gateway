import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Languages, Baby, Users } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Diploma Programs",
      description: "Professional diploma courses in business, technology, and healthcare designed for career advancement.",
      features: ["Industry-Relevant Curriculum", "Experienced Faculty", "Practical Training"],
      image: "bg-gradient-to-br from-primary to-primary-light"
    },
    {
      icon: Languages,
      title: "Language Courses",
      description: "Comprehensive English and international language programs for academic and professional success.",
      features: ["IELTS Preparation", "Business English", "Academic Writing"],
      image: "bg-gradient-to-br from-success to-success-light"
    },
    {
      icon: Baby,
      title: "Kids Programs",
      description: "Engaging educational programs designed to develop young minds and prepare them for future success.",
      features: ["Creative Learning", "Skill Development", "Safe Environment"],
      image: "bg-gradient-to-br from-secondary to-secondary-light"
    },
    {
      icon: Users,
      title: "Teacher Training",
      description: "Professional development courses for educators to enhance teaching skills and methodologies.",
      features: ["Modern Techniques", "Certification", "Continuous Support"],
      image: "bg-gradient-to-br from-trust to-primary"
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
                className="group hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0 overflow-hidden"
              >
                <div className={`h-48 ${program.image} flex items-center justify-center relative`}>
                  <IconComponent className="w-16 h-16 text-white" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
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
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
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