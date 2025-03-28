import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animations";
import AbhishekImage from "@assets/WhatsApp Image 2024-10-17 at 19.48.20_4c8c4970.jpg";

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
              <div className="absolute inset-0 bg-primary rounded-full opacity-10 blur-xl transform -translate-x-4 translate-y-4"></div>
              <img 
                src={AbhishekImage} 
                alt="Abhishek Singh - Professional Portrait" 
                className="w-64 h-64 object-cover rounded-full border-4 border-primary shadow-lg relative z-10"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
