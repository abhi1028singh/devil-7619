import { motion } from "framer-motion";

const skills = [
  {
    category: "Development",
    items: ["Java", "Spring Boot", "Node.js", "React", "TypeScript"]
  },
  {
    category: "AI & Data",
    items: ["Machine Learning", "TensorFlow", "Data Analysis", "Neural Networks"]
  },
  {
    category: "Design",
    items: ["UI/UX Design", "Figma", "Adobe XD", "Responsive Design"]
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "AWS", "Agile Methodology"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-primary/50 transition-colors"
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
      </div>
    </section>
  );
}