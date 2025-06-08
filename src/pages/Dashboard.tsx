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
import { ThemeSwitch } from "@/components/theme-switch";
import {
  Bot,
  Users,
  Workflow,
  Settings,
  Plus,
  MoreHorizontal,
  FolderOpen,
  Menu,
  Bell,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";

const Dashboard = () => {
  const projects = [
    {
      id: 1,
      title: "AI Content Generator",
      lastUpdated: "2 hours ago",
      status: "Active",
      agents: 3,
      workflows: 2,
    },
    {
      id: 2,
      title: "Customer Support Automation",
      lastUpdated: "1 day ago",
      status: "Active",
      agents: 5,
      workflows: 4,
    },
    {
      id: 3,
      title: "Data Analysis Pipeline",
      lastUpdated: "3 days ago",
      status: "Paused",
      agents: 2,
      workflows: 1,
    },
  ];

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
            <ThemeSwitch />
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
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
              <Button variant="ghost" className="w-full justify-start">
                <Bot className="mr-2 h-4 w-4" />
                Agents
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="ghost" className="w-full justify-start">
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </motion.div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { title: "Total Projects", value: "12", icon: FolderOpen },
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
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant={
                          project.status === "Active" ? "default" : "secondary"
                        }
                      >
                        {project.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        Updated {project.lastUpdated}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{project.agents} agents</span>
                      <span>{project.workflows} workflows</span>
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
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
