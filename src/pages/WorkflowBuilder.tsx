import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Save,
  Play,
  Plus,
  Trash2,
  ArrowDown,
  Bot,
  Zap,
  Settings,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const WorkflowBuilder = () => {
  const [workflow, setWorkflow] = useState({
    name: "Content Generation Pipeline",
    description: "Automated workflow for creating and optimizing blog content",
    steps: [
      {
        id: 1,
        agent: "ChatGPT-4",
        task: "Generate blog post outline based on topic and keywords",
        expanded: true,
      },
      {
        id: 2,
        agent: "Claude 3.5",
        task: "Write detailed blog post content from the outline",
        expanded: false,
      },
      {
        id: 3,
        agent: "Content Optimizer",
        task: "Optimize content for SEO and readability",
        expanded: false,
      },
    ],
  });

  const availableAgents = [
    { value: "chatgpt-4", label: "ChatGPT-4", provider: "OpenAI" },
    { value: "claude-3.5", label: "Claude 3.5 Sonnet", provider: "Anthropic" },
    {
      value: "content-optimizer",
      label: "Content Optimizer",
      provider: "CrewHub",
    },
    { value: "data-analyzer", label: "Data Analyzer", provider: "CrewHub" },
    { value: "code-assistant", label: "Code Assistant", provider: "GitHub" },
  ];

  const addStep = () => {
    const newStep = {
      id: workflow.steps.length + 1,
      agent: "",
      task: "",
      expanded: true,
    };
    setWorkflow({
      ...workflow,
      steps: [...workflow.steps, newStep],
    });
  };

  const removeStep = (stepId: number) => {
    setWorkflow({
      ...workflow,
      steps: workflow.steps.filter((step) => step.id !== stepId),
    });
  };

  const toggleStepExpansion = (stepId: number) => {
    setWorkflow({
      ...workflow,
      steps: workflow.steps.map((step) =>
        step.id === stepId ? { ...step, expanded: !step.expanded } : step,
      ),
    });
  };

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
                className="transition-colors hover:text-foreground/80"
              >
                Agents
              </a>
              <a
                href="/workflows"
                className="transition-colors hover:text-foreground/80 text-foreground"
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
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Workflow Builder</h1>
              <p className="text-muted-foreground">
                Create and configure AI agent workflows
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Button variant="outline">
                <Play className="mr-2 h-4 w-4" />
                Test Run
              </Button>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Workflow
              </Button>
            </div>
          </div>

          {/* Workflow Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Workflow Name
              </label>
              <Input
                value={workflow.name}
                onChange={(e) =>
                  setWorkflow({ ...workflow, name: e.target.value })
                }
                placeholder="Enter workflow name..."
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">
                Description
              </label>
              <Input
                value={workflow.description}
                onChange={(e) =>
                  setWorkflow({ ...workflow, description: e.target.value })
                }
                placeholder="Brief description of this workflow..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Steps */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="space-y-4">
          {workflow.steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-2 hover:border-primary/20 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          Step {index + 1}
                        </CardTitle>
                        <CardDescription>
                          {step.agent
                            ? `Agent: ${step.agent}`
                            : "Configure agent and task"}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleStepExpansion(step.id)}
                      >
                        {step.expanded ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeStep(step.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {step.expanded && (
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Select Agent
                      </label>
                      <Select value={step.agent}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose an AI agent..." />
                        </SelectTrigger>
                        <SelectContent>
                          {availableAgents.map((agent) => (
                            <SelectItem key={agent.value} value={agent.label}>
                              <div className="flex items-center justify-between w-full">
                                <span>{agent.label}</span>
                                <Badge
                                  variant="outline"
                                  className="ml-2 text-xs"
                                >
                                  {agent.provider}
                                </Badge>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Task Description
                      </label>
                      <Textarea
                        value={step.task}
                        placeholder="Describe what this agent should do..."
                        rows={3}
                      />
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <Bot className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        This step will receive input from the previous step
                      </span>
                    </div>
                  </CardContent>
                )}
              </Card>

              {/* Arrow between steps */}
              {index < workflow.steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="h-6 w-6 text-muted-foreground" />
                </div>
              )}
            </motion.div>
          ))}

          {/* Add Step Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Card
              className="border-dashed border-2 border-muted-foreground/25 hover:border-primary/50 transition-colors cursor-pointer"
              onClick={addStep}
            >
              <CardContent className="flex items-center justify-center h-24">
                <div className="text-center">
                  <Plus className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm font-medium">Add Step</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Actions */}
        <div className="flex justify-center gap-4 mt-8 pt-6 border-t">
          <Button variant="outline" size="lg">
            <Play className="mr-2 h-4 w-4" />
            Run Workflow
          </Button>
          <Button size="lg">
            <Save className="mr-2 h-4 w-4" />
            Save Workflow
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkflowBuilder;
