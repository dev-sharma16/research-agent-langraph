import { Annotation } from "@langchain/langgraph"; 

export const ResearchState = Annotation.Root({
  message: Annotation<string>,
  question: Annotation<string>,
  answer: Annotation<string>
});