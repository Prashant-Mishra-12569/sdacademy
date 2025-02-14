import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import AdminNotices from "./pages/AdminNotices";
import NotFound from "./pages/NotFound";
import Notices from "./pages/Notices";
import AboutUs from "./pages/AboutUs";
import Academic from "./pages/Academic";
import PrimarySection from "./pages/PrimarySection";
import MiddleSection from "./pages/MiddleSection";
import SeniorSection from "./pages/SeniorSection";
import Admission from "./pages/Admission";
import Enquiry from "./pages/Enquiry";
import AdminGallery from "./pages/AdminGallery";
import AdminTeachers from "./pages/AdminTeachers";
import AdminTestimonials from "./pages/AdminTestimonials";
import DetailedAchievements from "./pages/DetailedAchievements";
import DetailedGallery from "./pages/DetailedGallery";
import SchoolDetails from "./pages/SchoolDetails";
import Results from "./pages/Results";
import AcademicResults from "./pages/AcademicResults";
import OlympiadResults from "./pages/OlympiadResults";
import CompetitionResults from "./pages/CompetitionResults";
import EntranceResults from "./pages/EntranceResults";
import BeyondAcademicPage from "./pages/BeyondAcademicPage";
import EssentialInfoPage from "./pages/EssentialInfoPage";
import EssentialInfoDetailPage from "./pages/EssentialInfoDetailPage";
import UniqueChoice from "./pages/about/UniqueChoice";
import VisionMission from "./pages/about/VisionMission";
import SuccessSaga from "./pages/about/SuccessSaga";
import Affiliation from "./pages/about/Affiliation";
import Management from "./pages/about/Management";
import ChairmanMessage from "./pages/about/ChairmanMessage";
import DirectorMessage from "./pages/about/DirectorMessage";
import PrincipalMessage from "./pages/about/PrincipalMessage";
import PublicDisclosure from "./pages/about/PublicDisclosure";
import Building from "./pages/infrastructure/Building";
import Safety from "./pages/infrastructure/Safety";
import SmartClass from "./pages/infrastructure/SmartClass";
import ComputerLab from "./pages/infrastructure/ComputerLab";
import Health from "./pages/infrastructure/Health";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about/unique-choice" element={<UniqueChoice />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/success-saga" element={<SuccessSaga />} />
          <Route path="/about/affiliation" element={<Affiliation />} />
          <Route path="/about/management" element={<Management />} />
          <Route path="/about/chairman-message" element={<ChairmanMessage />} />
          <Route path="/about/director-message" element={<DirectorMessage />} />
          <Route path="/about/principal-message" element={<PrincipalMessage />} />
          <Route path="/about/public-disclosure" element={<PublicDisclosure />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/notices" element={<AdminNotices />} />
          <Route path="/admin/gallery" element={<AdminGallery />} />
          <Route path="/admin/teachers" element={<AdminTeachers />} />
          <Route path="/admin/testimonials" element={<AdminTestimonials />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/academic/primary" element={<PrimarySection />} />
          <Route path="/academic/middle" element={<MiddleSection />} />
          <Route path="/academic/senior" element={<SeniorSection />} />
          <Route path="/results" element={<Results />} />
          <Route path="/results/academic" element={<AcademicResults />} />
          <Route path="/results/olympiad" element={<OlympiadResults />} />
          <Route path="/results/competition" element={<CompetitionResults />} />
          <Route path="/results/entrance" element={<EntranceResults />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/achievements" element={<DetailedAchievements />} />
          <Route path="/gallery" element={<DetailedGallery />} />
          <Route path="/school-details" element={<SchoolDetails />} />
          <Route path="/beyond-academic" element={<BeyondAcademicPage />} />
          <Route path="/essential-info" element={<EssentialInfoPage />} />
          <Route path="/essential-info/:slug" element={<EssentialInfoDetailPage />} />
          <Route path="/infrastructure/building" element={<Building />} />
          <Route path="/infrastructure/safety" element={<Safety />} />
          <Route path="/infrastructure/smart-class" element={<SmartClass />} />
          <Route path="/infrastructure/computer-lab" element={<ComputerLab />} />
          <Route path="/infrastructure/health" element={<Health />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
