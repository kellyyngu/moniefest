import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Programme from "./pages/Programme";
import Speakers from "./pages/Speakers";
import Highlights from "./pages/Highlights";
import FAQPage from "./pages/FAQ";
import ScrollToTop from "@/components/scroll-to-top";
import Header from "@/components/Header";
import EventbriteModal from "@/components/EventbriteModal";

const queryClient = new QueryClient();

const App = () => {
  const [isEventbriteOpen, setIsEventbriteOpen] = React.useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <ScrollToTop />
          {/* Site-wide header with modal opener */}
          <Header onOpenEventbrite={() => setIsEventbriteOpen(true)} />

          <Routes>
            <Route path="/" element={<Index onOpenEventbrite={() => setIsEventbriteOpen(true)} />} />
            <Route path="/programme" element={<Programme />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/highlights" element={<Highlights />} />
            <Route path="/faq" element={<FAQPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          <EventbriteModal
            open={isEventbriteOpen}
            onClose={() => setIsEventbriteOpen(false)}
            eventId="1978806719165"
            height={650}
          />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
