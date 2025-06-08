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
import { CheckCircle, ArrowRight, Zap, Building, Users } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small teams",
      price: "Free",
      period: "",
      icon: Users,
      features: [
        "Up to 3 AI agents",
        "Basic workflow builder",
        "5 workflows per month",
        "Community support",
        "Basic analytics",
        "1 team member",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      description: "For growing teams and businesses",
      price: "$49",
      period: "/month",
      icon: Zap,
      features: [
        "Unlimited AI agents",
        "Advanced workflow builder",
        "Unlimited workflows",
        "Priority support",
        "Advanced analytics",
        "Up to 10 team members",
        "Custom integrations",
        "Version control",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "Custom",
      period: "",
      icon: Building,
      features: [
        "Everything in Professional",
        "Unlimited team members",
        "SSO & advanced security",
        "Custom integrations",
        "Dedicated support manager",
        "SLA guarantees",
        "On-premise deployment",
        "Custom training",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "How does the free trial work?",
      answer:
        "You get full access to the Professional plan for 14 days. No credit card required. After the trial, you can choose to upgrade or continue with the free Starter plan.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.",
    },
    {
      question: "What AI models are included?",
      answer:
        "All plans include access to major AI models like GPT-4, Claude, Gemini, and more. You only pay for the AI usage costs directly to the providers.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "No setup fees for any plan. You only pay the monthly subscription fee, plus any AI usage costs for the models you use.",
    },
    {
      question: "Do you offer discounts for nonprofits?",
      answer:
        "Yes, we offer 50% discounts for qualified nonprofits and educational institutions. Contact our sales team for more information.",
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
                className="transition-colors hover:text-foreground/80 text-foreground"
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
              💰 Simple Pricing
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Choose the perfect plan for your team
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Start free and scale as you grow. No hidden fees, no surprises.
              Pay only for what you use.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={plan.popular ? "scale-105" : ""}
                >
                  <Card
                    className={`h-full ${plan.popular ? "border-primary shadow-lg" : ""}`}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <plan.icon className="h-6 w-6 text-primary" />
                          <CardTitle className="text-xl">{plan.name}</CardTitle>
                        </div>
                        {plan.popular && <Badge>Most Popular</Badge>}
                      </div>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="text-3xl font-bold">
                        {plan.price}
                        <span className="text-sm font-normal text-muted-foreground">
                          {plan.period}
                        </span>
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

                      <Button
                        className={`w-full ${plan.popular ? "" : "variant-outline"}`}
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
                        {plan.cta !== "Contact Sales" && (
                          <ArrowRight className="ml-2 h-4 w-4" />
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center space-x-2">
              <ThemeSwitch />
              <Button variant="ghost" size="sm" onClick={() => window.location.href = '/signin'}>
                Sign In
              </Button>
              <Button size="sm" onClick={() => window.location.href = '/signup'}>
                Get Started
              </Button>
            </div>
              <p className="mt-4 text-lg text-muted-foreground">
                See what's included in each plan
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-lg">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-semibold">Features</th>
                    <th className="text-center p-4 font-semibold">Starter</th>
                    <th className="text-center p-4 font-semibold">
                      Professional
                    </th>
                    <th className="text-center p-4 font-semibold">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "AI Agents",
                      starter: "3",
                      pro: "Unlimited",
                      enterprise: "Unlimited",
                    },
                    {
                      feature: "Workflows",
                      starter: "5/month",
                      pro: "Unlimited",
                      enterprise: "Unlimited",
                    },
                    {
                      feature: "Team Members",
                      starter: "1",
                      pro: "10",
                      enterprise: "Unlimited",
                    },
                    {
                      feature: "Analytics",
                      starter: "Basic",
                      pro: "Advanced",
                      enterprise: "Advanced",
                    },
                    {
                      feature: "Support",
                      starter: "Community",
                      pro: "Priority",
                      enterprise: "Dedicated",
                    },
                    {
                      feature: "Integrations",
                      starter: "Standard",
                      pro: "Custom",
                      enterprise: "Custom",
                    },
                    {
                      feature: "SSO",
                      starter: "❌",
                      pro: "❌",
                      enterprise: "✅",
                    },
                    {
                      feature: "On-premise",
                      starter: "❌",
                      pro: "❌",
                      enterprise: "✅",
                    },
                  ].map((row, i) => (
                    <tr key={i} className="border-b hover:bg-muted/50">
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="p-4 text-center">{row.starter}</td>
                      <td className="p-4 text-center">{row.pro}</td>
                      <td className="p-4 text-center">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to know about CrewHub pricing
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
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
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

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of teams already using CrewHub to build with AI.
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

export default Pricing;