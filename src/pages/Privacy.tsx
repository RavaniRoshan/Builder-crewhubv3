import { motion } from "framer-motion";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Users, FileText, Mail } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: FileText,
      content: [
        "Account information (name, email, company)",
        "Usage data and analytics",
        "AI workflow configurations and metadata",
        "Device and browser information",
        "Communication preferences",
      ],
    },
    {
      title: "How We Use Your Information",
      icon: Eye,
      content: [
        "Provide and improve our services",
        "Process AI workflows and agent interactions",
        "Send important updates and notifications",
        "Analyze usage patterns to enhance features",
        "Provide customer support",
      ],
    },
    {
      title: "Data Security",
      icon: Lock,
      content: [
        "End-to-end encryption for sensitive data",
        "SOC 2 Type II compliance",
        "Regular security audits and penetration testing",
        "Industry-standard access controls",
        "Secure data centers with 24/7 monitoring",
      ],
    },
    {
      title: "Data Sharing",
      icon: Users,
      content: [
        "We never sell your personal information",
        "Limited sharing with trusted service providers",
        "Data shared only as required by law",
        "Team collaboration features (with your permission)",
        "Anonymous, aggregated data for research",
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
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              How we collect, use, and protect your information
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Last updated: December 15, 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Our Commitment to Privacy</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p>
                    At CrewHub, we understand that privacy is fundamental to
                    trust. This Privacy Policy explains how we collect, use,
                    disclose, and safeguard your information when you use our AI
                    agent orchestration platform. We are committed to protecting
                    your privacy and being transparent about our data practices.
                  </p>
                  <p>
                    By using CrewHub, you agree to the collection and use of
                    information in accordance with this policy. If you do not
                    agree with our policies and practices, please do not use our
                    services.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Privacy Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <section.icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">
                          {section.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {section.content.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Detailed Sections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="space-y-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Your Rights and Choices</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p>
                    You have several rights regarding your personal information:
                  </p>
                  <ul>
                    <li>
                      <strong>Access:</strong> Request a copy of the personal
                      information we hold about you
                    </li>
                    <li>
                      <strong>Rectification:</strong> Request correction of
                      inaccurate or incomplete data
                    </li>
                    <li>
                      <strong>Deletion:</strong> Request deletion of your
                      personal information
                    </li>
                    <li>
                      <strong>Portability:</strong> Request transfer of your
                      data to another service
                    </li>
                    <li>
                      <strong>Opt-out:</strong> Unsubscribe from marketing
                      communications at any time
                    </li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us at
                    privacy@crewhub.ai
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Retention</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p>
                    We retain your information for as long as necessary to
                    provide our services and fulfill the purposes outlined in
                    this Privacy Policy. When you delete your account, we will
                    delete your personal information within 30 days, except
                    where we are required to retain it for legal compliance.
                  </p>
                  <p>
                    Workflow data and AI configurations are retained according
                    to your subscription plan and data retention settings.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>International Data Transfers</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p>
                    CrewHub operates globally, and your information may be
                    transferred to and processed in countries other than your
                    own. We ensure appropriate safeguards are in place for
                    international transfers, including:
                  </p>
                  <ul>
                    <li>
                      Standard Contractual Clauses approved by the European
                      Commission
                    </li>
                    <li>Adequacy decisions for certain countries</li>
                    <li>Certification under recognized privacy frameworks</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Children's Privacy</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p>
                    CrewHub is not intended for use by children under 13 years
                    of age. We do not knowingly collect personal information
                    from children under 13. If you are a parent or guardian and
                    believe your child has provided us with personal
                    information, please contact us immediately.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Changes to This Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p>
                    We may update this Privacy Policy from time to time. We will
                    notify you of any material changes by posting the new
                    Privacy Policy on this page and updating the "Last updated"
                    date. We encourage you to review this Privacy Policy
                    periodically.
                  </p>
                  <p>
                    For significant changes, we will provide additional notice,
                    such as email notification or prominent notices within our
                    service.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="mt-12"
            >
              <Card className="bg-muted/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Mail className="h-6 w-6 text-primary" />
                    <CardTitle>Questions About Privacy?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about this Privacy Policy or our
                    data practices, please contact us:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Email:</strong> privacy@crewhub.ai
                    </p>
                    <p>
                      <strong>Address:</strong> 123 AI Street, San Francisco, CA
                      94105
                    </p>
                    <p>
                      <strong>Data Protection Officer:</strong> dpo@crewhub.ai
                    </p>
                  </div>
                  <div className="mt-4">
                    <Button onClick={() => (window.location.href = "/contact")}>
                      Contact Us
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
