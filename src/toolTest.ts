import { generateText, toolModel, generateWithTool } from "./utils/ai.js";
import { calculatorTool } from "./tools/index.js";
import { ToolMessage, HumanMessage } from "@langchain/core/messages";

const userInput = "25 * 40";

console.log("User Input : ", userInput);

const response = await generateWithTool(userInput);
const toolCall = response.tool_calls[0];

if (!toolCall) {
	throw new Error("The model did not request a calculator tool call.");
}

const toolResult = await calculatorTool.invoke(toolCall.args);

const toolMessage = new ToolMessage({
    content: String(toolResult),
    tool_call_id: toolCall.id
})

const finalRespose = await toolModel.invoke([
    new HumanMessage(userInput),
    response,
    toolMessage
])

console.log("Tool called : ", toolCall);

console.log("Tool executed output : ", toolResult);

console.log("Final Respose : ", finalRespose.content)