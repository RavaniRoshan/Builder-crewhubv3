import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
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
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const featureCardsRef = useRef<HTMLDivElement[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 100,
  });

  const heroY = useTransform(smoothProgress, [0, 0.3], [0, -100]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const headerOpacity = useTransform(smoothProgress, [0, 0.1], [0.95, 1]);

  // Enhanced button animations
  const [isHoveringPrimary, setIsHoveringPrimary] = useState(false);
  const [isHoveringSecondary, setIsHoveringSecondary] = useState(false);
  const [isHoveringHeader, setIsHoveringHeader] = useState(false);

  // GSAP animations for feature cards
  useEffect(() => {
    // Clean up function to clear ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    // Animate the features section header
    if (featuresRef.current) {
      const header = featuresRef.current.querySelector(".features-header");
      if (header) {
        gsap.fromTo(
          header,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: header,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    }

    if (featureCardsRef.current.length > 0) {
      // Initial state - cards start from below and invisible
      gsap.set(featureCardsRef.current, {
        y: 100,
        opacity: 0,
        rotation: 5,
        scale: 0.8,
      });

      // Animate cards in sequence when they come into view
      featureCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.to(card, {
            y: 0,
            opacity: 1,
            rotation: 0,
            scale: 1,
            duration: 1.2,
            delay: index * 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          });

          // Enhanced hover animations
          const cardElements = {
            card: card,
            icon: card.querySelector(".feature-icon"),
            title: card.querySelector(".feature-title"),
            description: card.querySelector(".feature-description"),
            background: card.querySelector(".feature-background"),
          };

          if (cardElements.card) {
            cardElements.card.addEventListener("mouseenter", () => {
              gsap.to(cardElements.card, {
                y: -20,
                scale: 1.05,
                rotationY: 10,
                duration: 0.4,
                ease: "power2.out",
              });

              if (cardElements.icon) {
                gsap.to(cardElements.icon, {
                  rotation: 360,
                  scale: 1.2,
                  duration: 0.6,
                  ease: "back.out(1.7)",
                });
              }

              if (cardElements.background) {
                gsap.to(cardElements.background, {
                  opacity: 1,
                  scale: 1.1,
                  duration: 0.4,
                  ease: "power2.out",
                });
              }

              if (cardElements.title) {
                gsap.to(cardElements.title, {
                  color: "#60a5fa",
                  duration: 0.3,
                  ease: "power2.out",
                });
              }

              if (cardElements.description) {
                gsap.to(cardElements.description, {
                  color: "rgba(255, 255, 255, 0.9)",
                  duration: 0.3,
                  ease: "power2.out",
                });
              }
            });

            cardElements.card.addEventListener("mouseleave", () => {
              gsap.to(cardElements.card, {
                y: 0,
                scale: 1,
                rotationY: 0,
                duration: 0.4,
                ease: "power2.out",
              });

              if (cardElements.icon) {
                gsap.to(cardElements.icon, {
                  rotation: 0,
                  scale: 1,
                  duration: 0.4,
                  ease: "power2.out",
                });
              }

              if (cardElements.background) {
                gsap.to(cardElements.background, {
                  opacity: 0,
                  scale: 1,
                  duration: 0.4,
                  ease: "power2.out",
                });
              }

              if (cardElements.title) {
                gsap.to(cardElements.title, {
                  color: "#ffffff",
                  duration: 0.3,
                  ease: "power2.out",
                });
              }

              if (cardElements.description) {
                gsap.to(cardElements.description, {
                  color: "rgba(255, 255, 255, 0.6)",
                  duration: 0.3,
                  ease: "power2.out",
                });
              }
            });
          }
        }
      });
    }
  }, []);

  // Helper function to add card refs
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !featureCardsRef.current.includes(el)) {
      featureCardsRef.current.push(el);
    }
  };

  // Cursor.com style floating animation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  // Animated background dots like Cursor.com
  const AnimatedDots = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background"
      onMouseMove={handleMouseMove}
    >
      {/* Fixed Navigation with Enhanced Glass Effect */}
      <motion.nav
        style={{ opacity: headerOpacity }}
        className="fixed top-4 left-4 right-4 z-50 rounded-2xl border border-white/20 bg-black/40 backdrop-blur-3xl supports-[backdrop-filter]:bg-black/20 shadow-2xl shadow-black/50"
      >
        <div className="container flex h-16 items-center justify-between px-8">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <img
              src="/crewhub-logo.png"
              alt="CrewHub Logo"
              className="h-10 w-10 rounded-full"
            />
            <span className="font-bold text-xl text-white">CrewHub</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <motion.a
              href="/features"
              className="text-white/70 hover:text-white transition-all relative group"
              whileHover={{ y: -2 }}
            >
              Features
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-white"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href="/pricing"
              className="text-white/70 hover:text-white transition-all relative group"
              whileHover={{ y: -2 }}
            >
              Pricing
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-white"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href="/about"
              className="text-white/70 hover:text-white transition-all relative group"
              whileHover={{ y: -2 }}
            >
              About
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-white"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>

          <div className="flex items-center space-x-3">
            <ThemeSwitch />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => (window.location.href = "/signin")}
              className="hidden sm:inline-flex text-white/70 hover:text-white hover:bg-white/10"
            >
              Sign In
            </Button>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHoveringHeader(true)}
              onHoverEnd={() => setIsHoveringHeader(false)}
            >
              <Button
                size="sm"
                onClick={() => (window.location.href = "/signup")}
                className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:text-white transition-all duration-300 border-0"
              >
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "100%" }}
                  animate={{ x: isHoveringHeader ? "0%" : "100%" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="relative z-10"
                  animate={{
                    color: isHoveringHeader ? "#000000" : "#ffffff",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Get Started
                </motion.span>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <AnimatedDots />

        {/* Animated Background Grid */}
        <motion.div className="absolute inset-0 -z-10" style={{ y: heroY }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </motion.div>

        <motion.div
          className="container relative z-10"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="mx-auto max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge
                className="mb-6 border-white/20 bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
                variant="outline"
              >
                <Sparkles className="w-3 h-3 mr-2" />
                Now in Beta - Join the AI Revolution
              </Badge>
            </motion.div>

            <motion.h1
              className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl mb-8 text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              The AI
              <br />
              <motion.span
                className="inline-block"
                animate={{
                  color: ["#ffffff", "#60a5fa", "#a855f7", "#ffffff"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Code Editor
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl leading-8 text-white/70 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Built to make you extraordinarily productive, CrewHub is the best
              way to orchestrate AI agents and build complex workflows with
              seamless collaboration.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHoveringPrimary(true)}
                onHoverEnd={() => setIsHoveringPrimary(false)}
              >
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:text-white transition-all duration-300 relative overflow-hidden border-0"
                  onClick={() => (window.location.href = "/signup")}
                >
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "100%" }}
                    animate={{ x: isHoveringPrimary ? "0%" : "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="relative z-10 flex items-center"
                    animate={{
                      color: isHoveringPrimary ? "#000000" : "#ffffff",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Start Your Free Trial
                    <motion.div
                      animate={{ x: isHoveringPrimary ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </motion.span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHoveringSecondary(true)}
                onHoverEnd={() => setIsHoveringSecondary(false)}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-lg border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20"
                    initial={{ x: "-100%" }}
                    animate={{ x: isHoveringSecondary ? "0%" : "-100%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center">
                    <Play className="mr-2 h-5 w-5" />
                    Schedule Demo
                  </span>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-8 text-sm text-white/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Free trial available
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                No credit card required
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section with Scroll Animation */}
      <motion.section
        className="py-24 bg-black border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { title: "AI Models Integrated", value: "500+", delay: 0 },
                { title: "Workflows Created", value: "50K+", delay: 0.1 },
                { title: "Active Users", value: "10K+", delay: 0.2 },
                { title: "Uptime", value: "99.9%", delay: 0.3 },
              ].map((stat, index) => (
                <motion.div
                  key={stat.title}
                  className="text-center group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: stat.delay }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className="text-4xl font-bold text-white mb-2"
                    whileHover={{ color: "#60a5fa" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                    {stat.title}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section with GSAP Animation */}
      <section
        id="features"
        className="py-32 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="container">
          <div className="features-header mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-white">
              Everything you need to manage AI agents
            </h2>
            <p className="text-xl text-white/60">
              From agent configuration to workflow orchestration, CrewHub
              provides all the tools you need to harness the power of AI
              collaboration.
            </p>
          </div>

          <div className="mx-auto max-w-7xl" ref={featuresRef}>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Bot,
                  title: "AI Agent Management",
                  description:
                    "Integrate and configure multiple AI models including Claude, ChatGPT, Gemini, and more with specialized profiles and settings.",
                },
                {
                  icon: Workflow,
                  title: "Visual Workflow Builder",
                  description:
                    "Create complex workflows with our drag-and-drop interface. Connect agents, tools, and data sources with ease.",
                },
                {
                  icon: Users,
                  title: "Team Collaboration",
                  description:
                    "Work together in real-time with your team. Share workflows, collaborate on projects, and track progress seamlessly.",
                },
                {
                  icon: Zap,
                  title: "Tool Integration",
                  description:
                    "Connect external tools and APIs. Chain outputs between tools and agents for powerful automation workflows.",
                },
                {
                  icon: BarChart3,
                  title: "Analytics & Monitoring",
                  description:
                    "Track performance, costs, and usage across all your AI agents. Optimize workflows with detailed insights.",
                },
                {
                  icon: Target,
                  title: "Smart Recommendations",
                  description:
                    "AI-powered suggestions for optimal agent selection, workflow improvements, and tool recommendations.",
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  ref={addToRefs}
                  className="group relative"
                  style={{ perspective: "1000px" }}
                >
                  {/* Animated background gradient */}
                  <div
                    className="feature-background absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl opacity-0 blur-sm"
                    style={{ transform: "scale(0.9)" }}
                  />

                  <Card className="h-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 relative overflow-hidden rounded-xl">
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50" />

                    <CardHeader className="relative z-10">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="feature-icon flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 border border-white/20 relative overflow-hidden">
                          {/* Icon background effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 opacity-0 transition-opacity duration-300" />
                          <feature.icon className="h-6 w-6 text-white relative z-10" />
                        </div>
                        <CardTitle className="feature-title text-xl text-white transition-colors duration-300">
                          {feature.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="feature-description text-base leading-relaxed text-white/60 transition-colors duration-300">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>

                    {/* Animated border gradient */}
                    <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl blur-sm opacity-30" />
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section className="py-32 bg-gray-900">
        <div className="container">
          <motion.div
            className="mx-auto max-w-2xl text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-white">
              Built for teams that build the future
            </h2>
            <p className="text-xl text-white/60">
              From startups to enterprises, CrewHub empowers teams across
              industries to leverage AI effectively.
            </p>
          </motion.div>

          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Code,
                  title: "Development Teams",
                  description:
                    "Accelerate development cycles with AI-powered code generation, testing, and deployment workflows.",
                  features: [
                    "Code review automation",
                    "Bug detection & fixing",
                    "Documentation generation",
                  ],
                },
                {
                  icon: Lightbulb,
                  title: "Content Agencies",
                  description:
                    "Scale content creation with specialized agents for writing, editing, and multimedia production.",
                  features: [
                    "Multi-format content creation",
                    "Brand consistency checks",
                    "SEO optimization",
                  ],
                },
                {
                  icon: Building,
                  title: "Enterprise Teams",
                  description:
                    "Transform business processes with enterprise-grade AI workflows and governance controls.",
                  features: [
                    "Process automation",
                    "Data analysis workflows",
                    "Compliance monitoring",
                  ],
                },
              ].map((user, index) => (
                <motion.div
                  key={user.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, rotateX: 5 }}
                  className="group"
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <motion.div
                          className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <user.icon className="h-6 w-6 text-white group-hover:text-purple-400 transition-colors" />
                        </motion.div>
                        <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">
                          {user.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-base mb-6 text-white/60 group-hover:text-white/80 transition-colors">
                        {user.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {user.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            className="flex items-center gap-3 text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * i }}
                          >
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span className="text-white/60 group-hover:text-white/80 transition-colors">
                              {feature}
                            </span>
                          </motion.li>
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

      {/* CTA Section */}
      <section className="py-32 bg-black">
        <div className="container">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-white">
              Ready to transform your AI workflow?
            </h2>
            <p className="text-xl text-white/60 mb-12">
              Join thousands of teams already using CrewHub to build the future
              with AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHoveringPrimary(true)}
                onHoverEnd={() => setIsHoveringPrimary(false)}
              >
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:text-white transition-all duration-300 relative overflow-hidden border-0"
                  onClick={() => (window.location.href = "/signup")}
                >
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "100%" }}
                    animate={{ x: isHoveringPrimary ? "0%" : "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="relative z-10 flex items-center"
                    animate={{
                      color: isHoveringPrimary ? "#000000" : "#ffffff",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Start Your Free Trial
                    <motion.div
                      animate={{ x: isHoveringPrimary ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </motion.span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHoveringSecondary(true)}
                onHoverEnd={() => setIsHoveringSecondary(false)}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-lg border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 relative overflow-hidden"
                  onClick={() => (window.location.href = "/contact")}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20"
                    initial={{ x: "-100%" }}
                    animate={{ x: isHoveringSecondary ? "0%" : "-100%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Schedule Demo</span>
                </Button>
              </motion.div>
            </div>
            <p className="text-sm text-white/40">
              14-day free trial • No credit card required • Setup in minutes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black">
        <div className="container py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <img
                  src="/crewhub-logo.png"
                  alt="CrewHub Logo"
                  className="h-10 w-10 rounded-full"
                />
                <span className="font-bold text-xl text-white">CrewHub</span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                The comprehensive platform for AI agent and MCP management.
                Build, collaborate, and scale with AI.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-white">Product</h3>
              <ul className="space-y-3 text-sm text-white/60">
                <li>
                  <a
                    href="/features"
                    className="hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/docs"
                    className="hover:text-white transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="/api" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-white">Company</h3>
              <ul className="space-y-3 text-sm text-white/60">
                <li>
                  <a
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-white">Support</h3>
              <ul className="space-y-3 text-sm text-white/60">
                <li>
                  <a
                    href="/help"
                    className="hover:text-white transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="/community"
                    className="hover:text-white transition-colors"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="/status"
                    className="hover:text-white transition-colors"
                  >
                    Status
                  </a>
                </li>
                <li>
                  <a
                    href="/security"
                    className="hover:text-white transition-colors"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">
              © 2024 CrewHub. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-white/40">
              <a
                href="/privacy"
                className="hover:text-white/60 transition-colors"
              >
                Privacy
              </a>
              <a
                href="/terms"
                className="hover:text-white/60 transition-colors"
              >
                Terms
              </a>
              <a
                href="/cookies"
                className="hover:text-white/60 transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
