import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Award, Download, Users, BookOpen, Shield, Search } from "lucide-react";
import { findStudentById, StudentRecord } from "@/data/dummyStudents";
import StudentVerificationModal from "./StudentVerificationModal";

const Header = () => {
  const [studentId, setStudentId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [foundStudent, setFoundStudent] = useState<StudentRecord | null>(null);
  const [isError, setIsError] = useState(false);

  const handleVerification = () => {
    if (!studentId.trim()) return;

    setIsLoading(true);

    setTimeout(() => {
      const student = findStudentById(studentId.trim().toUpperCase());

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
    <div className="bg-gradient-primary text-primary-foreground">
      {/* Top Quick Access Bar */}
      <div className="border-b border-primary-light/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between py-2 gap-4">
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Award className="w-3 h-3" />
                15+ Years Excellence
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Shield className="w-3 h-3" />
                Award-Winning Institution
              </Badge>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Users className="w-4 h-4" />
                Student LMS
              </Button>
              <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <BookOpen className="w-4 h-4" />
                Staff LMS
              </Button>
              <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Download className="w-4 h-4" />
                Download App
              </Button>
              <Button variant="cta" size="sm">
                Register Online
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Student Verification Bar */}
      <div className="py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Quick Verification:</span>
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Enter Student ID (e.g., AMZ/A001)"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleVerification()}
                  className="w-64 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleVerification}
                  disabled={!studentId.trim() || isLoading}
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                  ) : (
                    <>
                      <Search className="w-4 h-4 mr-1" />
                      Verify Now
                    </>
                  )}
                </Button>
              </div>
            </div>

            <div className="text-sm">
              <span className="opacity-90">For employers & institutions to verify credentials</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <StudentVerificationModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        student={foundStudent}
        isError={isError}
      />
    </div>
  );
};

export default Header;
