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
import { ThemeSwitch } from "@/components/theme-switch";
import {
  Bot,
  Search,
  Filter,
  Star,
  Plus,
  Zap,
  Brain,
  MessageSquare,
  Code,
  FileText,
  Image,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";

const AgentCatalog = () => {
  const agents = [
    {
      id: 1,
      name: "ChatGPT-4",
      provider: "OpenAI",
      type: "LLM",
      description:
        "Advanced language model for complex reasoning and creative tasks",
      capabilities: ["Text Generation", "Code", "Analysis"],
      icon: MessageSquare,
      rating: 4.8,
      isNew: false,
    },
    {
      id: 2,
      name: "Claude 3.5 Sonnet",
      provider: "Anthropic",
      type: "LLM",
      description:
        "Highly capable AI assistant with strong reasoning and safety features",
      capabilities: ["Text Generation", "Analysis", "Research"],
      icon: Brain,
      rating: 4.9,
      isNew: true,
    },
    {
      id: 3,
      name: "Code Assistant",
      provider: "GitHub",
      type: "Automation",
      description:
        "Specialized agent for code generation, review, and debugging",
      capabilities: ["Code Generation", "Debugging", "Review"],
      icon: Code,
      rating: 4.7,
      isNew: false,
    },
    {
      id: 4,
      name: "Data Analyzer",
      provider: "CrewHub",
      type: "Planner",
      description:
        "Extract insights and patterns from structured and unstructured data",
      capabilities: ["Data Analysis", "Visualization", "Reporting"],
      icon: BarChart3,
      rating: 4.6,
      isNew: false,
    },
    {
      id: 5,
      name: "Content Creator",
      provider: "CrewHub",
      type: "LLM",
      description:
        "Generate engaging content across multiple formats and platforms",
      capabilities: ["Content Writing", "SEO", "Social Media"],
      icon: FileText,
      rating: 4.5,
      isNew: false,
    },
    {
      id: 6,
      name: "DALL-E 3",
      provider: "OpenAI",
      type: "LLM",
      description: "Advanced image generation from text descriptions",
      capabilities: ["Image Generation", "Creative Design"],
      icon: Image,
      rating: 4.4,
      isNew: true,
    },
  ];

  const filters = [
    { label: "All Types", value: "all", active: true },
    { label: "LLM", value: "llm", active: false },
    { label: "Planner", value: "planner", active: false },
    { label: "Automation", value: "automation", active: false },
  ];

  const providers = [
    { label: "All Providers", value: "all", active: true },
    { label: "OpenAI", value: "openai", active: false },
    { label: "Anthropic", value: "anthropic", active: false },
    { label: "CrewHub", value: "crewhub", active: false },
    { label: "GitHub", value: "github", active: false },
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
                href="/dashboard"
                className="transition-colors hover:text-foreground/80"
              >
                Dashboard
              </a>
              <a
                href="/agents"
                className="transition-colors hover:text-foreground/80 text-foreground"
              >
                Agents
              </a>
              <a
                href="/workflows"
                className="transition-colors hover:text-foreground/80"
              >
                Workflows
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
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="border-b bg-muted/30 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">AI Agent Catalog</h1>
              <p className="text-muted-foreground">
                Discover and add AI agents to your projects
              </p>
            </div>
            <Button variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Request Agent
            </Button>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                className="pl-10"
                placeholder="Search agents by name or capability..."
              />
            </div>

            <div className="flex gap-2">
              <div className="flex items-center gap-1 bg-background rounded-md p-1 border">
                {filters.map((filter) => (
                  <Button
                    key={filter.value}
                    variant={filter.active ? "default" : "ghost"}
                    size="sm"
                    className="h-8"
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>

              <div className="flex items-center gap-1 bg-background rounded-md p-1 border">
                {providers.map((provider) => (
                  <Button
                    key={provider.value}
                    variant={provider.active ? "default" : "ghost"}
                    size="sm"
                    className="h-8"
                  >
                    {provider.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Agent Grid */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <agent.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-lg">
                            {agent.name}
                          </CardTitle>
                          {agent.isNew && (
                            <Badge variant="secondary" className="text-xs">
                              New
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {agent.provider}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {agent.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">
                        {agent.rating}
                      </span>
                    </div>
                  </div>

                  <CardDescription className="mt-2">
                    {agent.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Capabilities</p>
                      <div className="flex flex-wrap gap-1">
                        {agent.capabilities.map((capability) => (
                          <Badge
                            key={capability}
                            variant="secondary"
                            className="text-xs"
                          >
                            {capability}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1" size="sm">
                        <Plus className="mr-2 h-4 w-4" />
                        Add to Project
                      </Button>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentCatalog;
