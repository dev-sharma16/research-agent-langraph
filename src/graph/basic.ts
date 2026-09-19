import { END, START, StateGraph } from "@langchain/langgraph";
import { ResearchState } from "../state/research-state.ts";
import { greetingNode } from "../nodes/greeting.ts";

const graph = new StateGraph(ResearchState)
  .addNode("greeting", greetingNode)
  .addEdge(START, "greeting")
  .addEdge("greeting", END)
  .compile();

export default graph;