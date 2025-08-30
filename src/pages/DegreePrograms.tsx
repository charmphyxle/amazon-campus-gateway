import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign, ArrowRight, GraduationCap, Star, Users } from "lucide-react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { programsData } from "@/data/programsData";

const DegreePrograms = () => {
  const degreePrograms = programsData.filter(program => program.level === "Degree" || program.level === "Top-up");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-orange-500/10 to-orange-600/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-6 animate-float shadow-elegant">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
                Degree Programs
              </h1>
              <p className="text-xl text-muted-foreground animate-slide-up max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
                Bachelor Programs • 3-4 years • Full degree programs and top-ups in business, IT, education, and psychology
              </p>
            </div>
          </div>
        </section>

        {/* Program Benefits */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Our Degree Programs?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-950/20 flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Academic Excellence</h3>
                  <p className="text-muted-foreground">Comprehensive curriculum with research components</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-950/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Industry Connections</h3>
                  <p className="text-muted-foreground">Strong industry partnerships and placement opportunities</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-950/20 flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Postgraduate Pathway</h3>
                  <p className="text-muted-foreground">Direct progression to masters and PhD programs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Available Degree Programs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {degreePrograms.map((program, index) => (
                <Card key={program.id} className="group hover:shadow-elegant-xl transition-all duration-300 hover-lift h-full animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={program.images[0] || "/src/assets/campus-exterior.jpg"} 
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="default" className="bg-orange-100 text-orange-800 dark:bg-orange-950/20 dark:text-orange-400">
                        {program.level}
                      </Badge>
                      {program.featured && <Badge variant="secondary">Featured</Badge>}
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                      {program.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{program.shortSummary}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {program.duration}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <DollarSign className="w-4 h-4 mr-1" />
                        LKR {program.fees.total.toLocaleString()}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Learning Outcomes (Sample):</h4>
                      <div className="flex flex-wrap gap-1">
                        {program.learningOutcomes.slice(0, 2).map((outcome, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {outcome.split(' ').slice(0, 3).join(' ')}...
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Career Opportunities:</h4>
                      <div className="flex flex-wrap gap-1">
                        {program.careerPaths.slice(0, 2).map((path, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {path}
                          </Badge>
                        ))}
                        {program.careerPaths.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{program.careerPaths.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={`/programs/${program.slug}`}>
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href="/apply">Apply Now</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Degree Types */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Types of Degree Programs</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-600">
                      <GraduationCap className="w-6 h-6 mr-2" />
                      Full Bachelor's Degrees
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Complete 3-4 year programs</li>
                      <li>• Comprehensive curriculum with research component</li>
                      <li>• BBA, BSc IT, BA English, BSc Psychology, BEd</li>
                      <li>• UGC recognized qualifications</li>
                      <li>• Direct progression to postgraduate studies</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-600">
                      <ArrowRight className="w-6 h-6 mr-2" />
                      Top-up Degrees
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• One year completion programs</li>
                      <li>• For HND or diploma holders</li>
                      <li>• Fast-track to bachelor's degree</li>
                      <li>• Specialized final year curriculum</li>
                      <li>• Same recognition as full degrees</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Entry Requirements */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Entry Requirements</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-orange-600">Full Bachelor's Degrees</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• G.C.E A/L with 3 passes</li>
                      <li>• Minimum grade requirements vary by program</li>
                      <li>• English proficiency essential</li>
                      <li>• Age limit: Above 19 years</li>
                      <li>• Interview and aptitude test for some programs</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-orange-600">Top-up Degrees</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Completed HND or equivalent diploma</li>
                      <li>• Minimum Second Class in previous qualification</li>
                      <li>• Relevant field of study</li>
                      <li>• Portfolio for some programs</li>
                      <li>• Academic transcript evaluation</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <GraduationCap className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Earn Your Bachelor's Degree</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Take the next step in your academic journey. Our degree programs provide the knowledge and skills needed for leadership roles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="hover-lift hover-glow" asChild>
                <a href="/apply">Apply for Degree</a>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-orange-600" asChild>
                <a href="/contact">Academic Guidance</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DegreePrograms;