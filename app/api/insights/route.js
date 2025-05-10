// app/api/insights/route.js
import { getDashboardData } from "@/actions/dashboard";
import { getPersonalFinancialInsights } from "@/lib/gemini";

export async function GET() {
  const transactions = await getDashboardData();
  const insights = await getPersonalFinancialInsights(transactions);

  return Response.json(insights);
}
