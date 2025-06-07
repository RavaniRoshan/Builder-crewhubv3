import { db } from '@/lib/db';
import { workflows, type Workflow, type NewWorkflow } from '@/lib/db/schema';
import { eq, desc } from 'drizzle-orm';

export class WorkflowService {
  static async getWorkflowsByProjectId(projectId: string): Promise<Workflow[]> {
    try {
      const projectWorkflows = await db
        .select()
        .from(workflows)
        .where(eq(workflows.projectId, projectId))
        .orderBy(desc(workflows.updatedAt));
      
      return projectWorkflows;
    } catch (error) {
      console.error('Error fetching workflows:', error);
      throw error;
    }
  }

  static async createWorkflow(workflowData: Omit<NewWorkflow, 'id' | 'createdAt' | 'updatedAt'>): Promise<Workflow> {
    try {
      const [newWorkflow] = await db
        .insert(workflows)
        .values(workflowData)
        .returning();
      
      return newWorkflow;
    } catch (error) {
      console.error('Error creating workflow:', error);
      throw error;
    }
  }

  static async updateWorkflow(workflowId: string, updates: Partial<Omit<Workflow, 'id' | 'projectId' | 'createdAt'>>): Promise<Workflow> {
    try {
      const [updatedWorkflow] = await db
        .update(workflows)
        .set({
          ...updates,
          updatedAt: new Date(),
        })
        .where(eq(workflows.id, workflowId))
        .returning();
      
      return updatedWorkflow;
    } catch (error) {
      console.error('Error updating workflow:', error);
      throw error;
    }
  }

  static async deleteWorkflow(workflowId: string): Promise<void> {
    try {
      await db.delete(workflows).where(eq(workflows.id, workflowId));
    } catch (error) {
      console.error('Error deleting workflow:', error);
      throw error;
    }
  }

  static async getWorkflowById(workflowId: string): Promise<Workflow | null> {
    try {
      const [workflow] = await db
        .select()
        .from(workflows)
        .where(eq(workflows.id, workflowId));
      
      return workflow || null;
    } catch (error) {
      console.error('Error fetching workflow:', error);
      throw error;
    }
  }
}