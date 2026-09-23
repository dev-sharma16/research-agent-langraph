import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { gemKey } from "../config/env.ts";
import { ResearchPlanSchema } from "../schemas/research-plan.ts";
import { ResearchPlan } from "../schemas/research-plan.ts"

const model = new ChatGoogleGenerativeAI({
  model: "gemini-3.1-flash-lite",
  apiKey: gemKey,
});

async function generateText(text: string): Promise<string> { 
  const response = await model.invoke(text); 
  return response.content.toString(); 
}

async function generatePlan(text: string): Promise<ResearchPlan> {
  const plannerModel = model.withStructuredOutput(ResearchPlanSchema);

  const response = await plannerModel.invoke([
    [
      "system",
      `
        You are a research planning assistant.

        Your job is to convert the user's research question into a clear research plan.

        The plan must:
        - define one clear research objective
        - contain 3-6 logical research steps
        - order the steps from foundational understanding to deeper analysis
        - focus only on what is needed to answer the user's question
        - avoid writing the actual answer
      `
    ],
    ["human", text],
  ]);

  return response;
}

export { generateText, generatePlan };