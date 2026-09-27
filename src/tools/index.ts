import { z } from "zod";
import { tool } from "@langchain/core/tools";
import { calculator } from "./calculator.ts";

export const calculatorTool = tool(
    ({expression}) => calculator(expression),
    {
        name: "calculator",
        description: "Calculate an mathemathical expression",
        schema: z.object({
            expression: z.string().describe(
                "The mathematical expression to calculate, for example 25 * 40"
            )
        })
    }
);

// const result = await calculatorTool.invoke({
//     expression: "25 * 40"
// })

// console.log(result);