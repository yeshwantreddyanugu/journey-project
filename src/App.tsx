import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import Home from "./pages/Home";
import About from "./pages/About";
import Holidays from "./pages/Holidays";
import BeachEscapes from "./pages/holidays/BeachEscapes";
import MountainTreks from "./pages/holidays/MountainTreks";
import CulturalTours from "./pages/holidays/CulturalTours";
import FamilyGetaways from "./pages/holidays/FamilyGetaways";
import Enquiry from "./pages/Enquiry";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="main-content" className="flex-1 pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/holidays" element={<Holidays />} />
              <Route path="/holidays/beach-escapes" element={<BeachEscapes />} />
              <Route path="/holidays/mountain-treks" element={<MountainTreks />} />
              <Route path="/holidays/cultural-tours" element={<CulturalTours />} />
              <Route path="/holidays/family-getaways" element={<FamilyGetaways />} />
              <Route path="/enquiry" element={<Enquiry />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
