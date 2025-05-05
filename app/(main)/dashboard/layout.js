import DashboardPage from "./page";
import { BarLoader } from "react-spinners";
import { Suspense } from "react";
import { getUserDetails } from "@/actions/user-acc";
// import { Greeting } from "./_components/greetings"; // Create this file


function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export default async function Layout() {
  const user = await getUserDetails();
  
  const name = user?.name?.split(" ")[0] || "there"; // fallback if name is missing
  const greeting = `${getGreeting()}, ${name}`;

  return (
    <div className="px-5">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-4xl font-semibold tracking-tight gradient-title">
          {greeting}
        </h1>
      </div>
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        <DashboardPage />
      </Suspense>
    </div>
  );
}