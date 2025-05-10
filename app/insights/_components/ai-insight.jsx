// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { ArrowUpRight, AlertTriangle, CheckCircle } from "lucide-react"; // Icons for sections

// export function AiInsightsCard({ insights }) {
//   if (!insights) return null;

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
//       {/* Spending Summary */}
//       <Card className="bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 shadow-lg rounded-xl p-5 flex flex-col h-full hover:scale-105 transition-all duration-300 ease-in-out">
//         <CardHeader className="flex items-center mb-4">
//           <ArrowUpRight className="h-6 w-6 text-white mr-2" />
//           <CardTitle className="text-xl font-semibold text-white">Spending Summary</CardTitle>
//         </CardHeader>
//         <CardContent className="flex-1">
//           <p className="text-sm text-white">{insights.spendingSummary}</p>
//           <div className="mt-3">
//             <div className="flex justify-between text-sm text-white">
//               <span>Monthly Spending</span>
//               <span>Monthly Income</span>
//             </div>
//             <div className="w-full bg-indigo-200 h-2 mt-1 rounded-full">
//               <div
//                 className="bg-indigo-500 h-2 rounded-full"
//                 style={{ width: `${insights.spendingPercentage}%` }}
//               />
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Saving Suggestions */}
//       <Card className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 shadow-lg rounded-xl p-5 flex flex-col h-full hover:scale-105 transition-all duration-300 ease-in-out">
//         <CardHeader className="flex items-center mb-4">
//           <CheckCircle className="h-6 w-6 text-white mr-2" />
//           <CardTitle className="text-xl font-semibold text-white">Saving Suggestions</CardTitle>
//         </CardHeader>
//         <CardContent className="flex-1">
//           <ul className="list-disc ml-5 text-sm text-white">
//             {insights.savingSuggestions?.map((tip, idx) => (
//               <li key={idx}>
//                 <strong>Tip {idx + 1}:</strong> {tip}
//               </li>
//             ))}
//           </ul>
//           <div className="mt-3">
//             <button className="w-full bg-green-700 text-white py-2 rounded-lg shadow-md hover:bg-green-800">
//               Start Budgeting
//             </button>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Warnings */}
//       <Card className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow-lg rounded-xl p-5 flex flex-col h-full hover:scale-105 transition-all duration-300 ease-in-out">
//         <CardHeader className="flex items-center mb-4">
//           <AlertTriangle className="h-6 w-6 text-white mr-2" />
//           <CardTitle className="text-xl font-semibold text-white">Warnings</CardTitle>
//         </CardHeader>
//         <CardContent className="flex-1">
//           <ul className="list-disc ml-5 text-sm text-white">
//             {insights.warnings?.map((warning, idx) => (
//               <li key={idx}>
//                 <strong>Warning {idx + 1}:</strong> {warning}
//               </li>
//             ))}
//           </ul>
//         </CardContent>
//       </Card>

//       {/* Actionable Insights */}
//       <Card className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow-lg rounded-xl p-5 flex flex-col h-full hover:scale-105 transition-all duration-300 ease-in-out">
//         <CardHeader className="flex items-center mb-4">
//           <CheckCircle className="h-6 w-6 text-white mr-2" />
//           <CardTitle className="text-xl font-semibold text-white">Actionable Insights</CardTitle>
//         </CardHeader>
//         <CardContent className="flex-1">
//           <ul className="list-disc ml-5 text-sm text-white">
//             {insights.actionableInsights?.map((action, idx) => (
//               <li key={idx}>
//                 <strong>Action {idx + 1}:</strong> {action}
//               </li>
//             ))}
//           </ul>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, AlertTriangle, CheckCircle } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";

export function AiInsightsCard({ insights, loading }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
      {/* Spending Summary */}
      <Card className="bg-white border-l-4 border-purple-600 shadow-lg rounded-xl p-5 flex flex-col h-full">
        <CardHeader className="flex items-center space-y-0 pb-4">
          <ArrowUpRight className="h-6 w-6 text-indigo-600 mr-2" />
          <CardTitle className="text-xl font-semibold text-indigo-700">
            Spending Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          {loading ? (
            <>
              <Skeleton count={2} height={16} />
              <div className="mt-3">
                <Skeleton height={8} />
              </div>
            </>
          ) : (
            <>
              <p className="text-sm text-gray-700">{insights.spendingSummary}</p>
              <div className="mt-3">
                <div className="flex justify-between text-sm text-gray-700">
                  <span>Monthly Spending</span>
                  <span>Monthly Income</span>
                </div>
                <div className="w-full bg-indigo-200 h-2 mt-1 rounded-full">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${insights.spendingPercentage}%` }}
                  />
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Saving Suggestions */}
      <Card className="bg-white border-l-4 border-green-600 shadow-lg rounded-xl p-5 flex flex-col h-full">
        <CardHeader className="flex items-center mb-4">
          <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
          <CardTitle className="text-xl font-semibold text-green-700">
            Saving Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          {loading ? (
            <Skeleton count={4} height={16} />
          ) : (
            <>
              <ul className="list-disc ml-5 text-sm text-gray-700">
                {insights.savingSuggestions?.map((tip, idx) => (
                  <li key={idx}>
                    <strong>Tip {idx + 1}:</strong> {tip}
                  </li>
                ))}
              </ul>
              <div className="mt-3">
                <Link href="/dashboard">
                 <button className="w-full bg-green-600 text-white py-2 rounded-lg shadow-md hover:bg-green-700">
                  Start Budgeting
                </button></Link>
               
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Warnings */}
      <Card className="bg-white border-l-4 border-yellow-600 shadow-lg rounded-xl p-5 flex flex-col h-full">
        <CardHeader className="flex items-center mb-4">
          <AlertTriangle className="h-6 w-6 text-yellow-600 mr-2" />
          <CardTitle className="text-xl font-semibold text-yellow-700">
            Warnings
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          {loading ? (
            <Skeleton count={3} height={16} />
          ) : (
            <ul className="list-disc ml-5 text-sm text-gray-700">
              {insights.warnings?.map((warning, idx) => (
                <li key={idx}>
                  <strong>Warning {idx + 1}:</strong> {warning}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      {/* Actionable Insights */}
      <Card className="bg-white border-l-4 border-blue-600 shadow-lg rounded-xl p-5 flex flex-col h-full">
        <CardHeader className="flex items-center mb-4">
          <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
          <CardTitle className="text-xl font-semibold text-blue-700">
            Actionable Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          {loading ? (
            <Skeleton count={3} height={16} />
          ) : (
            <ul className="list-disc ml-5 text-sm text-gray-700">
              {insights.actionableInsights?.map((action, idx) => (
                <li key={idx}>
                  <strong>Action {idx + 1}:</strong> {action}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
