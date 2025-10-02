import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign, ArrowRight, FileText, Calendar, Users } from "lucide-react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { programsData } from "@/data/programsData";

const TVECPrograms = () => {
  const tvecPrograms = programsData.filter(program => program.level === "TVEC" || program.level === "Certificate");

  const upcomingIntakes = [
    { month: "April 2024", date: "15th April", status: "Open" },
    { month: "July 2024", date: "1st July", status: "Open" },
    { month: "October 2024", date: "15th October", status: "Coming Soon" },
    { month: "January 2025", date: "15th January", status: "Coming Soon" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-500/10 to-blue-600/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-6 animate-float shadow-elegant">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-slide-up">
                TVEC & Short Courses
              </h1>
              <p className="text-xl text-muted-foreground animate-slide-up max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
                Short Courses • 6 months • Practical certificates in childcare, elderly care, and vocational skills
              </p>
            </div>
          </div>
        </section>

        {/* Intake Calendar */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Upcoming Intakes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {upcomingIntakes.map((intake, index) => (
                <Card key={index} className="text-center hover:shadow-elegant transition-shadow animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-950/20 flex items-center justify-center mx-auto mb-2">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{intake.month}</CardTitle>
                    <CardDescription>{intake.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant={intake.status === "Open" ? "default" : "secondary"}>
                      {intake.status}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Program Benefits */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose TVEC Courses?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-950/20 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Quick Completion</h3>
                  <p className="text-muted-foreground">Complete professional certification in just 6 months</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-950/20 flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Official Certification</h3>
                  <p className="text-muted-foreground">TVEC recognized certificates for employment</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-950/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Practical Training</h3>
                  <p className="text-muted-foreground">Hands-on experience with industry standards</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Available TVEC Programs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {tvecPrograms.map((program, index) => (
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
                      <Badge variant="default" className="bg-blue-100 text-blue-800 dark:bg-blue-950/20 dark:text-blue-400">
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
                      <h4 className="font-medium text-sm">Course Highlights:</h4>
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
                      <h4 className="font-medium text-sm">Employment Opportunities:</h4>
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
                        <Link to="/apply">Reserve Seat</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* TVEC Information */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">About TVEC Certification</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-600">
                      <FileText className="w-6 h-6 mr-2" />
                      TVEC Recognition
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      The Tertiary and Vocational Education Commission (TVEC) is the official body for vocational education in Sri Lanka.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Government recognized certification</li>
                      <li>• Industry-standard qualifications</li>
                      <li>• Employment-focused training</li>
                      <li>• Pathway to higher education</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-600">
                      <Users className="w-6 h-6 mr-2" />
                      Course Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Practical, hands-on training</li>
                      <li>• Small class sizes for individual attention</li>
                      <li>• Industry-experienced instructors</li>
                      <li>• Modern facilities and equipment</li>
                      <li>• Job placement assistance</li>
                      <li>• Flexible payment plans available</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Entry Requirements */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Entry Requirements</h2>
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-blue-600">General Requirements</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Age limit: Above 16+ years</li>
                        <li>• G.C.E O/L with 6 credits preferred</li>
                        <li>• Any other qualification approved by Amazon Campus</li>
                        <li>• Basic English communication skills</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-blue-600">Course-Specific Requirements</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Physical fitness for practical courses</li>
                        <li>• Medical clearance for healthcare courses</li>
                        <li>• Background verification for childcare</li>
                        <li>• Interview for some specialized programs</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <FileText className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Career Journey Today</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join our next intake and gain practical skills that lead directly to employment opportunities in growing industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="hover-lift hover-glow" asChild>
                <Link to="/apply">Reserve Your Seat</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary-foreground bg-white/10 backdrop-blur-sm" asChild>
                <Link to="/contact">Get Information</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TVECPrograms;