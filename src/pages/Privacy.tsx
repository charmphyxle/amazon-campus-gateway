import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Mail, Phone, Clock } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-primary to-trust overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white animate-fade-in">
            <Shield className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl md:text-2xl opacity-90">Your Privacy Matters to Us</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Last Updated */}
            <Card className="mb-8 bg-muted/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Last updated: January 1, 2024</span>
                </div>
              </CardContent>
            </Card>

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Introduction</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Amazon College ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit our website, 
                apply for our programs, or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Information We Collect</CardTitle>
                <CardDescription>
                  We collect information you provide directly to us and information automatically collected during your use of our services.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Personal Information</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Name, email address, phone number, and mailing address</li>
                    <li>Date of birth and government-issued identification numbers</li>
                    <li>Educational background and academic records</li>
                    <li>Employment history and professional qualifications</li>
                    <li>Payment and billing information</li>
                    <li>Photographs and video recordings (with consent)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Automatically Collected Information</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>IP address, browser type, and device information</li>
                    <li>Website usage data and analytics</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Location data (with permission)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">How We Use Your Information</CardTitle>
                <CardDescription>
                  We use the information we collect for various purposes related to our educational services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Process applications and admissions</li>
                  <li>Provide educational services and support</li>
                  <li>Communicate with students, parents, and stakeholders</li>
                  <li>Process payments and manage billing</li>
                  <li>Issue certificates and academic records</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Conduct research and analytics for educational improvement</li>
                  <li>Marketing and promotional activities (with consent)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Information Sharing and Disclosure</CardTitle>
                <CardDescription>
                  We may share your information in certain circumstances as outlined below.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">We May Share Information With:</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Partner universities and educational institutions</li>
                    <li>Accreditation bodies and government agencies</li>
                    <li>Third-party service providers (payment processors, IT services)</li>
                    <li>Employers for placement and internship purposes (with consent)</li>
                    <li>Legal authorities when required by law</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">We Do Not:</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Sell your personal information to third parties</li>
                    <li>Share information for marketing purposes without consent</li>
                    <li>Disclose sensitive information without proper authorization</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Data Security</CardTitle>
                <CardDescription>
                  We implement appropriate security measures to protect your information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Staff training on data protection and privacy</li>
                  <li>Backup and disaster recovery procedures</li>
                  <li>Secure disposal of information when no longer needed</li>
                </ul>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Your Rights and Choices</CardTitle>
                <CardDescription>
                  You have certain rights regarding your personal information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of your information (subject to legal requirements)</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent for processing (where applicable)</li>
                  <li>File a complaint with relevant authorities</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookies Policy */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Cookies and Tracking Technologies</CardTitle>
                <CardDescription>
                  Our website uses cookies and similar technologies to enhance your experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Types of Cookies We Use:</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand website usage</li>
                    <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  </ul>
                </div>
                <p className="text-muted-foreground">
                  You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality.
                </p>
              </CardContent>
            </Card>

            {/* Retention Policy */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Data Retention</CardTitle>
                <CardDescription>
                  We retain your information for as long as necessary to provide our services and comply with legal obligations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Student records: Maintained permanently for academic and verification purposes</li>
                  <li>Application data: Retained for 7 years or as required by law</li>
                  <li>Marketing data: Retained until you opt-out or request deletion</li>
                  <li>Website analytics: Typically retained for 2 years</li>
                  <li>Financial records: Retained as required by tax and accounting regulations</li>
                </ul>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Children's Privacy</CardTitle>
                <CardDescription>
                  Special protections apply to information from children under 18.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We take special care when collecting information from students under 18 years of age. 
                  Parental consent is required for certain activities, and we limit the collection and 
                  use of information from minors to what is necessary for educational purposes.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Parental consent required for students under 16</li>
                  <li>Limited collection of personal information from minors</li>
                  <li>No marketing communications to children without parental consent</li>
                  <li>Additional security measures for children's data</li>
                </ul>
              </CardContent>
            </Card>

            {/* International Transfers */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">International Data Transfers</CardTitle>
                <CardDescription>
                  Information about how we handle international data transfers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  As part of our international education partnerships, we may transfer your information 
                  to countries outside Sri Lanka. We ensure appropriate safeguards are in place for such transfers.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Transfers only to countries with adequate data protection laws</li>
                  <li>Use of standard contractual clauses where applicable</li>
                  <li>Ongoing monitoring of international data protection standards</li>
                  <li>Student consent for transfers related to study abroad programs</li>
                </ul>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Changes to This Privacy Policy</CardTitle>
                <CardDescription>
                  How we handle updates to our privacy practices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time to reflect changes in our practices 
                  or applicable law. We will notify you of material changes through our website or direct 
                  communication. The "Last Updated" date at the top of this policy indicates when it was 
                  most recently revised.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Us About Privacy</CardTitle>
                <CardDescription>
                  If you have questions about this Privacy Policy or our data practices, please contact us.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">privacy@amazoncollege.lk</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-muted-foreground">+94 114-386-126</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Mailing Address</h4>
                  <p className="text-muted-foreground">
                    Amazon College<br />
                    Data Protection Officer<br />
                    294, 2nd Floor, Galle Road<br />
                    Colombo 4, Sri Lanka
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;