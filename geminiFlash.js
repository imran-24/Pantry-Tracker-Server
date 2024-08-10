import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function run(base64Image) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Provide the name and count of the object in this image. Ensure the response is in valid JSON format where there can't be any word specifically rentioned anything like json, with the correct object name and count, structured as {"object": "object_name", "count": number} without any extra information.`;
    const imageParts = [base64Image.substring(base64Image.indexOf(",") + 1)];

    const result = await model.generateContent([prompt, ...imageParts]);

    return result.response.text();
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// run();
