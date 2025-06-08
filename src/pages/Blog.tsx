import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  TrendingUp,
  Zap,
  Users,
} from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Future of AI Agent Orchestration: Trends for 2024",
    excerpt:
      "Discover how AI agent orchestration is revolutionizing business workflows and what to expect in the coming year.",
    author: "Sarah Chen",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Industry Insights",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
  };

  const blogPosts = [
    {
      title: "Getting Started with Multi-Agent Workflows",
      excerpt:
        "Learn how to design effective workflows using multiple AI agents working together.",
      author: "Marcus Rodriguez",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Tutorial",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop",
    },
    {
      title: "Best Practices for AI Agent Security",
      excerpt:
        "Essential security considerations when deploying AI agents in production environments.",
      author: "Emily Watson",
      date: "December 8, 2024",
      readTime: "6 min read",
      category: "Security",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=200&fit=crop",
    },
    {
      title: "Cost Optimization Strategies for AI Workflows",
      excerpt:
        "How to reduce AI API costs while maintaining performance in your workflows.",
      author: "David Kim",
      date: "December 5, 2024",
      readTime: "7 min read",
      category: "Optimization",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=200&fit=crop",
    },
    {
      title: "Building Custom AI Agents with CrewHub",
      excerpt:
        "Step-by-step guide to creating specialized AI agents for your specific use cases.",
      author: "Sarah Chen",
      date: "December 1, 2024",
      readTime: "10 min read",
      category: "Development",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop",
    },
    {
      title: "Team Collaboration Features Deep Dive",
      excerpt:
        "Explore advanced collaboration features for teams working with AI workflows.",
      author: "Marcus Rodriguez",
      date: "November 28, 2024",
      readTime: "4 min read",
      category: "Features",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop",
    },
    {
      title: "Case Study: Enterprise AI Transformation",
      excerpt:
        "How Fortune 500 company revolutionized their operations with CrewHub.",
      author: "Emily Watson",
      date: "November 25, 2024",
      readTime: "12 min read",
      category: "Case Study",
      image:
        "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=400&h=200&fit=crop",
    },
  ];

  const categories = [
    { name: "All Posts", count: 24, active: true },
    { name: "Tutorial", count: 8, active: false },
    { name: "Industry Insights", count: 6, active: false },
    { name: "Features", count: 5, active: false },
    { name: "Security", count: 3, active: false },
    { name: "Case Study", count: 2, active: false },
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
      <section className="py-16 bg-muted/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              CrewHub Blog
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Insights, tutorials, and updates from the world of AI agent
              orchestration
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  className="pl-10 h-12"
                  placeholder="Search articles..."
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Categories */}
              <div>
                <h3 className="font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      className={`flex items-center justify-between p-2 rounded-md cursor-pointer transition-colors ${
                        category.active
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      <span className="text-sm">{category.name}</span>
                      <span className="text-xs opacity-70">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Stay Updated</CardTitle>
                  <CardDescription>
                    Get the latest AI insights delivered to your inbox
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Your email address" />
                  <Button className="w-full">Subscribe</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>{featuredPost.category}</Badge>
                    <Badge variant="secondary">Featured</Badge>
                  </div>
                  <CardTitle className="text-2xl">
                    {featuredPost.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {featuredPost.excerpt}
                  </CardDescription>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Blog Posts Grid */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <Badge className="w-fit">{post.category}</Badge>
                        <CardTitle className="text-lg line-clamp-2">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {post.excerpt}
                        </CardDescription>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {post.date}
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
