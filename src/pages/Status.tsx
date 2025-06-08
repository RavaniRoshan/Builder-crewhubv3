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
  CheckCircle,
  AlertTriangle,
  Clock,
  Zap,
  Globe,
  Shield,
  BarChart3,
} from "lucide-react";

const Status = () => {
  const services = [
    {
      name: "API Services",
      status: "Operational",
      uptime: "99.99%",
      responseTime: "45ms",
      icon: Zap,
    },
    {
      name: "Web Application",
      status: "Operational",
      uptime: "99.98%",
      responseTime: "125ms",
      icon: Globe,
    },
    {
      name: "AI Agent Processing",
      status: "Operational",
      uptime: "99.95%",
      responseTime: "200ms",
      icon: BarChart3,
    },
    {
      name: "Authentication",
      status: "Operational",
      uptime: "99.99%",
      responseTime: "35ms",
      icon: Shield,
    },
  ];

  const incidents = [
    {
      title: "Resolved: Brief API Latency Increase",
      description:
        "We experienced a 15-minute period of increased API response times due to a database optimization.",
      status: "Resolved",
      date: "Dec 10, 2024 - 14:30 UTC",
      duration: "15 minutes",
    },
    {
      title: "Resolved: Scheduled Maintenance",
      description:
        "Planned maintenance for infrastructure upgrades. All services remained available.",
      status: "Completed",
      date: "Dec 5, 2024 - 02:00 UTC",
      duration: "2 hours",
    },
    {
      title: "Resolved: Authentication Service Downtime",
      description:
        "Brief interruption to login services due to a third-party authentication provider issue.",
      status: "Resolved",
      date: "Nov 28, 2024 - 09:15 UTC",
      duration: "8 minutes",
    },
  ];

  const metrics = [
    { title: "Overall Uptime", value: "99.97%", period: "Last 30 days" },
    { title: "Response Time", value: "98ms", period: "Average" },
    { title: "Active Incidents", value: "0", period: "Current" },
    { title: "Resolved This Month", value: "3", period: "December 2024" },
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
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              System Status
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Real-time status and performance metrics for CrewHub services
            </p>
            <div className="mt-6">
              <Badge className="bg-green-500 text-white">
                All Systems Operational
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">
                          {metric.value}
                        </div>
                        <div className="text-sm font-medium">
                          {metric.title}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.period}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Status */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Service Health
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Current status of all CrewHub services
              </p>
            </motion.div>

            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <service.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{service.name}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>Uptime: {service.uptime}</span>
                              <span>Response: {service.responseTime}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <Badge
                            variant="secondary"
                            className="bg-green-500/10 text-green-700 dark:text-green-400"
                          >
                            {service.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Incident History */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Recent Incidents
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Latest updates and resolved issues
              </p>
            </motion.div>

            <div className="space-y-6">
              {incidents.map((incident, index) => (
                <motion.div
                  key={incident.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">
                            {incident.title}
                          </CardTitle>
                          <CardDescription className="mt-2">
                            {incident.description}
                          </CardDescription>
                        </div>
                        <Badge
                          variant={
                            incident.status === "Resolved"
                              ? "secondary"
                              : "default"
                          }
                        >
                          {incident.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {incident.date}
                        </div>
                        <span>Duration: {incident.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle>Stay Informed</CardTitle>
                <CardDescription>
                  Get notified about service updates and maintenance windows
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Subscribe to our status page to receive real-time
                  notifications about service incidents and planned maintenance.
                </p>
                <div className="flex gap-2">
                  <Button>Subscribe to Updates</Button>
                  <Button variant="outline">RSS Feed</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Status;
