import { toolModel } from "../utils/ai.js";
import { toolState } from "../state/toolState.ts";

export async function callModel(state: typeof toolState.State) {
    const response = await toolModel.invoke(state.messages);

    return {
        messages: [response]
    };
};

