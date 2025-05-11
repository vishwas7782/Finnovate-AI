// app/api/insights/route.js
import { getDashboardData } from "@/actions/dashboard";
import { getPersonalFinancialInsights } from "@/lib/gemini";
import { askFinancialQuestion } from "@/lib/gemini";

export async function GET() {
  const transactions = await getDashboardData();
  const insights = await getPersonalFinancialInsights(transactions);

  return Response.json(insights);
}

export async function POST(req) {
  const { query } = await req.json();
  const transactions = await getDashboardData();

  // Use Gemini to parse query and get a smart reply
  const reply = await askFinancialQuestion(transactions, query);

return Response.json({answer:reply});

}
