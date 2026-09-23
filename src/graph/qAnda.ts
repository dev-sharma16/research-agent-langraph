import { END, START, StateGraph } from "@langchain/langgraph";
import { ResearchState } from "../state/research-state.ts";
import { questionNode } from "../nodes/question.ts";
import { answerNode } from "../nodes/answer.ts"
import { plannerNode } from "../nodes/planner.ts";

const qAndAGraph = new StateGraph(ResearchState)
  .addNode("askQuestion", questionNode)
  .addNode("createPlan", plannerNode)
  .addNode("generateAnswer", answerNode)

  .addEdge(START, "askQuestion")
  .addEdge("askQuestion", "createPlan")
  .addEdge("createPlan", "generateAnswer")
  .addEdge("generateAnswer", END)
  
  .compile();

export default qAndAGraph;