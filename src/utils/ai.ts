import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { gemKey } from "../config/env.ts";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-3.1-flash-lite",
  apiKey: gemKey
});

export async function generateText(text: string): Promise<string> { 
  const response = await model.invoke(text); 
  return response.content.toString(); 
}