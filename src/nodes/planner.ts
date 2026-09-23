import { generatePlan } from '../utils/ai.ts';
import { ResearchState } from "../state/research-state.ts";

export async function plannerNode(state: typeof ResearchState.State) {

    const response = await generatePlan(state.question);

    console.log("Generated Plan :", response)

    return {
        plan : response,
    }
}