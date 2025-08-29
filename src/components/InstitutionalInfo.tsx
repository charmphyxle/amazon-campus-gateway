import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Award, Globe, CreditCard, Users, CheckCircle } from 'lucide-react';

const InstitutionalInfo: React.FC = () => {
  const institutionalData = {
    address: "294, 2nd Floor, Galle Road, Colombo 4, Sri Lanka",
    contact: {
      phone: "+94 114-386-126",
      email: "info@amazoncollege.lk"
    },
    accreditations: [
      {
        name: "University Grants Commission (UGC) Sri Lanka",
        description: "All degree and postgraduate programs are UGC recognized",
        icon: Award
      },
      {
        name: "World Higher Education Database (WHED)",
        description: "Listed in the global higher education database",
        icon: Globe
      },
      {
        name: "Embassy Recognition",
        description: "Programs endorsed by embassies worldwide",
        icon: CheckCircle
      },
      {
        name: "Canada's WES",
        description: "Recognition by World Education Services Canada",
        icon: Award
      }
    ],
    features: [
      {
        title: "Flexible Payment Plans",
        description: "Affordable installment options for all programs",
        icon: CreditCard
      },
      {
        title: "International Credit Transfer",
        description: "Credits transferable to international universities",
        icon: Globe
      },
      {
        title: "Practical Training",
        description: "Hands-on learning and industry exposure",
        icon: Users
      },
      {
        title: "Supportive Environment",
        description: "Comprehensive student support services",
        icon: CheckCircle
      }
    ],
    programLevels: [
      "TVEC Certificates",
      "Short Certificates (6 months)",
      "Diplomas (Multiple fields)",
      "HND (UK-affiliated)",
      "Top-up Degrees",
      "Bachelor Degrees (BA, BSc, BBA, BEd, BSc IT, BSS Psychology)",
      "Master's Programs (MA, MSc, MBA, MEd, MSc IT)",
      "PhDs (Multiple disciplines)"
    ]
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            About Amazon College
          </h2>
          <p className="text-lg text-muted-foreground">
            Amazon College aims to deliver cost-effective, globally accredited education across multiple levels—diplomas through PhDs. 
            We emphasize flexible payment plans, practical training, international credit transferability, and a supportive learning environment.
          </p>
        </div>

        {/* Contact Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground text-sm">{institutionalData.address}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground text-sm">{institutionalData.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground text-sm">{institutionalData.contact.email}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Accreditations & Recognition */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Accreditations & Recognition</CardTitle>
            <CardDescription>
              Our programs are globally recognized and accredited by leading educational bodies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {institutionalData.accreditations.map((accreditation, index) => {
                const IconComponent = accreditation.icon;
                return (
                  <div key={index} className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <IconComponent className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-sm mb-1">{accreditation.name}</h4>
                    <p className="text-xs text-muted-foreground">{accreditation.description}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Why Choose Amazon College</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {institutionalData.features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <IconComponent className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Program Levels */}
        <Card>
          <CardHeader>
            <CardTitle>Academic Program Levels</CardTitle>
            <CardDescription>
              We offer comprehensive educational pathways from certificates to doctoral degrees
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {institutionalData.programLevels.map((level, index) => (
                <Badge key={index} variant="outline" className="justify-start text-left p-3">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                  {level}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InstitutionalInfo;