export async function planNode(state) {
    console.log("Planning for : ", state.question);

    return {
        plan: `Research and explain ${state.question}`,
    }
}