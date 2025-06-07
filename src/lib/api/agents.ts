import { db } from '@/lib/db';
import { agents, type Agent } from '@/lib/db/schema';

export class AgentService {
  static async getAllAgents(): Promise<Agent[]> {
    try {
      const allAgents = await db.select().from(agents);
      return allAgents;
    } catch (error) {
      console.error('Error fetching agents:', error);
      throw error;
    }
  }

  static async seedAgents(): Promise<void> {
    try {
      // Check if agents already exist
      const existingAgents = await db.select().from(agents);
      if (existingAgents.length > 0) {
        return; // Agents already seeded
      }

      const seedAgents = [
        {
          name: "ChatGPT-4",
          provider: "OpenAI",
          type: "LLM",
          description: "Advanced language model for complex reasoning and creative tasks",
          capabilities: ["Text Generation", "Code", "Analysis"],
          icon: "MessageSquare",
          rating: 4.8,
          isNew: false,
        },
        {
          name: "Claude 3.5 Sonnet",
          provider: "Anthropic",
          type: "LLM",
          description: "Highly capable AI assistant with strong reasoning and safety features",
          capabilities: ["Text Generation", "Analysis", "Research"],
          icon: "Brain",
          rating: 4.9,
          isNew: true,
        },
        {
          name: "Code Assistant",
          provider: "GitHub",
          type: "Automation",
          description: "Specialized agent for code generation, review, and debugging",
          capabilities: ["Code Generation", "Debugging", "Review"],
          icon: "Code",
          rating: 4.7,
          isNew: false,
        },
        {
          name: "Data Analyzer",
          provider: "CrewHub",
          type: "Planner",
          description: "Extract insights and patterns from structured and unstructured data",
          capabilities: ["Data Analysis", "Visualization", "Reporting"],
          icon: "BarChart3",
          rating: 4.6,
          isNew: false,
        },
        {
          name: "Content Creator",
          provider: "CrewHub",
          type: "LLM",
          description: "Generate engaging content across multiple formats and platforms",
          capabilities: ["Content Writing", "SEO", "Social Media"],
          icon: "FileText",
          rating: 4.5,
          isNew: false,
        },
        {
          name: "DALL-E 3",
          provider: "OpenAI",
          type: "LLM",
          description: "Advanced image generation from text descriptions",
          capabilities: ["Image Generation", "Creative Design"],
          icon: "Image",
          rating: 4.4,
          isNew: true,
        },
      ];

      await db.insert(agents).values(seedAgents);
    } catch (error) {
      console.error('Error seeding agents:', error);
      throw error;
    }
  }
}