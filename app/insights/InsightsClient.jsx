'use client';

import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import { AiInsightsCard } from "./_components/ai-insight";
import { getDashboardData } from "@/actions/dashboard";
import { getPersonalFinancialInsights } from "@/lib/gemini";

export default function InsightsClient() {
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const transactions = await getDashboardData();
        const insightsData = await getPersonalFinancialInsights(transactions);
        setInsights(insightsData);
      } catch (err) {
        console.error("Failed to fetch insights", err);
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
  }, []);

  if (loading) {
    return <BarLoader className="mt-4" width="100%" color="#9333ea" />;
  }

  return (
    <div className="px-6 space-y-6">
      <AiInsightsCard insights={insights} />
    </div>
  );
}
