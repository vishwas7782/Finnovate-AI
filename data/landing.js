import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
  Sparkle,
  Bot
} from "lucide-react";
import Image from "next/image";

// Stats Data
export const statsData = [
  {
    value: "1K+",
    label: "Active Users",
  },
  {
    value: "₹1M+",
    label: "Transactions Tracked",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
  {
    value: "4.9/5",
    label: "User Rating",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Insightful Analytics",
    description:
      "Uncover trends in your financial activity with AI-driven data visualizations and reports.",
  },
    {
    icon: <Sparkle className="h-8 w-8 text-blue-600" />,
    title: "Liora: Smart Finance Assistant",
    description:
      "Get real-time, automated recommendations to improve your financial health and habits.",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "AI Receipt Capture",
    description:
      "Automatically pull key details from your receipts using intelligent document processing.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Smart Budget Manager",
    description:
      "Plan, track, and optimize your spending with adaptive budgeting tools and suggestions.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Unified Account View",
    description:
      "Access and manage all your financial accounts and cards from a single secure dashboard.",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Goal-Based Planning",
    description:
      "Set savings or investment goals and receive AI guidance to stay on track with progress.",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Sign Up Instantly",
    description:
      "Join in just a few clicks with our secure and hassle-free registration process.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Monitor Your Finances",
    description:
      "Keep an eye on your spending with real-time transaction tracking and smart categorization.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Unlock Financial Insights",
    description:
      "Get personalized AI insights and tips to manage your money more effectively.",
  },
];


// Testimonials Data
export const testimonialsData = [
  {
    name: "Ritika Sharma",
    role: "Startup Founder",
    image: "https://drive.google.com/uc?export=view&id=1l3g0Gzrkt1p8Qeb15NSm8l_I-9_rr98n", 
    quote:
      "Finnovate AI completely changed how I track my business expenses. The AI insights helped me cut down unnecessary costs and boost my profits.",
  },
  {
    name: "Nishu Kumar",
    role: "College Student",
    image: "https://drive.google.com/uc?export=view&id=1SRsiCh85v9961Je2Zt83ZAdHiWHPnSpW",
    quote:
      "The smart receipt scanner is a lifesaver! I no longer spend hours logging expenses—Finnovate AI does it all for me.",
  },
  {
    name: "Neha Iyer",
    role: "Financial Consultant",
    image: "https://drive.google.com/uc?export=view&id=1NIL3_Gwte4zSn4pBSpKI5EDyltb1a3lu",
    quote:
      "I recommend Finnovate AI to clients for its precise analytics and user-friendly design. It's ideal for both salaried professionals and investors in India.",
  },
];


// random data for animated landing
// investor
export const generatePortfolioLineData = () => {
  const base = 10000 + Math.random() * 10000;
  return ["Jan", "Feb", "Mar", "Apr", "May"].map((month, i) => ({
    month,
    value: Math.round(base + i * 1500 + Math.random() * 2000),
  }));
};

export const generateInvestmentPieData = () => {
  const stocks = Math.floor(Math.random() * 50) + 30; // 30–79%
  const mutualFunds = Math.floor(Math.random() * (100 - stocks));
  const bonds = 100 - stocks - mutualFunds;

  return [
    { name: "Stocks", value: stocks },
    { name: "Mutual Funds", value: mutualFunds },
    { name: "Bonds", value: bonds },
  ];
};

export const generateMonthlyReturnData = () => {
  return ["Jan", "Feb", "Mar", "Apr", "May"].map((month) => ({
    month,
    returns: Math.floor(500 + Math.random() * 2500),
  }));
};

export const generateRiskLevel = () => Math.floor(Math.random() * 51) + 25; // 25%–75%

export const generateReturnRate = () => Math.floor(Math.random() * 11) + 8; // 8%–18%

export const generateMockBalance = () =>
  Math.floor(30000 + Math.random() * 100000); // ₹30K to ₹130K

// Saver landing
// data/landing.js

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getSaverLandingData = () => {
  const savingsData = Array.from({ length: 5 }, (_, i) => ({
    month: ["Jan", "Feb", "Mar", "Apr", "May"][i],
    value: getRandomInt(3000, 10000),
  }));

  const monthlyTrackerData = [
    { name: "Target", value: getRandomInt(4000, 8000) },
    { name: "Actual", value: getRandomInt(3000, 7500) },
  ];

  const expensesData = [
    { name: "Rent", value: getRandomInt(2500, 5000) },
    { name: "Food", value: getRandomInt(1000, 2500) },
    { name: "Utilities", value: getRandomInt(500, 1200) },
    { name: "Others", value: getRandomInt(300, 1500) },
  ];

  const emergencyGoal = getRandomInt(8000, 20000);
  const emergencySaved = getRandomInt(3000, emergencyGoal);

  const savingsRate = getRandomInt(20, 60);

  const balance = savingsData.reduce((sum, item) => sum + item.value, 0);

  return {
    savingsData,
    monthlyTrackerData,
    expensesData,
    emergencyFund: {
      goal: emergencyGoal,
      saved: emergencySaved,
    },
    savingsRate,
    balance,
  };
};

// export const dummyData = {
//   Investor: {
//     balance: 12500.75,
//     stocks: [
//       { name: "AAPL", value: 187.21 },
//       { name: "GOOGL", value: 2743.11 },
//       { name: "TSLA", value: 702.32 },
//     ],
//     growth: "+6.3%",
//   },
//   Saver: {
//     balance: 8600.45,
//     goals: [
//       { name: "Emergency Fund", progress: 75 },
//       { name: "Vacation", progress: 45 },
//     ],
//     growth: "+3.1%",
//   },
// };
// export const dummyData = {
//   Investor: {
//     balance: 12500.75,
//     stocks: [
//       { name: "AAPL", value: 187.21 },
//       { name: "GOOGL", value: 2743.11 },
//       { name: "TSLA", value: 702.32 },
//     ],
//     growth: "+6.3%",
//     risk: 70, // Add risk level
//     budgetUsed: 40, // Add budget used value
//     allocation: 60, // Add allocation value
//     goal: 10000, // Add savings goal value
//   },
//   Saver: {
//     balance: 8600.45,
//     goals: [
//       { name: "Emergency Fund", progress: 75 },
//       { name: "Vacation", progress: 45 },
//     ],
//     growth: "+3.1%",
//     risk: 30, // Add risk level
//     budgetUsed: 50, // Add budget used value
//     allocation: 80, // Add allocation value
//     goal: 12000, // Add savings goal value
//   },
// };
