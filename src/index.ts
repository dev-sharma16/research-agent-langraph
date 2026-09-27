import graph from "./graph/basic.ts"
import qAndAGraph from "./graph/qAnda.ts";
import toolGraph from "./graph/toolGraph.js";
import { HumanMessage } from "@langchain/core/messages";

// const result = await graph.invoke({
  // quesiton: "Hello Langraph",
// });


// const result = await qAndAGraph.invoke({
  // question: "can you explain mwe the difference between js and ts in two lines",
// });

// Running toolGraph

const result = await toolGraph.invoke({
  messages: [
    new HumanMessage("25 * 50")
  ]
});

console.log(result); 