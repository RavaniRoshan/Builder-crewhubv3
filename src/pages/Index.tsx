import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
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
import { useRef } from "react";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
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

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* Fixed Navigation with Glass Effect */}
      <motion.nav
        style={{ opacity: headerOpacity }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-16 items-center justify-between">
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
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              CrewHub
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <motion.a
              href="/features"
              className="transition-colors hover:text-primary relative group"
              whileHover={{ y: -2 }}
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </motion.a>
            <motion.a
              href="/pricing"
              className="transition-colors hover:text-primary relative group"
              whileHover={{ y: -2 }}
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </motion.a>
            <motion.a
              href="/about"
              className="transition-colors hover:text-primary relative group"
              whileHover={{ y: -2 }}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </motion.a>
          </div>

          <div className="flex items-center space-x-3">
            <ThemeSwitch />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => (window.location.href = "/signin")}
              className="hidden sm:inline-flex"
            >
              Sign In
            </Button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                onClick={() => (window.location.href = "/signup")}
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
              >
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <motion.div className="absolute inset-0 -z-10" style={{ y: heroY }}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-indigo-50/10 to-purple-50/20 dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-purple-950/20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
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
                className="mb-6 border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                variant="outline"
              >
                <Sparkles className="w-3 h-3 mr-2" />
                Now in Beta - Join the AI Revolution
              </Badge>
            </motion.div>

            <motion.h1
              className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-white dark:to-gray-100 bg-clip-text text-transparent">
                Orchestrate AI Agents
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Like Never Before
              </span>
            </motion.h1>

            <motion.p
              className="text-xl leading-8 text-muted-foreground max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              CrewHub is the comprehensive platform for assembling, configuring,
              and managing teams of specialized AI agents and tools. Build
              complex workflows with seamless AI collaboration.
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
              >
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg shadow-primary/25"
                  onClick={() => (window.location.href = "/dashboard")}
                >
                  Start Building <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-lg border-2 hover:bg-primary/5"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-8 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Free trial available
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                No credit card required
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section with Scroll Animation */}
      <motion.section
        className="py-24 bg-muted/30"
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
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: stat.delay }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.title}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section with Staggered Animation */}
      <section id="features" className="py-32">
        <div className="container">
          <motion.div
            className="mx-auto max-w-2xl text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Everything you need to manage AI agents
            </h2>
            <p className="text-xl text-muted-foreground">
              From agent configuration to workflow orchestration, CrewHub
              provides all the tools you need to harness the power of AI
              collaboration.
            </p>
          </motion.div>

          <div className="mx-auto max-w-7xl">
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full border-2 border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <motion.div
                          className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-blue-600/20 border border-primary/20"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <feature.icon className="h-6 w-6 text-primary" />
                        </motion.div>
                        <CardTitle className="text-xl">
                          {feature.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section className="py-32 bg-muted/30">
        <div className="container">
          <motion.div
            className="mx-auto max-w-2xl text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Built for teams that build the future
            </h2>
            <p className="text-xl text-muted-foreground">
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
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="h-full bg-card/80 backdrop-blur-sm border-2 border-border/50 hover:border-primary/30 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <motion.div
                          className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-blue-600/20"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <user.icon className="h-6 w-6 text-primary" />
                        </motion.div>
                        <CardTitle className="text-xl">{user.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base mb-6">
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
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {feature}
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

      {/* Benefits Section */}
      <section className="py-32">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-32 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                  Why choose CrewHub?
                </h2>
                <p className="text-xl text-muted-foreground mb-10">
                  Experience the next generation of AI collaboration with
                  features designed for modern teams.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      icon: Rocket,
                      title: "10x Faster Development",
                      description:
                        "Reduce project timelines with intelligent agent orchestration and automated workflows.",
                    },
                    {
                      icon: Shield,
                      title: "Enterprise Security",
                      description:
                        "Bank-level security with role-based access, audit logs, and compliance features.",
                    },
                    {
                      icon: Share2,
                      title: "Open Ecosystem",
                      description:
                        "Integrate with any AI model or tool. Build custom agents and share with the community.",
                    },
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-blue-600/20 flex-shrink-0"
                        whileHover={{ scale: 1.1 }}
                      >
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative p-8 bg-gradient-to-br from-primary/10 via-blue-600/10 to-purple-600/10 rounded-3xl border border-primary/20 backdrop-blur-sm">
                  <div className="space-y-8">
                    {[
                      {
                        title: "Workflow Efficiency",
                        value: "+245%",
                        color: "bg-primary",
                      },
                      {
                        title: "Cost Reduction",
                        value: "-60%",
                        color: "bg-green-500",
                      },
                      {
                        title: "Team Productivity",
                        value: "+180%",
                        color: "bg-blue-500",
                      },
                    ].map((metric, index) => (
                      <motion.div
                        key={metric.title}
                        className="flex items-center justify-between"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-sm text-muted-foreground">
                          {metric.title}
                        </span>
                        <span className="font-semibold text-lg">
                          {metric.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="py-32 bg-muted/30">
        <div className="container">
          <motion.div
            className="mx-auto max-w-2xl text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
          </motion.div>

          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  name: "Starter",
                  price: "Free",
                  description: "Perfect for individuals and small teams",
                  features: [
                    "Up to 3 AI agents",
                    "Basic workflow builder",
                    "Community support",
                  ],
                  cta: "Get Started",
                  popular: false,
                },
                {
                  name: "Professional",
                  price: "$49/month",
                  description: "For growing teams and businesses",
                  features: [
                    "Unlimited AI agents",
                    "Advanced workflows",
                    "Priority support",
                    "Team collaboration",
                  ],
                  cta: "Start Free Trial",
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  description: "For large organizations",
                  features: [
                    "Everything in Professional",
                    "SSO & security",
                    "Dedicated support",
                    "Custom integrations",
                  ],
                  cta: "Contact Sales",
                  popular: false,
                },
              ].map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: plan.popular ? 1.02 : 1.05 }}
                  className={plan.popular ? "scale-105" : ""}
                >
                  <Card
                    className={`h-full ${plan.popular ? "border-primary shadow-2xl shadow-primary/20" : "border-border/50"} bg-card/80 backdrop-blur-sm`}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <CardTitle className="text-2xl">{plan.name}</CardTitle>
                        {plan.popular && (
                          <Badge className="bg-gradient-to-r from-primary to-blue-600">
                            Most Popular
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-base">
                        {plan.description}
                      </CardDescription>
                      <div className="text-4xl font-bold mt-6">
                        {plan.price}
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          className={`w-full ${plan.popular ? "bg-gradient-to-r from-primary to-blue-600" : ""}`}
                          variant={plan.popular ? "default" : "outline"}
                          onClick={() => {
                            if (plan.name === "Enterprise") {
                              window.location.href = "/contact";
                            } else {
                              window.location.href = "/signup";
                            }
                          }}
                        >
                          {plan.cta}
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Ready to transform your AI workflow?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Join thousands of teams already using CrewHub to build the future
              with AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-xl shadow-primary/25"
                  onClick={() => (window.location.href = "/signup")}
                >
                  Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-lg border-2"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Schedule Demo
                </Button>
              </motion.div>
            </div>
            <p className="text-sm text-muted-foreground">
              14-day free trial • No credit card required • Setup in minutes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 backdrop-blur-sm">
        <div className="container py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <img
                  src="/crewhub-logo.png"
                  alt="CrewHub Logo"
                  className="h-10 w-10 rounded-full"
                />
                <span className="font-bold text-xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  CrewHub
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The comprehensive platform for AI agent and MCP management.
                Build, collaborate, and scale with AI.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-6">Product</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/features"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="hover:text-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/docs"
                    className="hover:text-foreground transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="/api"
                    className="hover:text-foreground transition-colors"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6">Company</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/about"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6">Support</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/help"
                    className="hover:text-foreground transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="/community"
                    className="hover:text-foreground transition-colors"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="/status"
                    className="hover:text-foreground transition-colors"
                  >
                    Status
                  </a>
                </li>
                <li>
                  <a
                    href="/security"
                    className="hover:text-foreground transition-colors"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 CrewHub. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a
                href="/privacy"
                className="hover:text-foreground transition-colors"
              >
                Privacy
              </a>
              <a
                href="/terms"
                className="hover:text-foreground transition-colors"
              >
                Terms
              </a>
              <a
                href="/cookies"
                className="hover:text-foreground transition-colors"
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
