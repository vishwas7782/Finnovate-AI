import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";

import {
  generatePortfolioLineData,
  generateInvestmentPieData,
  generateMonthlyReturnData,
  generateRiskLevel,
  generateReturnRate,
  generateMockBalance,
} from "../data/landing";

const COLORS = ["#2563eb", "#4ade80", "#f59e0b"];

const InvestorLanding = () => {
  const data = {
    balance: generateMockBalance(),
    portfolioLineData: generatePortfolioLineData(),
    investmentPieData: generateInvestmentPieData(),
    monthlyReturnData: generateMonthlyReturnData(),
    riskLevel: generateRiskLevel(),
    returnRate: generateReturnRate(),
  };

  return (
    <div className="flex flex-col gap-6 p-6 bg-sky-50 shadow-md rounded-2xl animate-fade-in">
      {/* First row: 2 charts side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Portfolio Value */}
        <div className="p-4 rounded-2xl shadow bg-white">
          <h3 className="font-semibold text-gray-900 mb-1">Portfolio Value</h3>
          <p className="font-extrabold text-3xl mb-4">
            ₹{(data?.balance ?? 0).toLocaleString("en-IN")}
          </p>
          <div className="w-full h-40">
            <ResponsiveContainer width="100%" height={100}>
              <LineChart data={data.portfolioLineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#121c45"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Monthly Returns (Bar Chart) */}
        <div className="p-4 rounded-2xl shadow bg-white">
          <h3 className="font-semibold text-gray-900 mb-1">Monthly Returns</h3>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={data.monthlyReturnData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="returns" fill="#4f46e5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Second row: Remaining 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 rounded-2xl shadow bg-white">
          <h3 className="font-semibold text-gray-900 mb-1">Investment Categories</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data.investmentPieData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={60}
                label
              >
                {data.investmentPieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

        </div>


        {/* Risk Level (Radial Chart) */}
        <div className="border border-gray-300 rounded-xl p-4 flex flex-col items-center justify-center bg-white">
          <h3 className="font-semibold text-gray-900 mb-1">Risk Level</h3>
          <ResponsiveContainer width={200} height={200}>
            <RadialBarChart
              innerRadius="80%"
              outerRadius="100%"
              barSize={20}
              data={[{ name: "Risk", value: data.riskLevel }]}
              startAngle={90}
              endAngle={450}
            >
              <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
              <RadialBar
                background
                clockWise
                dataKey="value"
                fill="#f97316"
                cornerRadius={10}
              />
              <Tooltip />
            </RadialBarChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-500 mt-2">{data.riskLevel}% Risk</p>

        </div>

        {/* Return Rate (Animated Progress Bar) */}
        <div className="border border-gray-300 rounded-xl p-4 flex flex-col justify-center bg-white">
          <h3 className="font-semibold text-gray-900 mb-1">Return Rate</h3>
          <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
            <div
              className="bg-green-500 h-6 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${data.returnRate}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">{data.returnRate}% Annualized</p>
        </div>
      </div>
    </div>
  );
};

export default InvestorLanding;
