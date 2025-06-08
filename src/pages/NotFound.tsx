import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ThemeSwitch } from "@/components/theme-switch";
import { Home, ArrowLeft, Search, HelpCircle, Mail } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  const popularPages = [
    {
      title: "Dashboard",
      href: "/dashboard",
      description: "Access your AI workflows",
    },
    {
      title: "Features",
      href: "/features",
      description: "Explore CrewHub capabilities",
    },
    { title: "Pricing", href: "/pricing", description: "View our plans" },
    {
      title: "Documentation",
      href: "/docs",
      description: "Get help and guides",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex items-center space-x-2">
            <img
              src="/crewhub-logo.png"
              alt="CrewHub Logo"
              className="h-10 w-10 rounded-full"
            />
            <span className="font-bold text-xl">CrewHub</span>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="flex items-center space-x-2">
              <ThemeSwitch />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => (window.location.href = "/")}
              >
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* 404 Content */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="mb-8">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-8xl font-bold text-primary mb-4"
              >
                404
              </motion.div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                Page Not Found
              </h1>
              <p className="text-lg text-muted-foreground mb-2">
                Oops! The page you're looking for doesn't exist.
              </p>
              <p className="text-sm text-muted-foreground">
                You tried to access:{" "}
                <code className="bg-muted px-2 py-1 rounded text-xs">
                  {location.pathname}
                </code>
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 mb-12">
              <Button size="lg" onClick={() => (window.location.href = "/")}>
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>
            </div>
          </motion.div>

          {/* Popular Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mx-auto max-w-4xl"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              Popular Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularPages.map((page, index) => (
                <motion.div
                  key={page.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                >
                  <Card
                    className="hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => (window.location.href = page.href)}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg">{page.title}</CardTitle>
                      <CardDescription>{page.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mx-auto max-w-2xl mt-16 text-center"
          >
            <h3 className="text-xl font-semibold mb-4">Still need help?</h3>
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => (window.location.href = "/help")}
              >
                <HelpCircle className="mr-2 h-4 w-4" />
                Help Center
              </Button>
              <Button
                variant="outline"
                onClick={() => (window.location.href = "/contact")}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
