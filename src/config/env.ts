import { config } from "dotenv"
config();

const gemKey = process.env.GEMINI_API_KEY;

if(!gemKey){
    console.log("GEMINI_API_KEY is not available");
}

export { gemKey };