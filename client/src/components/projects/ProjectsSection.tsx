import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animations";
import { projects } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-3xl font-bold font-poppins mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="mt-12 text-center"
        >
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <motion.div 
      variants={fadeIn}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2" style={{ color: project.color }}>
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-primary/20 text-primary rounded-md px-2 py-1 text-xs font-medium mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition duration-300"
          >
            <Github size={20} />
          </a>
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition duration-300"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
