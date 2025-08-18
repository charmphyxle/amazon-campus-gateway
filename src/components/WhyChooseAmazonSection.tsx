import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Globe, 
  Users, 
  BookOpen, 
  TrendingUp, 
  Shield, 
  Star,
  CheckCircle,
  Target,
  Heart
} from "lucide-react";

const WhyChooseAmazonSection = () => {
  const strengths = [
    {
      icon: Award,
      title: "15+ Years of Excellence",
      description: "Established reputation in international education with proven track record",
      highlight: "5000+ Graduates"
    },
    {
      icon: Globe,
      title: "International Recognition",
      description: "Accredited by leading global education bodies and government agencies",
      highlight: "Globally Recognized"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Experienced educators with international qualifications and industry expertise",
      highlight: "PhD Qualified"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Programs",
      description: "Wide range of courses from English language to professional diplomas",
      highlight: "20+ Programs"
    },
    {
      icon: TrendingUp,
      title: "Career Success",
      description: "95% of our graduates find employment or continue higher education",
      highlight: "95% Success Rate"
    },
    {
      icon: Shield,
      title: "Student Support",
      description: "Comprehensive support services including counseling and career guidance",
      highlight: "24/7 Support"
    }
  ];

  const accreditations = [
    "Government of Nepal Approved",
    "UK University Partnerships",
    "ISO 9001:2015 Certified",
    "TESOL Accredited",
    "Cambridge Authorized Center",
    "IELTS Test Preparation Partner"
  ];

  const successStories = [
    {
      name: "Sarah Johnson",
      achievement: "Oxford University Scholar",
      program: "IELTS Preparation",
      quote: "Amazon College gave me the confidence and skills to achieve my dream of studying at Oxford."
    },
    {
      name: "Rajesh Patel",
      achievement: "Senior Manager at Tech Corp",
      program: "Business Administration",
      quote: "The practical approach and industry connections helped me land my dream job."
    },
    {
      name: "Maria Rodriguez",
      achievement: "International Teacher",
      program: "TESOL Certification",
      quote: "The comprehensive training prepared me to teach English in three different countries."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Why Choose <span className="gradient-text">Amazon College</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Discover what makes us the preferred choice for international education and 
            professional development.
          </p>
        </div>

        {/* Unique Strengths */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {strengths.map((strength, index) => {
            const IconComponent = strength.icon;
            return (
              <Card
                key={strength.title}
                className="group hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="shadow-md">
                    {strength.highlight}
                  </Badge>
                </div>
                <CardHeader className="pb-4">
                  <IconComponent className="w-12 h-12 text-primary mb-4 group-hover:text-secondary transition-colors animate-float" style={{ animationDelay: `${index * 0.1}s` }} />
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {strength.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {strength.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Accreditations */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Accreditations & Partnerships
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {accreditations.map((accreditation, index) => (
              <div
                key={accreditation}
                className="flex items-center p-4 bg-white/50 rounded-lg shadow-elegant hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-6 h-6 text-success mr-3 flex-shrink-0" />
                <span className="font-medium text-foreground">{accreditation}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Student Success Stories
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card
                key={story.name}
                className="group hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0 text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl">{story.name}</CardTitle>
                  <CardDescription className="text-secondary font-semibold">
                    {story.achievement}
                  </CardDescription>
                  <Badge variant="outline" className="mx-auto">
                    {story.program}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground italic leading-relaxed">
                    "{story.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl shadow-elegant-xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Success Story?
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Take the first step towards your educational and career goals with Amazon College
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="shadow-elegant">
                Apply Now
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Download Prospectus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAmazonSection;