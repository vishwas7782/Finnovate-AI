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

import { getSaverLandingData } from "../data/landing";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

const data = getSaverLandingData();

const SaverLanding = () => {
  const {
    balance,
    savingsData,
    monthlyTrackerData,
    expensesData,
    emergencyFund,
    savingsRate
  } = data;
  return (
    <div className="flex flex-col gap-6 p-6 bg-sky-50 shadow-md rounded-2xl animate-fade-in">
      
      {/* First row: 2 charts side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Total Savings */}
        <div className="p-4 rounded-2xl shadow bg-white">
          <h3 className="font-semibold text-gray-900 mb-1">Total Savings</h3>
          <p className="text-sm text-gray-500 mb-2">Across all accounts</p>
          <p className="font-extrabold text-3xl mb-4">
            ₹{(data?.balance ?? 0).toLocaleString("en-IN")}
          </p>
          <div className="w-full h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={savingsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#2563eb"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly Tracker */}
        <div className="p-4 rounded-2xl shadow bg-white">
          <h3 className="font-semibold text-gray-900 mb-1">This Month’s Savings</h3>
          <p className="text-sm text-gray-500 mb-2">Compared to previous month</p>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={monthlyTrackerData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Bar dataKey="value" fill="#38bdf8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Second row: Remaining 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Emergency Fund */}
        <div className="p-4 rounded-2xl shadow bg-white">
          <h3 className="font-semibold text-gray-900 mb-1">Emergency Fund</h3>
          <p className="text-sm text-gray-500 mb-2">
            Goal: ₹{emergencyFund.goal}, Saved: ₹{emergencyFund.saved}
          </p>
          <ResponsiveContainer width="100%" height={150}>
  <RadialBarChart
    innerRadius="70%"
    outerRadius="100%"
    data={[
      {
        name: "Fund",
        value: (emergencyFund.saved / emergencyFund.goal) * 100,
        fill: "#34d399",
      },
    ]}
    startAngle={90}
    endAngle={450} // 360 degrees clockwise
  >
    <PolarAngleAxis
      type="number"
      domain={[0, 100]}
      angleAxisId={0}
      tick={false}
    />
    <RadialBar
      background
      clockWise
      dataKey="value"
      cornerRadius={10}
      angleAxisId={0}
    />
    <Tooltip />
  </RadialBarChart>
</ResponsiveContainer>
        </div>

        {/* Spending Overview */}
        <div className="p-4 rounded-2xl shadow bg-white">
          <h3 className="font-semibold text-gray-900 mb-1">Spending Overview</h3>
          <p className="text-sm text-gray-500 mb-2">Where your money went</p>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={expensesData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={60}
                label

              // label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              // labelLine={false}
              >
                {expensesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Savings Rate */}
        <div className="border border-gray-300 rounded-xl p-4 flex flex-col justify-center bg-white">
          <h3 className="font-semibold text-gray-900 mb-1">Savings Rate</h3>
          <p className="text-sm text-gray-500 mb-2">% of income saved</p>
          <div className="relative pt-3">
            <div className="overflow-hidden h-6 mb-4 text-xs flex rounded bg-gray-200">
              <div
                style={{ width: `${savingsRate}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
              >
                {savingsRate}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SaverLanding;
