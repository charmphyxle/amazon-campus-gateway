import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Mail, Phone, Clock } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-secondary to-trust overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white animate-fade-in">
            <FileText className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl md:text-2xl opacity-90">Our Terms and Conditions</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Terms of Service</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") govern your use of Amazon College's website, services, 
                and educational programs. By accessing our website or enrolling in our programs, you agree 
                to be bound by these Terms.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Acceptance of Terms</CardTitle>
                <CardDescription>
                  By using our services, you acknowledge that you have read and agree to these terms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  By accessing or using Amazon College's website and services, you agree to be bound by these 
                  Terms of Service and all applicable laws and regulations. If you do not agree with any part 
                  of these terms, you may not use our services.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>You must be at least 16 years old to use our services independently</li>
                  <li>Users under 18 require parental consent for enrollment</li>
                  <li>You are responsible for maintaining the confidentiality of your account</li>
                  <li>You agree to provide accurate and current information</li>
                </ul>
              </CardContent>
            </Card>

            {/* Educational Services */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Educational Services</CardTitle>
                <CardDescription>
                  Terms specific to our educational programs and services.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Program Enrollment</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Enrollment is subject to meeting entry requirements</li>
                    <li>Class schedules and content may be modified as needed</li>
                    <li>Students must maintain academic standards to continue enrollment</li>
                    <li>Regular attendance is required for successful completion</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Academic Integrity</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Students must submit original work and avoid plagiarism</li>
                    <li>Cheating or academic dishonesty may result in dismissal</li>
                    <li>Proper citation and referencing are required</li>
                    <li>Collaboration is permitted only when explicitly allowed</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Fees and Payment */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Fees and Payment Terms</CardTitle>
                <CardDescription>
                  Information about course fees, payment schedules, and refund policies.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Payment Obligations</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Registration fees are non-refundable after course commencement</li>
                    <li>Course fees must be paid according to agreed schedule</li>
                    <li>Late payment fees may apply for overdue amounts</li>
                    <li>Payment plans are subject to credit approval</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Refund Policy</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Withdrawals before course start: 90% refund of course fees</li>
                    <li>Withdrawals within first week: 70% refund of course fees</li>
                    <li>Withdrawals within first month: 50% refund of course fees</li>
                    <li>No refunds after first month of course commencement</li>
                    <li>Registration fees are non-refundable in all cases</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Student Conduct */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Student Code of Conduct</CardTitle>
                <CardDescription>
                  Expected behavior and disciplinary procedures.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Expected Behavior</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Treat all staff, faculty, and fellow students with respect</li>
                    <li>Maintain professional behavior in all interactions</li>
                    <li>Follow safety guidelines and campus policies</li>
                    <li>Respect college property and facilities</li>
                    <li>Adhere to dress code and appearance standards</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Prohibited Activities</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Harassment, discrimination, or bullying of any kind</li>
                    <li>Use of illegal substances on campus</li>
                    <li>Vandalism or damage to college property</li>
                    <li>Disruption of classes or college activities</li>
                    <li>Unauthorized use of college resources or facilities</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Intellectual Property Rights</CardTitle>
                <CardDescription>
                  Ownership and use of course materials and content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">College-Owned Content</h4>
                    <p className="text-muted-foreground mb-2">
                      All course materials, curriculum, assessments, and educational content are the intellectual 
                      property of Amazon College or its licensors.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Students may use materials for personal study only</li>
                      <li>Reproduction or distribution without permission is prohibited</li>
                      <li>Commercial use of college materials is strictly forbidden</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Student Work</h4>
                    <p className="text-muted-foreground">
                      Students retain ownership of their original work while granting the college 
                      necessary rights for assessment, accreditation, and promotional purposes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Privacy and Data Protection */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Privacy and Data Protection</CardTitle>
                <CardDescription>
                  How we handle your personal information and privacy rights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Your privacy is important to us. Our Privacy Policy, which is incorporated into these Terms, 
                  explains how we collect, use, and protect your personal information.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>We collect information necessary for educational and administrative purposes</li>
                  <li>Student records are maintained confidentially and securely</li>
                  <li>Information may be shared with partner institutions for accreditation</li>
                  <li>You have rights to access and correct your personal information</li>
                  <li>Marketing communications require explicit consent</li>
                </ul>
              </CardContent>
            </Card>

            {/* Technology and Online Services */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Technology and Online Services</CardTitle>
                <CardDescription>
                  Terms for using our website, online platforms, and digital services.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Acceptable Use</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Use technology resources for educational purposes only</li>
                    <li>Maintain security of login credentials and personal accounts</li>
                    <li>Report security breaches or technical issues promptly</li>
                    <li>Respect bandwidth and storage limitations</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Prohibited Use</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Attempting to gain unauthorized access to systems</li>
                    <li>Downloading or distributing copyrighted material illegally</li>
                    <li>Using college networks for commercial purposes</li>
                    <li>Transmitting viruses or malicious software</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimers and Limitations */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Disclaimers and Limitation of Liability</CardTitle>
                <CardDescription>
                  Important legal disclaimers and limitations on our liability.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Educational Outcomes</h4>
                  <p className="text-muted-foreground">
                    While we strive to provide quality education, we cannot guarantee specific employment 
                    outcomes, salary levels, or career advancement. Success depends on individual effort, 
                    market conditions, and other factors beyond our control.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Technical Services</h4>
                  <p className="text-muted-foreground">
                    Our online services are provided "as is" without warranties. We do not guarantee 
                    uninterrupted access to online platforms and are not liable for technical issues 
                    that may affect your studies.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Termination of Services</CardTitle>
                <CardDescription>
                  Circumstances under which services may be terminated.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">By the College</h4>
                    <p className="text-muted-foreground mb-2">
                      We may terminate your enrollment or access to services for:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Violation of these Terms or college policies</li>
                      <li>Non-payment of fees after reasonable notice</li>
                      <li>Academic misconduct or failure to meet standards</li>
                      <li>Behavior that endangers others or disrupts operations</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">By the Student</h4>
                    <p className="text-muted-foreground">
                      Students may withdraw from programs according to our withdrawal policy. 
                      Refunds, if applicable, will be processed according to the refund schedule.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Governing Law and Dispute Resolution</CardTitle>
                <CardDescription>
                  Legal jurisdiction and how disputes are resolved.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  These Terms are governed by the laws of Sri Lanka. Any disputes will be resolved 
                  through the courts of Sri Lanka, with jurisdiction in Colombo.
                </p>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Dispute Resolution Process</h4>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Direct discussion with relevant college department</li>
                    <li>Formal complaint to college administration</li>
                    <li>Mediation through agreed neutral party</li>
                    <li>Legal proceedings if necessary</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Changes to These Terms</CardTitle>
                <CardDescription>
                  How we handle updates to our terms of service.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We reserve the right to modify these Terms at any time. Material changes will be 
                  communicated to enrolled students through official college communication channels. 
                  Continued use of our services after changes constitutes acceptance of the new Terms.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>
                  For questions about these Terms of Service, please contact us.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">legal@amazoncollege.lk</p>
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
                    Legal Department<br />
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

export default Terms;