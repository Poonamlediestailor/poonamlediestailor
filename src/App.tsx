import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

// Lovableproject sandbox previews serve the app under /<project-slug>/.
// Detect that case and pass it as the router basename so routes resolve correctly.
// On the real published domain (.lovable.app) and custom domains, the app is at /,
// so basename stays "/".
const getBasename = () => {
  if (typeof window === "undefined") return "/";
  const { hostname, pathname } = window.location;
  if (hostname.endsWith(".lovableproject.com")) {
    const firstSegment = pathname.split("/").filter(Boolean)[0];
    if (firstSegment) return `/${firstSegment}`;
  }
  return "/";
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={getBasename()}>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
