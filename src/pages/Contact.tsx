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
import { Textarea } from "@/components/ui/textarea";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Network,
  Building,
  Users,
  HeadphonesIcon,
} from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const contactCardsRef = useRef<HTMLDivElement[]>([]);
  const formRef = useRef<HTMLDivElement>(null);

  const addToContactCardsRefs = (el: HTMLDivElement | null) => {
    if (el && !contactCardsRef.current.includes(el)) {
      contactCardsRef.current.push(el);
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

      // Contact cards animation
      contactCardsRef.current.forEach((card, index) => {
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
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Form animation
      if (formRef.current) {
        gsap.set(formRef.current, {
          opacity: 0,
          x: 50,
        });

        gsap.to(formRef.current, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help from our support team",
      details: "support@crewhub.ai",
      action: "Send Email",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with us in real-time",
      details: "Available 24/7",
      action: "Start Chat",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our team directly",
      details: "+1 (555) 123-4567",
      action: "Call Now",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Building,
      title: "Enterprise Sales",
      description: "Custom solutions for your organization",
      details: "sales@crewhub.ai",
      action: "Contact Sales",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      details: "123 AI Street, Tech Valley, CA 94000",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM PST",
    },
    {
      icon: HeadphonesIcon,
      title: "Support Hours",
      details: "24/7 Live Chat & Email",
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
              { name: "Contact", href: "/contact", active: true },
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
              📞 Get in Touch
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight text-gray-900 dark:text-gray-100">
              Let's{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Talk
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
              Have questions about CrewHub? Want to see how AI agents can
              transform your workflow? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <div
                  key={method.title}
                  ref={addToContactCardsRefs}
                  className="group"
                >
                  <Card className="h-full bg-white/90 dark:bg-gray-800/90 border border-gray-300 dark:border-gray-600 backdrop-blur-xl rounded-3xl p-6 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-500 shadow-lg hover:shadow-xl group-hover:scale-105">
                    <CardHeader className="pb-4">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4`}
                      >
                        <method.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {method.title}
                      </CardTitle>
                      <CardDescription className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                        {method.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        {method.details}
                      </p>
                      <Button
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl transition-all duration-300"
                        onClick={() => {
                          if (method.title === "Email Support") {
                            window.location.href = "mailto:support@crewhub.ai";
                          } else if (method.title === "Phone Support") {
                            window.location.href = "tel:+15551234567";
                          } else if (method.title === "Enterprise Sales") {
                            window.location.href = "mailto:sales@crewhub.ai";
                          }
                        }}
                      >
                        {method.action}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-32 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Contact Form */}
              <div ref={formRef}>
                <Card className="bg-white/90 dark:bg-gray-800/90 border border-gray-300 dark:border-gray-600 backdrop-blur-xl rounded-3xl p-8 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      Send us a message
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-700 dark:text-gray-300">
                      Fill out the form below and we'll get back to you within
                      24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                          First Name
                        </label>
                        <Input
                          className="h-12 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                          Last Name
                        </label>
                        <Input
                          className="h-12 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        className="h-12 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                        Company
                      </label>
                      <Input
                        className="h-12 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                        Message
                      </label>
                      <Textarea
                        className="min-h-32 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl resize-none"
                        placeholder="Tell us about your project and how we can help..."
                      />
                    </div>
                    <Button
                      size="lg"
                      className="w-full h-14 text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Office Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                    Visit our office
                  </h2>
                  <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    Located in the heart of Silicon Valley, our team is ready to
                    meet with you and discuss how CrewHub can accelerate your AI
                    initiatives.
                  </p>
                </div>

                <div className="space-y-6">
                  {officeInfo.map((info, index) => (
                    <div
                      key={info.title}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                          {info.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Card className="bg-white/90 dark:bg-gray-800/90 border border-gray-300 dark:border-gray-600 backdrop-blur-xl rounded-2xl p-6 shadow-lg">
                  <CardContent className="text-center">
                    <Users className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Schedule a Demo
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      See CrewHub in action with a personalized demo for your
                      team.
                    </p>
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl transition-all duration-300"
                    >
                      Book a Demo
                    </Button>
                  </CardContent>
                </Card>
              </div>
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

export default Contact;
