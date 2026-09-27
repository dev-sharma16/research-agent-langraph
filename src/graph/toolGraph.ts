import { END, START, StateGraph } from "@langchain/langgraph";

import { toolState } from "../state/toolState.ts";
import { callModel } from "../nodes/callModel.ts";
import { toolNode } from "../nodes/toolNode.ts";

const toolGraph = new StateGraph(toolState)
    .addNode("callModel", callModel)
    .addNode("tool", toolNode)

    .addEdge(START, "callModel")
    .addEdge("callModel", "tool")
    .addEdge("tool", END)
    
    .compile();

export default toolGraph;