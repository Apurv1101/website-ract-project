
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getFashionAdvice = async (query: string, context?: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User query: ${query}${context ? `\nContext: ${context}` : ""}`,
      config: {
        systemInstruction: "You are an elite fashion advisor for 'Stream & Dream'. Suggest products, explain fabrics, and help with style choices based on our premium minimalist aesthetic.",
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Advice Error:", error);
    return "I'm currently optimizing my fashion circuits. Please try again in a moment.";
  }
};
