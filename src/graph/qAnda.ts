import { END, START, StateGraph } from "@langchain/langgraph";
import { ResearchState } from "../state/research-state.ts";
import { questionNode } from "../nodes/question.ts";
import { answerNode } from "../nodes/answer.ts"
import { planNode } from "../nodes/plan.ts";

const qAndAGraph = new StateGraph(ResearchState)
  .addNode("askQuestion", questionNode)
  .addNode("createPlan", planNode)
  .addNode("generateAnswer", answerNode)

  .addEdge(START, "askQuestion")
  .addEdge("askQuestion", "createPlan")
  .addEdge("createPlan", "generateAnswer")
  .addEdge("generateAnswer", END)
  
  .compile();

export default qAndAGraph; 