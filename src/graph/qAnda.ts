import { END, START, StateGraph } from "@langchain/langgraph";
import { ResearchState } from "../state/research-state.ts";
import { questionNode } from "../nodes/question.ts";
import { answerNode } from "../nodes/answer.ts"

const qAndAGraph = new StateGraph(ResearchState)
  .addNode("askQuestion", questionNode)
  .addNode("generateAnswer", answerNode)
  .addEdge(START, "askQuestion")
  .addEdge("askQuestion", "generateAnswer")
  .addEdge("generateAnswer", END)
  .compile();

export default qAndAGraph;