import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

// Detect if we're being served under a sub-path (e.g. lovableproject preview at /poonamlediestailor/)
// so React Router resolves routes correctly in every environment.
const getBasename = () => {
  if (typeof window === "undefined") return "/";
  const firstSegment = window.location.pathname.split("/").filter(Boolean)[0];
  // Treat any non-app path segment as a basename (lovableproject previews prepend the project slug)
  if (firstSegment && firstSegment !== "index.html") {
    return `/${firstSegment}`;
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
