import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Programs from "./pages/Programs";
import Accreditations from "./pages/Accreditations";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import ProgramsListing from "./pages/ProgramsListing";
import CourseDetail from "./pages/CourseDetail";
import AdmissionsFees from "./pages/AdmissionsFees";
import ShortCourses from "./pages/ShortCourses";
import Faculty from "./pages/Faculty";
import Campus from "./pages/Campus";
import StudentResources from "./pages/StudentResources";
import Apply from "./pages/Apply";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Testimonials from "./pages/Testimonials";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NewsEvents from "./pages/NewsEvents";
import OurPrograms from "./pages/OurPrograms";
import DiplomaPrograms from "./pages/DiplomaPrograms";
import HNDPrograms from "./pages/HNDPrograms";
import DegreePrograms from "./pages/DegreePrograms";
import MastersPhDPrograms from "./pages/MastersPhDPrograms";
import TVECPrograms from "./pages/TVECPrograms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/programs" element={<OurPrograms />} />
          <Route path="/programs/:slug" element={<CourseDetail />} />
          <Route path="/accreditations" element={<Accreditations />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/programs-listing" element={<ProgramsListing />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/diploma-programs" element={<DiplomaPrograms />} />
          <Route path="/hnd-programs" element={<HNDPrograms />} />
          <Route path="/degree-programs" element={<DegreePrograms />} />
          <Route path="/masters-phd-programs" element={<MastersPhDPrograms />} />
          <Route path="/tvec-programs" element={<TVECPrograms />} />
          <Route path="/admissions-fees" element={<AdmissionsFees />} />
          <Route path="/short-courses" element={<ShortCourses />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/resources" element={<StudentResources />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/news" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
