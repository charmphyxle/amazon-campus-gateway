import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star, Quote, Play, Award, Briefcase, GraduationCap } from "lucide-react";

const Testimonials = () => {
  const [filterProgram, setFilterProgram] = useState("all");

  const testimonials = [
    {
      id: 1,
      name: "Sarah Fernando",
      program: "Diploma in Information Technology",
      currentRole: "Software Developer at Tech Solutions Ltd",
      year: "2023",
      rating: 5,
      quote: "The practical approach to learning at Amazon College prepared me perfectly for the real world. The instructors were knowledgeable and the curriculum was up-to-date with industry standards.",
      beforeAfter: {
        before: "Unemployed recent school leaver",
        after: "Software Developer earning Rs. 75,000/month"
      },
      image: "/src/assets/hero-graduation.jpg",
      featured: true
    },
    {
      id: 2,
      name: "Rohan Perera",
      program: "HND Business Management",
      currentRole: "Assistant Manager at Global Trading Co",
      year: "2022",
      rating: 5,
      quote: "The business management program gave me both theoretical knowledge and practical skills. The internship opportunities helped me secure my current position.",
      beforeAfter: {
        before: "Shop assistant with basic qualifications",
        after: "Assistant Manager with career growth prospects"
      }
    },
    {
      id: 3,
      name: "Priya Jayasinghe",
      program: "Diploma in Psychology & Counselling",
      currentRole: "Mental Health Support Worker",
      year: "2023",
      rating: 5,
      quote: "This program changed my perspective on mental health and gave me the tools to help others. The faculty's support throughout the course was exceptional.",
      beforeAfter: {
        before: "Housewife looking for career change",
        after: "Certified counselor helping families in need"
      }
    },
    {
      id: 4,
      name: "Kamal Silva",
      program: "Master of Business Administration",
      currentRole: "Regional Manager at National Bank",
      year: "2022",
      rating: 5,
      quote: "The MBA program enhanced my leadership skills and strategic thinking. The flexible schedule allowed me to continue working while studying.",
      beforeAfter: {
        before: "Branch Manager seeking advancement",
        after: "Regional Manager overseeing 15 branches"
      }
    },
    {
      id: 5,
      name: "Nilmini Rodrigo",
      program: "Diploma in Early Childhood Education",
      currentRole: "Preschool Teacher at Little Stars",
      year: "2023",
      rating: 5,
      quote: "The hands-on training and child psychology modules were invaluable. I now feel confident working with children of all ages and backgrounds.",
      beforeAfter: {
        before: "Mother wanting to work with children",
        after: "Qualified preschool teacher with own classroom"
      }
    },
    {
      id: 6,
      name: "Chamara Bandara",
      program: "Diploma in Digital Marketing",
      currentRole: "Digital Marketing Specialist",
      year: "2023",
      rating: 5,
      quote: "The course covered everything from SEO to social media marketing. The practical projects helped me build a portfolio that impressed employers.",
      beforeAfter: {
        before: "Traditional marketing background",
        after: "Digital marketing expert managing online campaigns"
      }
    }
  ];

  const successStats = [
    { number: "95%", label: "Job Placement Rate", icon: Briefcase },
    { number: "2,500+", label: "Successful Graduates", icon: GraduationCap },
    { number: "4.8/5", label: "Average Rating", icon: Star },
    { number: "150+", label: "Employer Partners", icon: Award }
  ];

  const programs = ["all", "Information Technology", "Business Management", "Psychology & Counselling", "Early Childhood Education", "Digital Marketing"];

  const filteredTestimonials = testimonials.filter(testimonial => 
    filterProgram === "all" || testimonial.program.includes(filterProgram)
  );

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-success to-trust overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white animate-fade-in">
            <Quote className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Success Stories</h1>
            <p className="text-xl md:text-2xl opacity-90">Real Students, Real Success</p>
          </div>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Impact in Numbers</h2>
            <p className="text-lg text-muted-foreground">
              See how our graduates are making a difference in their careers and communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center hover:shadow-elegant-lg transition-all duration-300 group">
                  <CardContent className="pt-8 pb-6">
                    <IconComponent className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Student Testimonials</h2>
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">Filter by program:</span>
              <Select value={filterProgram} onValueChange={setFilterProgram}>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Select program" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Programs</SelectItem>
                  {programs.slice(1).map((program) => (
                    <SelectItem key={program} value={program}>{program}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      {testimonials.find(t => t.featured) && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            {(() => {
              const featured = testimonials.find(t => t.featured);
              return (
                <Card className="max-w-6xl mx-auto overflow-hidden shadow-elegant-lg">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="h-64 md:h-auto bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-center p-8">
                        <GraduationCap className="w-16 h-16 text-primary mx-auto mb-4" />
                        <Badge variant="secondary" className="mb-4">Featured Success Story</Badge>
                        <p className="text-muted-foreground">Graduate Success Image</p>
                      </div>
                    </div>
                    <div className="p-8">
                      <Badge variant="outline" className="mb-4">{featured?.program}</Badge>
                      <Quote className="w-8 h-8 text-primary mb-4" />
                      <blockquote className="text-lg text-foreground mb-6 italic">
                        "{featured?.quote}"
                      </blockquote>
                      <div className="flex items-center gap-2 mb-4">
                        {renderStars(featured?.rating || 5)}
                      </div>
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground">{featured?.name}</h4>
                        <p className="text-muted-foreground">{featured?.currentRole}</p>
                        <p className="text-sm text-muted-foreground">Class of {featured?.year}</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h5 className="font-semibold text-foreground mb-2">Career Transformation</h5>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="text-muted-foreground">Before:</span> {featured?.beforeAfter.before}
                          </div>
                          <div>
                            <span className="text-muted-foreground">After:</span> {featured?.beforeAfter.after}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })()}
          </div>
        </section>
      )}

      {/* All Testimonials */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.filter(t => !t.featured).map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-elegant-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{testimonial.program}</Badge>
                    <div className="flex items-center gap-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-primary mb-2" />
                  <CardDescription className="italic">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.currentRole}</p>
                    <p className="text-xs text-muted-foreground">Class of {testimonial.year}</p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-3">
                    <h5 className="font-semibold text-foreground mb-2 text-sm">Success Journey</h5>
                    <div className="space-y-1 text-xs">
                      <div>
                        <span className="text-muted-foreground">From:</span> {testimonial.beforeAfter.before}
                      </div>
                      <div>
                        <span className="text-muted-foreground">To:</span> {testimonial.beforeAfter.after}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Video Testimonials</h2>
            <p className="text-lg text-muted-foreground">
              Hear directly from our graduates about their experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video) => (
              <Card key={video} className="overflow-hidden hover:shadow-elegant-lg transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative cursor-pointer">
                  <Play className="w-16 h-16 text-primary group-hover:scale-110 transition-transform" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">Video</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">Graduate Interview {video}</h4>
                  <p className="text-sm text-muted-foreground">
                    Watch how our alumni achieved success after graduation
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Share Your Success Story</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Are you an Amazon College graduate? We'd love to hear about your journey and success!
            </p>
            
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="mb-6">
                <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Join Our Success Stories</h3>
                <p className="text-muted-foreground">
                  Help inspire future students by sharing your achievements
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Submit Your Story</Button>
                <Button variant="outline" size="lg">Record Video Testimonial</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;