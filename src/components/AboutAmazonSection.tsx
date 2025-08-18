import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, BookOpen, Award, Lightbulb } from "lucide-react";

const AboutAmazonSection = () => {
  const history = [
    {
      year: "2008",
      title: "Foundation",
      description: "Amazon College was established with a vision to provide world-class international education"
    },
    {
      year: "2012",
      title: "International Recognition",
      description: "Achieved accreditation from leading international education bodies"
    },
    {
      year: "2018",
      title: "Excellence Award",
      description: "Received the National Excellence in Education Award"
    },
    {
      year: "2023",
      title: "15 Years Strong",
      description: "Celebrating 15 years of educational excellence with over 5,000 graduates"
    }
  ];

  const coreValues = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in education and student support"
    },
    {
      icon: Heart,
      title: "Student-Centric",
      description: "Every decision is made with our students' success and wellbeing in mind"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing cutting-edge teaching methods and educational technology"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            About <span className="gradient-text">Amazon College</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            For over 15 years, Amazon College International Campus has been at the forefront of 
            international education, transforming lives through quality learning experiences.
          </p>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <Card className="group hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader className="text-center">
              <Target className="w-16 h-16 text-primary mx-auto mb-4 group-hover:text-secondary transition-colors animate-float" />
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center leading-relaxed">
                To provide exceptional international education that empowers students to achieve their 
                academic and professional goals while fostering global citizenship and lifelong learning.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-secondary/5 to-trust/5">
            <CardHeader className="text-center">
              <Eye className="w-16 h-16 text-secondary mx-auto mb-4 group-hover:text-primary transition-colors animate-float" style={{ animationDelay: '0.2s' }} />
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center leading-relaxed">
                To be recognized as the leading international education provider that transforms lives 
                and creates pathways to global opportunities for students from all backgrounds.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-trust/5 to-primary/5">
            <CardHeader className="text-center">
              <BookOpen className="w-16 h-16 text-trust mx-auto mb-4 group-hover:text-secondary transition-colors animate-float" style={{ animationDelay: '0.4s' }} />
              <CardTitle className="text-2xl">Our Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center leading-relaxed">
                Education is the foundation of progress. We believe in nurturing not just academic 
                excellence, but also character, leadership, and global understanding.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* History Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary"></div>
            {history.map((item, index) => (
              <div
                key={item.year}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-1"></div>
                <div className="relative z-10 bg-secondary w-6 h-6 rounded-full mx-8 shadow-elegant animate-pulse-glow"></div>
                <div className="flex-1">
                  <Card className={`max-w-md hover:shadow-elegant-lg transition-all duration-300 ${
                    index % 2 === 0 ? '' : 'ml-auto'
                  }`}>
                    <CardHeader>
                      <CardTitle className="text-primary text-2xl">{item.year}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-foreground">
                        {item.title}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={value.title}
                  className="group hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0 text-center"
                >
                  <CardHeader>
                    <IconComponent className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:text-primary transition-colors animate-float" style={{ animationDelay: `${index * 0.2}s` }} />
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAmazonSection;