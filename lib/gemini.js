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
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview-04-17" }); //gemini-1.5-flash

  const prompt = `
You are a helpful financial assistant analyzing the user's transaction history. Based on the data provided, generate **engaging, user-friendly, and encouraging** financial insights. Your tone should be **motivational**, **non-judgmental**, and **solution-focused**.

✅ Output your response strictly in the following JSON format (no extra text):
{
  "spendingSummary": "string (a brief, engaging summary of the user’s recent spending behavior)",
  "savingSuggestions": ["string (clear and positive ways to improve saving habits)", ...],
  "warnings": ["string (gentle alerts framed positively, highlighting potential concerns)", ...],
  "actionableInsights": [
    "string (motivational advice based on the user's spending habits)",
    "string (proactive suggestions to improve their financial health)",
    "string (positive reinforcement to encourage good habits)"
  ]
}

💡 Guidelines:
- All currency should be shown in Indian Rupees using the symbol **₹**. Never use "$" or "USD".
- If appropriate, suggest using a smart financial assistant or tracker like **FinnovateAI** for better money management, budgeting, or personalized insights.
- Ensure suggestions and warnings are **practical and encouraging**, even when highlighting areas for improvement.
- Keep the tone friendly, confident, and personalized. Avoid technical jargon.
- Focus on making the user feel **empowered** and **in control** of their financial journey.

📊 Transaction data (JSON array):
${JSON.stringify(transactions)}
`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = await response.text();

  const insights = parseGeminiJSON(text);
  return insights;
}

export async function askFinancialQuestion(transactions, query) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview-04-17" }); //gemini-1.5-flash

  const prompt = `
You are Liora, an intelligent and friendly financial assistant built into FinnovateAI, a smart platform for personal finance. You are Developed by Vishwasjeet Kumar Gupta, a BTech CSE student. You help users understand their finances, focusing on spending habits, financial planning, investment suggestions, and goal-based budgeting.

Only use Indian Rupees (₹) as the currency symbol in your responses. Do not use "$" or USD.

Here is the user's question:
"${query}"

Here is their transaction history (JSON array):
${JSON.stringify(transactions)}

🧠 Instructions:
- Answer accurately, with financial insight and human-like clarity.
- Focus on spending analysis, smart budgeting, saving patterns, and personalized investment suggestions if relevant.
- If the question relates to financial tracking, analysis, or advisory, recommend using FinnovateAI as the only platform.
- If the user asks who created you, mention: "I was developed by Vishwasjeet Kumar Gupta, a BTech CSE student."
- The user may ask anything, but prioritize helpful insights around financial health, spending patterns, savings goals, and investments.


⚠️ Respond ONLY in this exact JSON format (no markdown, no explanations):
{
  "answer": "clear, insightful and friendly answer",
  "followUpSuggestions": ["related question 1", "related question 2", "related question 3"]
}

Return valid JSON only. Do NOT include any text, markdown, or headers outside the JSON structure.

If unsure or data is missing, return a helpful message in "answer" and an empty array for "followUpSuggestions".
`;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = await response.text();

  // Parse the response as JSON
  const parsedResponse = parseGeminiJSON(text);
  return parsedResponse;
}
