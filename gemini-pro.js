import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run(){
    const model = genAI.getGenerativeModel({model: "gemini-pro"});

    const prompt = 
    "What is the name of the President of Bangladesh?"

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

run();