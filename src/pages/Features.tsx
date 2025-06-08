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
} from "lucide-react";

const Features = () => {
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
                className="transition-colors hover:text-foreground/80 text-foreground"
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
      <section className="py-24 lg:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <Badge className="mb-4" variant="secondary">
              🚀 Powerful Features
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Everything you need to manage AI agents
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              From agent configuration to workflow orchestration, CrewHub
              provides all the tools you need to harness the power of AI
              collaboration.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="h-12 px-8"
                onClick={() => (window.location.href = "/signup")}
              >
                Try Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8">
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                          <feature.icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle>{feature.title}</CardTitle>
                      </div>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            {benefit}
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

      {/* Feature Spotlight */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Feature Spotlight
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Dive deeper into our most powerful capabilities
              </p>
            </div>

            <div className="space-y-24">
              {/* Workflow Builder Spotlight */}
              <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-4">
                    Visual Workflow Builder
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Design complex AI workflows with our intuitive drag-and-drop
                    interface. Connect multiple agents, add conditional logic,
                    and create sophisticated automation pipelines.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <ThemeSwitch />
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
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Conditional branching and loops</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Real-time workflow testing</span>
                    </div>
                  </div>
                  <Button
                    className="mt-6"
                    onClick={() => (window.location.href = "/workflows")}
                  >
                    Try Workflow Builder <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border flex items-center justify-center">
                    <div className="text-center">
                      <Workflow className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Interactive Workflow Demo
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Analytics Spotlight */}
              <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="order-2 lg:order-1"
                >
                  <div className="aspect-video rounded-lg bg-gradient-to-br from-green-500/10 to-blue-500/10 border flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-16 w-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Analytics Dashboard Preview
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="order-1 lg:order-2"
                >
                  <h3 className="text-2xl font-bold mb-4">
                    Advanced Analytics
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Get deep insights into your AI workflows with comprehensive
                    analytics. Track performance, costs, and optimize your agent
                    utilization.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Real-time performance monitoring</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Cost tracking and optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Custom dashboards and reports</span>
                    </div>
                  </div>
                  <Button
                    className="mt-6"
                    onClick={() => (window.location.href = "/dashboard")}
                  >
                    View Analytics <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to experience these features?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start your free trial today and see how CrewHub can transform your
              AI workflows.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="h-12 px-8"
                onClick={() => (window.location.href = "/signup")}
              >
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Sales
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              14-day free trial • No credit card required • Setup in minutes
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
