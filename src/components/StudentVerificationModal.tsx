import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, User, Calendar, BookOpen, Clock, AlertCircle, Printer, QrCode, Share2, Phone, Mail, MapPin, Shield } from "lucide-react";
import { StudentRecord } from "@/data/dummyStudents";

interface StudentVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: StudentRecord | null;
  isError: boolean;
}

const StudentVerificationModal = ({ 
  isOpen, 
  onClose, 
  student, 
  isError 
}: StudentVerificationModalProps) => {
  const handlePrint = () => {
    window.print();
  };

  const handleGenerateQR = () => {
    const verificationData = {
      studentId: student?.id,
      name: student?.fullName,
      status: student?.status,
      verifiedAt: new Date().toISOString()
    };
    const qrData = encodeURIComponent(JSON.stringify(verificationData));
    window.open(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrData}`, '_blank');
  };

  const handleShare = async () => {
    if (navigator.share && student) {
      try {
        await navigator.share({
          title: `Student Verification - ${student.fullName}`,
          text: `Verified student record for ${student.fullName} (${student.id}) - ${student.status}`,
          url: window.location.href
        });
      } catch (err) {
        console.log('Share cancelled or failed');
      }
    }
  };

  if (isError) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md max-w-[95vw] animate-fade-in mx-4">
          <div className="animate-[shake_0.5s_ease-in-out]">
            <DialogHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-8 h-8 text-destructive" />
                </div>
              </div>
              <DialogTitle className="text-xl text-destructive">
                Verification Failed
              </DialogTitle>
            </DialogHeader>
            <div className="text-center pt-4 space-y-4">
              <p className="text-muted-foreground mb-2">
                No record found for the provided Student ID.
              </p>
              <p className="text-sm text-muted-foreground">
                Please check the ID format (e.g., AMZ/A001) and try again.
              </p>
              
              {/* Contact Information */}
              <Card className="bg-muted/30">
                <CardContent className="pt-4">
                  <h4 className="font-semibold mb-3 text-center">Need Assistance?</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="break-all">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="break-all">admissions@amazon-college.edu</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Visit our admissions office</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (!student) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-w-[95vw] animate-fade-in mx-4 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center animate-pulse">
              <Shield className="w-8 h-8 text-success" />
            </div>
          </div>
          <DialogTitle className="text-2xl text-success flex items-center justify-center gap-2">
            <CheckCircle className="w-6 h-6" />
            Verification Successful
          </DialogTitle>
        </DialogHeader>

        {/* Official Verification Card */}
        <Card className="border-success/20 bg-gradient-to-br from-success/5 to-primary/5 shadow-elegant">
          <CardHeader className="text-center pb-2">
            <div className="flex justify-center items-center gap-2 mb-2">
              <Badge variant="default" className="bg-success text-white">
                <Shield className="w-3 h-3 mr-1" />
                VERIFIED
              </Badge>
              <Badge variant="outline" className="border-primary text-primary">
                Official Record
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Student Header */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                <User className="w-12 h-12 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {student.fullName}
                </h3>
                <p className="text-muted-foreground mb-2">{student.courseTitle}</p>
                <Badge 
                  variant={student.status === "Completed" ? "default" : "secondary"}
                  className="text-sm px-3 py-1"
                >
                  {student.status === "Completed" ? "🎓 Completed" : "📚 Currently Enrolled"}
                </Badge>
              </div>
            </div>

            {/* Verification Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5">
                    <BookOpen className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Program</span>
                    <p className="text-muted-foreground">{student.courseTitle}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Duration</span>
                    <p className="text-muted-foreground">{student.programDuration}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5">
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Batch Year</span>
                    <p className="text-muted-foreground">{student.batchYear}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5">
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Enrollment Date</span>
                    <p className="text-muted-foreground">{student.enrollmentDate}</p>
                  </div>
                </div>

                {student.completionDate && (
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4 text-success" />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Completion Date</span>
                      <p className="text-muted-foreground">{student.completionDate}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Student ID</span>
                    <p className="text-muted-foreground font-mono text-lg">{student.id}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification Actions */}
            <div className="border-t border-border/50 pt-6">
              <div className="flex flex-wrap gap-3 justify-center">
                <Button onClick={handlePrint} variant="outline" size="sm">
                  <Printer className="w-4 h-4 mr-2" />
                  Print Certificate
                </Button>
                <Button onClick={handleGenerateQR} variant="outline" size="sm">
                  <QrCode className="w-4 h-4 mr-2" />
                  Generate QR Code
                </Button>
                <Button onClick={handleShare} variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Verification
                </Button>
              </div>
            </div>

            {/* Verification Footer */}
            <div className="text-center text-xs text-muted-foreground bg-muted/30 rounded-lg p-3">
              <p className="flex items-center justify-center gap-1 mb-1">
                <Shield className="w-3 h-3" />
                Official verification provided by Amazon College
              </p>
              <p>Verified on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}</p>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default StudentVerificationModal;