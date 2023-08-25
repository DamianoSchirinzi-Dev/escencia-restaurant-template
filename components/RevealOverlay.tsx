"use client";
import { motion } from "framer-motion";

const RevealOverlay = () => {
  return (
    <motion.div
      className="absolute z-50 w-screen h-screen bg-black pointer-events-none"
      initial={{ opacity: 100 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    ></motion.div>
  );
};

export { RevealOverlay };
