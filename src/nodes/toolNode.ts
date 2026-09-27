import { ToolNode } from "@langchain/langgraph/prebuilt";
import { calculatorTool } from "../tools/index.js";

export const toolNode = new ToolNode([
    calculatorTool,
]);

