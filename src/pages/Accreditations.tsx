import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Download, ExternalLink, Shield, Globe, BookOpen } from "lucide-react";

const Accreditations = () => {
  const [hoveredLogo, setHoveredLogo] = useState<number | null>(null);

  const accreditations = [
    {
      id: 1,
      name: "Ministry of Education",
      type: "Government Registration",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=100&fit=crop",
      description: "Officially registered and recognized by the Ministry of Education",
      documents: [
        { name: "Registration Certificate", url: "/docs/ministry-registration.pdf" },
        { name: "Annual Report", url: "/docs/annual-report.pdf" }
      ],
      details: "Amazon College is officially registered with the Ministry of Education and operates under strict quality standards and regulations.",
      year: "2008"
    },
    {
      id: 2,
      name: "British Council",
      type: "International Partnership",
      logo: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=200&h=100&fit=crop",
      description: "Authorized center for British Council English language programs",
      documents: [
        { name: "Partnership Agreement", url: "/docs/british-council.pdf" },
        { name: "Certification", url: "/docs/bc-certification.pdf" }
      ],
      details: "Our partnership with the British Council ensures world-class English language training standards.",
      year: "2012"
    },
    {
      id: 3,
      name: "University of Cambridge",
      type: "Academic Partnership",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=100&fit=crop",
      description: "Pathway programs to University of Cambridge and partner institutions",
      documents: [
        { name: "Pathway Agreement", url: "/docs/cambridge-pathway.pdf" },
        { name: "Transfer Credits", url: "/docs/transfer-credits.pdf" }
      ],
      details: "Students can transfer credits and access direct pathways to prestigious universities.",
      year: "2015"
    },
    {
      id: 4,
      name: "TESOL International",
      type: "Professional Certification",
      logo: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&h=100&fit=crop",
      description: "Certified provider for TESOL teacher training programs",
      documents: [
        { name: "TESOL Certification", url: "/docs/tesol-cert.pdf" },
        { name: "Accreditation Letter", url: "/docs/tesol-accreditation.pdf" }
      ],
      details: "Our TESOL programs are internationally recognized and meet global teaching standards.",
      year: "2016"
    },
    {
      id: 5,
      name: "Quality Assurance Agency",
      type: "Quality Standards",
      logo: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&h=100&fit=crop",
      description: "Certified for quality assurance in higher education",
      documents: [
        { name: "QAA Certificate", url: "/docs/qaa-certificate.pdf" },
        { name: "Quality Report", url: "/docs/quality-report.pdf" }
      ],
      details: "Regular quality assessments ensure we maintain the highest educational standards.",
      year: "2018"
    },
    {
      id: 6,
      name: "International Education Board",
      type: "Global Recognition",
      logo: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=200&h=100&fit=crop",
      description: "Globally recognized for international education standards",
      documents: [
        { name: "Global Recognition", url: "/docs/global-recognition.pdf" },
        { name: "IEB Membership", url: "/docs/ieb-membership.pdf" }
      ],
      details: "Our qualifications are recognized internationally, opening doors worldwide for our graduates.",
      year: "2020"
    }
  ];

  const recognitions = [
    {
      title: "Government Registered",
      description: "Officially registered with national education authorities",
      icon: Shield,
      color: "text-success"
    },
    {
      title: "University Affiliated",
      description: "Direct partnerships with leading international universities",
      icon: BookOpen,
      color: "text-primary"
    },
    {
      title: "Globally Recognized",
      description: "Qualifications accepted worldwide",
      icon: Globe,
      color: "text-trust"
    }
  ];

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "Government Registration": return "default";
      case "International Partnership": return "trust";
      case "Academic Partnership": return "success";
      case "Professional Certification": return "cta";
      case "Quality Standards": return "secondary";
      case "Global Recognition": return "primary";
      default: return "default";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative h-96 bg-gradient-to-br from-trust to-primary overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white animate-fade-in">
            <Award className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Accreditations</h1>
            <p className="text-xl md:text-2xl opacity-90">Recognized Excellence in Education</p>
          </div>
        </div>
      </section>

      {/* Recognition Summary */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {recognitions.map((recognition, index) => {
              const IconComponent = recognition.icon;
              return (
                <Card 
                  key={recognition.title}
                  className="text-center hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0"
                >
                  <CardHeader>
                    <IconComponent className={`w-16 h-16 mx-auto mb-4 ${recognition.color}`} />
                    <CardTitle className="text-xl">{recognition.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {recognition.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accreditations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Accreditations & Partnerships</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Amazon College is proud to be recognized and accredited by leading educational bodies worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accreditations.map((accreditation) => (
              <Card 
                key={accreditation.id}
                className="group hover:shadow-elegant-lg transition-all duration-300 border-0 overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredLogo(accreditation.id)}
                onMouseLeave={() => setHoveredLogo(null)}
              >
                <div className="relative h-32 bg-gradient-to-br from-muted/50 to-muted flex items-center justify-center p-4">
                  <img
                    src={accreditation.logo}
                    alt={accreditation.name}
                    className={`max-h-16 max-w-full object-contain transition-transform duration-300 ${
                      hoveredLogo === accreditation.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant={getBadgeVariant(accreditation.type) as any} className="text-xs">
                      {accreditation.year}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {accreditation.name}
                  </CardTitle>
                  <Badge variant={getBadgeVariant(accreditation.type) as any} className="w-fit">
                    {accreditation.type}
                  </Badge>
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="mb-4">
                    {accreditation.description}
                  </CardDescription>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      >
                        View Details
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{accreditation.name}</DialogTitle>
                        <DialogDescription className="text-lg">
                          {accreditation.type} • Established {accreditation.year}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="mt-6 space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-primary">About This Accreditation</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {accreditation.details}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-4 text-primary">Available Documents</h3>
                          <div className="space-y-2">
                            {accreditation.documents.map((doc, idx) => (
                              <Button
                                key={idx}
                                variant="outline"
                                className="w-full justify-between"
                                asChild
                              >
                                <a href={doc.url} target="_blank" rel="noopener noreferrer">
                                  {doc.name}
                                  <Download className="w-4 h-4" />
                                </a>
                              </Button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              What Our Accreditations Mean for You
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="quality" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-semibold">Quality Assurance</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Our accreditations ensure that all programs meet rigorous international standards for curriculum, 
                  teaching quality, and student outcomes. This means you receive education that is recognized and 
                  respected worldwide.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="transfer" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-semibold">Transfer Opportunities</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Our partnerships with leading universities provide clear pathways for credit transfer and 
                  progression to degree programs. Many of our students successfully transfer to prestigious 
                  institutions worldwide.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="employment" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-semibold">Employment Recognition</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Employers worldwide recognize our qualifications, giving our graduates a competitive advantage 
                  in the job market. Our certifications are accepted by professional bodies and industry leaders.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="support" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-semibold">Ongoing Support</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Our accrediting bodies provide ongoing monitoring and support, ensuring that we continuously 
                  improve our programs and maintain the highest standards of education delivery.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Accreditations;