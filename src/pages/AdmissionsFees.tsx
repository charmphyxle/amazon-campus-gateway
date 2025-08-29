import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Download, Calculator, CreditCard, Calendar, Users, GraduationCap } from "lucide-react";

const AdmissionsFees = () => {
  const [selectedLevel, setSelectedLevel] = useState("diploma");

  const entryRequirements = {
    certificate: {
      title: "Certificate Programs",
      duration: "6 months",
      requirements: [
        "Minimum age: 16 years",
        "O/L with 6 credits or equivalent",
        "Basic English proficiency",
        "Completed application form"
      ]
    },
    tvec: {
      title: "TVEC Programs", 
      duration: "12 months",
      requirements: [
        "Minimum age: 18 years",
        "O/L with 6 credits including English",
        "Interview assessment",
        "Medical fitness certificate"
      ]
    },
    diploma: {
      title: "Diploma Programs",
      duration: "12-18 months", 
      requirements: [
        "A/L qualification or equivalent",
        "O/L with 6 credits including English & Mathematics",
        "Entrance examination",
        "Portfolio submission (for creative programs)"
      ]
    },
    hnd: {
      title: "HND Programs",
      duration: "2 years",
      requirements: [
        "A/L with 2 passes or Diploma",
        "IELTS 5.5 or equivalent English proficiency",
        "Relevant work experience (preferred)",
        "Academic transcripts"
      ]
    },
    degree: {
      title: "Bachelor's Degree",
      duration: "3-4 years",
      requirements: [
        "A/L with 3 passes or HND",
        "IELTS 6.0 or equivalent",
        "Statement of purpose",
        "Academic references"
      ]
    },
    masters: {
      title: "Master's Programs",
      duration: "1-2 years",
      requirements: [
        "Bachelor's degree with 2:2 or above",
        "IELTS 6.5 or equivalent",
        "Research proposal",
        "Professional experience (2+ years)"
      ]
    },
    phd: {
      title: "PhD Programs",
      duration: "3-5 years",
      requirements: [
        "Master's degree in relevant field",
        "IELTS 7.0 or equivalent",
        "Detailed research proposal",
        "Supervisor agreement"
      ]
    }
  };

  const feeStructure = [
    {
      program: "Certificate Programs",
      registrationFee: 5000,
      courseFee: 60000,
      installments: 6,
      monthlyAmount: 10000
    },
    {
      program: "TVEC Diploma",
      registrationFee: 5000,
      courseFee: 90000,
      installments: 12,
      monthlyAmount: 7500
    },
    {
      program: "Diploma Programs",
      registrationFee: 10000,
      courseFee: 120000,
      installments: 12,
      monthlyAmount: 10000
    },
    {
      program: "HND Programs",
      registrationFee: 15000,
      courseFee: 250000,
      installments: 24,
      monthlyAmount: 10400
    },
    {
      program: "Bachelor's Degree",
      registrationFee: 20000,
      courseFee: 450000,
      installments: 36,
      monthlyAmount: 12500
    },
    {
      program: "Master's Programs",
      registrationFee: 25000,
      courseFee: 350000,
      installments: 24,
      monthlyAmount: 14600
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Choose Your Program",
      description: "Browse our course catalog and select the program that matches your career goals.",
      icon: GraduationCap
    },
    {
      step: 2,
      title: "Check Requirements",
      description: "Review entry requirements and ensure you meet the academic and language prerequisites.",
      icon: CheckCircle
    },
    {
      step: 3,
      title: "Submit Application",
      description: "Complete the online application form and upload required documents.",
      icon: Users
    },
    {
      step: 4,
      title: "Assessment & Interview",
      description: "Attend entrance examination and/or interview as required for your chosen program.",
      icon: Calendar
    },
    {
      step: 5,
      title: "Confirmation & Payment",
      description: "Receive offer letter and complete registration with fee payment.",
      icon: CreditCard
    }
  ];

  const paymentOptions = [
    {
      title: "Full Payment",
      description: "Pay the complete course fee upfront",
      discount: "5% discount on total fees",
      benefits: ["Immediate enrollment", "Priority class selection", "Free course materials"]
    },
    {
      title: "Installment Plan",
      description: "Spread payments over the course duration",
      discount: "No additional charges",
      benefits: ["Flexible payment schedule", "No interest charges", "Early payment rewards"]
    },
    {
      title: "Employer Sponsorship",
      description: "Corporate training programs",
      discount: "Volume discounts available",
      benefits: ["Customized schedules", "On-site training options", "Certification tracking"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-success to-primary overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="text-white max-w-4xl mx-auto">
            <Calculator className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Admissions & Fees</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Your pathway to quality education with flexible payment options
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Start Application
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <Download className="w-4 h-4 mr-2" />
                Download Fee Schedule
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">How to Apply</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to begin your educational journey with Amazon College
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {applicationSteps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <Card 
                    key={step.step}
                    className="text-center hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0"
                  >
                    <CardHeader className="pb-4">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-8 h-8 bg-trust rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold text-sm">
                        {step.step}
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Entry Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Entry Requirements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Academic prerequisites for each program level
            </p>
          </div>

          <Tabs value={selectedLevel} onValueChange={setSelectedLevel} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7">
              <TabsTrigger value="certificate">Certificate</TabsTrigger>
              <TabsTrigger value="tvec">TVEC</TabsTrigger>
              <TabsTrigger value="diploma">Diploma</TabsTrigger>
              <TabsTrigger value="hnd">HND</TabsTrigger>
              <TabsTrigger value="degree">Degree</TabsTrigger>
              <TabsTrigger value="masters">Masters</TabsTrigger>
              <TabsTrigger value="phd">PhD</TabsTrigger>
            </TabsList>
            
            {Object.entries(entryRequirements).map(([key, requirement]) => (
              <TabsContent key={key} value={key} className="mt-8">
                <Card className="shadow-elegant-lg border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl">{requirement.title}</CardTitle>
                    <CardDescription className="text-lg">
                      Duration: {requirement.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary">Requirements</h3>
                        <ul className="space-y-3">
                          {requirement.requirements.map((req, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-primary/10 to-trust/10 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4 text-primary">Documents Checklist</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Completed application form</li>
                          <li>• Academic transcripts</li>
                          <li>• English proficiency certificate</li>
                          <li>• Identity document copy</li>
                          <li>• Passport-size photographs</li>
                          <li>• Medical certificate (if required)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Fee Structure</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing with flexible payment options
            </p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <div className="min-w-full">
              <div className="grid gap-6">
                {feeStructure.map((fee, index) => (
                  <Card key={index} className="hover:shadow-elegant-lg transition-all duration-300 border-0">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-5 gap-4 items-center">
                        <div className="md:col-span-1">
                          <h3 className="text-lg font-semibold text-primary">{fee.program}</h3>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Registration</p>
                          <p className="text-lg font-bold">Rs. {fee.registrationFee.toLocaleString()}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Course Fee</p>
                          <p className="text-lg font-bold text-primary">Rs. {fee.courseFee.toLocaleString()}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Installments</p>
                          <p className="text-lg font-bold">{fee.installments} months</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Monthly</p>
                          <p className="text-lg font-bold text-success">Rs. {fee.monthlyAmount.toLocaleString()}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Payment Options</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the payment plan that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {paymentOptions.map((option, index) => (
              <Card 
                key={index}
                className="hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0 text-center"
              >
                <CardHeader>
                  <CreditCard className="w-16 h-16 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <CardDescription className="text-base">
                    {option.description}
                  </CardDescription>
                  <Badge variant="secondary" className="w-fit mx-auto text-success">
                    {option.discount}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {option.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about admissions and fees
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="refund" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-semibold">What is the refund policy?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Full refund available within 7 days of registration. After course commencement, 
                  refunds are calculated based on the remaining course duration minus administrative charges.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="payment" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-semibold">Can I change my payment plan after registration?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Yes, payment plans can be modified within the first month of registration subject to 
                  administrative approval and any applicable charges.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="documents" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-semibold">What if I don't have all required documents?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Provisional admission may be granted with partial documents. Complete documentation 
                  must be submitted within 30 days of course commencement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="financial" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-semibold">Are there any financial assistance programs?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Yes, we offer merit-based scholarships, need-based financial aid, and payment deferral 
                  options for eligible students. Contact our admissions office for more information.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of successful graduates who have transformed their careers through quality education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-elegant">
              Start Application
            </Button>
            <Button variant="outline" size="lg">
              Contact Admissions
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdmissionsFees;