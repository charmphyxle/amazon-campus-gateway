import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Search, CheckCircle, AlertCircle } from "lucide-react";

const VerificationSection = () => {
  const [studentId, setStudentId] = useState("");
  const [verificationResult, setVerificationResult] = useState<null | "loading" | "success" | "error">(null);
  const [studentData, setStudentData] = useState<any>(null);

  const handleVerification = () => {
    if (!studentId.trim()) return;
    
    setVerificationResult("loading");
    
    // Simulate API call
    setTimeout(() => {
      if (studentId.toLowerCase().includes("amz/")) {
        setStudentData({
          name: "John Doe",
          course: "Diploma in Business Administration",
          status: "Graduated",
          year: "2023",
          id: studentId
        });
        setVerificationResult("success");
      } else {
        setVerificationResult("error");
      }
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/50 to-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Student Verification
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Verify academic credentials instantly for employers, universities, and institutions
            </p>
          </div>

          <Card className="shadow-elegant-lg border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Credential Verification System</CardTitle>
              <CardDescription>
                Enter a student ID to verify enrollment or graduation status
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Enter Student ID (e.g., amz/a0007)"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    className="h-12 text-lg"
                    onKeyPress={(e) => e.key === 'Enter' && handleVerification()}
                  />
                </div>
                <Button 
                  onClick={handleVerification}
                  disabled={!studentId.trim() || verificationResult === "loading"}
                  size="lg"
                  className="h-12 px-8"
                >
                  {verificationResult === "loading" ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  ) : (
                    <>
                      <Search className="w-5 h-5 mr-2" />
                      Verify Now
                    </>
                  )}
                </Button>
              </div>

              {verificationResult === "success" && studentData && (
                <Card className="bg-success/10 border-success/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-success mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-success mb-2">Verification Successful</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Student Name:</strong> {studentData.name}</p>
                          <p><strong>Course:</strong> {studentData.course}</p>
                          <p><strong>Status:</strong> {studentData.status}</p>
                          <p><strong>Year:</strong> {studentData.year}</p>
                          <p><strong>Student ID:</strong> {studentData.id}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {verificationResult === "error" && (
                <Card className="bg-destructive/10 border-destructive/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <AlertCircle className="w-6 h-6 text-destructive mt-1" />
                      <div>
                        <h4 className="font-semibold text-destructive mb-2">Verification Failed</h4>
                        <p className="text-sm text-destructive/80">
                          No records found for the provided Student ID. Please check the ID and try again.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="text-center text-sm text-muted-foreground">
                <p>This verification system is provided for transparency and credential authentication.</p>
                <p>For assistance, contact our admissions office.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VerificationSection;