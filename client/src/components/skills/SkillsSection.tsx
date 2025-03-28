import { motion } from "framer-motion";
import ThreeScene from "../three/ThreeScene";

// Define skills data
const skills = [
  {
    category: "Programming",
    items: ["Java", "Python", "JavaScript", "TypeScript", "C++"]
  },
  {
    category: "Web Development",
    items: ["React", "Node.js", "Express", "HTML5", "CSS3", "Tailwind"]
  },
  {
    category: "AI & ML",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Natural Language Processing"]
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "RESTful APIs"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
              >
                <h3 className="text-xl font-semibold text-primary mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((skill) => (
                    <li key={skill} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <ThreeScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
}