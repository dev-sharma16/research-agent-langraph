import { generateText } from "../utils/ai.ts";

export async function answerNode(state) {
  const answer = await generateText(state.question);

  return {
    answer
  };
}