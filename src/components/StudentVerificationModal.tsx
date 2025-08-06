import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, User, Calendar, BookOpen, Clock, AlertCircle } from "lucide-react";
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
  if (isError) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md animate-fade-in">
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
            <div className="text-center pt-4">
              <p className="text-muted-foreground mb-2">
                No record found for the provided Student ID.
              </p>
              <p className="text-sm text-muted-foreground">
                Please check the ID and try again.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (!student) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg animate-fade-in">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
          </div>
          <DialogTitle className="text-xl text-success">
            Verification Successful
          </DialogTitle>
        </DialogHeader>

        <Card className="border-success/20 bg-success/5">
          <CardContent className="pt-6">
            <div className="space-y-4">
              {/* Student Photo Placeholder */}
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Student Name and Status */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {student.fullName}
                </h3>
                <Badge 
                  variant={student.status === "Completed" ? "default" : "secondary"}
                  className="mb-4"
                >
                  {student.status}
                </Badge>
              </div>

              {/* Student Details */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <div>
                    <span className="font-medium">Course:</span>
                    <p className="text-muted-foreground">{student.courseTitle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-primary" />
                  <div>
                    <span className="font-medium">Duration:</span>
                    <p className="text-muted-foreground">{student.programDuration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-primary" />
                  <div>
                    <span className="font-medium">Batch Year:</span>
                    <p className="text-muted-foreground">{student.batchYear}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-primary" />
                  <div>
                    <span className="font-medium">Enrollment:</span>
                    <p className="text-muted-foreground">{student.enrollmentDate}</p>
                  </div>
                </div>

                {student.completionDate && (
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <div>
                      <span className="font-medium">Completed:</span>
                      <p className="text-muted-foreground">{student.completionDate}</p>
                    </div>
                  </div>
                )}

                <div className="pt-2 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <span className="font-medium">Student ID:</span>
                      <p className="text-muted-foreground font-mono">{student.id}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-xs text-muted-foreground">
          <p>This verification is provided for transparency and credential authentication.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StudentVerificationModal;