import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animations";
import AbhishekImage from "@assets/WhatsApp Image 2025-03-28 at 18.15.02_601bf6e8.jpg";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center"
        >
          <motion.div 
            variants={fadeInUp}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-3xl md:text-5xl font-bold font-poppins mb-4">
              Hi, I'm <span className="text-primary">Abhishek Singh</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold font-poppins mb-6 bg-gradient-to-r from-primary via-green-500 to-indigo-500 bg-clip-text text-transparent bg-[length:200%] animate-gradient">
              Full Stack Java Developer
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Specialized in Computer Science with <span className="text-green-500 font-semibold">Artificial Intelligence</span>. 
              Passionate about creating efficient and innovative solutions through coding.
            </p>
            <div className="flex space-x-4">
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="bg-primary hover:bg-blue-600 text-white"
              >
                Get In Touch
              </Button>
              <Button 
                onClick={() => scrollToSection('#projects')}
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10"
              >
                View Projects
              </Button>
            </div>
          </motion.div>
          <motion.div 
            variants={fadeIn}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl transform -translate-x-4 translate-y-4"></div>
              <div className="relative z-10 border-4 border-primary shadow-lg overflow-hidden w-72 h-auto rounded-lg bg-black">
                <img 
                  src={AbhishekImage} 
                  alt="Abhishek Singh - Professional Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
