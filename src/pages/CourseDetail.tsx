import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getProgramBySlug } from "@/utils/programDataImporter";
import { Clock, DollarSign, Download, Star, Award, Users, BookOpen, ArrowLeft, Calculator } from "lucide-react";
import type { Program } from "@/data/programSchema";

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [program, setProgram] = useState<Program | null>(null);
  const [loading, setLoading] = useState(true);
  const [installmentMonths, setInstallmentMonths] = useState(12);

  useEffect(() => {
    if (slug) {
      const foundProgram = getProgramBySlug(slug);
      setProgram(foundProgram || null);
    }
    setLoading(false);
  }, [slug]);

  useEffect(() => {
    // JSON-LD Structured Data for SEO
    if (program) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        "name": program.title,
        "description": program.shortSummary,
        "provider": {
          "@type": "Organization",
          "name": "Amazon College",
          "sameAs": "https://amazoncollege.lk"
        },
        "educationalLevel": program.level,
        "courseCode": program.id,
        "duration": program.duration,
        "offers": {
          "@type": "Offer",
          "price": program.fees.total,
          "priceCurrency": program.fees.currency
        }
      });
      document.head.appendChild(script);
      
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [program]);

  const calculateInstallment = () => {
    if (!program) return 0;
    return Math.ceil(program.fees.total / installmentMonths);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!program) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Course Not Found</h1>
          <p className="text-muted-foreground mb-8">The course you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/programs')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Programs
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-trust overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="ghost"
              onClick={() => navigate('/programs')}
              className="text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Programs
            </Button>
          </div>
          
          <div className="max-w-4xl text-white">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                {program.level}
              </Badge>
              {program.category && (
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  {program.category}
                </Badge>
              )}
              {program.featured && (
                <Badge variant="secondary" className="bg-success text-white">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              )}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{program.title}</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">{program.shortSummary}</p>
            
            <div className="flex flex-wrap gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{program.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                <span>{program.fees.currency} {program.fees.total.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Open Enrollment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Course Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="modules">Modules</TabsTrigger>
                  <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
                  <TabsTrigger value="careers">Careers</TabsTrigger>
                  <TabsTrigger value="requirements">Requirements</TabsTrigger>
                  <TabsTrigger value="fees">Fees</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Course Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div 
                        className="prose prose-lg max-w-none text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: program.longDescription }}
                      />
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="modules" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Course Modules</CardTitle>
                      <CardDescription>
                        Module-by-module breakdown of the course content
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {program.modules.map((module, index) => (
                          <div key={index} className="border rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-primary mb-2">
                              Module {index + 1}: {module.title}
                            </h3>
                            <p className="text-muted-foreground">{module.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="outcomes" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Learning Outcomes</CardTitle>
                      <CardDescription>
                        What you'll achieve upon successful completion
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {program.learningOutcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Award className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="careers" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Career Pathways</CardTitle>
                      <CardDescription>
                        Professional opportunities after graduation
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {program.careerPaths.map((career, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                            <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{career}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="requirements" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Entry Requirements</CardTitle>
                      <CardDescription>
                        Prerequisites for enrollment
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {program.entryRequirements.map((requirement, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Users className="w-5 h-5 text-trust mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="fees" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Fees & Payment Options</CardTitle>
                      <CardDescription>
                        Course fees and installment plans
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="bg-primary/10 p-6 rounded-lg">
                          <h3 className="text-2xl font-bold text-primary mb-2">
                            {program.fees.currency} {program.fees.total.toLocaleString()}
                          </h3>
                          <p className="text-muted-foreground">Total Course Fee</p>
                        </div>
                        
                        <div className="bg-muted/30 p-6 rounded-lg">
                          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <Calculator className="w-5 h-5" />
                            Installment Calculator
                          </h3>
                          
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="months">Number of Months: {installmentMonths}</Label>
                              <Slider
                                id="months"
                                min={3}
                                max={24}
                                step={1}
                                value={[installmentMonths]}
                                onValueChange={(value) => setInstallmentMonths(value[0])}
                                className="mt-2"
                              />
                            </div>
                            
                            <div className="bg-background p-4 rounded border">
                              <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Monthly Payment:</span>
                                <span className="text-xl font-bold text-primary">
                                  {program.fees.currency} {calculateInstallment().toLocaleString()}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Apply Now Card */}
              <Card className="border-primary/20 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-primary">Ready to Apply?</CardTitle>
                  <CardDescription>
                    Start your journey with Amazon College today
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" size="lg">
                    Apply Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    Enquire About Course
                  </Button>
                  <Button variant="ghost" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download Syllabus
                  </Button>
                </CardContent>
              </Card>
              
              {/* Course Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Course Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{program.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Level:</span>
                    <Badge variant="outline">{program.level}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fee:</span>
                    <span className="font-bold text-primary">
                      {program.fees.currency} {program.fees.total.toLocaleString()}
                    </span>
                  </div>
                  {program.category && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Category:</span>
                      <Badge variant="secondary">{program.category}</Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              {/* Accreditations */}
              <Card>
                <CardHeader>
                  <CardTitle>Accreditations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {program.accreditation.map((acc, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Award className="w-4 h-4 text-trust flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">{acc.body}</p>
                          <p className="text-xs text-muted-foreground">{acc.type}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {program.contacts.map((contact, index) => (
                    <div key={index} className="space-y-1">
                      <p className="text-sm font-medium capitalize">{contact.type}</p>
                      {contact.name && (
                        <p className="text-sm text-muted-foreground">{contact.name}</p>
                      )}
                      <p className="text-sm text-primary">{contact.email}</p>
                      <p className="text-sm text-muted-foreground">{contact.phone}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;