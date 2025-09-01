
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Award, Download, Users, BookOpen, Shield, Search } from "lucide-react";
import { findStudentById, StudentRecord } from "@/data/dummyStudents";
import StudentVerificationModal from "./StudentVerificationModal";

const Header = () => {
  const [quickVerifyId, setQuickVerifyId] = useState("");
  const [isQuickLoading, setIsQuickLoading] = useState(false);
  const [quickModalOpen, setQuickModalOpen] = useState(false);
  const [quickFoundStudent, setQuickFoundStudent] = useState<StudentRecord | null>(null);
  const [isQuickError, setIsQuickError] = useState(false);

  const handleQuickVerification = () => {
    if (!quickVerifyId.trim()) return;
    
    setIsQuickLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const student = findStudentById(quickVerifyId.trim());
      
      if (student) {
        setQuickFoundStudent(student);
        setIsQuickError(false);
      } else {
        setQuickFoundStudent(null);
        setIsQuickError(true);
      }
      
      setIsQuickLoading(false);
      setQuickModalOpen(true);
    }, 800);
  };

  const handleQuickCloseModal = () => {
    setQuickModalOpen(false);
    setQuickFoundStudent(null);
    setIsQuickError(false);
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
              <div className="hidden md:flex items-center text-sm">
                <span className="opacity-80">📞 +94 114-386-126</span>
                <span className="mx-2 opacity-60">|</span>
                <span className="opacity-80">📧 info@amazoncollege.lk</span>
              </div>
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
              <div className="flex items-center gap-1 mr-2">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Quick Verification:</span>
              </div>
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Enter Student ID (e.g., AMZ/A001)"
                  value={quickVerifyId}
                  onChange={(e) => setQuickVerifyId(e.target.value)}
                  className="w-64 bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
                  onKeyPress={(e) => e.key === 'Enter' && handleQuickVerification()}
                />
                <Button 
                  variant="secondary" 
                  size="sm"
                  onClick={handleQuickVerification}
                  disabled={!quickVerifyId.trim() || isQuickLoading}
                  className="bg-white/20 hover:bg-white/30"
                >
                  {isQuickLoading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary" />
                  ) : (
                    <>
                      <Search className="w-4 h-4 mr-1" />
                      Verify
                    </>
                  )}
                </Button>
              </div>
            </div>
            
            <div className="text-sm">
              <span className="opacity-90">🎓 For employers & institutions to verify credentials instantly</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Verification Modal */}
      <StudentVerificationModal
        isOpen={quickModalOpen}
        onClose={handleQuickCloseModal}
        student={quickFoundStudent}
        isError={isQuickError}
      />
    </div>
  );
};

export default Header;
