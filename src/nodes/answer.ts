import { generateText } from "../utils/ai.ts";

export async function answerNode(state) {
  console.log("Question : ", state.question);
  console.log("Plan : ", state.plan);

  const answer = await generateText(`${state.question}, ${state.plan}`);

  return {
    answer
  };
}