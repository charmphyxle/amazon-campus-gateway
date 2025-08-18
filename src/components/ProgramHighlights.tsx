import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  Award, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle,
  BookOpen,
  Globe,
  Target
} from "lucide-react";

const ProgramHighlights = () => {
  const highlights = [
    {
      icon: Star,
      title: "Industry-Relevant Curriculum",
      description: "Our programs are designed with industry input to ensure graduates meet current market demands",
      features: ["Latest Industry Standards", "Practical Applications", "Real-world Projects"]
    },
    {
      icon: Award,
      title: "Certified Instructors",
      description: "Learn from experienced professionals with international certifications and industry expertise",
      features: ["PhD Qualified Faculty", "Industry Experience", "Continuous Training"]
    },
    {
      icon: TrendingUp,
      title: "Career Support",
      description: "Comprehensive career services including job placement assistance and professional development",
      features: ["Job Placement Support", "Career Counseling", "Industry Connections"]
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Personalized attention with optimal student-to-teacher ratios for better learning outcomes",
      features: ["Max 15 Students/Class", "Individual Attention", "Interactive Sessions"]
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Multiple scheduling options including evening, weekend, and intensive programs",
      features: ["Evening Classes", "Weekend Options", "Online Components"]
    },
    {
      icon: Globe,
      title: "International Recognition",
      description: "Globally recognized certifications that open doors to opportunities worldwide",
      features: ["UK University Credit", "International Standards", "Global Acceptance"]
    }
  ];

  const achievementStats = [
    { number: "95%", label: "Graduate Employment Rate", icon: TrendingUp },
    { number: "15+", label: "Years of Excellence", icon: Award },
    { number: "5000+", label: "Successful Graduates", icon: Users },
    { number: "20+", label: "Program Offerings", icon: BookOpen },
    { number: "50+", label: "Industry Partners", icon: Target },
    { number: "25+", label: "Countries Represented", icon: Globe }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Program <span className="gradient-text">Highlights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Discover what makes our educational programs stand out and why students choose 
            Amazon College for their academic and professional development.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {achievementStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card
                key={stat.label}
                className="group hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0 text-center bg-white/80 backdrop-blur-sm animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <IconComponent className="w-8 h-8 text-primary mx-auto mb-3 group-hover:text-secondary transition-colors" />
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Program Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card
                key={highlight.title}
                className="group hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0 relative overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-bl-full"></div>
                
                <CardHeader className="pb-4">
                  <IconComponent className="w-12 h-12 text-primary mb-4 group-hover:text-secondary transition-colors animate-float" style={{ animationDelay: `${index * 0.1}s` }} />
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {highlight.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {highlight.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {highlight.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="max-w-4xl mx-auto border-0 shadow-elegant-xl bg-gradient-to-r from-primary/10 via-background to-secondary/10">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Experience Excellence in Education
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of successful students who have achieved their goals through our 
                comprehensive and industry-focused educational programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="shadow-elegant group">
                  <BookOpen className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Explore All Programs
                </Button>
                <Button variant="outline" size="lg">
                  <Award className="w-5 h-5 mr-2" />
                  View Success Stories
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;