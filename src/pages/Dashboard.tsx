import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Bot,
  Users,
  Workflow,
  Settings,
  Plus,
  MoreHorizontal,
  FolderOpen,
  Bell,
  Search,
  Edit,
  Trash2,
} from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { ProjectService } from "@/lib/api/projects";
import { type Project } from "@/lib/db/schema";
import { toast } from "sonner";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    loadProjects();
  }, [user]);

  const loadProjects = async () => {
    if (!user) return;
    
    try {
      setIsLoading(true);
      const userProjects = await ProjectService.getProjectsByUserId(user.id);
      setProjects(userProjects);
    } catch (error) {
      toast.error("Failed to load projects");
      console.error("Error loading projects:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      const newProject = await ProjectService.createProject({
        userId: user.id,
        title: formData.title,
        description: formData.description,
        status: "active",
      });
      
      setProjects([newProject, ...projects]);
      setFormData({ title: "", description: "" });
      setIsCreateDialogOpen(false);
      toast.success("Project created successfully!");
    } catch (error) {
      toast.error("Failed to create project");
      console.error("Error creating project:", error);
    }
  };

  const handleEditProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;

    try {
      const updatedProject = await ProjectService.updateProject(editingProject.id, {
        title: formData.title,
        description: formData.description,
      });
      
      setProjects(projects.map(p => p.id === updatedProject.id ? updatedProject : p));
      setFormData({ title: "", description: "" });
      setEditingProject(null);
      toast.success("Project updated successfully!");
    } catch (error) {
      toast.error("Failed to update project");
      console.error("Error updating project:", error);
    }
  };

  const handleDeleteProject = async (projectId: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      await ProjectService.deleteProject(projectId);
      setProjects(projects.filter(p => p.id !== projectId));
      toast.success("Project deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete project");
      console.error("Error deleting project:", error);
    }
  };

  const openEditDialog = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description || "",
    });
  };

  const closeEditDialog = () => {
    setEditingProject(null);
    setFormData({ title: "", description: "" });
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    if (diffInHours < 48) return "1 day ago";
    return `${Math.floor(diffInHours / 24)} days ago`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navbar */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="flex h-16 items-center px-6">
          {/* Logo */}
          <div className="flex items-center space-x-2 mr-6">
            <img
              src="/crewhub-logo.png"
              alt="CrewHub Logo"
              className="h-8 w-8 rounded-full"
            />
            <span className="font-bold text-lg">CrewHub</span>
          </div>

          {/* Search */}
          <div className="flex items-center space-x-4 flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                className="w-full pl-10 pr-4 py-2 border rounded-md bg-muted/50 focus:bg-background transition-colors"
                placeholder="Search projects, agents, workflows..."
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4 ml-auto">
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarFallback>
                  {user ? getInitials(user.firstName, user.lastName) : "U"}
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">{user?.firstName} {user?.lastName}</p>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
              </div>
              <Button variant="ghost" size="sm" onClick={signOut}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-muted/30 min-h-[calc(100vh-4rem)] p-4">
          <nav className="space-y-2">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="secondary" className="w-full justify-start">
                <FolderOpen className="mr-2 h-4 w-4" />
                Projects
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => window.location.href = "/agents"}
              >
                <Bot className="mr-2 h-4 w-4" />
                Agents
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => window.location.href = "/workflows"}
              >
                <Workflow className="mr-2 h-4 w-4" />
                Workflows
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </motion.div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Your Projects</h1>
              <p className="text-muted-foreground">
                Manage and monitor your AI workflows
              </p>
            </div>
            <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
              <DialogTrigger asChild>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    New Project
                  </Button>
                </motion.div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Project</DialogTitle>
                  <DialogDescription>
                    Start a new AI project with agents and workflows.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleCreateProject} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Project Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter project title..."
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your project..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={3}
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button type="button" variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">Create Project</Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { title: "Total Projects", value: projects.length.toString(), icon: FolderOpen },
              { title: "Active Agents", value: "28", icon: Bot },
              { title: "Running Workflows", value: "45", icon: Workflow },
              { title: "Team Members", value: "8", icon: Users },
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2">
                      <stat.icon className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {stat.title}
                        </p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Projects Grid */}
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="cursor-pointer"
                >
                  <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <div className="flex items-center space-x-1">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              openEditDialog(project);
                            }}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteProject(project.id);
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant={
                            project.status === "active" ? "default" : "secondary"
                          }
                        >
                          {project.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          Updated {formatDate(new Date(project.updatedAt))}
                        </span>
                      </div>
                      {project.description && (
                        <CardDescription>{project.description}</CardDescription>
                      )}
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{project.agentsCount} agents</span>
                        <span>{project.workflowsCount} workflows</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Add New Project Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer"
                onClick={() => setIsCreateDialogOpen(true)}
              >
                <Card className="border-dashed border-2 border-muted-foreground/25 hover:border-primary/50 transition-colors">
                  <CardContent className="flex items-center justify-center h-48">
                    <div className="text-center">
                      <Plus className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-sm font-medium">Create New Project</p>
                      <p className="text-xs text-muted-foreground">
                        Start building with AI agents
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          )}

          {/* Edit Project Dialog */}
          <Dialog open={!!editingProject} onOpenChange={(open) => !open && closeEditDialog()}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Project</DialogTitle>
                <DialogDescription>
                  Update your project details.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleEditProject} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-title">Project Title</Label>
                  <Input
                    id="edit-title"
                    placeholder="Enter project title..."
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-description">Description</Label>
                  <Textarea
                    id="edit-description"
                    placeholder="Describe your project..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={closeEditDialog}>
                    Cancel
                  </Button>
                  <Button type="submit">Update Project</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;