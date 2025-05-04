"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

const HeroSection = () => {
  const imageControls = useAnimation();
  const imageRef = useRef(null);

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

  return (
    <section className="pt-40 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          Manage Your Finances <br /> with Intelligence
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="https://www.youtube.com/@vishwasjeetgupta8407">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>

        {/* ANIMATED IMAGE */}
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
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
