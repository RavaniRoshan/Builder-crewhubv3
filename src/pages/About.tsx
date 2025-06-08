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
import { motion } from "framer-motion";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  Target,
  Users,
  Rocket,
  Award,
  Globe,
  Heart,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Shield,
  Zap,
} from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      description:
        "Former AI researcher at Google. PhD in Machine Learning from MIT.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-founder",
      description: "Ex-OpenAI engineer with 10+ years in AI infrastructure.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Emily Watson",
      role: "Head of Product",
      description:
        "Former product lead at Anthropic. Expert in AI safety and UX.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      description:
        "Previously built ML infrastructure at Meta. Stanford CS graduate.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "AI Safety First",
      description:
        "We prioritize responsible AI development and deployment in everything we build.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Building tools that bring humans and AI together for better outcomes.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Pushing the boundaries of what's possible with AI agent orchestration.",
    },
    {
      icon: Globe,
      title: "Accessibility",
      description:
        "Making advanced AI capabilities accessible to teams of all sizes.",
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
                href="#features"
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
                className="transition-colors hover:text-foreground/80 text-foreground"
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
      <section className="py-24 lg:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <Badge className="mb-4" variant="secondary">
              🌟 About CrewHub
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Building the Future of AI Collaboration
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              CrewHub was founded with a simple mission: to democratize access
              to advanced AI capabilities and make it easy for teams to build
              with artificial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Our Mission
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  We believe that AI should amplify human capabilities, not
                  replace them. CrewHub enables teams to orchestrate AI agents
                  alongside human expertise, creating workflows that are more
                  powerful than either could achieve alone.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Make AI accessible to non-technical teams</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Enable seamless human-AI collaboration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Promote responsible AI development</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Target className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">10,000+</h3>
                    <p className="text-muted-foreground">Teams using CrewHub</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide everything we do at CrewHub.
            </p>
          </div>

          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center h-full">
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <value.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <CardTitle>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{value.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The brilliant minds behind CrewHub's innovation.
            </p>
          </div>

          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center">
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-20 w-20 rounded-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription className="font-medium text-primary">
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {member.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to join us?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Be part of the team that's shaping the future of AI collaboration.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="h-12 px-8"
                onClick={() => (window.location.href = "/careers")}
              >
                View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img
                  src="/crewhub-logo.png"
                  alt="CrewHub Logo"
                  className="h-10 w-10 rounded-full"
                />
                <span className="font-bold text-xl">CrewHub</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The comprehensive platform for AI agent and MCP management.
                Build, collaborate, and scale with AI.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/" className="hover:text-foreground">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="hover:text-foreground">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/docs" className="hover:text-foreground">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="/api" className="hover:text-foreground">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/about" className="hover:text-foreground">
                    About
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-foreground">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:text-foreground">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-foreground">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/help" className="hover:text-foreground">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/community" className="hover:text-foreground">
                    Community
                  </a>
                </li>
                <li>
                  <a href="/status" className="hover:text-foreground">
                    Status
                  </a>
                </li>
                <li>
                  <a href="/security" className="hover:text-foreground">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 border-t pt-8 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © 2024 CrewHub. All rights reserved.
            </p>
            <div className="flex items-center space-x-2">
              <ThemeSwitch />
              <Button variant="ghost" size="sm" onClick={() => window.location.href = '/signin'}>
                Sign In
              </Button>
              <Button size="sm" onClick={() => window.location.href = '/signup'}>
                Get Started
              </Button>
            </div>
              <a href="/terms" className="hover:text-foreground">
                Terms
              </a>
              <a href="/cookies" className="hover:text-foreground">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;