import graph from "./graph/basic.ts"
import qAndAGraph from "./graph/qAnda.ts";

// const result = await graph.invoke({
  // quesiton: "Hello Langraph",
// });


const result = await qAndAGraph.invoke({
  question: "Hello Langraph",
});

console.log(result); 