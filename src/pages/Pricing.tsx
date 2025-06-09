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
  CheckCircle,
  ArrowRight,
  Zap,
  Building,
  Users,
  Network,
  Crown,
  Star,
} from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const pricingCardsRef = useRef<HTMLDivElement[]>([]);
  const faqsRef = useRef<HTMLDivElement[]>([]);

  const addToPricingRefs = (el: HTMLDivElement | null) => {
    if (el && !pricingCardsRef.current.includes(el)) {
      pricingCardsRef.current.push(el);
    }
  };

  const addToFaqRefs = (el: HTMLDivElement | null) => {
    if (el && !faqsRef.current.includes(el)) {
      faqsRef.current.push(el);
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

      // Pricing cards animation
      pricingCardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.set(card, {
          opacity: 0,
          y: 60,
          scale: 0.9,
        });

        gsap.to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // FAQ cards animation
      faqsRef.current.forEach((faq, index) => {
        if (!faq) return;

        gsap.set(faq, {
          opacity: 0,
          x: -30,
        });

        gsap.to(faq, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: faq,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

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
      gradient: "from-blue-500 to-cyan-500",
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
      gradient: "from-purple-500 to-pink-500",
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
      gradient: "from-green-500 to-emerald-500",
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
              { name: "Pricing", href: "/pricing", active: true },
              { name: "Docs", href: "/docs" },
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
              💰 Simple Pricing
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight text-gray-900 dark:text-gray-100">
              Choose the perfect{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                plan for your team
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
              Start free and scale as you grow. No hidden fees, no surprises.
              Pay only for what you use.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  ref={addToPricingRefs}
                  className={`group relative ${plan.popular ? "scale-110 z-10" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 text-lg px-6 py-2 rounded-full shadow-lg">
                        <Crown className="w-4 h-4 mr-2" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <Card
                    className={`h-full bg-white/90 dark:bg-gray-800/90 border backdrop-blur-xl rounded-3xl p-8 transition-all duration-500 shadow-lg hover:shadow-2xl group-hover:scale-105 ${
                      plan.popular
                        ? "border-blue-500/50 dark:border-blue-400/50 shadow-blue-500/20 dark:shadow-blue-400/20"
                        : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center shadow-lg`}
                          >
                            <plan.icon className="h-6 w-6 text-white" />
                          </div>
                          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                            {plan.name}
                          </CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                        {plan.description}
                      </CardDescription>
                      <div className="mb-6">
                        <div className="text-5xl font-black text-gray-900 dark:text-gray-100">
                          {plan.price}
                          <span className="text-xl font-normal text-gray-600 dark:text-gray-400">
                            {plan.period}
                          </span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <ul className="space-y-4">
                        {plan.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-lg"
                          >
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className={`w-full h-14 text-lg rounded-xl transition-all duration-300 ${
                          plan.popular
                            ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
                            : "border-2 border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100"
                        }`}
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
                          <ArrowRight className="ml-2 h-5 w-5" />
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-32 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-8 text-gray-900 dark:text-gray-100">
                Compare Plans
              </h2>
              <p className="text-2xl text-gray-700 dark:text-gray-300">
                See what's included in each plan
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl border border-gray-300 dark:border-gray-600">
                <thead>
                  <tr className="border-b border-gray-300 dark:border-gray-600">
                    <th className="text-left p-6 font-bold text-xl text-gray-900 dark:text-gray-100">
                      Features
                    </th>
                    <th className="text-center p-6 font-bold text-xl text-gray-900 dark:text-gray-100">
                      Starter
                    </th>
                    <th className="text-center p-6 font-bold text-xl text-gray-900 dark:text-gray-100 bg-blue-50/50 dark:bg-blue-900/20">
                      Professional
                    </th>
                    <th className="text-center p-6 font-bold text-xl text-gray-900 dark:text-gray-100">
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
                    <tr
                      key={i}
                      className="border-b border-gray-300 dark:border-gray-600 hover:bg-gray-50/50 dark:hover:bg-gray-700/20"
                    >
                      <td className="p-6 font-semibold text-lg text-gray-900 dark:text-gray-100">
                        {row.feature}
                      </td>
                      <td className="p-6 text-center text-lg text-gray-700 dark:text-gray-300">
                        {row.starter}
                      </td>
                      <td className="p-6 text-center text-lg text-gray-700 dark:text-gray-300 bg-blue-50/30 dark:bg-blue-900/10">
                        {row.pro}
                      </td>
                      <td className="p-6 text-center text-lg text-gray-700 dark:text-gray-300">
                        {row.enterprise}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-8 text-gray-900 dark:text-gray-100">
                Frequently Asked Questions
              </h2>
              <p className="text-2xl text-gray-700 dark:text-gray-300">
                Everything you need to know about CrewHub pricing
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} ref={addToFaqRefs}>
                  <Card className="bg-white/90 dark:bg-gray-800/90 border border-gray-300 dark:border-gray-600 backdrop-blur-xl rounded-2xl hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900 dark:text-gray-100">
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
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
              Ready to get started?
            </h2>
            <p className="text-2xl text-gray-700 dark:text-gray-300 mb-16">
              Join thousands of teams already using CrewHub to build with AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button
                size="lg"
                className="h-16 px-12 text-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => (window.location.href = "/signup")}
              >
                Start Free Trial <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-16 px-12 text-xl border-2 border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 rounded-2xl backdrop-blur-sm transition-all duration-300"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Sales
              </Button>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-8">
              14-day free trial • No credit card required • Setup in minutes
            </p>
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

export default Pricing;
