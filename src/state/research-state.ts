import { Annotation } from "@langchain/langgraph";

type ResearchPlan = {
  objective: string;
  steps: string[];
};

export const ResearchState = Annotation.Root({
  question: Annotation<string>,

  plan: Annotation<ResearchPlan>({
    reducer: (_existing, update) => update,
    default: () => ({
      objective: "",
      steps: [],
    }),
  }),

  searchQueries: Annotation<string[]>({
    reducer: (_existing, update) => update,
    default: () => [],
  }),

  searchResults: Annotation<string[]>({
    reducer: (_existing, update) => update,
    default: () => [],
  }),

  documents: Annotation<string[]>({
    reducer: (_existing, update) => update,
    default: () => [],
  }),

  findings: Annotation<string[]>({
    reducer: (existing, update) => [
      ...existing,
      ...update,
    ],
    default: () => [],
  }),

  sources: Annotation<string[]>({
    reducer: (_existing, update) => update,
    default: () => [],
  }),

  draft: Annotation<string>({
    reducer: (_existing, update) => update,
    default: () => "",
  }),

  finalReport: Annotation<string>({
    reducer: (_existing, update) => update,
    default: () => "",
  }),
});