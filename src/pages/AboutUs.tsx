import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutAmazonSection from "@/components/AboutAmazonSection";
import WhyChooseAmazonSection from "@/components/WhyChooseAmazonSection";
import { Target, Eye, Heart, Award, Users, Globe } from "lucide-react";

const AboutUs = () => {
  const [timelineInView, setTimelineInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimelineInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const timelineElement = document.getElementById('timeline');
    if (timelineElement) {
      observer.observe(timelineElement);
    }

    return () => observer.disconnect();
  }, []);

  const timeline = [
    { year: "2008", event: "Amazon College Founded", description: "Established with a vision to provide quality international education" },
    { year: "2012", event: "First International Partnership", description: "Signed agreement with leading UK universities" },
    { year: "2015", event: "1000+ Graduates Milestone", description: "Celebrated our first thousand successful graduates" },
    { year: "2018", event: "Award for Excellence", description: "Received National Award for Educational Excellence" },
    { year: "2020", event: "Digital Learning Initiative", description: "Launched comprehensive online learning platform" },
    { year: "2023", event: "15 Years of Excellence", description: "Celebrating 15 years of transforming lives through education" }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do"
    },
    {
      icon: Heart,
      title: "Student-Centric",
      description: "Every decision is made with our students' success in mind"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Preparing students for success in an interconnected world"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive learning environment for all"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative h-96 bg-gradient-to-br from-primary to-trust overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Amazon College</h1>
            <p className="text-xl md:text-2xl opacity-90">15+ Years of Educational Excellence</p>
          </div>
        </div>
      </section>

      {/* About Amazon Section */}
      <AboutAmazonSection />

      {/* Why Choose Amazon College Section */}
      <WhyChooseAmazonSection />

      {/* College History Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming a leading international education provider
            </p>
          </div>

          <div id="timeline" className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20" />
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } ${timelineInView ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-1" />
                <div className="relative z-10 bg-primary w-4 h-4 rounded-full mx-8" />
                <div className="flex-1">
                  <Card className="max-w-md hover:shadow-elegant-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-primary text-2xl">{item.year}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-foreground">
                        {item.event}
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
      </section>

      {/* Founder's Message */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elegant-lg border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-trust flex items-center justify-center">
                        <Users className="w-24 h-24 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">Dr. John Smith</h3>
                      <p className="text-muted-foreground">Founder & Principal</p>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-3xl font-bold text-foreground mb-6">Founder's Message</h2>
                    <blockquote className="text-lg text-muted-foreground leading-relaxed italic mb-6">
                      "Education is the most powerful weapon which you can use to change the world. At Amazon College, 
                      we believe in nurturing not just academic excellence, but also character, leadership, and global 
                      citizenship. Our commitment to providing world-class education has remained unwavering for over 
                      15 years, and we continue to evolve to meet the changing needs of our students."
                    </blockquote>
                    <div className="text-right">
                      <div className="inline-block">
                        <div className="text-2xl font-signature text-primary mb-2">Dr. John Smith</div>
                        <p className="text-sm text-muted-foreground">Founder & Principal</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Foundation</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="shadow-elegant-lg border-0 hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center">
                <Target className="w-16 h-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  To provide exceptional international education that empowers students to achieve their 
                  academic and professional goals while fostering global citizenship and lifelong learning.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant-lg border-0 hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center">
                <Eye className="w-16 h-16 text-secondary mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  To be recognized as the leading international education provider that transforms lives 
                  and creates pathways to global opportunities for students from all backgrounds.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={value.title}
                  className="group hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0"
                >
                  <CardHeader className="text-center pb-4">
                    <IconComponent className="w-12 h-12 text-trust mx-auto mb-4 group-hover:text-primary transition-colors" />
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 text-center">
                    <CardDescription>{value.description}</CardDescription>
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
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of successful graduates who have transformed their lives through quality education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-elegant">
              Explore Programs
            </Button>
            <Button variant="outline" size="lg">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;