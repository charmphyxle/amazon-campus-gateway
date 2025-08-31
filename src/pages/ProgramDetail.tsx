import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getProgramBySlug } from "@/utils/programDataImporter";
import { 
  Clock, 
  DollarSign, 
  Download, 
  Star, 
  Award, 
  Users, 
  BookOpen, 
  ArrowLeft, 
  Calculator,
  Share2,
  Printer,
  GraduationCap,
  Calendar,
  MapPin,
  Mail,
  Phone,
  ChevronDown,
  CheckCircle,
  Target,
  Building,
  FileText,
  HelpCircle
} from "lucide-react";
import type { Program } from "@/data/programSchema";

const ProgramDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [program, setProgram] = useState<Program | null>(null);
  const [loading, setLoading] = useState(true);
  const [installmentMonths, setInstallmentMonths] = useState(12);
  const [isApplyFormVisible, setIsApplyFormVisible] = useState(false);
  const [applyForm, setApplyForm] = useState({
    name: "",
    email: "",
    phone: "",
    preferredIntake: ""
  });

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
          "sameAs": "https://amazoncollege.lk",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "LK"
          }
        },
        "educationalLevel": program.level,
        "courseCode": program.id,
        "duration": program.duration,
        "offers": {
          "@type": "Offer",
          "price": program.fees.total,
          "priceCurrency": program.fees.currency
        },
        "coursePrerequisites": program.entryRequirements.join(", "),
        "learningResourceType": "Course",
        "inLanguage": "en"
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

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: program?.title,
        text: program?.shortSummary,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadBrochure = () => {
    // Download the PDF brochure
    const link = document.createElement('a');
    link.href = '/amazon-college-brochure.pdf';
    link.download = `${program?.title?.replace(/\s+/g, '-')}-brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", applyForm);
    // Handle form submission
    setIsApplyFormVisible(false);
    setApplyForm({ name: "", email: "", phone: "", preferredIntake: "" });
  };

  const programFAQs = [
    {
      question: "What are the class timings?",
      answer: "Classes are typically conducted on weekdays from 6:00 PM to 9:00 PM, with some weekend sessions for practical work."
    },
    {
      question: "Is this program suitable for working professionals?",
      answer: "Yes, the program is designed to accommodate working professionals with flexible timing and part-time study options."
    },
    {
      question: "What certification will I receive?",
      answer: "Upon successful completion, you will receive an internationally recognized certification as specified in the accreditation section."
    },
    {
      question: "Are there any payment plans available?",
      answer: "Yes, we offer flexible installment plans ranging from 3 to 24 months. Use the fee calculator to see your options."
    }
  ];

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
        <Header />
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Program Not Found</h1>
          <p className="text-muted-foreground mb-8">The program you're looking for doesn't exist.</p>
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
      
      {/* Breadcrumbs & Actions */}
      <section className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/programs">Programs</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{program.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" onClick={handlePrint}>
                <Printer className="w-4 h-4 mr-2" />
                Print
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-trust overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl text-white">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-3 py-1">
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
                  Featured Program
                </Badge>
              )}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{program.title}</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">{program.shortSummary}</p>
          </div>
        </div>
      </section>

      {/* Key Facts Panel */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Duration</p>
              <p className="font-semibold">{program.duration}</p>
            </div>
            <div className="text-center">
              <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Total Fee</p>
              <p className="font-semibold">{program.fees.currency} {program.fees.total.toLocaleString()}</p>
            </div>
            <div className="text-center">
              <GraduationCap className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Level</p>
              <p className="font-semibold">{program.level}</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Mode</p>
              <p className="font-semibold">On Campus</p>
            </div>
            <div className="text-center">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Start Dates</p>
              <p className="font-semibold">Multiple Intakes</p>
            </div>
            <div className="text-center">
              <Calculator className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Installments</p>
              <p className="font-semibold">Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Course Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Program Overview & Aims
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div 
                    className="prose prose-lg max-w-none text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: program.longDescription }}
                  />
                </CardContent>
              </Card>

              {/* Modules */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Course Modules
                  </CardTitle>
                  <CardDescription>
                    Comprehensive module breakdown with detailed descriptions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {program.modules.map((module, index) => (
                      <AccordionItem key={index} value={`module-${index}`}>
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="text-xs">
                              Module {index + 1}
                            </Badge>
                            <span>{module.title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pt-4 pl-4 border-l-2 border-primary/20">
                            <p className="text-muted-foreground">{module.description}</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>

              {/* Learning Outcomes */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Learning Outcomes
                  </CardTitle>
                  <CardDescription>
                    What you'll achieve upon successful completion
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {program.learningOutcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Career Pathways */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-primary" />
                    Career Pathways & Progression
                  </CardTitle>
                  <CardDescription>
                    Professional opportunities and career advancement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {program.careerPaths.map((career, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary/5 to-trust/5 rounded-lg border">
                        <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-medium text-foreground">{career}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Assessment & Certification */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Assessment & Certification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold mb-2">Assessment Methods</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Continuous assessment throughout the program</li>
                        <li>• Module assignments and practical projects</li>
                        <li>• Final examinations and portfolio submissions</li>
                        <li>• Industry-relevant case studies and presentations</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <h4 className="font-semibold mb-2 text-primary">Certification</h4>
                      <p className="text-sm text-muted-foreground">
                        Upon successful completion, graduates receive internationally recognized certification 
                        that enhances career prospects and provides pathway for further academic progression.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Entry Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Entry Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {program.entryRequirements.map((requirement, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                        <CheckCircle className="w-5 h-5 text-trust mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Program FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    {programFAQs.map((faq, index) => (
                      <AccordionItem key={index} value={`faq-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card className="border-primary/20 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-primary">Take Action</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={() => setIsApplyFormVisible(!isApplyFormVisible)}
                  >
                    Apply Now
                  </Button>
                  <Button variant="outline" className="w-full" onClick={handleDownloadBrochure}>
                    <Download className="w-4 h-4 mr-2" />
                    Download Brochure
                  </Button>
                  <Button variant="ghost" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Enquire About Program
                  </Button>
                </CardContent>
              </Card>

              {/* Apply Form */}
              {isApplyFormVisible && (
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Application</CardTitle>
                    <CardDescription>Get started with your application today</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleApplySubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={applyForm.name}
                          onChange={(e) => setApplyForm(prev => ({ ...prev, name: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={applyForm.email}
                          onChange={(e) => setApplyForm(prev => ({ ...prev, email: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={applyForm.phone}
                          onChange={(e) => setApplyForm(prev => ({ ...prev, phone: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="intake">Preferred Intake</Label>
                        <Input
                          id="intake"
                          placeholder="e.g., January 2024"
                          value={applyForm.preferredIntake}
                          onChange={(e) => setApplyForm(prev => ({ ...prev, preferredIntake: e.target.value }))}
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Submit Application
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}

              {/* Fee Calculator */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Fee Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-primary/10 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-primary">
                        {program.fees.currency} {program.fees.total.toLocaleString()}
                      </p>
                      <p className="text-sm text-muted-foreground">Total Program Fee</p>
                    </div>
                    
                    <div>
                      <Label htmlFor="months">Installment Plan: {installmentMonths} months</Label>
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
                    
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Monthly Payment:</span>
                        <span className="text-lg font-bold text-primary">
                          {program.fees.currency} {calculateInstallment().toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Accreditations */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Accreditations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {program.accreditation.map((acc, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                        <Award className="w-5 h-5 text-trust flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground">{acc.body}</p>
                          <p className="text-sm text-muted-foreground">{acc.type}</p>
                          {acc.certification && (
                            <p className="text-xs text-primary mt-1">{acc.certification}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Program Contacts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {program.contacts.map((contact, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <p className="font-medium text-primary capitalize mb-1">{contact.type} Contact</p>
                      {contact.name && (
                        <p className="text-sm font-medium">{contact.name}</p>
                      )}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="w-3 h-3" />
                        <span>{contact.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="w-3 h-3" />
                        <span>{contact.phone}</span>
                      </div>
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

export default ProgramDetail;