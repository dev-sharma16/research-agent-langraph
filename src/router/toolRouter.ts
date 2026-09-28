import { toolState } from "../state/toolState.ts"; 

export function toolRouter( state: typeof toolState.State ) {
  const messages = state.messages;

  const lastMessage = messages[ messages.length - 1 ];

  if(
    "tool_calls" in lastMessage && lastMessage.tool_calls.length > 0
  ) {
    return "tool"
  }

  return "__end__";
}