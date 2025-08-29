import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight, Upload, FileText, User, GraduationCap, CreditCard, CheckCircle, AlertCircle } from "lucide-react";

const Apply = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    nationality: "",
    gender: "",
    address: "",
    city: "",
    postalCode: "",
    emergencyContact: "",
    emergencyPhone: "",
    
    // Educational Background
    schoolName: "",
    completionYear: "",
    qualifications: "",
    previousInstitution: "",
    previousProgram: "",
    gpaScore: "",
    englishProficiency: "",
    
    // Program Selection
    selectedProgram: "",
    startDate: "",
    studyMode: "",
    previousExperience: "",
    careerGoals: "",
    
    // Documents & Payment
    documents: [],
    paymentMethod: "",
    installmentPreference: "",
    agreeTerms: false,
    agreePrivacy: false
  });
  
  const [uploadedFiles, setUploadedFiles] = useState<{ [key: string]: File }>({});
  const { toast } = useToast();

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const programs = [
    "Certificate in Childcare / Caregiver",
    "TVEC Diploma in Counselling & Psychology", 
    "Diploma in Montessori & Early Childhood",
    "Diploma in Information Technology",
    "Diploma in Entrepreneurship and Management",
    "Diploma in Digital Media Marketing",
    "HND in Business Management",
    "HND in Psychology",
    "Bachelor of Arts in English",
    "Bachelor of Science in Psychology",
    "Master of Science in Psychology",
    "Doctor of Philosophy in Psychology"
  ];

  const requiredDocuments = [
    { key: "transcript", label: "Academic Transcripts", required: true },
    { key: "certificate", label: "Educational Certificates", required: true },
    { key: "passport", label: "Passport/ID Copy", required: true },
    { key: "photos", label: "Passport Photos (2)", required: true },
    { key: "english", label: "English Proficiency Certificate", required: false },
    { key: "cv", label: "Curriculum Vitae", required: false }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (documentKey: string, file: File) => {
    setUploadedFiles(prev => ({ ...prev, [documentKey]: file }));
    toast({
      title: "File Uploaded",
      description: `${file.name} has been uploaded successfully.`,
    });
  };

  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 2:
        return formData.schoolName && formData.completionYear && formData.qualifications;
      case 3:
        return formData.selectedProgram && formData.startDate;
      case 4:
        return formData.agreeTerms && formData.agreePrivacy;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    } else {
      toast({
        title: "Please complete required fields",
        description: "Fill in all required information before proceeding.",
        variant: "destructive"
      });
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) {
      toast({
        title: "Application Incomplete",
        description: "Please complete all required sections.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Application Submitted!",
      description: "Your application has been submitted successfully. You'll receive a confirmation email shortly.",
    });
    
    // Reset form or redirect
    setTimeout(() => {
      setCurrentStep(1);
      setFormData({
        firstName: "", lastName: "", email: "", phone: "", dateOfBirth: "",
        nationality: "", gender: "", address: "", city: "", postalCode: "",
        emergencyContact: "", emergencyPhone: "", schoolName: "", completionYear: "",
        qualifications: "", previousInstitution: "", previousProgram: "", gpaScore: "",
        englishProficiency: "", selectedProgram: "", startDate: "", studyMode: "",
        previousExperience: "", careerGoals: "", documents: [], paymentMethod: "",
        installmentPreference: "", agreeTerms: false, agreePrivacy: false
      });
      setUploadedFiles({});
    }, 2000);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <User className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground">Personal Information</h3>
              <p className="text-muted-foreground">Tell us about yourself</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nationality">Nationality</Label>
                <Input
                  id="nationality"
                  value={formData.nationality}
                  onChange={(e) => handleInputChange("nationality", e.target.value)}
                  placeholder="Enter your nationality"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="Enter your full address"
                rows={3}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                <Input
                  id="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                  placeholder="Emergency contact person"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                <Input
                  id="emergencyPhone"
                  value={formData.emergencyPhone}
                  onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                  placeholder="Emergency contact number"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground">Educational Background</h3>
              <p className="text-muted-foreground">Your academic history</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="schoolName">School/Institution Name *</Label>
                <Input
                  id="schoolName"
                  value={formData.schoolName}
                  onChange={(e) => handleInputChange("schoolName", e.target.value)}
                  placeholder="Name of your last educational institution"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="completionYear">Year of Completion *</Label>
                <Input
                  id="completionYear"
                  value={formData.completionYear}
                  onChange={(e) => handleInputChange("completionYear", e.target.value)}
                  placeholder="Year you completed"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="qualifications">Highest Qualification *</Label>
              <Select value={formData.qualifications} onValueChange={(value) => handleInputChange("qualifications", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your highest qualification" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="o-level">O/L or equivalent</SelectItem>
                  <SelectItem value="a-level">A/L or equivalent</SelectItem>
                  <SelectItem value="diploma">Diploma</SelectItem>
                  <SelectItem value="hnd">HND</SelectItem>
                  <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                  <SelectItem value="master">Master's Degree</SelectItem>
                  <SelectItem value="phd">PhD</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="previousInstitution">Previous Institution (if any)</Label>
                <Input
                  id="previousInstitution"
                  value={formData.previousInstitution}
                  onChange={(e) => handleInputChange("previousInstitution", e.target.value)}
                  placeholder="Previous educational institution"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gpaScore">GPA/Grade</Label>
                <Input
                  id="gpaScore"
                  value={formData.gpaScore}
                  onChange={(e) => handleInputChange("gpaScore", e.target.value)}
                  placeholder="Your GPA or grade achieved"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="englishProficiency">English Proficiency</Label>
              <Select value={formData.englishProficiency} onValueChange={(value) => handleInputChange("englishProficiency", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your English proficiency level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="native">Native Speaker</SelectItem>
                  <SelectItem value="fluent">Fluent</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="basic">Basic</SelectItem>
                  <SelectItem value="ielts">IELTS Certified</SelectItem>
                  <SelectItem value="toefl">TOEFL Certified</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="previousExperience">Relevant Work Experience</Label>
              <Textarea
                id="previousExperience"
                value={formData.previousExperience}
                onChange={(e) => handleInputChange("previousExperience", e.target.value)}
                placeholder="Describe any relevant work experience"
                rows={4}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground">Program Selection</h3>
              <p className="text-muted-foreground">Choose your course and preferences</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="selectedProgram">Select Program *</Label>
              <Select value={formData.selectedProgram} onValueChange={(value) => handleInputChange("selectedProgram", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your desired program" />
                </SelectTrigger>
                <SelectContent>
                  {programs.map((program) => (
                    <SelectItem key={program} value={program}>
                      {program}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startDate">Preferred Start Date *</Label>
                <Select value={formData.startDate} onValueChange={(value) => handleInputChange("startDate", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select start date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024-01-15">January 15, 2024</SelectItem>
                    <SelectItem value="2024-04-15">April 15, 2024</SelectItem>
                    <SelectItem value="2024-07-15">July 15, 2024</SelectItem>
                    <SelectItem value="2024-10-15">October 15, 2024</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="studyMode">Study Mode</Label>
                <Select value={formData.studyMode} onValueChange={(value) => handleInputChange("studyMode", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select study mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="weekend">Weekend Classes</SelectItem>
                    <SelectItem value="evening">Evening Classes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="careerGoals">Career Goals</Label>
              <Textarea
                id="careerGoals"
                value={formData.careerGoals}
                onChange={(e) => handleInputChange("careerGoals", e.target.value)}
                placeholder="Describe your career goals and how this program will help you achieve them"
                rows={4}
              />
            </div>

            {/* Program Fee Information */}
            {formData.selectedProgram && (
              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2">Program Fee Information</h4>
                  <div className="text-sm text-muted-foreground">
                    <p>Registration Fee: Rs. 5,000 - 25,000 (varies by program)</p>
                    <p>Course Fee: Rs. 60,000 - 450,000 (varies by program)</p>
                    <p>Installment options available</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground">Documents & Confirmation</h3>
              <p className="text-muted-foreground">Upload required documents and finalize</p>
            </div>

            {/* Document Upload */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Required Documents</h4>
              {requiredDocuments.map((doc) => (
                <Card key={doc.key} className="border-dashed">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{doc.label}</span>
                          {doc.required && <Badge variant="destructive" className="text-xs">Required</Badge>}
                        </div>
                        {uploadedFiles[doc.key] && (
                          <p className="text-sm text-success mt-1">
                            <CheckCircle className="w-3 h-3 inline mr-1" />
                            {uploadedFiles[doc.key].name}
                          </p>
                        )}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          const input = document.createElement('input');
                          input.type = 'file';
                          input.accept = '.pdf,.jpg,.jpeg,.png';
                          input.onchange = (e) => {
                            const file = (e.target as HTMLInputElement).files?.[0];
                            if (file) handleFileUpload(doc.key, file);
                          };
                          input.click();
                        }}
                      >
                        <Upload className="w-3 h-3 mr-2" />
                        Upload
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Payment Options */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Payment Preferences</h4>
              <div className="space-y-2">
                <Label htmlFor="paymentMethod">Payment Method</Label>
                <Select value={formData.paymentMethod} onValueChange={(value) => handleInputChange("paymentMethod", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-payment">Full Payment (5% discount)</SelectItem>
                    <SelectItem value="installments">Installment Plan</SelectItem>
                    <SelectItem value="employer">Employer Sponsorship</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {formData.paymentMethod === "installments" && (
                <div className="space-y-2">
                  <Label htmlFor="installmentPreference">Installment Preference</Label>
                  <Select value={formData.installmentPreference} onValueChange={(value) => handleInputChange("installmentPreference", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select installment plan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly Installments</SelectItem>
                      <SelectItem value="quarterly">Quarterly Installments</SelectItem>
                      <SelectItem value="semester">Per Semester</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeTerms", checked.toString())}
                />
                <Label htmlFor="agreeTerms" className="text-sm">
                  I agree to the <a href="#" className="text-primary hover:underline">Terms and Conditions</a>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreePrivacy"
                  checked={formData.agreePrivacy}
                  onCheckedChange={(checked) => handleInputChange("agreePrivacy", checked.toString())}
                />
                <Label htmlFor="agreePrivacy" className="text-sm">
                  I agree to the <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </Label>
              </div>
            </div>

            {/* Application Summary */}
            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle className="text-lg">Application Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Name:</span>
                    <span>{formData.firstName} {formData.lastName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Program:</span>
                    <span>{formData.selectedProgram}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Start Date:</span>
                    <span>{formData.startDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Documents Uploaded:</span>
                    <span>{Object.keys(uploadedFiles).length} files</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Application Form</h1>
            <p className="text-xl opacity-90 mb-6">
              Start your journey with Amazon College
            </p>
          </div>
        </div>
      </section>

      {/* Progress Indicator */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-muted-foreground">
                Step {currentStep} of {totalSteps}
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                {Math.round(progress)}% Complete
              </div>
            </div>
            <Progress value={progress} className="h-2" />
            
            <div className="flex justify-between mt-4">
              {[
                { step: 1, title: "Personal Info", icon: User },
                { step: 2, title: "Education", icon: GraduationCap },
                { step: 3, title: "Program", icon: FileText },
                { step: 4, title: "Documents", icon: Upload }
              ].map(({ step, title, icon: Icon }) => (
                <div 
                  key={step}
                  className={`flex items-center gap-2 text-sm ${
                    step <= currentStep ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elegant-lg border-0">
              <CardContent className="p-8">
                {renderStepContent()}
                
                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                  
                  {currentStep === totalSteps ? (
                    <Button
                      onClick={handleSubmit}
                      className="bg-success hover:bg-success/90"
                      disabled={!validateStep(currentStep)}
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Submit Application
                    </Button>
                  ) : (
                    <Button
                      onClick={nextStep}
                      disabled={!validateStep(currentStep)}
                    >
                      Next
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
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

export default Apply;