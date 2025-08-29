import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Search, HelpCircle, MessageCircle, Phone, Mail } from "lucide-react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const faqCategories = [
    { id: "all", name: "All Categories" },
    { id: "admissions", name: "Admissions" },
    { id: "fees", name: "Fees & Payment" },
    { id: "courses", name: "Course Content" },
    { id: "certification", name: "Certification" },
    { id: "online", name: "Online/Offline Learning" }
  ];

  const faqs = [
    {
      category: "admissions",
      question: "What are the entry requirements for diploma programs?",
      answer: "For most diploma programs, you need to be at least 16 years old with O/L 6 credits or equivalent qualifications. Specific requirements may vary by program. Please check the individual course pages for detailed entry requirements."
    },
    {
      category: "admissions",
      question: "How do I apply for a course?",
      answer: "You can apply online through our website by: 1) Choosing your program, 2) Checking entry requirements, 3) Preparing required documents (ID, transcripts, certificates), 4) Completing the online application, 5) Uploading documents and paying the registration fee. Our admissions team will review your application within 48 hours."
    },
    {
      category: "fees",
      question: "What are the payment options available?",
      answer: "We offer flexible payment plans including full payment and installment options. For example, a 12-month diploma can be paid in 12 monthly installments. Registration fees are typically Rs. 5,000, and course fees vary by program. Contact us for specific fee structures and payment plans."
    },
    {
      category: "fees",
      question: "Is there a registration fee?",
      answer: "Yes, most programs have a registration fee of Rs. 5,000 which is paid upon application. This fee secures your place in the program and is separate from the course fees."
    },
    {
      category: "courses",
      question: "What is the difference between TVEC and regular diploma programs?",
      answer: "TVEC programs are government-recognized vocational training courses that focus on practical skills for immediate employment. Regular diplomas are more comprehensive academic programs that can lead to further education. Both are valuable depending on your career goals."
    },
    {
      category: "courses",
      question: "Are classes conducted online or offline?",
      answer: "We offer hybrid learning with both online and offline components. Most theoretical content is available online, while practical sessions and labs are conducted on campus. This provides flexibility while ensuring hands-on experience."
    },
    {
      category: "certification",
      question: "Are the degrees and diplomas internationally recognized?",
      answer: "Yes, our programs are UGC recognized and listed in the World Higher Education Database (WHED). We also have endorsements from embassies and recognition from Canada's WES. Our UK-affiliated HND programs have international recognition."
    },
    {
      category: "certification",
      question: "Can I transfer credits to international universities?",
      answer: "Yes, our programs are designed with international credit transferability in mind. Many of our graduates have successfully transferred credits to universities in the UK, Australia, Canada, and other countries. We provide the necessary documentation for credit transfer processes."
    },
    {
      category: "online",
      question: "Do I need special software or equipment for online classes?",
      answer: "You'll need a computer or tablet with reliable internet connection. We use standard video conferencing platforms and learning management systems. All necessary software is either free or provided by the college. Technical support is available to help you set up."
    },
    {
      category: "admissions",
      question: "What documents do I need to submit with my application?",
      answer: "Required documents typically include: 1) Copy of National ID or passport, 2) Academic transcripts and certificates (O/L, A/L, or equivalent), 3) CV (for postgraduate programs), 4) Passport-size photographs. International students may need additional documentation."
    },
    {
      category: "fees",
      question: "What is your refund policy?",
      answer: "Registration fees are non-refundable once the semester begins. Course fees may be partially refundable depending on when you withdraw from the program. Please refer to our terms and conditions for detailed refund policies or contact our admissions office."
    },
    {
      category: "courses",
      question: "How long are the programs?",
      answer: "Program durations vary: Short certificates (6 months), TVEC diplomas (12 months), Regular diplomas (12 months), HNDs (2-3 years), Bachelor degrees (3-4 years), Master's programs (1-2 years), PhD programs (3-5 years)."
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-trust to-primary overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white animate-fade-in">
            <HelpCircle className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">FAQ</h1>
            <p className="text-xl md:text-2xl opacity-90">Frequently Asked Questions</p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 text-lg py-6"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {faqCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {filteredFAQs.length} Question{filteredFAQs.length !== 1 ? 's' : ''} Found
              </h2>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about our programs, admissions, and services
              </p>
            </div>

            {filteredFAQs.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left hover:text-primary transition-colors py-6">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <HelpCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No results found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search terms or category filter
                  </p>
                  <Button variant="outline" onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}>
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our admissions team is here to help you with any questions not covered above
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="hover:shadow-elegant-lg transition-all duration-300 group">
                <CardHeader className="text-center">
                  <Phone className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle>Call Us</CardTitle>
                  <CardDescription>Speak directly with our team</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold text-foreground mb-2">+94 114-386-126</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri: 08:30-17:30</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-elegant-lg transition-all duration-300 group">
                <CardHeader className="text-center">
                  <Mail className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle>Email Us</CardTitle>
                  <CardDescription>Get detailed answers via email</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold text-foreground mb-2">info@amazoncollege.lk</p>
                  <p className="text-sm text-muted-foreground">Response within 48 hours</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-elegant-lg transition-all duration-300 group">
                <CardHeader className="text-center">
                  <MessageCircle className="w-12 h-12 text-success mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle>WhatsApp</CardTitle>
                  <CardDescription>Quick chat support</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold text-foreground mb-2">+94 114-386-126</p>
                  <p className="text-sm text-muted-foreground">Instant messaging support</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/apply">Start Application</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;