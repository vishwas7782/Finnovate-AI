import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

function parseGeminiJSON(text) {
  try {
    // Try direct parse
    return JSON.parse(text);
  } catch {
    // Try ```json ... ``` format
    const match = text.match(/```json\s*([\s\S]+?)\s*```/);
    if (match) {
      try {
        return JSON.parse(match[1]);
      } catch (e) {
        console.error("Error parsing markdown-wrapped JSON:", e);
      }
    }

    // Try raw JSON blob
    const genericMatch = text.match(/{[\s\S]+}/);
    if (genericMatch) {
      try {
        return JSON.parse(genericMatch[0]);
      } catch (e) {
        console.error("Error parsing generic JSON blob:", e);
      }
    }

    console.error("Unable to parse valid JSON from Gemini output:", text);
    return null;
  }
}

export async function getPersonalFinancialInsights(transactions) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
  Analyze the following transaction data and return engaging and user-friendly personalized financial insights in this exact JSON format:
  {
    "spendingSummary": "string",
    "savingSuggestions": ["string", ...],
    "warnings": ["string", ...],
    "actionableInsights": [
      "string (motivational advice based on user's spending habits)",
      "string (proactive suggestions to improve their financial health)",
      "string (positive reinforcement to encourage good habits)"
    ]
  }

  Transaction data (JSON array):
  ${JSON.stringify(transactions)}

  Make sure the suggestions and warnings are framed positively, even if they point out areas of improvement. Include practical steps the user can take.
  Focus on making the insights feel approachable and motivating, so the user feels confident in managing their finances.
`;


  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = await response.text();

  const insights = parseGeminiJSON(text);
  return insights;
}
