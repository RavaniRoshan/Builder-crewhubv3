import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  Bot,
  Users,
  Workflow,
  Zap,
  Target,
  BarChart3,
  Share2,
  Shield,
  Rocket,
  Code,
  Lightbulb,
  Building,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Layers,
  Network,
} from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !featuresRef.current.includes(el)) {
      featuresRef.current.push(el);
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

      // Feature cards animation
      featuresRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.set(card, {
          opacity: 0,
          y: 60,
          rotationX: 15,
        });

        gsap.to(card, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Bot,
      title: "AI Agent Management",
      description:
        "Integrate and configure multiple AI models including Claude, ChatGPT, Gemini, and more with specialized profiles and settings.",
      benefits: [
        "50+ Pre-configured agents",
        "Custom agent creation",
        "Real-time monitoring",
      ],
    },
    {
      icon: Workflow,
      title: "Visual Workflow Builder",
      description:
        "Create complex workflows with our drag-and-drop interface. Connect agents, tools, and data sources with ease.",
      benefits: [
        "Drag & drop interface",
        "Template library",
        "Version control",
      ],
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Work together in real-time with your team. Share workflows, collaborate on projects, and track progress seamlessly.",
      benefits: [
        "Real-time editing",
        "Role-based permissions",
        "Activity tracking",
      ],
    },
    {
      icon: Zap,
      title: "Tool Integration",
      description:
        "Connect external tools and APIs. Chain outputs between tools and agents for powerful automation workflows.",
      benefits: [
        "1000+ integrations",
        "Custom connectors",
        "Data transformation",
      ],
    },
    {
      icon: BarChart3,
      title: "Analytics & Monitoring",
      description:
        "Track performance, costs, and usage across all your AI agents. Optimize workflows with detailed insights.",
      benefits: ["Performance metrics", "Cost tracking", "Usage analytics"],
    },
    {
      icon: Target,
      title: "Smart Recommendations",
      description:
        "AI-powered suggestions for optimal agent selection, workflow improvements, and tool recommendations.",
      benefits: [
        "AI-powered insights",
        "Optimization tips",
        "Performance predictions",
      ],
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
          <div className="flex items-center space-x-3" data-magnetic>
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
              { name: "Features", href: "/features", active: true },
              { name: "Pricing", href: "/pricing" },
              { name: "Docs", href: "/docs" },
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
              🚀 Powerful Features
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight text-gray-900 dark:text-gray-100">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                manage AI agents
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
              From agent configuration to workflow orchestration, CrewHub
              provides all the tools you need to harness the power of AI
              collaboration.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button
                size="lg"
                className="h-16 px-12 text-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => (window.location.href = "/signup")}
              >
                Try Free <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-16 px-12 text-xl border-2 border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 rounded-2xl backdrop-blur-sm transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={feature.title} ref={addToRefs} className="group">
                  <Card className="h-full bg-white/90 dark:bg-gray-800/90 border border-gray-300 dark:border-gray-600 backdrop-blur-xl rounded-3xl p-8 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {feature.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {feature.benefits.map((benefit, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-sm"
                          >
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                              {benefit}
                            </span>
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

      {/* Feature Spotlight */}
      <section className="py-32">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black mb-8 text-gray-900 dark:text-gray-100">
                Feature Spotlight
              </h2>
              <p className="text-2xl text-gray-700 dark:text-gray-300">
                Dive deeper into our most powerful capabilities
              </p>
            </div>

            <div className="space-y-32">
              {/* Workflow Builder Spotlight */}
              <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                <div>
                  <h3 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                    Visual Workflow Builder
                  </h3>
                  <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    Design complex AI workflows with our intuitive drag-and-drop
                    interface. Connect multiple agents, add conditional logic,
                    and create sophisticated automation pipelines.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <span className="text-lg text-gray-700 dark:text-gray-300">
                        Conditional branching and loops
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <span className="text-lg text-gray-700 dark:text-gray-300">
                        Real-time workflow testing
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <span className="text-lg text-gray-700 dark:text-gray-300">
                        Template library with 100+ workflows
                      </span>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    className="h-14 px-10 text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => (window.location.href = "/workflows")}
                  >
                    Try Workflow Builder <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="relative">
                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 border border-gray-300 dark:border-gray-600 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center">
                      <Workflow className="h-20 w-20 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                      <p className="text-xl text-gray-700 dark:text-gray-300 font-medium">
                        Interactive Workflow Demo
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Spotlight */}
              <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                <div className="order-2 lg:order-1">
                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-green-500/20 to-blue-500/20 dark:from-green-500/30 dark:to-blue-500/30 border border-gray-300 dark:border-gray-600 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center">
                      <BarChart3 className="h-20 w-20 text-green-600 dark:text-green-400 mx-auto mb-4" />
                      <p className="text-xl text-gray-700 dark:text-gray-300 font-medium">
                        Analytics Dashboard Preview
                      </p>
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <h3 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                    Advanced Analytics
                  </h3>
                  <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    Get deep insights into your AI workflows with comprehensive
                    analytics. Track performance, costs, and optimize your agent
                    utilization.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <span className="text-lg text-gray-700 dark:text-gray-300">
                        Real-time performance monitoring
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <span className="text-lg text-gray-700 dark:text-gray-300">
                        Cost tracking and optimization
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <span className="text-lg text-gray-700 dark:text-gray-300">
                        Custom dashboards and reports
                      </span>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    className="h-14 px-10 text-lg bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => (window.location.href = "/dashboard")}
                  >
                    View Analytics <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-5xl font-black mb-8 text-gray-900 dark:text-gray-100">
              Ready to experience these features?
            </h2>
            <p className="text-2xl text-gray-700 dark:text-gray-300 mb-16">
              Start your free trial today and see how CrewHub can transform your
              AI workflows.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button
                size="lg"
                className="h-16 px-12 text-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => (window.location.href = "/signup")}
              >
                Start Free Trial <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-16 px-12 text-xl border-2 border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 rounded-2xl backdrop-blur-sm transition-all duration-300"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Sales
              </Button>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-8">
              14-day free trial • No credit card required • Setup in minutes
            </p>
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

export default Features;
