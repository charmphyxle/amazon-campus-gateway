import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, X } from "lucide-react";

interface VideoTestimonial {
  id: number;
  title: string;
  studentName: string;
  program: string;
  year: string;
  videoUrl: string;
  thumbnail: string;
  description: string;
}

interface VideoTestimonialModalProps {
  video: VideoTestimonial | null;
  isOpen: boolean;
  onClose: () => void;
}

const VideoTestimonialModal = ({ video, isOpen, onClose }: VideoTestimonialModalProps) => {
  if (!video) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl p-0 bg-black">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-white text-xl mb-2">{video.title}</DialogTitle>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{video.program}</Badge>
                <Badge variant="outline" className="border-white/20 text-white">
                  Class of {video.year}
                </Badge>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="px-6 pb-6">
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mb-4">
            <iframe
              src={video.videoUrl}
              title={video.title}
              className="w-full h-full"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
          
          <div className="text-white">
            <h4 className="font-semibold text-lg mb-2">{video.studentName}</h4>
            <p className="text-gray-300 text-sm">{video.description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoTestimonialModal;