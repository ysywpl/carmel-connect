import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateDiscussionQuestions = async (topic: string, audience: string): Promise<string> => {
  if (!apiKey) return "API Key not configured. Please check environment variables.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Generate 3 thought-provoking small group discussion questions about "${topic}" suitable for ${audience}. Format as a simple numbered list.`,
    });
    return response.text || "No questions generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Failed to generate questions. Please try again later.";
  }
};

export const generateIcebreaker = async (groupType: string): Promise<string> => {
  if (!apiKey) return "API Key not configured.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Suggest a fun, quick icebreaker activity for a ${groupType} church small group. Keep it under 50 words.`,
    });
    return response.text || "No icebreaker generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Failed to generate icebreaker.";
  }
};