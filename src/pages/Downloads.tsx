import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Download, FileText, CreditCard, Award, School } from "lucide-react";

const Downloads = () => {
  const programBrochures = [
    {
      title: "TVEC & Short Courses Brochure",
      description: "6-month practical certificate programs",
      filename: "amazon-college-brochure.pdf",
      icon: <School className="h-5 w-5" />
    },
    {
      title: "Diploma Programs Brochure", 
      description: "Professional diploma courses overview",
      filename: "amazon-college-brochure.pdf",
      icon: <School className="h-5 w-5" />
    },
    {
      title: "HND Programs Brochure",
      description: "Higher National Diploma programs",
      filename: "amazon-college-brochure.pdf",
      icon: <School className="h-5 w-5" />
    },
    {
      title: "Degree Programs Brochure",
      description: "Bachelor's and top-up degree programs",
      filename: "amazon-college-brochure.pdf",
      icon: <School className="h-5 w-5" />
    },
    {
      title: "Masters & PhD Brochure",
      description: "Postgraduate research programs",
      filename: "amazon-college-brochure.pdf",
      icon: <School className="h-5 w-5" />
    }
  ];

  const applicationForms = [
    {
      title: "General Application Form",
      description: "Standard application for all programs",
      filename: "amazon-college-brochure.pdf",
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: "International Student Application",
      description: "Special application for international students",
      filename: "amazon-college-brochure.pdf",
      icon: <FileText className="h-5 w-5" />
    }
  ];

  const feeSchedules = [
    {
      title: "2024 Fee Structure",
      description: "Complete fee schedule for all programs",
      filename: "amazon-college-brochure.pdf",
      icon: <CreditCard className="h-5 w-5" />
    },
    {
      title: "Payment Plans Guide",
      description: "Available payment options and installment plans",
      filename: "amazon-college-brochure.pdf",
      icon: <CreditCard className="h-5 w-5" />
    }
  ];

  const verificationDocs = [
    {
      title: "Certificate Verification Guide",
      description: "Step-by-step instructions for verifying certificates",
      filename: "amazon-college-brochure.pdf",
      icon: <Award className="h-5 w-5" />
    },
    {
      title: "Student ID Verification",
      description: "How to verify current student status",
      filename: "amazon-college-brochure.pdf",
      icon: <Award className="h-5 w-5" />
    }
  ];

  const downloadFile = (filename: string, title: string) => {
    const link = document.createElement('a');
    link.href = `/${filename}`;
    link.download = filename;
    link.click();
  };

  const DocumentCard = ({ title, description, filename, icon }: {
    title: string;
    description: string;
    filename: string;
    icon: React.ReactNode;
  }) => (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            {icon}
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            <CardDescription className="text-sm">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <Button 
          onClick={() => downloadFile(filename, title)}
          className="w-full"
          variant="outline"
        >
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Downloads & Resources
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Access program brochures, application forms, fee schedules, and verification documents
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          
          {/* Program Brochures */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Program Brochures
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Detailed information about our academic programs, admission requirements, and course structures
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programBrochures.map((brochure, index) => (
                <DocumentCard key={index} {...brochure} />
              ))}
            </div>
          </div>

          <Separator className="my-16" />

          {/* Application Forms */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Application Forms
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Download the required application forms for enrollment in our programs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {applicationForms.map((form, index) => (
                <DocumentCard key={index} {...form} />
              ))}
            </div>
          </div>

          <Separator className="my-16" />

          {/* Fee Schedules */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Fee Schedules
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Current fee structures and payment options for all our programs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {feeSchedules.map((schedule, index) => (
                <DocumentCard key={index} {...schedule} />
              ))}
            </div>
          </div>

          <Separator className="my-16" />

          {/* Verification Documents */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Verification Resources
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Instructions and guidelines for certificate and student verification processes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {verificationDocs.map((doc, index) => (
                <DocumentCard key={index} {...doc} />
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Need Additional Documents?
            </h3>
            <p className="text-muted-foreground mb-6">
              If you need specific documents not listed here, please contact our admissions office
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="/contact">Contact Admissions</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+94114386126">Call +94 114-386-126</a>
              </Button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Downloads;