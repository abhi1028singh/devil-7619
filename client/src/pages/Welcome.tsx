import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Logo } from "@/components/ui/logo";
import welcomeImagePath from "@assets/WhatsApp Image 2025-03-28 at 18.22.57_591df2f6.jpg";

export default function Welcome() {
  const [, setLocation] = useLocation();
  const [loading, setLoading] = useState(true);
  const [autoRedirect, setAutoRedirect] = useState(true);

  const navigateToPortfolio = useCallback(() => {
    setLoading(false);
    // Cancel auto-redirect if user clicks button
    setAutoRedirect(false);
    
    // Add a small delay for the animation
    setTimeout(() => {
      setLocation("/home");
    }, 400);
  }, [setLocation]);

  useEffect(() => {
    // Show loading animation for 3 seconds before redirecting
    let timer: NodeJS.Timeout | null = null;
    
    if (autoRedirect) {
      timer = setTimeout(() => {
        navigateToPortfolio();
      }, 4000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [navigateToPortfolio, autoRedirect]);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !loading) {
        navigateToPortfolio();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [loading, navigateToPortfolio]);

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
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
          transition={{ duration: 0.7 }}
          className="mt-12 relative"
        >
          {/* Glowing circles behind button */}
          <div className="absolute -inset-1 rounded-xl blur-xl bg-gradient-to-r from-primary/50 to-purple-600/50 opacity-70 group-hover:opacity-100 transition duration-1000"></div>
          
          {/* Floating animation container */}
          <div className="animate-float">
            <motion.button
              onClick={navigateToPortfolio}
              className="px-10 py-4 bg-primary text-white rounded-lg font-medium text-lg relative overflow-hidden group shadow-lg shadow-primary/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Button background with gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary to-primary/90 group-hover:from-primary group-hover:to-purple-600 transition-all duration-500"></div>
              
              {/* Shine effect */}
              <div className="absolute -inset-full top-0 h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
              
              {/* Button text */}
              <span className="relative z-10 flex items-center justify-center gap-2 font-semibold tracking-wide">
                ENTER PORTFOLIO
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    duration: 1,
                    ease: "easeInOut"
                  }}
                  className="text-xl"
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </div>
          
          {/* Hint text below button */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-gray-400 text-sm mt-4 text-center"
          >
            Press Enter to explore my work
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}