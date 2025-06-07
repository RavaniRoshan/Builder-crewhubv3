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
import { useEffect, useState } from "react";
import { AgentService } from "@/lib/api/agents";
import { type Agent } from "@/lib/db/schema";
import { toast } from "sonner";

const AgentCatalog = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedProvider, setSelectedProvider] = useState("all");

  useEffect(() => {
    loadAgents();
  }, []);

  const loadAgents = async () => {
    try {
      setIsLoading(true);
      // First seed the agents if they don't exist
      await AgentService.seedAgents();
      // Then fetch all agents
      const allAgents = await AgentService.getAllAgents();
      setAgents(allAgents);
    } catch (error) {
      toast.error("Failed to load agents");
      console.error("Error loading agents:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: any } = {
      MessageSquare,
      Brain,
      Code,
      BarChart3,
      FileText,
      Image,
    };
    return icons[iconName] || Bot;
  };

  const filteredAgents = agents.filter((agent) => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || agent.type.toLowerCase() === selectedType.toLowerCase();
    const matchesProvider = selectedProvider === "all" || agent.provider.toLowerCase() === selectedProvider.toLowerCase();
    
    return matchesSearch && matchesType && matchesProvider;
  });

  const filters = [
    { label: "All Types", value: "all", active: selectedType === "all" },
    { label: "LLM", value: "llm", active: selectedType === "llm" },
    { label: "Planner", value: "planner", active: selectedType === "planner" },
    { label: "Automation", value: "automation", active: selectedType === "automation" },
  ];

  const providers = [
    { label: "All Providers", value: "all", active: selectedProvider === "all" },
    { label: "OpenAI", value: "openai", active: selectedProvider === "openai" },
    { label: "Anthropic", value: "anthropic", active: selectedProvider === "anthropic" },
    { label: "CrewHub", value: "crewhub", active: selectedProvider === "crewhub" },
    { label: "GitHub", value: "github", active: selectedProvider === "github" },
  ];

  return (
    <div className="min-h-screen bg-background">
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
                    onClick={() => setSelectedType(filter.value)}
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
                    onClick={() => setSelectedProvider(provider.value)}
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
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAgents.map((agent, index) => {
              const IconComponent = getIconComponent(agent.icon);
              return (
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
                            <IconComponent className="h-6 w-6 text-primary" />
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
                            {(agent.capabilities as string[]).map((capability) => (
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
              );
            })}
          </div>
        )}

        {!isLoading && filteredAgents.length === 0 && (
          <div className="text-center py-12">
            <Bot className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No agents found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentCatalog;