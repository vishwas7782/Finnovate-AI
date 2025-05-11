import Link from "next/link";
import { BarLoader } from "react-spinners";
import { Suspense } from "react";
import { getUserDetails } from "@/actions/user-acc";
import InsightsPage from "./page";
import { Sparkles } from "lucide-react";
import FloatingChatbot from "./_components/FloatingChatbot";

export default async function Layout() {
  const user = await getUserDetails();
  const name = user?.name?.split(" ")[0] || "there";

  return (
  <div className="px-4 md:px-10 lg:px-20">
  <div className="pt-24 space-y-6 flex items-center justify-between mb-5">
    <h1 className="text-4xl font-semibold tracking-tight gradient-title px-0">
      Welcome to <Sparkles className="inline-block text-yellow-400" size={18} /> Liora – illuminating your financial path.
    </h1>
  </div>

  <div className="px-0 md:px-2 lg:px-4">
    <Suspense
      fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
    >
      <InsightsPage />
    </Suspense>
  </div>

  <FloatingChatbot />
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

