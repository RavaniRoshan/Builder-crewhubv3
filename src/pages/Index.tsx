import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
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
} from "lucide-react";

const Index = () => {
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
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4" variant="secondary">
                🚀 Now in Beta - Join the AI Revolution
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Orchestrate AI Agents Like Never Before
            </motion.h1>

            <motion.p
              className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              CrewHub is the comprehensive platform for assembling, configuring,
              and managing teams of specialized AI agents and tools. Build
              complex workflows with seamless AI collaboration.
            </motion.p>

            <motion.div
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="h-12 px-8 hover:scale-105 transition-transform duration-200"
                onClick={() => (window.location.href = "/dashboard")}
              >
                Start Building <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 hover:scale-105 transition-transform duration-200"
              >
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              className="mt-8 flex items-center justify-center gap-x-8 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center gap-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Free trial available
              </div>
              <div className="flex items-center gap-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                No credit card required
              </div>
            </motion.div>
          </div>
        </div>
        {/* Background gradient */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">
                  AI Models Integrated
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">
                  Workflows Created
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">
                  Active Users
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to manage AI agents
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From agent configuration to workflow orchestration, CrewHub
              provides all the tools you need to harness the power of AI
              collaboration.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl">
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
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-2 hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <feature.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {feature.title}
                        </CardTitle>
                      </div>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Built for teams that build the future
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From startups to enterprises, CrewHub empowers teams across
              industries to leverage AI effectively.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Code className="h-8 w-8 text-primary" />
                    <CardTitle>Development Teams</CardTitle>
                  </div>
                  <CardDescription>
                    Accelerate development cycles with AI-powered code
                    generation, testing, and deployment workflows.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Code review automation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Bug detection & fixing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Documentation generation
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Lightbulb className="h-8 w-8 text-primary" />
                    <CardTitle>Content Agencies</CardTitle>
                  </div>
                  <CardDescription>
                    Scale content creation with specialized agents for writing,
                    editing, and multimedia production.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Multi-format content creation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Brand consistency checks
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      SEO optimization
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Building className="h-8 w-8 text-primary" />
                    <CardTitle>Enterprise Teams</CardTitle>
                  </div>
                  <CardDescription>
                    Transform business processes with enterprise-grade AI
                    workflows and governance controls.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Process automation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Data analysis workflows
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Compliance monitoring
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Why choose CrewHub?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Experience the next generation of AI collaboration with
                  features designed for modern teams.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                      <Rocket className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">10x Faster Development</h3>
                      <p className="text-sm text-muted-foreground">
                        Reduce project timelines with intelligent agent
                        orchestration and automated workflows.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Enterprise Security</h3>
                      <p className="text-sm text-muted-foreground">
                        Bank-level security with role-based access, audit logs,
                        and compliance features.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                      <Share2 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Open Ecosystem</h3>
                      <p className="text-sm text-muted-foreground">
                        Integrate with any AI model or tool. Build custom agents
                        and share with the community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl"></div>
                <div className="relative p-8 bg-card rounded-2xl border">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Workflow Efficiency
                      </span>
                      <span className="font-semibold">+245%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-primary rounded-full"></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Cost Reduction
                      </span>
                      <span className="font-semibold">-60%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-green-500 rounded-full"></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Team Productivity
                      </span>
                      <span className="font-semibold">+180%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="py-24 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>
                    Perfect for individuals and small teams
                  </CardDescription>
                  <div className="text-3xl font-bold">Free</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Up to 3 AI agents
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Basic workflow builder
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Community support
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-primary shadow-lg scale-105">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CardTitle>Professional</CardTitle>
                    <Badge>Most Popular</Badge>
                  </div>
                  <CardDescription>
                    For growing teams and businesses
                  </CardDescription>
                  <div className="text-3xl font-bold">
                    $49
                    <span className="text-sm font-normal text-muted-foreground">
                      /month
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Unlimited AI agents
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Advanced workflows
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Team collaboration
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Priority support
                    </li>
                  </ul>
                  <Button className="w-full">Start Free Trial</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large organizations</CardDescription>
                  <div className="text-3xl font-bold">Custom</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Everything in Professional
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      SSO & advanced security
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Custom integrations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Dedicated support
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to transform your AI workflow?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of teams already using CrewHub to build the future
              with AI.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Button size="lg" className="h-12 px-8">
                Start Your Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8">
                Schedule Demo
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              14-day free trial • No credit card required • Setup in minutes
            </p>
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
                  <a href="/features" className="hover:text-foreground">
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
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <a href="/privacy" className="hover:text-foreground">
                Privacy
              </a>
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

export default Index;
