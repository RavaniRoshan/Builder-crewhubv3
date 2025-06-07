import { db } from '@/lib/db';
import { projects, type Project, type NewProject } from '@/lib/db/schema';
import { eq, desc } from 'drizzle-orm';

export class ProjectService {
  static async getProjectsByUserId(userId: string): Promise<Project[]> {
    try {
      const userProjects = await db
        .select()
        .from(projects)
        .where(eq(projects.userId, userId))
        .orderBy(desc(projects.updatedAt));
      
      return userProjects;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  }

  static async createProject(projectData: Omit<NewProject, 'id' | 'createdAt' | 'updatedAt'>): Promise<Project> {
    try {
      const [newProject] = await db
        .insert(projects)
        .values({
          ...projectData,
          agentsCount: 0,
          workflowsCount: 0,
        })
        .returning();
      
      return newProject;
    } catch (error) {
      console.error('Error creating project:', error);
      throw error;
    }
  }

  static async updateProject(projectId: string, updates: Partial<Omit<Project, 'id' | 'userId' | 'createdAt'>>): Promise<Project> {
    try {
      const [updatedProject] = await db
        .update(projects)
        .set({
          ...updates,
          updatedAt: new Date(),
        })
        .where(eq(projects.id, projectId))
        .returning();
      
      return updatedProject;
    } catch (error) {
      console.error('Error updating project:', error);
      throw error;
    }
  }

  static async deleteProject(projectId: string): Promise<void> {
    try {
      await db.delete(projects).where(eq(projects.id, projectId));
    } catch (error) {
      console.error('Error deleting project:', error);
      throw error;
    }
  }

  static async getProjectById(projectId: string): Promise<Project | null> {
    try {
      const [project] = await db
        .select()
        .from(projects)
        .where(eq(projects.id, projectId));
      
      return project || null;
    } catch (error) {
      console.error('Error fetching project:', error);
      throw error;
    }
  }
}