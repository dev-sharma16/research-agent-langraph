export function calculator(expression: string) {
    try {
        const result = Function(`"use strict"; return (${expression})`)();

        if (typeof result !== "number" || !Number.isFinite(result)) {
            throw new Error("Invalid calculation");
        }

        return result;
    } catch (error) {
        throw new Error("Could not calculate the expression");
    }
}        