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