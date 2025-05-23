"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import TypewriterEffect from "../app/utils/TypewriterEffect";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import AnimatedLanding from "./AnimatedLanding";
import FloatingChatbot from "../app/insights/_components/FloatingChatbot";

const HeroSection = () => {
  const imageControls = useAnimation();
  const imageRef = useRef(null);

  // State to control when to load the chatbot
  const [animationsComplete, setAnimationsComplete] = useState(false);

  useEffect(() => {
    // Trigger chatbot visibility after all animations settle
    if (animationsComplete) {
      setShowChatbot(true);
    }
  }, [animationsComplete]);

  const textToType = "Where Finance Meets Intelligence";

  const handleLandingAnimationComplete = () => {
    setAnimationsComplete(true);  // Set animations to complete once landing animation finishes
  };

  const [showChatbot, setShowChatbot] = useState(false); // chatbot visibility state

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        imageControls.start({
          scale: 1.05,
          opacity: 1,
          transition: { duration: 0.5 },
        });
      } else {
        imageControls.start({
          scale: 1,
          opacity: 0.95,
          transition: { duration: 0.5 },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [imageControls]);

  return (
    <section className="pt-40 pb-20 px-4">
      <div className="container mx-auto text-center">
        {/* Title with typewriter effect */}
        <motion.h1
          // className="font-extrabold text-3xl text-[#3B82F6]"
          className="font-extrabold text-3xl text-[#1a202c]"
        >
          {/* Finnovate <span className="text-[#1E3A8A]">AI</span> */}
           Finnovate <span className="text-[#4a6cb3]">AI</span>
        </motion.h1>
        <motion.h1
          className="text-5xl md:text-8xl lg:text-[105px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-400 to-purple-600 pb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <TypewriterEffect text={textToType} speed={100} />
        </motion.h1>

        {/* Subheading paragraph animation */}
        <motion.p
          className="italic font-[Unna,serif] text-xl text-blue-900 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          Finnovate AI transforms the way you manage finances — with personalized insights,
          predictive analytics, and intelligent automation to help you grow wealth with confidence.
        </motion.p>

        {/* AI Animation */}
        <motion.div
          className="relative w-full flex justify-center mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <img
            src="aibg.gif"
            alt="AI Animation"
            className="w-60 h-45 sm:w-72 sm:h-56 md:w-80 md:h-64 lg:w-96 lg:h-72 opacity-80 pointer-events-none"
          />
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 1 }}
        >
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
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Watch Demo
            </Button>
          </Link>
        </motion.div>

        {/* Liora AI Assistant (Preview/Demo) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.4, duration: 1 }}
          className="mt-10"
        >
          {showChatbot && <FloatingChatbot />}
        </motion.div>

        {/* AnimatedLanding section with better animation */}
        <motion.div
          ref={imageRef}
          animate={imageControls}
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="hero-image-wrapper mt-10"
          onAnimationComplete={handleLandingAnimationComplete}  // Trigger chatbot loading here
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-xl p-6 max-w-5xl mx-auto"
          >
            <AnimatedLanding />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
