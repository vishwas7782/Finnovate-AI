import Link from "next/link";
import DashboardPage from "./page";
import { BarLoader } from "react-spinners";
import { Suspense } from "react";
import { getUserDetails } from "@/actions/user-acc";
import { Greeting } from "./_components/greetings"; // Create this file
import { Sparkles } from "lucide-react";
import FloatingChatbot from "../../insights/_components/FloatingChatbot";


export default async function Layout() {
  const user = await getUserDetails();
  const name = user?.name?.split(" ")[0] || "there";

  return (
    <div className="px-5">
      <div className="flex items-center justify-between mb-5">
        <Greeting name={name} />
        {/* <Link href="/insights">
          <button className="relative bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all shadow-md flex items-center gap-2">
            <Sparkles size={18} />
            <span className="hidden md:inline">Liora AI</span>
          </button>
        </Link> */}
      </div>
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        <DashboardPage />
      </Suspense>
      <FloatingChatbot />
    </div>
  );
}