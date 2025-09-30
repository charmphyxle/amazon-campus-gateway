import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign, ArrowRight, Trophy, BookOpen, Search } from "lucide-react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { programsData } from "@/data/programsData";

const MastersPhDPrograms = () => {
  const postgraduatePrograms = programsData.filter(program => program.level === "Masters" || program.level === "PhD");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-red-500/10 to-red-600/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mx-auto mb-6 animate-float shadow-elegant">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
                Masters & PhD Programs
              </h1>
              <p className="text-xl text-muted-foreground animate-slide-up max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
                Postgraduate • 1-4 years • Advanced research and professional masters programs across multiple disciplines
              </p>
            </div>
          </div>
        </section>

        {/* Program Benefits */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Postgraduate Studies?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-950/20 flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Advanced Research</h3>
                  <p className="text-muted-foreground">Cutting-edge research in your field of expertise</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-950/20 flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Expert Faculty</h3>
                  <p className="text-muted-foreground">Learn from experienced academics and industry professionals</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-950/20 flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Career Leadership</h3>
                  <p className="text-muted-foreground">Preparation for senior roles and academic careers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Available Postgraduate Programs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {postgraduatePrograms.map((program, index) => (
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
                      <Badge variant="default" className="bg-red-100 text-red-800 dark:bg-red-950/20 dark:text-red-400">
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
                      <h4 className="font-medium text-sm">Research Areas:</h4>
                      <div className="flex flex-wrap gap-1">
                        {program.modules.slice(0, 2).map((module, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {module.title.split(' ').slice(0, 2).join(' ')}
                          </Badge>
                        ))}
                        {program.modules.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{program.modules.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Career Paths:</h4>
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
                        <Link to={`/programs/${program.slug}`}>
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link to="/apply">Apply Now</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Program Types */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Postgraduate Options</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-600">
                      <BookOpen className="w-6 h-6 mr-2" />
                      Masters Programs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• MA, MSc, MBA, MEd, MSc IT programs</li>
                      <li>• 1-2 year duration</li>
                      <li>• Research and coursework components</li>
                      <li>• Professional development focus</li>
                      <li>• Industry placements available</li>
                      <li>• UGC recognized qualifications</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-600">
                      <Search className="w-6 h-6 mr-2" />
                      PhD Programs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• PhD in Psychology, Education, Management, IT</li>
                      <li>• 3-4 year research programs</li>
                      <li>• Original research contribution</li>
                      <li>• Supervision by expert faculty</li>
                      <li>• Publication opportunities</li>
                      <li>• Academic career preparation</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Research Specializations</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Psychology", description: "Clinical, Educational, Organizational Psychology" },
                  { title: "Education", description: "Curriculum, Teaching Methods, Educational Technology" },
                  { title: "Management", description: "Strategic Management, Leadership, Innovation" },
                  { title: "Information Technology", description: "AI, Cybersecurity, Software Engineering" }
                ].map((area, index) => (
                  <Card key={index} className="text-center hover:shadow-elegant transition-shadow animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader>
                      <CardTitle className="text-lg text-red-600">{area.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{area.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Entry Requirements */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Entry Requirements</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-red-600">Masters Programs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Bachelor's degree with minimum Second Class</li>
                      <li>• Relevant field of study</li>
                      <li>• English proficiency certification</li>
                      <li>• Work experience preferred for professional programs</li>
                      <li>• Research proposal for research-based programs</li>
                      <li>• Interview and aptitude test</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-red-600">PhD Programs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Masters degree in relevant field</li>
                      <li>• Strong academic record</li>
                      <li>• Research experience and publications</li>
                      <li>• Comprehensive research proposal</li>
                      <li>• Interview with faculty panel</li>
                      <li>• Potential supervisor agreement</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-red-500 to-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <Trophy className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Advance to the Highest Level</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join our postgraduate community and make significant contributions to your field through advanced research and professional practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="hover-lift hover-glow" asChild>
                <Link to="/apply">Apply for Postgraduate</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-foreground bg-white/10 backdrop-blur-sm" asChild>
                <Link to="/contact">Research Guidance</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MastersPhDPrograms;