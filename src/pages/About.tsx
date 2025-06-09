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
  Target,
  Users,
  Globe,
  Lightbulb,
  Heart,
  Award,
  Rocket,
  Network,
  ArrowRight,
  Star,
  Building,
  Code,
} from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement[]>([]);
  const teamRef = useRef<HTMLDivElement[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);

  const addToValuesRefs = (el: HTMLDivElement | null) => {
    if (el && !valuesRef.current.includes(el)) {
      valuesRef.current.push(el);
    }
  };

  const addToTeamRefs = (el: HTMLDivElement | null) => {
    if (el && !teamRef.current.includes(el)) {
      teamRef.current.push(el);
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

      // Values cards animation
      valuesRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.set(card, {
          opacity: 0,
          y: 80,
          rotationY: -20,
        });

        gsap.to(card, {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Team cards animation
      teamRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.set(card, {
          opacity: 0,
          scale: 0.8,
          rotation: 5,
        });

        gsap.to(card, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
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
    });

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "We're on a mission to democratize AI collaboration and make intelligent automation accessible to every team.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We constantly push the boundaries of what's possible with AI agents and workflow automation.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "User-Centric",
      description:
        "Every feature we build starts with understanding our users' needs and solving their real-world problems.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Heart,
      title: "Open Collaboration",
      description:
        "We believe in the power of open collaboration, both in our platform and in how we work as a team.",
      gradient: "from-red-500 to-pink-500",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former AI researcher at Stanford with 10+ years in machine learning and workflow automation.",
      image: "/team/sarah.jpg",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Google engineer who led development of large-scale distributed systems and AI platforms.",
      image: "/team/michael.jpg",
    },
    {
      name: "Emily Johnson",
      role: "Head of Product",
      bio: "Product leader with experience at Slack and Notion, passionate about developer experience.",
      image: "/team/emily.jpg",
    },
    {
      name: "David Kim",
      role: "Head of AI Research",
      bio: "PhD in Computer Science, published researcher in multi-agent systems and LLM orchestration.",
      image: "/team/david.jpg",
    },
  ];

  const stats = [
    { label: "Team Members", value: 45, suffix: "+" },
    { label: "Years of AI Experience", value: 50, suffix: "+" },
    { label: "Customer Satisfaction", value: 98, suffix: "%" },
    { label: "Countries Served", value: 25, suffix: "+" },
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
              { name: "About", href: "/about", active: true },
              { name: "Features", href: "/features" },
              { name: "Pricing", href: "/pricing" },
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
              🚀 About CrewHub
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight text-gray-900 dark:text-gray-100">
              Building the{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Future of AI
              </span>{" "}
              Collaboration
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
              We're a team of AI researchers, engineers, and designers on a
              mission to make intelligent automation accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black mb-8 text-gray-900 dark:text-gray-100">
                Our Story
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                CrewHub was born from a simple observation: while AI
                capabilities were advancing rapidly, teams still struggled to
                coordinate multiple AI agents effectively. We set out to change
                that.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  The Challenge
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Organizations were investing heavily in AI, but faced
                  fragmentation. Teams used different models, couldn't share
                  workflows, and lacked visibility into their AI operations.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  We realized that the future wasn't just about better AI models
                  – it was about better AI collaboration.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Our Solution
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  CrewHub provides a unified platform where teams can manage AI
                  agents, build complex workflows, and collaborate seamlessly –
                  all while maintaining enterprise-grade security and
                  governance.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Think GitHub for AI workflows, but with the power to
                  orchestrate multiple models and tools in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black mb-8 text-gray-900 dark:text-gray-100">
                Our Values
              </h2>
              <p className="text-2xl text-gray-700 dark:text-gray-300">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={value.title} ref={addToValuesRefs} className="group">
                  <Card className="h-full bg-white/90 dark:bg-gray-800/90 border border-gray-300 dark:border-gray-600 backdrop-blur-xl rounded-3xl p-8 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-500 shadow-lg hover:shadow-xl group-hover:scale-105">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-6">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <value.icon className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {value.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                        {value.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-32 bg-gray-50/50 dark:bg-gray-900/50"
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="text-6xl font-black text-gray-900 dark:text-gray-100 mb-4 font-mono">
                  <span data-count={stat.value}>0</span>
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-xl text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-black mb-8 text-gray-900 dark:text-gray-100">
                Meet Our Team
              </h2>
              <p className="text-2xl text-gray-700 dark:text-gray-300">
                The people building the future of AI collaboration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={member.name} ref={addToTeamRefs} className="group">
                  <Card className="h-full bg-white/90 dark:bg-gray-800/90 border border-gray-300 dark:border-gray-600 backdrop-blur-xl rounded-3xl p-6 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-500 shadow-lg hover:shadow-xl group-hover:scale-105">
                    <CardHeader className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl font-bold text-white">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {member.name}
                      </CardTitle>
                      <CardDescription className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                        {member.role}
                      </CardDescription>
                      <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                        {member.bio}
                      </p>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-5xl font-black mb-8 text-gray-900 dark:text-gray-100">
              Join Us on This Journey
            </h2>
            <p className="text-2xl text-gray-700 dark:text-gray-300 mb-16">
              Ready to be part of the AI collaboration revolution? Let's build
              the future together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button
                size="lg"
                className="h-16 px-12 text-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => (window.location.href = "/signup")}
              >
                Start Building <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-16 px-12 text-xl border-2 border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 rounded-2xl backdrop-blur-sm transition-all duration-300"
                onClick={() => (window.location.href = "/careers")}
              >
                <Building className="mr-2 h-6 w-6" />
                View Careers
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

export default About;
