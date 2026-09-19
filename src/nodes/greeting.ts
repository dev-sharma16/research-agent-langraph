export async function greetingNode(state){
  console.log("Message: ", state.message);
  console.log("Answer: ", state.answer);
  return{};
}