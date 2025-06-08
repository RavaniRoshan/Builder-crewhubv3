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
  ArrowLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { WorkflowService } from "@/lib/api/workflows";
import { ProjectService } from "@/lib/api/projects";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { type Workflow, type Project } from "@/lib/db/schema";

interface WorkflowStep {
  id: number;
  agent: string;
  task: string;
  expanded: boolean;
}

interface WorkflowData {
  name: string;
  description: string;
  steps: WorkflowStep[];
}

const WorkflowBuilder = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { projectId, workflowId } = useParams();
  
  const [workflow, setWorkflow] = useState<WorkflowData>({
    name: "",
    description: "",
    steps: [],
  });
  
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isNewWorkflow, setIsNewWorkflow] = useState(true);

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

  useEffect(() => {
    if (projectId) {
      loadProject();
    }
    if (workflowId) {
      loadWorkflow();
    } else {
      // Initialize with a default step for new workflows
      setWorkflow({
        name: "New Workflow",
        description: "",
        steps: [
          {
            id: 1,
            agent: "",
            task: "",
            expanded: true,
          },
        ],
      });
    }
  }, [projectId, workflowId]);

  const loadProject = async () => {
    if (!projectId) return;
    
    try {
      const project = await ProjectService.getProjectById(projectId);
      if (project) {
        setCurrentProject(project);
      } else {
        toast.error("Project not found");
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error("Failed to load project");
      console.error("Error loading project:", error);
    }
  };

  const loadWorkflow = async () => {
    if (!workflowId) return;
    
    try {
      setIsLoading(true);
      const workflowData = await WorkflowService.getWorkflowById(workflowId);
      if (workflowData) {
        setIsNewWorkflow(false);
        // Convert the stored steps back to the UI format
        const steps = Array.isArray(workflowData.steps) 
          ? (workflowData.steps as any[]).map((step, index) => ({
              id: index + 1,
              agent: step.agent || "",
              task: step.task || "",
              expanded: false,
            }))
          : [];
        
        setWorkflow({
          name: workflowData.name,
          description: workflowData.description || "",
          steps: steps.length > 0 ? steps : [{ id: 1, agent: "", task: "", expanded: true }],
        });
      } else {
        toast.error("Workflow not found");
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error("Failed to load workflow");
      console.error("Error loading workflow:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveWorkflow = async () => {
    if (!user || !projectId) {
      toast.error("Missing required information");
      return;
    }

    if (!workflow.name.trim()) {
      toast.error("Workflow name is required");
      return;
    }

    if (workflow.steps.length === 0) {
      toast.error("At least one step is required");
      return;
    }

    // Validate that all steps have required fields
    const invalidSteps = workflow.steps.filter(step => !step.agent || !step.task.trim());
    if (invalidSteps.length > 0) {
      toast.error("All steps must have an agent and task description");
      return;
    }

    try {
      setIsSaving(true);
      
      // Convert steps to the format expected by the database
      const stepsData = workflow.steps.map(step => ({
        agent: step.agent,
        task: step.task.trim(),
      }));

      if (isNewWorkflow) {
        const newWorkflow = await WorkflowService.createWorkflow({
          projectId: projectId,
          name: workflow.name.trim(),
          description: workflow.description.trim() || null,
          steps: stepsData,
        });
        
        setIsNewWorkflow(false);
        toast.success("Workflow created successfully!");
        
        // Update URL to include the new workflow ID
        navigate(`/workflows/${projectId}/${newWorkflow.id}`, { replace: true });
      } else if (workflowId) {
        await WorkflowService.updateWorkflow(workflowId, {
          name: workflow.name.trim(),
          description: workflow.description.trim() || null,
          steps: stepsData,
        });
        
        toast.success("Workflow updated successfully!");
      }
    } catch (error) {
      toast.error("Failed to save workflow");
      console.error("Error saving workflow:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const addStep = () => {
    const newStep: WorkflowStep = {
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
    if (workflow.steps.length <= 1) {
      toast.error("At least one step is required");
      return;
    }
    
    setWorkflow({
      ...workflow,
      steps: workflow.steps.filter((step) => step.id !== stepId),
    });
  };

  const updateStep = (stepId: number, field: keyof WorkflowStep, value: any) => {
    setWorkflow({
      ...workflow,
      steps: workflow.steps.map((step) =>
        step.id === stepId ? { ...step, [field]: value } : step
      ),
    });
  };

  const toggleStepExpansion = (stepId: number) => {
    setWorkflow({
      ...workflow,
      steps: workflow.steps.map((step) =>
        step.id === stepId ? { ...step, expanded: !step.expanded } : step
      ),
    });
  };

  const handleTestRun = () => {
    toast.info("Test run functionality coming soon!");
  };

  const handleBack = () => {
    navigate("/dashboard");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-muted/30 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={handleBack}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-3xl font-bold">Workflow Builder</h1>
                <p className="text-muted-foreground">
                  {currentProject ? `Project: ${currentProject.title}` : "Create and configure AI agent workflows"}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleTestRun}>
                <Play className="mr-2 h-4 w-4" />
                Test Run
              </Button>
              <Button onClick={handleSaveWorkflow} disabled={isSaving}>
                <Save className="mr-2 h-4 w-4" />
                {isSaving ? "Saving..." : "Save Workflow"}
              </Button>
            </div>
          </div>

          {/* Workflow Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Workflow Name *
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
                        disabled={workflow.steps.length <= 1}
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
                        Select Agent *
                      </label>
                      <Select 
                        value={step.agent} 
                        onValueChange={(value) => updateStep(step.id, 'agent', value)}
                      >
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
                        Task Description *
                      </label>
                      <Textarea
                        value={step.task}
                        onChange={(e) => updateStep(step.id, 'task', e.target.value)}
                        placeholder="Describe what this agent should do..."
                        rows={3}
                      />
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <Bot className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {index === 0 
                          ? "This is the first step in your workflow"
                          : "This step will receive input from the previous step"
                        }
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
          <Button variant="outline" size="lg" onClick={handleTestRun}>
            <Play className="mr-2 h-4 w-4" />
            Test Workflow
          </Button>
          <Button size="lg" onClick={handleSaveWorkflow} disabled={isSaving}>
            <Save className="mr-2 h-4 w-4" />
            {isSaving ? "Saving..." : "Save Workflow"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkflowBuilder;