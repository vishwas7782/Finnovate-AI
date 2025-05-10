import { Suspense } from "react";
import { BarLoader } from "react-spinners";
import { getDashboardData } from "@/actions/dashboard";
import { getPersonalFinancialInsights } from "@/lib/gemini";
import { AiInsightsCard } from "./_components/ai-insight";


export default async function InsightsPage() {
  const transactions = await getDashboardData();
  const insights = await getPersonalFinancialInsights(transactions);
  

  return (
    <div className="px-4 space-y-6"> {/* Added pt-24 for padding-top */}
      {/* <h1 className="text-2xl font-bold">🔍 Your AI Financial Insights</h1> */}
      
      <Suspense fallback={<BarLoader width="100%" color="#9333ea" />}>
      <AiInsightsCard insights={insights} />

      </Suspense>
    </div>

  );
}
