import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  X, 
  Github, 
  Linkedin 
} from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverButton, setHoverButton] = useState<string | null>(null);
  const [showPulse, setShowPulse] = useState(true);

  // Periodically toggle the pulse effect to attract attention
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      if (!isOpen) {
        setShowPulse(true);
        setTimeout(() => setShowPulse(false), 2000);
      }
    }, 10000);
    
    return () => clearInterval(pulseInterval);
  }, [isOpen]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setShowPulse(false);
  };

  const contactOptions = [
    {
      id: "email",
      icon: <Mail size={20} />,
      label: "Email",
      action: () => window.open(`mailto:${personalInfo.email}`),
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      id: "phone",
      icon: <Phone size={20} />,
      label: "Call",
      action: () => window.open(`tel:${personalInfo.phone}`),
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      id: "whatsapp",
      icon: <MessageCircle size={20} />,
      label: "WhatsApp",
      action: () => window.open(`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}`),
      color: "bg-emerald-500 hover:bg-emerald-600",
    },
    {
      id: "github",
      icon: <Github size={20} />,
      label: "GitHub",
      action: () => window.open("https://github.com/abhisheksingh", "_blank"),
      color: "bg-gray-700 hover:bg-gray-800",
    },
    {
      id: "linkedin",
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      action: () => window.open("https://www.linkedin.com/in/abhisheksingh", "_blank"),
      color: "bg-blue-600 hover:bg-blue-700",
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main Button */}
      <div className="relative">
        {/* Pulse Effect */}
        <AnimatePresence>
          {showPulse && !isOpen && (
            <motion.div
              className="absolute inset-0 rounded-full bg-primary"
              initial={{ scale: 1, opacity: 0.3 }}
              animate={{ 
                scale: [1, 1.5, 1.8],
                opacity: [0.3, 0.2, 0] 
              }}
              transition={{ 
                duration: 1.5,
                repeat: 2,
                repeatType: "loop"
              }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>

        <motion.button
          className={`w-14 h-14 rounded-full ${isOpen ? 'bg-red-500' : 'bg-primary'} text-white shadow-lg flex items-center justify-center relative`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleOpen}
          initial={{ scale: 0 }}
          animate={{ 
            scale: 1,
            rotate: isOpen ? 180 : 0
          }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            duration: 0.3 
          }}
        >
          {isOpen ? <X size={24} /> : <Mail size={24} />}
          
          {/* Notification Dot */}
          {!isOpen && (
            <motion.div 
              className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"
              initial={{ scale: 0 }}
              animate={{ 
                scale: [1, 1.2, 1],
                transition: { 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  duration: 1 
                }
              }}
            />
          )}
        </motion.button>
      </div>

      {/* "Contact me" text bubble - shows when not open */}
      <AnimatePresence>
        {!isOpen && showPulse && (
          <motion.div
            className="absolute right-16 bottom-3 whitespace-nowrap"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
          >
            <div className="bg-gray-800 text-white py-1 px-3 rounded-lg text-sm relative">
              Contact me!
              <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-800"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.3,
              staggerChildren: 0.1,
              delayChildren: 0.1
            }}
          >
            <div className="flex flex-col gap-3 items-end">
              {contactOptions.map((option, index) => (
                <motion.div
                  key={option.id}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ 
                    duration: 0.2, 
                    delay: 0.05 * index 
                  }}
                  onMouseEnter={() => setHoverButton(option.id)}
                  onMouseLeave={() => setHoverButton(null)}
                >
                  {/* Label - show on hover */}
                  <AnimatePresence>
                    {hoverButton === option.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 10 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: 10 }}
                        className="bg-gray-800 text-white py-1 px-2 rounded text-sm whitespace-nowrap"
                      >
                        {option.label}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Button */}
                  <motion.button
                    onClick={option.action}
                    className={`w-10 h-10 rounded-full ${option.color} text-white shadow flex items-center justify-center`}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {option.icon}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}