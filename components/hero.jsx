"use client";

import React, { useEffect, useState, useRef } from "react"; // Import useRef here
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import TypewriterEffect from '../app/utils/TypewriterEffect';
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"; // Add this import at the top

const HeroSection = () => {
  const [text, setText] = useState(""); // Initialize with an empty string
  const fullText = "Where Finance Meets Intelligence";
  const imageControls = useAnimation();
  const imageRef = useRef(null); // This should now work

  const indexRef = useRef(0); // Use a ref to keep track of the index

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (indexRef.current < fullText.length-1) {
  //       setText((prev) => prev + fullText[indexRef.current]);
  //       indexRef.current += 1;
  //     } else {
  //       clearInterval(interval); // Stop when the full text is typed out
  //     }
  //   }, 100); // Adjust typing speed here

  //   return () => clearInterval(interval); // Clean up interval on unmount
  // }, []); // Empty dependency array to run only once when component mounts

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        imageControls.start({ scale: 1.05, opacity: 1, transition: { duration: 0.5 } });
      } else {
        imageControls.start({ scale: 1, opacity: 0.8, transition: { duration: 0.5 } });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [imageControls]);

  const textToType = "Where Finance Meets Intelligence";

  return (
    <section className="pt-40 pb-20 px-4">
      <div className="container mx-auto text-center">
        {/* Title with typewriter effect */}
        <motion.h1
          className="text-5xl md:text-8xl lg:text-[105px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-400 to-purple-600 pb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <TypewriterEffect text={textToType} speed={100} />
          {/* {text} */}
        </motion.h1>

        {/* Subheading text */}
        <p className="italic font-[Unna,serif] text-xl text-blue-900 mb-8 max-w-2xl mx-auto">
  Finnovate AI transforms the way you manage finances — with personalized insights,
  predictive analytics, and intelligent automation to help you grow wealth with confidence.
</p>

<div className="flex justify-center space-x-4">
  <SignedIn>
    <Link href="/dashboard">
      <Button size="lg" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
        Get Started
      </Button>
    </Link>
  </SignedIn>
  <SignedOut>
    <SignInButton forceRedirectUrl="/dashboard">
      <Button size="lg" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
        Get Started
      </Button>
    </SignInButton>
  </SignedOut>

  <Link href="https://www.youtube.com/@vishwasjeetgupta8407">
    <Button size="lg" variant="outline" className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300">
      Watch Demo
    </Button>
  </Link>
</div>

        {/* Animated Image */}
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <motion.div
            ref={imageRef}
            animate={imageControls}
            initial={{ scale: 1, opacity: 0.8 }}
            className="hero-image"
          >
            <Image
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto transition-transform duration-500 ease-in-out"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
