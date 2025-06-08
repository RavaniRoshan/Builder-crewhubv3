import { motion } from "framer-motion";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Scale, Shield, AlertTriangle, Mail } from "lucide-react";

const Terms = () => {
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
                <Scale className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Legal terms and conditions for using CrewHub
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
                  <div className="flex items-center gap-3">
                    <FileText className="h-6 w-6 text-primary" />
                    <CardTitle>Agreement to Terms</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p>
                    These Terms of Service ("Terms") govern your use of
                    CrewHub's AI agent orchestration platform and services
                    ("Service") operated by CrewHub, Inc. ("us", "we", or
                    "our").
                  </p>
                  <p>
                    By accessing or using our Service, you agree to be bound by
                    these Terms. If you disagree with any part of these terms,
                    then you may not access the Service.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Terms Sections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle>1. Service Description</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p>
                    CrewHub provides a platform for orchestrating AI agents and
                    managing automated workflows. Our Service includes:
                  </p>
                  <ul>
                    <li>AI agent management and configuration tools</li>
                    <li>Workflow builder and automation features</li>
                    <li>Team collaboration capabilities</li>
                    <li>Analytics and monitoring dashboards</li>
                    <li>API access and integrations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Account Registration</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p>
                    To use our Service, you must create an account and provide
                    accurate, complete information. You are responsible for:
                  </p>
                  <ul>
                    <li>
                      Maintaining the confidentiality of your account
                      credentials
                    </li>
                    <li>All activities that occur under your account</li>
                    <li>Notifying us immediately of any unauthorized access</li>
                    <li>Ensuring your contact information remains current</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Acceptable Use</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p>You agree not to use the Service to:</p>
                  <ul>
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Generate harmful, malicious, or illegal content</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with or disrupt the Service</li>
                    <li>
                      Use the Service for competitive intelligence gathering
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. AI and Data Usage</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p>When using AI features, you acknowledge that:</p>
                  <ul>
                    <li>AI outputs may not always be accurate or complete</li>
                    <li>
                      You are responsible for reviewing and validating
                      AI-generated content
                    </li>
                    <li>
                      We may use aggregated, anonymized data to improve our AI
                      models
                    </li>
                    <li>
                      Third-party AI providers may have their own terms and
                      limitations
                    </li>
                    <li>
                      You retain ownership of your data and workflow
                      configurations
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. Payment Terms</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p>For paid plans:</p>
                  <ul>
                    <li>
                      Fees are charged in advance on a monthly or annual basis
                    </li>
                    <li>
                      All fees are non-refundable except as required by law
                    </li>
                    <li>We may change pricing with 30 days' notice</li>
                    <li>
                      You're responsible for all taxes associated with your use
                    </li>
                    <li>
                      Usage-based charges (API calls, AI tokens) are billed
                      monthly
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>6. Intellectual Property</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p>
                    CrewHub and its licensors own all rights to the Service,
                    including software, designs, and documentation. You retain
                    ownership of your data and content, but grant us a limited
                    license to provide the Service.
                  </p>
                  <p>
                    You may not reverse engineer, decompile, or attempt to
                    extract the source code of our Service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                    <CardTitle>
                      7. Disclaimer and Limitation of Liability
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p>
                    THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY
                    KIND. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM
                    ALL WARRANTIES AND SHALL NOT BE LIABLE FOR ANY INDIRECT,
                    INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES.
                  </p>
                  <p>
                    Our total liability shall not exceed the amount you paid us
                    in the 12 months preceding the claim.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>8. Termination</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p>
                    Either party may terminate these Terms at any time. Upon
                    termination:
                  </p>
                  <ul>
                    <li>Your access to the Service will cease immediately</li>
                    <li>
                      You may export your data for 30 days after termination
                    </li>
                    <li>We may delete your data after the retention period</li>
                    <li>Outstanding payment obligations survive termination</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>9. Governing Law</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p>
                    These Terms shall be governed by and construed in accordance
                    with the laws of the State of California, without regard to
                    conflict of law principles. Any disputes shall be resolved
                    in the courts of San Francisco County, California.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>10. Changes to Terms</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p>
                    We reserve the right to modify these Terms at any time. We
                    will notify users of material changes via email or through
                    the Service. Continued use after changes constitutes
                    acceptance of the new Terms.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12"
            >
              <Card className="bg-muted/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Mail className="h-6 w-6 text-primary" />
                    <CardTitle>Questions About These Terms?</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about these Terms of Service,
                    please contact us:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Email:</strong> legal@crewhub.ai
                    </p>
                    <p>
                      <strong>Address:</strong> 123 AI Street, San Francisco, CA
                      94105
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

export default Terms;
