import { z } from "zod";

export const ResearchPlanSchema = z.object({
    objective: z.string().min(1),
    steps: z.array( z.string().min(1)).min(3).max(6),
});

export type ResearchPlan = z.infer<typeof ResearchPlanSchema>;