import { END, START, StateGraph } from "@langchain/langgraph";

import { toolState } from "../state/toolState.ts";
import { callModel } from "../nodes/callModel.ts";
import { toolNode } from "../nodes/toolNode.ts";
import { toolRouter } from "../router/toolRouter.ts";
// import { tool } from "@langchain/core/tools";

const toolGraph = new StateGraph(toolState)

    .addNode("callModel", callModel)
    .addNode("tool", toolNode)

    .addEdge(START, "callModel")

    .addConditionalEdges("callModel", toolRouter, {
        tool: "tool",
        __end__: END
    })

    .addEdge("tool", "callModel")

    .compile();

export default toolGraph;
