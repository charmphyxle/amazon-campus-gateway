import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign, ArrowRight, Award, Globe, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { programsData } from "@/data/programsData";

const HNDPrograms = () => {
  const hndPrograms = programsData.filter(program => program.level === "HND");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-500/10 to-purple-600/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-6 animate-float shadow-elegant">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
                HND Programs
              </h1>
              <p className="text-xl text-muted-foreground animate-slide-up max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
                UK-Affiliated • Higher National Diplomas • 2-3 years • International recognition and transfer options
              </p>
            </div>
          </div>
        </section>

        {/* Program Benefits */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose HND Programs?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-950/20 flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">UK Recognition</h3>
                  <p className="text-muted-foreground">Internationally recognized qualifications with UK affiliation</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-950/20 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Career Advancement</h3>
                  <p className="text-muted-foreground">Higher qualification for senior roles and better opportunities</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-950/20 flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Degree Pathway</h3>
                  <p className="text-muted-foreground">Direct entry to final year of UK degree programs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Available HND Programs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {hndPrograms.map((program, index) => (
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
                      <Badge variant="default" className="bg-purple-100 text-purple-800 dark:bg-purple-950/20 dark:text-purple-400">
                        HND
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
                      <h4 className="font-medium text-sm">Accreditation:</h4>
                      <div className="flex flex-wrap gap-1">
                        {program.accreditation.slice(0, 2).map((acc, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {acc.body.split(' ')[0]}
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

        {/* HND Advantages */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">HND Advantages</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-600">
                      <Globe className="w-6 h-6 mr-2" />
                      International Recognition
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• UK awarding body certification</li>
                      <li>• Recognized by employers worldwide</li>
                      <li>• Credit transfer to international universities</li>
                      <li>• WES and embassy endorsements</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-600">
                      <TrendingUp className="w-6 h-6 mr-2" />
                      Career Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Higher salary potential</li>
                      <li>• Management and supervisory roles</li>
                      <li>• Professional development opportunities</li>
                      <li>• Industry-specific expertise</li>
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
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-purple-600">Academic Requirements</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• G.C.E A/L with 3 passes or equivalent</li>
                        <li>• Relevant diploma with good grades</li>
                        <li>• NVQ Level 4 or equivalent</li>
                        <li>• Professional qualifications considered</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-purple-600">Language & Other Requirements</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• English proficiency (written and spoken)</li>
                        <li>• Age limit: Above 19 years</li>
                        <li>• Interview for some programs</li>
                        <li>• Portfolio for creative programs</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <Award className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Advance Your Career with HND</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Gain internationally recognized qualifications that open doors to global opportunities and career advancement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="hover-lift hover-glow" asChild>
                <Link to="/apply">Apply for HND</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600" asChild>
                <Link to="/contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HNDPrograms;