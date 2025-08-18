import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Trophy, Award } from "lucide-react";

const ProgramSuccessStories = () => {
  const stories = [
    {
      name: "Emily Chen",
      program: "IELTS Preparation",
      achievement: "Band 8.5 - Cambridge University",
      photo: "👩‍🎓",
      quote: "The intensive IELTS preparation at Amazon College helped me achieve my dream score. The mock tests and personalized feedback were invaluable.",
      outcome: "Admitted to Cambridge University for Masters in Engineering",
      year: "2023"
    },
    {
      name: "David Martinez",
      program: "Business Administration Diploma",
      achievement: "Regional Manager - Tech Corp",
      photo: "👨‍💼",
      quote: "The practical approach and real-world case studies prepared me for the challenges of modern business management.",
      outcome: "Promoted to Regional Manager within 6 months of graduation",
      year: "2022"
    },
    {
      name: "Sarah Thompson",
      program: "TESOL Certification",
      achievement: "International School Director",
      photo: "👩‍🏫",
      quote: "The comprehensive training and teaching practice gave me the confidence to pursue leadership roles in education.",
      outcome: "Appointed as Director of International School in Thailand",
      year: "2023"
    },
    {
      name: "Ahmed Hassan",
      program: "IT Diploma",
      achievement: "Software Developer - Google",
      photo: "👨‍💻",
      quote: "The hands-on programming experience and industry projects made me job-ready from day one.",
      outcome: "Hired as Software Developer at Google after completing internship",
      year: "2023"
    },
    {
      name: "Lisa Wang",
      program: "Business English",
      achievement: "International Sales Director",
      photo: "👩‍💼",
      quote: "The business communication skills I learned opened doors to international opportunities.",
      outcome: "Leading sales operations across 5 countries",
      year: "2022"
    },
    {
      name: "Michael Brown",
      program: "Kids Learning Academy",
      achievement: "Young Entrepreneur",
      photo: "👦",
      quote: "The creative problem-solving skills I developed helped me start my own tech company at age 16.",
      outcome: "Founded successful educational app company",
      year: "2023"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Student <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Discover how our programs have transformed lives and launched successful careers 
            across various industries and countries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card
              key={story.name}
              className="group hover:shadow-elegant-lg transition-all duration-500 hover:scale-105 border-0 relative overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Achievement Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge variant="secondary" className="shadow-md">
                  <Trophy className="w-3 h-3 mr-1" />
                  {story.year}
                </Badge>
              </div>

              {/* Background Pattern */}
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent"></div>

              <CardHeader className="relative z-10 text-center pb-4">
                {/* Photo Avatar */}
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl shadow-elegant group-hover:scale-110 transition-transform">
                  {story.photo}
                </div>
                
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {story.name}
                </CardTitle>
                <CardDescription className="font-semibold text-secondary">
                  {story.achievement}
                </CardDescription>
                <Badge variant="outline" className="mx-auto mt-2">
                  {story.program}
                </Badge>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="w-6 h-6 text-primary/30 absolute -top-2 -left-1" />
                  <blockquote className="text-muted-foreground italic leading-relaxed pl-6">
                    "{story.quote}"
                  </blockquote>
                </div>

                {/* Outcome */}
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Current Achievement</h4>
                      <p className="text-sm text-muted-foreground">{story.outcome}</p>
                    </div>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex justify-center mt-4 space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 text-secondary fill-secondary"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="max-w-4xl mx-auto border-0 shadow-elegant-xl bg-gradient-to-r from-primary/10 via-background to-secondary/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Write Your Success Story?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join our alumni network of successful professionals and entrepreneurs. 
                Your journey to success starts with the right education.
              </p>
              <div className="flex justify-center space-x-2">
                <Badge variant="secondary" className="text-sm">95% Success Rate</Badge>
                <Badge variant="outline" className="text-sm">Job Placement Support</Badge>
                <Badge variant="outline" className="text-sm">Global Recognition</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgramSuccessStories;