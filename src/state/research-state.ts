import { Annotation } from "@langchain/langgraph"; 

export const ResearchState = Annotation.Root({
  question: Annotation<string>,
  answer: Annotation<string>,
  plan: Annotation<string>,
  searchQueries: Annotation<string[]>,
  searchResults: Annotation<string[]>,
  documents: Annotation<string[]>,
  findings: Annotation<string[]>,
  sources: Annotation<string[]>,
  draft: Annotation<string>,
  finalReport: Annotation<string>,
});