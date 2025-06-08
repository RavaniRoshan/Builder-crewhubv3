import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import AgentCatalog from "./pages/AgentCatalog";
import WorkflowBuilder from "./pages/WorkflowBuilder";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Docs from "./pages/Docs";
import Help from "./pages/Help";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Status from "./pages/Status";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="crewhub-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/agents" element={<AgentCatalog />} />
            <Route path="/workflows" element={<WorkflowBuilder />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/help" element={<Help />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/status" element={<Status />} />
            <Route path="/community" element={<Community />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
