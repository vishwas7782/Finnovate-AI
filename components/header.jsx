import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard,ReceiptIndianRupee,Sparkles } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import Image from "next/image";
import { MdOutlineRateReview } from "react-icons/md";

const Header = async () => {
  await checkUser();

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/finnovateai_logo5.png"}
            alt="FinnovateAI Logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Navigation Links - Different for signed in/out users */}
        <div className="hidden md:flex items-center space-x-8">
          <SignedOut>
            
            <a href="#features" className="text-gray-600 hover:text-blue-600">
              Features
            </a>
            <a href="#testimonials" className="hidden md-inline text-gray-600 hover:text-blue-600"
            >
              Testimonials
            </a>
          </SignedOut>
        </div>

        {/* Action Buttons */}
<div className="flex items-center space-x-3">
  <SignedIn>
    {/* Liora - Primary CTA */}
    <Link href="/insights">
      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-md transition duration-300 flex items-center gap-2 px-5 py-2">
        <Sparkles size={18} />
        <span className="hidden md:inline">Liora</span>
      </Button>
    </Link>

    {/* Dashboard - Blue outline */}
    <Link href="/dashboard">
      <Button
        variant="outline"
        className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 flex items-center gap-2 px-5 py-2 transition duration-300"
      >
        <LayoutDashboard size={18} />
        <span className="hidden md:inline">Dashboard</span>
      </Button>
    </Link>

    {/* Add Transaction - Green filled */}
    <a href="/transaction/create">
      <Button className="bg-sky-500 text-white hover:bg-green-600 flex items-center gap-2 px-5 py-2  transition duration-300">
        <ReceiptIndianRupee size={18} />
        <span className="hidden md:inline">Add Transaction</span>
      </Button>
    </a>
  </SignedIn>

  <SignedOut>
    {/* Login - subtle neutral */}
    <SignInButton forceRedirectUrl="/dashboard">
      <Button
        variant="outline"
        className="border-gray-300 text-gray-700 hover:text-blue-600 hover:border-blue-600  px-5 py-2 transition duration-300"
      >
        Login
      </Button>
    </SignInButton>
  </SignedOut>

  <SignedIn>
    <UserButton
      appearance={{
        elements: {
          avatarBox: "w-10 h-10",
        },
      }}
    />
  </SignedIn>
</div>
      </nav>
    </header>
  );
};

export default Header;
