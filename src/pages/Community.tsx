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
  Users,
  MessageSquare,
  Github,
  ExternalLink,
  Heart,
  Code,
  HelpCircle,
  Lightbulb,
  Calendar,
  Star,
  ArrowRight,
} from "lucide-react";

const Community = () => {
  const platforms = [
    {
      name: "Discord Server",
      description:
        "Join our active Discord community for real-time discussions and support",
      members: "5,200+",
      icon: MessageSquare,
      color: "bg-indigo-500",
      link: "#",
    },
    {
      name: "GitHub",
      description: "Contribute to open source projects and report issues",
      members: "1,800+",
      icon: Github,
      color: "bg-gray-800",
      link: "#",
    },
    {
      name: "Community Forum",
      description: "Browse discussions, ask questions, and share knowledge",
      members: "8,100+",
      icon: Users,
      color: "bg-blue-500",
      link: "#",
    },
  ];

  const categories = [
    {
      title: "💬 General Discussion",
      description:
        "Chat about AI, share ideas, and connect with other builders",
      posts: 1240,
      replies: 8932,
    },
    {
      title: "🆘 Help & Support",
      description: "Get help with CrewHub features and troubleshooting",
      posts: 892,
      replies: 4560,
    },
    {
      title: "💡 Feature Requests",
      description: "Suggest new features and vote on community priorities",
      posts: 340,
      replies: 2180,
    },
    {
      title: "🚀 Show & Tell",
      description: "Share your amazing AI workflows and get feedback",
      posts: 567,
      replies: 3420,
    },
    {
      title: "🔧 Development",
      description:
        "Technical discussions about APIs, integrations, and development",
      posts: 423,
      replies: 2890,
    },
    {
      title: "📚 Tutorials & Guides",
      description: "Community-created tutorials and best practices",
      posts: 234,
      replies: 1560,
    },
  ];

  const events = [
    {
      title: "AI Workflow Showcase",
      date: "Dec 20, 2024",
      time: "2:00 PM PST",
      type: "Virtual Event",
      description: "Community members demo their latest AI automation projects",
    },
    {
      title: "Office Hours with the Team",
      date: "Dec 18, 2024",
      time: "11:00 AM PST",
      type: "Q&A Session",
      description: "Ask questions directly to the CrewHub development team",
    },
    {
      title: "Advanced Workflow Workshop",
      date: "Dec 15, 2024",
      time: "1:00 PM PST",
      type: "Workshop",
      description:
        "Learn advanced techniques for building complex AI workflows",
    },
  ];

  const contributors = [
    {
      name: "Alex Chen",
      avatar: "AC",
      contributions: 142,
      type: "Community Moderator",
    },
    {
      name: "Maria Garcia",
      avatar: "MG",
      contributions: 98,
      type: "Top Contributor",
    },
    {
      name: "Sam Wilson",
      avatar: "SW",
      contributions: 87,
      type: "Tutorial Creator",
    },
    {
      name: "Jordan Kim",
      avatar: "JK",
      contributions: 76,
      type: "Beta Tester",
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
      <section className="py-24 lg:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Heart className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Join Our Community
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Connect with thousands of developers, AI enthusiasts, and builders
              who are shaping the future of AI collaboration.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="h-12 px-8">
                Join Discord <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8">
                Browse Forum
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${platform.color}`}
                        >
                          <platform.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">
                            {platform.name}
                          </CardTitle>
                          <Badge variant="secondary">
                            {platform.members} members
                          </Badge>
                        </div>
                      </div>
                      <CardDescription>{platform.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">
                        Join Now <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Forum Categories */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Community Forum
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Explore discussions across different topics
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {category.title}
                      </CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{category.posts} posts</span>
                        <span>{category.replies} replies</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Upcoming Events
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Join us for workshops, demos, and community gatherings
              </p>
            </motion.div>

            <div className="space-y-6">
              {events.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                            <Calendar className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">
                              {event.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {event.description}
                            </p>
                            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                              <span>{event.date}</span>
                              <span>{event.time}</span>
                              <Badge variant="outline">{event.type}</Badge>
                            </div>
                          </div>
                        </div>
                        <Button>Register</Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Contributors */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Community Heroes
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Recognizing our most active community members
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contributors.map((contributor, index) => (
                <motion.div
                  key={contributor.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold mx-auto mb-4">
                        {contributor.avatar}
                      </div>
                      <h3 className="font-semibold">{contributor.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {contributor.type}
                      </p>
                      <div className="flex items-center justify-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">
                          {contributor.contributions} contributions
                        </span>
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
      <section className="py-24 bg-muted/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Get Involved?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of developers building the future of AI together
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Button size="lg" className="h-12 px-8">
                Join Community <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Community;
