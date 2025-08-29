import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+94 114-386-126"],
      color: "text-primary"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@amazoncollege.lk", "admissions@amazoncollege.lk"],
      color: "text-success"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["294, 2nd Floor, Galle Road", "Colombo 4, Sri Lanka"],
      color: "text-trust"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      color: "text-secondary"
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "📘", link: "#" },
    { name: "Instagram", icon: "📷", link: "#" },
    { name: "LinkedIn", icon: "💼", link: "#" },
    { name: "Twitter", icon: "🐦", link: "#" },
    { name: "YouTube", icon: "📺", link: "#" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: ""
    });
    
    setIsSubmitting(false);
  };

  const isFormValid = formData.name && formData.email && formData.message && formData.inquiryType;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative h-96 bg-gradient-to-br from-trust to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white animate-fade-in">
            <MessageCircle className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl opacity-90">Get in Touch with Our Team</p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-elegant-lg border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Enter your full name"
                          className="transition-all duration-300 focus:scale-105"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Enter your email"
                          className="transition-all duration-300 focus:scale-105"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="Enter your phone number"
                          className="transition-all duration-300 focus:scale-105"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Inquiry Type *</Label>
                        <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                          <SelectTrigger className="transition-all duration-300 focus:scale-105">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admission">Admission Inquiry</SelectItem>
                            <SelectItem value="programs">Program Information</SelectItem>
                            <SelectItem value="international">International Students</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="general">General Information</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="Enter subject"
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Enter your message"
                        rows={5}
                        className="transition-all duration-300 focus:scale-105"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full"
                      disabled={!isFormValid || isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're here to help you with any questions about our programs, admissions, 
                  or services. Don't hesitate to reach out!
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card 
                      key={info.title}
                      className="hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 border-0"
                    >
                      <CardContent className="flex items-start gap-4 p-6">
                        <IconComponent className={`w-6 h-6 mt-1 flex-shrink-0 ${info.color}`} />
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Social Media */}
              <Card className="border-0 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                  <CardDescription>Stay connected on social media</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <Button
                        key={social.name}
                        variant="outline"
                        size="icon"
                        className="hover:scale-110 transition-transform duration-300"
                        asChild
                      >
                        <a href={social.link} target="_blank" rel="noopener noreferrer">
                          <span className="text-lg">{social.icon}</span>
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Visit Our Campus</h2>
            <p className="text-lg text-muted-foreground">
              Find us at 294, 2nd Floor Galle Road, Colombo-4, Sri Lanka
            </p>
          </div>

          <Card className="shadow-elegant-lg border-0 overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map</h3>
                <p className="text-muted-foreground">
                  Google Maps integration would be embedded here
                </p>
                <Button variant="outline" className="mt-4">
                  Get Directions
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-8 left-8 z-50">
        <Button 
          size="icon"
          className="w-14 h-14 rounded-full shadow-elegant-lg bg-success hover:bg-success/90 animate-pulse hover:animate-none"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
