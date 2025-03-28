import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Logo } from "@/components/ui/logo";

export default function Welcome() {
  const [, setLocation] = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loading animation for 3 seconds before redirecting
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setLocation("/home");
      }, 500); // Short delay after animation completes
    }, 3000);

    return () => clearTimeout(timer);
  }, [setLocation]);

  return (
    <div className="h-screen w-full bg-gray-900 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Logo className="text-5xl mb-8" />
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-4xl font-bold text-white mb-6"
        >
          Welcome to My Portfolio
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-gray-300 mb-8 max-w-lg mx-auto"
        >
          Exploring the intersection of Java development and AI innovation
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 1 : 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        </motion.div>
        
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setLocation("/home")}
          className="mt-8 px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Enter Portfolio
        </motion.button>
      </motion.div>
    </div>
  );
}