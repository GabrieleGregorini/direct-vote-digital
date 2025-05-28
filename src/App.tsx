
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Sondaggi from "./pages/Sondaggi";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import SondaggioDetail from "./pages/SondaggioDetail";
import PollParticipation from "./pages/PollParticipation";
import ArticleDetail from "./pages/ArticleDetail";
import Notifications from "./pages/Notifications";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <ThemeProvider defaultTheme="light" storageKey="ddp-ui-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/sondaggi" element={<Sondaggi />} />
              <Route path="/sondaggio/:id" element={<SondaggioDetail />} />
              <Route path="/partecipa/:id" element={<PollParticipation />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/news" element={<News />} />
              <Route path="/article/:id" element={<ArticleDetail />} />
              <Route path="/notifiche" element={<Notifications />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
