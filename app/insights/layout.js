import Link from "next/link";
import { BarLoader } from "react-spinners";
import { Suspense } from "react";
import { getUserDetails } from "@/actions/user-acc";
import InsightsPage from "./page";
import { Sparkles } from "lucide-react";

export default async function Layout() {
  const user = await getUserDetails();
  const name = user?.name?.split(" ")[0] || "there";

  return (
    <div className="px-5">
      <div className="pt-24 px-6 space-y-6 flex items-center justify-between mb-5">
        <h1 className="text-2xl font-bold">Welcome to Liora<Sparkles className="inline-block text-yellow-400" size={18} /> – illuminating your financial path.</h1>
         {/* <Link href="/insights">
          <button className="relative bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all shadow-md flex items-center gap-2">
            <Sparkles size={18} />
            <span className="hidden md:inline">View AI Insights</span>

          </button>
        </Link> */}
      </div>

      {/* Apply same padding to InsightsPage container */}
      <div className="px-6">
        <Suspense
          fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
        >
          <InsightsPage />
        </Suspense>
      </div>
    </div>
  );
}


// import { getUserDetails } from "@/actions/user-acc";
// import InsightsClient from "./InsightsClient"; // no dynamic import

// export default async function Layout() {
//   const user = await getUserDetails();
//   const name = user?.name?.split(" ")[0] || "there";

//   return (
//     <div className="px-5">
//       <div className="pt-24 px-6 space-y-6 flex items-center justify-between mb-5">
//         <h1 className="text-2xl font-bold">Welcome to Liora – illuminating your financial path.</h1>
//       </div>
//       <InsightsClient />
//     </div>
//   );
// }

