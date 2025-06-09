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
  Sparkles,
  Play,
  GitBranch,
  Network,
  Settings,
  Database,
  Monitor,
  Cpu,
} from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Index = () => {
  // Refs for GSAP animations
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const featureCardsRef = useRef<HTMLDivElement[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const morphingBgRef = useRef<HTMLDivElement>(null);

  // Mouse position for magnetic effects
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Timeline refs
  const masterTl = useRef<GSAPTimeline>();
  const heroTl = useRef<GSAPTimeline>();

  // Custom cursor and magnetic effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX - 15,
          y: e.clientY - 15,
          duration: 0.1,
          ease: "power2.out",
        });
      }

      // Magnetic effect for buttons
      const buttons = document.querySelectorAll("[data-magnetic]");
      buttons.forEach((button) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const distance = Math.sqrt(x * x + y * y);

        if (distance < 100) {
          gsap.to(button, {
            x: x * 0.3,
            y: y * 0.3,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        } else {
          gsap.to(button, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Master animation timeline
  useEffect(() => {
    if (!containerRef.current) return;

    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 0,
      y: 100,
      rotationX: 90,
    });

    // Create master timeline
    masterTl.current = gsap.timeline({ delay: 0.5 });

    // Hero entrance animation with 3D effects
    heroTl.current = gsap.timeline();

    // Navigation slide down with elastic effect
    heroTl.current.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.8)",
    });

    // Morphing background animation
    heroTl.current.to(
      morphingBgRef.current,
      {
        scale: 1.2,
        rotation: 45,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      },
      0,
    );

    // Title animation with split text effect
    const titleChars = (titleRef.current?.textContent || "").split("");
    if (titleRef.current) {
      titleRef.current.innerHTML = titleChars
        .map((char) =>
          char === " "
            ? " "
            : `<span style="display:inline-block">${char}</span>`,
        )
        .join("");

      const chars = titleRef.current.querySelectorAll("span");

      heroTl.current.to(
        titleRef.current,
        {
          opacity: 1,
          duration: 0.1,
        },
        0.5,
      );

      heroTl.current.from(
        chars,
        {
          y: 100,
          rotationX: 90,
          opacity: 0,
          duration: 1.5,
          stagger: 0.05,
          ease: "back.out(1.7)",
          transformOrigin: "center bottom",
        },
        0.6,
      );
    }

    // Subtitle typewriter effect
    heroTl.current.to(
      subtitleRef.current,
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1,
        ease: "power3.out",
      },
      1.5,
    );

    // CTA buttons with staggered bounce
    if (ctaRef.current) {
      const buttons = ctaRef.current.querySelectorAll("button, .cta-button");
      heroTl.current.from(
        buttons,
        {
          scale: 0,
          rotation: 180,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
        },
        2,
      );
    }

    // Add to master timeline
    masterTl.current.add(heroTl.current);

    return () => {
      masterTl.current?.kill();
      heroTl.current?.kill();
    };
  }, []);

  // ScrollTrigger animations
  useEffect(() => {
    if (!featuresRef.current) return;

    // Parallax background elements
    gsap.to(".parallax-slow", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".parallax-fast", {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Stats counter animation
    if (statsRef.current) {
      const statNumbers = statsRef.current.querySelectorAll("[data-count]");
      statNumbers.forEach((stat) => {
        const target = parseInt(stat.getAttribute("data-count") || "0");
        gsap.fromTo(
          stat,
          {
            textContent: 0,
          },
          {
            textContent: target,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: stat,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }

    // Feature cards with 3D flip reveal
    featureCardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.set(card, {
        rotationY: -90,
        opacity: 0,
        transformOrigin: "center center",
        transformStyle: "preserve-3d",
      });

      gsap.to(card, {
        rotationY: 0,
        opacity: 1,
        duration: 1.2,
        delay: index * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Advanced hover animations
      const handleMouseEnter = () => {
        gsap.to(card, {
          scale: 1.05,
          rotationY: 5,
          rotationX: 5,
          z: 50,
          duration: 0.4,
          ease: "power2.out",
        });

        // Glow effect
        gsap.to(card.querySelector(".card-glow"), {
          opacity: 0.3,
          scale: 1.1,
          duration: 0.4,
          ease: "power2.out",
        });

        // Icon rotation
        gsap.to(card.querySelector(".feature-icon"), {
          rotation: 360,
          scale: 1.2,
          duration: 0.6,
          ease: "elastic.out(1, 0.5)",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          scale: 1,
          rotationY: 0,
          rotationX: 0,
          z: 0,
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.to(card.querySelector(".card-glow"), {
          opacity: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.to(card.querySelector(".feature-icon"), {
          rotation: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !featureCardsRef.current.includes(el)) {
      featureCardsRef.current.push(el);
    }
  };

  return (
    <>
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      <div
        ref={containerRef}
        className="min-h-screen bg-black text-white overflow-hidden relative"
        style={{ perspective: "1000px" }}
      >
        {/* Morphing Background */}
        <div ref={morphingBgRef} className="fixed inset-0 -z-10 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-500/30 to-transparent rounded-full blur-3xl parallax-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-purple-500/30 to-transparent rounded-full blur-3xl parallax-fast" />
        </div>

        {/* Floating Navigation */}
        <nav
          ref={navRef}
          className="fixed top-6 left-6 right-6 z-50 backdrop-blur-2xl bg-black/30 border border-white/20 rounded-2xl shadow-2xl"
        >
          <div className="container flex h-20 items-center justify-between px-8">
            <div className="flex items-center space-x-3" data-magnetic>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Network className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                CrewHub
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-12 text-lg font-medium">
              {["Features", "Pricing", "Docs"].map((item, index) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="relative text-white/70 hover:text-white transition-all duration-300 group"
                  data-magnetic
                >
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <ThemeSwitch />
              <Button
                variant="ghost"
                size="lg"
                className="text-white/70 hover:text-white hover:bg-white/10 text-lg"
                data-magnetic
                onClick={() => (window.location.href = "/signin")}
              >
                Sign In
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                data-magnetic
                onClick={() => (window.location.href = "/signup")}
              >
                Start Building
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          ref={heroRef}
          className="min-h-screen flex items-center justify-center relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="container relative z-10 text-center max-w-6xl">
            <Badge className="mb-8 bg-white/10 border-white/20 text-white backdrop-blur-sm text-lg px-6 py-2 rounded-full">
              <Bot className="w-5 h-5 mr-2" />
              AI Agent & MCP Management Platform
            </Badge>

            <h1
              ref={titleRef}
              className="text-7xl md:text-9xl font-black mb-8 leading-tight"
              style={{
                background:
                  "linear-gradient(45deg, #ffffff, #60a5fa, #a855f7, #ffffff)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "gradient 3s ease infinite",
              }}
            >
              Orchestrate AI Teams
            </h1>

            <p
              ref={subtitleRef}
              className="text-2xl md:text-3xl text-white/80 max-w-4xl mx-auto mb-16 leading-relaxed"
            >
              The collaborative workspace where AI agents, tools, and teams
              unite. Build, manage, and deploy intelligent workflows at scale.
            </p>

            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-center justify-center gap-8"
            >
              <Button
                size="lg"
                className="cta-button h-16 px-12 text-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 relative overflow-hidden group"
                data-magnetic
                onClick={() => (window.location.href = "/signup")}
              >
                <span className="relative z-10 flex items-center">
                  Start Your Workspace
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="cta-button h-16 px-12 text-xl border-2 border-white/30 text-white hover:bg-white/10 rounded-2xl backdrop-blur-sm transition-all duration-300"
                data-magnetic
                onClick={() => (window.location.href = "/demo")}
              >
                <Play className="mr-3 h-6 w-6" />
                See Agents in Action
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-white/50 mt-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                GitHub-like collaboration
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Multi-model orchestration
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Enterprise ready
              </div>
            </div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="py-32 relative">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
              {[
                { label: "AI Models Integrated", value: 50, suffix: "+" },
                { label: "Active Workspaces", value: 1200, suffix: "+" },
                { label: "Workflows Created", value: 15000, suffix: "+" },
                { label: "Teams Collaborating", value: 500, suffix: "+" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center group">
                  <div className="text-6xl font-black text-white mb-4 font-mono">
                    <span data-count={stat.value}>0</span>
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="text-xl text-white/60 group-hover:text-white/80 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section ref={featuresRef} className="py-32 relative">
          <div className="container">
            <div className="text-center mb-20">
              <h2 className="text-6xl font-black mb-8 text-white">
                Everything You Need to Manage AI Teams
              </h2>
              <p className="text-2xl text-white/70 max-w-4xl mx-auto">
                From agent catalogs to workflow orchestration, CrewHub provides
                all the tools for intelligent collaboration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: Bot,
                  title: "AI Agent Catalog",
                  description:
                    "Integrate Claude, ChatGPT, Gemini, and more. Configure specialized profiles with custom instructions and knowledge bases.",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Workflow,
                  title: "Visual Workflow Builder",
                  description:
                    "Drag-and-drop interface for creating complex multi-agent workflows. Connect agents, tools, and data sources seamlessly.",
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  icon: Users,
                  title: "Team Collaboration",
                  description:
                    "Real-time collaboration with role-based permissions. Share workflows, agents, and projects across your organization.",
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  icon: Network,
                  title: "Tool & MCP Integration",
                  description:
                    "Extensive library of tools and Machine Control Protocols. Chain outputs between agents and external systems.",
                  gradient: "from-yellow-500 to-orange-500",
                },
                {
                  icon: BarChart3,
                  title: "Analytics & Monitoring",
                  description:
                    "Track performance, costs, and usage across all agents. Optimize workflows with detailed insights and metrics.",
                  gradient: "from-red-500 to-pink-500",
                },
                {
                  icon: Target,
                  title: "Smart Recommendations",
                  description:
                    "AI-powered suggestions for optimal agent selection, workflow improvements, and tool recommendations.",
                  gradient: "from-indigo-500 to-purple-500",
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  ref={addToRefs}
                  className="group relative"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Glow Effect */}
                  <div
                    className={`card-glow absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 rounded-3xl blur-xl`}
                  />

                  <Card className="relative h-full bg-black/40 border border-white/20 backdrop-blur-xl rounded-3xl p-8 hover:border-white/40 transition-all duration-500 overflow-hidden">
                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

                    <CardHeader className="relative z-10">
                      <div className="flex items-center space-x-4 mb-6">
                        <div
                          className={`feature-icon w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg`}
                        >
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <CardTitle className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        {feature.title}
                      </CardTitle>

                      <CardDescription className="text-lg text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Users Section */}
        <section className="py-32 relative">
          <div className="container">
            <div className="text-center mb-20">
              <h2 className="text-6xl font-black mb-8 text-white">
                Built for Teams That Build Tomorrow
              </h2>
              <p className="text-2xl text-white/70 max-w-4xl mx-auto">
                From development teams to enterprise innovation departments,
                CrewHub empowers organizations to harness AI collaboration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: Code,
                  title: "Development Teams",
                  description:
                    "Accelerate software development with AI-powered code generation, testing, and deployment workflows.",
                  features: [
                    "Multi-model code review",
                    "Automated testing agents",
                    "Deployment orchestration",
                  ],
                },
                {
                  icon: Lightbulb,
                  title: "Content Agencies",
                  description:
                    "Scale content creation with specialized agents for writing, editing, design, and multimedia production.",
                  features: [
                    "Brand-consistent content",
                    "Multi-format generation",
                    "Quality assurance workflows",
                  ],
                },
                {
                  icon: Building,
                  title: "Enterprise Teams",
                  description:
                    "Transform business processes with enterprise-grade AI workflows and governance controls.",
                  features: [
                    "Process automation",
                    "Compliance monitoring",
                    "Data analysis pipelines",
                  ],
                },
              ].map((user, index) => (
                <div
                  key={user.title}
                  className="group hover:scale-105 transition-all duration-300"
                >
                  <Card className="h-full bg-black/40 border border-white/20 backdrop-blur-xl rounded-3xl p-8 hover:border-white/40 transition-all duration-500">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                          <user.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <CardTitle className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                        {user.title}
                      </CardTitle>

                      <CardDescription className="text-lg text-white/70 mb-6 group-hover:text-white/90 transition-colors">
                        {user.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <ul className="space-y-3">
                        {user.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                            <span className="text-white/70 group-hover:text-white/90 transition-colors">
                              {feature}
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
        </section>

        {/* CTA Section */}
        <section className="py-32 relative">
          <div className="container text-center">
            <h2 className="text-6xl font-black mb-8 text-white">
              Ready to Orchestrate AI Excellence?
            </h2>
            <p className="text-2xl text-white/70 mb-16 max-w-3xl mx-auto">
              Join thousands of teams building the future with intelligent agent
              collaboration
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button
                size="lg"
                className="h-20 px-16 text-2xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-3xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 group"
                data-magnetic
                onClick={() => (window.location.href = "/signup")}
              >
                <span className="flex items-center">
                  Start Your AI Workspace
                  <Network className="ml-4 h-7 w-7 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-20 px-16 text-2xl border-2 border-white/30 text-white hover:bg-white/10 rounded-3xl backdrop-blur-sm transition-all duration-300"
                data-magnetic
                onClick={() => (window.location.href = "/contact")}
              >
                <span className="flex items-center">
                  Enterprise Demo
                  <Building className="ml-4 h-7 w-7" />
                </span>
              </Button>
            </div>

            <p className="text-lg text-white/50 mt-8">
              14-day free trial • No credit card required • GitHub-like
              collaboration
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-black/50 backdrop-blur-xl">
          <div className="container py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Network className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-2xl text-white">CrewHub</span>
                </div>
                <p className="text-white/60 leading-relaxed">
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
                  links: [
                    "Documentation",
                    "API Reference",
                    "Community",
                    "Blog",
                  ],
                },
                {
                  title: "Company",
                  links: ["About", "Careers", "Contact", "Enterprise"],
                },
              ].map((section) => (
                <div key={section.title}>
                  <h3 className="font-bold text-white mb-6 text-lg">
                    {section.title}
                  </h3>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a
                          href={`/${link.toLowerCase().replace(" ", "-")}`}
                          className="text-white/60 hover:text-white transition-colors duration-300"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 text-center">
              <p className="text-white/40">
                © 2024 CrewHub. Orchestrating AI excellence for teams
                worldwide.
              </p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  );
};

export default Index;
