import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
  Network,
  FileText,
  BookOpen,
  HelpCircle,
} from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Docs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const quickLinksRef = useRef<HTMLDivElement[]>([]);

  const addToSectionsRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const addToQuickLinksRefs = (el: HTMLDivElement | null) => {
    if (el && !quickLinksRef.current.includes(el)) {
      quickLinksRef.current.push(el);
    }
  };

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating navigation
      if (navRef.current) {
        gsap.to(navRef.current, {
          y: "+=5",
          duration: 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      // Quick links animation
      quickLinksRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.set(card, {
          opacity: 0,
          y: 40,
          rotationX: 15,
        });

        gsap.to(card, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Sections animation
      sectionsRef.current.forEach((section, index) => {
        if (!section) return;

        gsap.set(section, {
          opacity: 0,
          y: 60,
          scale: 0.95,
        });

        gsap.to(section, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

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
      gradient: "from-blue-500 to-cyan-500",
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
      gradient: "from-purple-500 to-pink-500",
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
      gradient: "from-green-500 to-emerald-500",
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
      gradient: "from-yellow-500 to-orange-500",
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
      gradient: "from-red-500 to-pink-500",
    },
    {
      title: "API Reference",
      description: "Complete API documentation",
      icon: Book,
      articles: ["REST API", "Webhooks", "SDKs", "Rate Limits"],
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const quickLinks = [
    {
      title: "API Quickstart",
      description: "Get started with our API in 5 minutes",
      href: "/api/quickstart",
      icon: Rocket,
    },
    {
      title: "Example Workflows",
      description: "Browse our collection of example workflows",
      href: "/examples",
      icon: FileText,
    },
    {
      title: "Troubleshooting",
      description: "Common issues and solutions",
      href: "/troubleshooting",
      icon: HelpCircle,
    },
    {
      title: "Community Forum",
      description: "Get help from the community",
      href: "/community",
      icon: Users,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:bg-gradient-to-br dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-gray-100 overflow-hidden relative"
    >
      {/* Enhanced Floating Navigation */}
      <nav
        ref={navRef}
        className="fixed top-6 left-6 right-6 z-50 backdrop-blur-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-300/60 dark:border-gray-700/60 rounded-2xl shadow-xl dark:shadow-2xl transition-all duration-500"
        style={{
          willChange: "transform, background-color, border-color, box-shadow",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="container flex h-20 items-center justify-between px-8">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Network className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl text-gray-900 dark:text-gray-100">
              CrewHub
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-12 text-lg font-medium">
            {[
              { name: "Home", href: "/" },
              { name: "Features", href: "/features" },
              { name: "Pricing", href: "/pricing" },
              { name: "Docs", href: "/docs", active: true },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative transition-all duration-300 group ${
                  item.active
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ${
                    item.active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeSwitch />
            <Button
              variant="ghost"
              size="lg"
              className="text-gray-700 hover:text-gray-900 hover:bg-gray-100/80 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:bg-gray-800/50 text-lg"
              onClick={() => (window.location.href = "/signin")}
            >
              Sign In
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => (window.location.href = "/signup")}
            >
              Start Building
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-32 pt-40">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-8 bg-white/90 dark:bg-gray-800/90 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 backdrop-blur-sm text-lg px-6 py-3 rounded-full shadow-lg animate-pulse">
              📚 Documentation
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight text-gray-900 dark:text-gray-100">
              CrewHub{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
              Everything you need to know to build powerful AI workflows with
              CrewHub. From quick start guides to advanced configuration.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 h-5 w-5" />
                <Input
                  className="pl-12 h-16 text-lg bg-white/90 dark:bg-gray-800/90 border border-gray-300 dark:border-gray-600 rounded-2xl backdrop-blur-sm shadow-lg focus:shadow-xl transition-all duration-300"
                  placeholder="Search documentation..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">
              Popular Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <div
                  key={link.title}
                  ref={addToQuickLinksRefs}
                  className="group"
                >
                  <Card className="h-full bg-white/90 dark:bg-gray-800/90 border border-gray-300 dark:border-gray-600 backdrop-blur-xl rounded-2xl p-6 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <link.icon className="h-6 w-6 text-white" />
                        </div>
                        <ExternalLink className="h-4 w-4 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {link.title}
                      </CardTitle>
                      <CardDescription className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                        {link.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-32">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black mb-8 text-gray-900 dark:text-gray-100">
                Browse Documentation
              </h2>
              <p className="text-2xl text-gray-700 dark:text-gray-300">
                Find guides, tutorials, and references for every aspect of
                CrewHub
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <div
                  key={section.title}
                  ref={addToSectionsRefs}
                  className="group"
                >
                  <Card className="h-full bg-white/90 dark:bg-gray-800/90 border border-gray-300 dark:border-gray-600 backdrop-blur-xl rounded-3xl p-8 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-500 shadow-lg hover:shadow-xl group-hover:scale-105">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-6">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${section.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <section.icon className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {section.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors mb-6">
                        {section.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {section.articles.map((article, i) => (
                          <li key={i}>
                            <a
                              href={`/docs/${section.title.toLowerCase().replace(/\s+/g, "-")}/${article.toLowerCase().replace(/\s+/g, "-")}`}
                              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-between group/item transition-colors"
                            >
                              <span className="text-lg">{article}</span>
                              <ArrowRight className="h-4 w-4 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-32 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-5xl font-black mb-8 text-gray-900 dark:text-gray-100">
              Need more help?
            </h2>
            <p className="text-2xl text-gray-700 dark:text-gray-300 mb-16">
              Can't find what you're looking for? Our support team is here to
              help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button
                size="lg"
                className="h-16 px-12 text-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Support <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-16 px-12 text-xl border-2 border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 rounded-2xl backdrop-blur-sm transition-all duration-300"
                onClick={() => (window.location.href = "/community")}
              >
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-2xl text-gray-900 dark:text-gray-100">
                  CrewHub
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The comprehensive platform for AI agent and MCP management.
                Build, collaborate, and scale intelligent workflows.
              </p>
            </div>

            {[
              {
                title: "Platform",
                links: [
                  "Agent Catalog",
                  "Workflow Builder",
                  "Team Collaboration",
                  "Analytics Dashboard",
                ],
              },
              {
                title: "Resources",
                links: ["Documentation", "API Reference", "Community", "Blog"],
              },
              {
                title: "Company",
                links: ["About", "Careers", "Contact", "Enterprise"],
              },
            ].map((section) => (
              <div key={section.title}>
                <h3 className="font-bold mb-6 text-lg text-gray-900 dark:text-gray-100">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href={`/${link.toLowerCase().replace(" ", "-")}`}
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-300 dark:border-gray-700 text-center">
            <p className="text-gray-700 dark:text-gray-300">
              © 2024 CrewHub. Orchestrating AI excellence for teams worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Docs;
