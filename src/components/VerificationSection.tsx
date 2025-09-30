import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Search } from "lucide-react";
import { findStudentById, StudentRecord } from "@/data/dummyStudents";
import StudentVerificationModal from "./StudentVerificationModal";

const VerificationSection = () => {
  const [studentId, setStudentId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [foundStudent, setFoundStudent] = useState<StudentRecord | null>(null);
  const [isError, setIsError] = useState(false);

  const handleVerification = () => {
    if (!studentId.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const student = findStudentById(studentId.trim());
      
      if (student) {
        setFoundStudent(student);
        setIsError(false);
      } else {
        setFoundStudent(null);
        setIsError(true);
      }
      
      setIsLoading(false);
      setModalOpen(true);
    }, 1000);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setFoundStudent(null);
    setIsError(false);
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
              Official Student Verification
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Instant credential verification for employers, universities, and institutions worldwide
            </p>
          </div>

          <Card className="shadow-elegant-lg border-0 bg-gradient-to-br from-background to-muted/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                Credential Verification System
              </CardTitle>
              <CardDescription className="text-base">
                Enter a student ID to verify enrollment or graduation status instantly
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Enter Student ID (e.g., AMZ/A001 to AMZ/A015)"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    className="h-12 text-lg"
                    onKeyPress={(e) => e.key === 'Enter' && handleVerification()}
                  />
                </div>
                <Button 
                  onClick={handleVerification}
                  disabled={!studentId.trim() || isLoading}
                  size="lg"
                  className="h-12 px-8"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  ) : (
                    <>
                      <Search className="w-5 h-5 mr-2" />
                      Verify Now
                    </>
                  )}
                </Button>
              </div>

              <StudentVerificationModal
                isOpen={modalOpen}
                onClose={handleCloseModal}
                student={foundStudent}
                isError={isError}
              />

              <div className="text-center space-y-3">
                <div className="text-sm text-foreground">
                  <p>🛡️ Secure verification system for credential authentication</p>
                  <p>📞 For assistance, contact our admissions office at +1 (555) 123-4567</p>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Sample IDs to Test:</h4>
                  <div className="flex flex-wrap gap-2 justify-center text-xs">
                    <code className="bg-background px-2 py-1 rounded">AMZ/A001</code>
                    <code className="bg-background px-2 py-1 rounded">AMZ/A005</code>
                    <code className="bg-background px-2 py-1 rounded">AMZ/A010</code>
                    <code className="bg-background px-2 py-1 rounded">AMZ/A015</code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VerificationSection;