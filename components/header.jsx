import React from "react";
import { Button } from "./ui/button";
import { PenBox,Atom, LayoutDashboard,ReceiptIndianRupee,Sparkles,MessageSquareQuote } from "lucide-react";
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
   <Link href="/" className="flex items-center gap-1 sm:gap-[2px]">
  <Image
    src="/finnovateai_logo8.png"
    alt="FinnovateAI Logo"
    width={60}
    height={50}
    className="h-10 w-10 object-contain"
  />
  <div className="leading-[1.1] hidden sm:block">
    <span className="block text-base sm:text-lg font-bold text-[#1a202c]">
      Finnovate
    </span>
    <span className="block text-xs sm:text-sm font-bold text-[#4a6cb3] tracking-wide mt-[-10px]">
      AI
    </span>
  </div>
</Link>

        {/* Navigation Links - Different for signed in/out users */}
        <div className="flex items-center gap-4 text-sm font-medium">
      {/* Features Button */}
      <SignedOut>
      <Link
        href="#features"
        className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
      >
        <Atom size={20} className="text-[#4a6cb3]" />
        <span className="hidden md:inline">Features</span>
      </Link>

      {/* Testimonials Button */}
      <Link
        href="#testimonials"
        className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
      >
        <MessageSquareQuote size={20} className="text-[#4a6cb3]" />
        <span className="hidden md:inline">Testimonials</span>
      </Link>
      </SignedOut>
    </div>

      {/* Action Buttons */}
<div className="flex items-center space-x-2 sm:space-x-3">
  <SignedIn>
    {/* Liora - Primary CTA */}
    <Link href="/insights">
      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-md transition duration-300 flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm">
        <Sparkles size={16} className="sm:size-[20px]" />
        <span className="hidden md:inline">Liora</span>
      </Button>
    </Link>

    {/* Dashboard - Blue outline */}
    <Link href="/dashboard">
      <Button
        variant="outline"
        className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm"
      >
        <LayoutDashboard size={16} className="sm:size-[18px]" />
        <span className="hidden md:inline">Dashboard</span>
      </Button>
    </Link>

    {/* Add Transaction - Green filled */}
    <a href="/transaction/create">
      <Button className="bg-sky-500 text-white hover:bg-sky-600 flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-5 sm:py-2 transition duration-300 text-xs sm:text-sm">
        <ReceiptIndianRupee size={16} className="sm:size-[18px]" />
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
