import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  Search,
  HelpCircle,
  MessageSquare,
  Book,
  Video,
  ArrowRight,
  Zap,
  Users,
  Settings,
} from "lucide-react";

const Help = () => {
  const categories = [
    {
      title: "Getting Started",
      icon: Zap,
      description: "New to CrewHub? Start here",
      articles: [
        "How to create your first workflow",
        "Setting up AI agents",
        "Understanding the dashboard",
        "Basic troubleshooting",
      ],
    },
    {
      title: "Account & Billing",
      icon: Settings,
      description: "Manage your account and subscription",
      articles: [
        "Updating billing information",
        "Changing your plan",
        "Managing team members",
        "Canceling subscription",
      ],
    },
    {
      title: "Workflows",
      icon: Book,
      description: "Build and manage AI workflows",
      articles: [
        "Workflow builder guide",
        "Adding conditional logic",
        "Connecting multiple agents",
        "Workflow troubleshooting",
      ],
    },
    {
      title: "Collaboration",
      icon: Users,
      description: "Work with your team",
      articles: [
        "Inviting team members",
        "Setting permissions",
        "Sharing workflows",
        "Version control",
      ],
    },
  ];

  const faqs = [
    {
      question: "How do I get started with CrewHub?",
      answer:
        "Sign up for a free account, then follow our quick start guide to create your first AI workflow. It takes less than 5 minutes!",
    },
    {
      question: "What AI models are supported?",
      answer:
        "CrewHub supports all major AI models including GPT-4, Claude, Gemini, and many more. You can also integrate custom models.",
    },
    {
      question: "How much does CrewHub cost?",
      answer:
        "We offer a free starter plan with basic features. Our Professional plan starts at $49/month. Enterprise pricing is available for larger teams.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use enterprise-grade security with encryption at rest and in transit. We're SOC 2 compliant and follow industry best practices.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can reach our support team through the contact form, email us at support@crewhub.ai, or use the live chat feature in your dashboard.",
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
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              How can we help you?
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions, browse guides, or get in touch
              with our support team.
            </p>

            {/* Search Bar */}
            <div className="mt-10 max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  className="pl-12 h-14 text-lg"
                  placeholder="Search for help..."
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Contact Support</CardTitle>
                    <CardDescription>
                      Get help from our support team
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      className="w-full"
                      onClick={() => (window.location.href = "/contact")}
                    >
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <Book className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Documentation</CardTitle>
                    <CardDescription>
                      Browse our comprehensive guides
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => (window.location.href = "/docs")}
                    >
                      View Docs
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <Video className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Video Tutorials</CardTitle>
                    <CardDescription>Watch step-by-step guides</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Watch Videos
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Browse Help Topics
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Find answers organized by category
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                          <category.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle>{category.title}</CardTitle>
                          <CardDescription>
                            {category.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.articles.map((article, i) => (
                          <li key={i}>
                            <a
                              href={`/help/${category.title.toLowerCase().replace(/\s+/g, "-")}/${article.toLowerCase().replace(/\s+/g, "-")}`}
                              className="text-sm text-muted-foreground hover:text-primary flex items-center justify-between group"
                            >
                              {article}
                              <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
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

      {/* FAQ Section */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Quick answers to common questions
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <HelpCircle className="h-5 w-5 text-primary" />
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Still need help?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our support team is ready to assist you with any questions.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="h-12 px-8"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Support <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8"
                onClick={() => (window.location.href = "/community")}
              >
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;
