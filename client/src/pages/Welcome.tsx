import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Logo } from "@/components/ui/logo";
import welcomeImagePath from "@assets/WhatsApp Image 2025-03-28 at 18.22.57_591df2f6.jpg";

export default function Welcome() {
  const [, setLocation] = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loading animation for 3 seconds before redirecting
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setLocation("/home");
      }, 800); // Short delay after animation completes
    }, 4000);

    return () => clearTimeout(timer);
  }, [setLocation]);

  return (
    <div className="h-screen w-full bg-gray-900 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-4xl w-full"
      >
        <Logo className="text-5xl mb-8" />
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex-shrink-0"
          >
            <img 
              src={welcomeImagePath} 
              alt="Abhishek Singh" 
              className="w-64 h-64 object-cover rounded-lg shadow-2xl border-2 border-primary/30"
            />
          </motion.div>
          
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Welcome to My Portfolio
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-left p-6 bg-gray-800/50 rounded-lg border border-gray-700 backdrop-blur-sm mb-6"
            >
              <p className="text-gray-300 italic text-lg mb-4">
                "In the realm of innovation, I transform complexity into elegant solutions. 
                Building bridges between Java development and AI is not just my profession, 
                it's my creative expression."
              </p>
              <p className="text-primary font-medium text-right">— Abhishek Singh</p>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="text-gray-300 mb-8 max-w-lg"
            >
              Exploring the intersection of Java development and AI innovation
            </motion.p>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 1 : 0 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        </motion.div>
        
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
          transition={{ duration: 0.7 }}
          onClick={() => setLocation("/home")}
          className="mt-8 px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Enter Portfolio
        </motion.button>
      </motion.div>
    </div>
  );
}