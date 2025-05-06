import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import InvestorLanding from "./InvestorLanding";
import SaverLanding from "./SaverLanding";

const AnimatedLanding = () => {
  const [persona, setPersona] = useState("Saver");

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto p-4 md:p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* <motion.h1
        className="font-extrabold text-3xl text-[#1a202c]"
        variants={childVariants}
      >
        Finnovate <span className="text-[#4a6cb3]">AI</span>
      </motion.h1> */}

      {/* Persona Toggle Buttons */}
      <motion.div
        className="mt-6 flex justify-center space-x-1"
        variants={childVariants}
      >
        <Button
          className={`${
            persona === "Saver"
              ? "bg-[#1e2a4d] text-white"
              : "bg-white border border-gray-300 text-gray-600"
          } font-normal rounded-1-md px-6 py-2 text-base`}
          onClick={() => setPersona("Saver")}
        >
          Saver
        </Button>
        <Button
          className={`${
            persona === "Investor"
              ? "bg-[#1e2a4d] text-white"
              : "bg-white border border-gray-300 text-gray-600"
          } font-semibold rounded-l-md px-6 py-2 text-base`}
          onClick={() => setPersona("Investor")}
        >
          Investor
        </Button>
      </motion.div>

      {/* Render the appropriate dashboard */}
      <motion.div className="mt-8" variants={childVariants}>
        {persona === "Investor" ? <InvestorLanding /> : <SaverLanding />}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedLanding;
