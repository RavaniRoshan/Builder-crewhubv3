import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  Book,
  Rocket,
  Code,
  Zap,
  Users,
  Shield,
  Search,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const Docs = () => {
  const sections = [
    {
      title: "Getting Started",
      description: "Quick setup guides to get you up and running",
      icon: Rocket,
      articles: [
        "Installation & Setup",
        "Your First Workflow",
        "Adding AI Agents",
        "Basic Configuration",
      ],
    },
    {
      title: "AI Agents",
      description: "Everything about managing and configuring AI agents",
      icon: Zap,
      articles: [
        "Supported AI Models",
        "Agent Configuration",
        "Custom Agents",
        "Agent Templates",
      ],
    },
    {
      title: "Workflows",
      description: "Build and manage complex AI workflows",
      icon: Code,
      articles: [
        "Workflow Builder",
        "Conditional Logic",
        "Data Flow",
        "Error Handling",
      ],
    },
    {
      title: "Team & Collaboration",
      description: "Manage teams and collaborate effectively",
      icon: Users,
      articles: [
        "Team Management",
        "Permissions",
        "Sharing Workflows",
        "Version Control",
      ],
    },
    {
      title: "Security",
      description: "Keep your AI workflows secure",
      icon: Shield,
      articles: [
        "Authentication",
        "API Security",
        "Data Privacy",
        "Compliance",
      ],
    },
    {
      title: "API Reference",
      description: "Complete API documentation",
      icon: Book,
      articles: ["REST API", "Webhooks", "SDKs", "Rate Limits"],
    },
  ];

  const quickLinks = [
    {
      title: "API Quickstart",
      description: "Get started with our API in 5 minutes",
      href: "/api/quickstart",
    },
    {
      title: "Example Workflows",
      description: "Browse our collection of example workflows",
      href: "/examples",
    },
    {
      title: "Troubleshooting",
      description: "Common issues and solutions",
      href: "/troubleshooting",
    },
    {
      title: "Community Forum",
      description: "Get help from the community",
      href: "/community",
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
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a
                href="/"
                className="transition-colors hover:text-foreground/80"
              >
                Home
              </a>
              <a
                href="/features"
                className="transition-colors hover:text-foreground/80"
              >
                Features
              </a>
              <a
                href="/pricing"
                className="transition-colors hover:text-foreground/80"
              >
                Pricing
              </a>
              <a
                href="/about"
                className="transition-colors hover:text-foreground/80"
              >
                About
              </a>
            </nav>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => (window.location.href = "/signin")}
              >
                Sign In
              </Button>
              <Button
                size="sm"
                onClick={() => (window.location.href = "/signup")}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <Badge className="mb-4" variant="secondary">
              📚 Documentation
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              CrewHub Documentation
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know to build powerful AI workflows with
              CrewHub. From quick start guides to advanced configuration.
            </p>

            {/* Search Bar */}
            <div className="mt-10 max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  className="pl-10 h-12"
                  placeholder="Search documentation..."
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Popular Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center justify-between">
                        {link.title}
                        <ExternalLink className="h-4 w-4" />
                      </CardTitle>
                      <CardDescription>{link.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Browse Documentation
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Find guides, tutorials, and references for every aspect of
                CrewHub
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
            <div className="flex items-center space-x-2">
              <ThemeSwitch />
              <Button variant="ghost" size="sm" onClick={() => window.location.href = '/signin'}>
                Sign In
              </Button>
              <Button size="sm" onClick={() => window.location.href = '/signup'}>
                Get Started
              </Button>
            </div>
                        <CardTitle>{section.title}</CardTitle>
                      </div>
                      <CardDescription>{section.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {section.articles.map((article, i) => (
                          <li key={i}>
                            <a
                              href={`/docs/${section.title.toLowerCase().replace(/\s+/g, "-")}/${article.toLowerCase().replace(/\s+/g, "-")}`}
                              className="text-sm text-muted-foreground hover:text-primary flex items-center justify-between group"
                            >
                              {article}
                              <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Need more help?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Can't find what you're looking for? Our support team is here to
              help.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="h-12 px-8"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Support <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8"
                onClick={() => (window.location.href = "/community")}
              >
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Docs;