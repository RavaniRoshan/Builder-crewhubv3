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
  MapPin,
  Clock,
  Briefcase,
  Users,
  Heart,
  Coffee,
  Zap,
  Globe,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      description:
        "Lead the development of our AI agent orchestration platform. Work with cutting-edge AI models and build scalable systems.",
      tags: ["Python", "Machine Learning", "Docker", "Kubernetes"],
    },
    {
      title: "Product Manager - AI Workflows",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description:
        "Drive product strategy for AI workflow features. Work closely with customers to understand needs and define roadmap.",
      tags: ["Product Strategy", "AI/ML", "User Research", "Agile"],
    },
    {
      title: "Frontend Engineer",
      department: "Engineering",
      location: "New York, NY",
      type: "Full-time",
      experience: "3+ years",
      description:
        "Build beautiful, responsive user interfaces for our AI platform. Work with React, TypeScript, and modern web technologies.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "4+ years",
      description:
        "Scale our infrastructure to handle growing AI workloads. Implement CI/CD pipelines and monitoring systems.",
      tags: ["AWS", "Terraform", "Docker", "Monitoring"],
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      description:
        "Help customers succeed with CrewHub. Drive adoption, provide training, and gather feedback for product improvements.",
      tags: ["Customer Success", "SaaS", "Training", "Analytics"],
    },
    {
      title: "AI Research Scientist",
      department: "Research",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "PhD or 5+ years",
      description:
        "Research new approaches to AI agent coordination and workflow optimization. Publish papers and contribute to open source.",
      tags: ["Research", "PhD", "Python", "Publications"],
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive health, dental, and vision insurance. Mental health support and wellness programs.",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description:
        "Flexible hours, unlimited PTO, and remote work options. We trust you to do your best work.",
    },
    {
      icon: Zap,
      title: "Growth & Learning",
      description:
        "Learning budget, conference attendance, and opportunities to work with cutting-edge AI technology.",
    },
    {
      icon: Users,
      title: "Great Team",
      description:
        "Work with brilliant, passionate people who are building the future of AI collaboration.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Help thousands of teams worldwide leverage AI to solve complex problems and build amazing products.",
    },
    {
      icon: Briefcase,
      title: "Equity & Compensation",
      description:
        "Competitive salary, equity in a fast-growing company, and performance bonuses.",
    },
  ];

  const values = [
    "Build with AI safety and ethics in mind",
    "Move fast but don't break things",
    "Customer success is our success",
    "Embrace remote-first culture",
    "Learn and grow together",
    "Have fun while changing the world",
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Join Our Mission
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Help us build the future of AI collaboration. Join a team of
              passionate engineers, designers, and researchers shaping how the
              world works with AI.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="h-12 px-8">
                View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8">
                Learn About Our Culture
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              What drives us every day at CrewHub
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 bg-background rounded-lg"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Work With Us
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We believe great work happens when people are happy, healthy, and
              excited about what they're building.
            </p>
          </div>

          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center">
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <benefit.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <CardTitle>{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{benefit.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Open Positions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Find your next opportunity to make an impact
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">
                            {position.title}
                          </CardTitle>
                          <CardDescription className="mt-2">
                            {position.description}
                          </CardDescription>
                        </div>
                        <Button>Apply Now</Button>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-4">
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {position.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {position.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {position.experience}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {position.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
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
              Don't see the right role?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're always looking for talented people. Send us your resume and
              tell us how you'd like to contribute.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="h-12 px-8"
                onClick={() => (window.location.href = "/contact")}
              >
                Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
