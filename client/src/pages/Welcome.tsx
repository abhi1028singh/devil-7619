import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Logo } from "@/components/ui/logo";
import welcomeImagePath from "@assets/WhatsApp Image 2025-03-28 at 18.22.57_591df2f6.jpg";

// Skills to display with their associated colors
const skills = [
  { name: "JAVA", color: "#f89820" },
  { name: "AI", color: "#3498db" },
  { name: "EXCEL", color: "#2ecc71" },
  { name: "FULL STACK", color: "#e74c3c" },
  { name: "UI/UX", color: "#9b59b6" },
  { name: "GRAPHIC DESIGN", color: "#f1c40f" }
];

export default function Welcome() {
  const [, setLocation] = useLocation();
  const [loading, setLoading] = useState(true);
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);

  // Function to navigate to the main portfolio
  const navigateToPortfolio = useCallback(() => {
    try {
      setLoading(true);
      setTimeout(() => {
        setLocation("/portfolio");
      }, 400);
    } catch (error) {
      console.error("Navigation error:", error);
      setLoading(false);
    }
  }, [setLocation]);

  // Show initial loading animation, but don't auto-redirect
  useEffect(() => {
    // Just show loading animation for 3 seconds, then show the button
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Rotate through skills automatically
  useEffect(() => {
    if (!loading) {
      const interval = setInterval(() => {
        setActiveSkillIndex((prev) => (prev + 1) % skills.length);
      }, 2000);
      
      return () => clearInterval(interval);
    }
  }, [loading]);
  
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
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 flex flex-col items-center justify-center p-4 py-8 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-4xl w-full"
      >
        <Logo className="text-4xl md:text-5xl mb-6 md:mb-8" />
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 mb-8 px-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex-shrink-0"
          >
            <img 
              src={welcomeImagePath} 
              alt="Abhishek Singh" 
              className="w-52 h-52 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-lg shadow-2xl border-2 border-primary/30"
            />
          </motion.div>
          
          <div className="flex flex-col items-center lg:items-start max-w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center lg:text-left bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-transparent bg-clip-text"
            >
              Welcome to My Portfolio
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -z-10 blur-3xl rounded-full bg-primary/20 w-96 h-96 -top-20 -right-20"
            />
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-left p-4 sm:p-6 bg-gray-800/50 rounded-lg border border-gray-700 backdrop-blur-sm mb-4 sm:mb-6 w-full"
            >
              <p className="text-gray-300 italic text-base sm:text-lg mb-3 sm:mb-4">
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
              className="text-gray-300 mb-4 sm:mb-8 max-w-lg text-center lg:text-left"
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
        
        {/* Animated Skills Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: loading ? 0 : 1, scale: loading ? 0.8 : 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 mb-10"
        >
          <div className="flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 0.5 }}
              className="text-xl text-white mb-6 font-semibold text-center"
            >
              My Key Skills
            </motion.h2>
            
            <div className="w-72 h-48 sm:h-56 md:w-80 md:h-60 relative perspective mx-auto">
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-xl border border-primary/20 shadow-xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-black/90 z-0"></div>
                
                {/* Animated gradient background */}
                <div className="absolute inset-0 z-0 opacity-30">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-gradient-x"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-gradient-y"></div>
                </div>
                
                {/* Floating particles - reduced number for better performance */}
                <div className="absolute inset-0 overflow-hidden">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full bg-white/30"
                      style={{
                        width: Math.random() * 6 + 2,
                        height: Math.random() * 6 + 2,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                      }}
                      animate={{
                        y: [0, -100],
                        opacity: [0, 0.8, 0]
                      }}
                      transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "linear"
                      }}
                    />
                  ))}
                </div>
                
                {/* Skills showcase with animation */}
                <div className="relative z-10 flex flex-col items-center justify-center p-6">
                  <div className="h-20 flex items-center justify-center">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="absolute flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: activeSkillIndex === index ? 1 : 0,
                          scale: activeSkillIndex === index ? 1 : 0.8,
                          y: activeSkillIndex === index ? 0 : 20
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <div 
                          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-center w-full mx-auto px-2"
                          style={{ 
                            background: `linear-gradient(to right, ${skill.color}, white)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                          }}
                        >
                          {skill.name}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Progress dots */}
                  <div className="flex flex-wrap justify-center gap-2 mt-6">
                    {skills.map((_, index) => (
                      <motion.div
                        key={index}
                        className={`w-2 h-2 rounded-full cursor-pointer ${
                          activeSkillIndex === index ? "bg-primary" : "bg-gray-500"
                        }`}
                        onClick={() => setActiveSkillIndex(index)}
                        whileHover={{ scale: 1.5 }}
                        animate={{
                          scale: activeSkillIndex === index ? [1, 1.2, 1] : 1
                        }}
                        transition={{
                          duration: 1,
                          repeat: activeSkillIndex === index ? Infinity : 0,
                          repeatType: "reverse"
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.0, duration: 0.5 }}
              className="text-gray-400 text-sm mt-4 text-center max-w-xs"
            >
              Click the dots to explore my core competencies
            </motion.p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
          transition={{ duration: 0.7 }}
          className="mt-8 relative"
        >
          {/* Glowing circles behind button */}
          <div className="absolute -inset-1 rounded-xl blur-xl bg-gradient-to-r from-primary/50 to-purple-600/50 opacity-70 group-hover:opacity-100 transition duration-1000"></div>
          
          {/* Floating animation container */}
          <div className="animate-float">
            <motion.button
              onClick={navigateToPortfolio}
              className="px-8 sm:px-10 py-3 sm:py-4 bg-primary text-white rounded-lg font-medium text-base sm:text-lg relative overflow-hidden group shadow-lg shadow-primary/20"
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