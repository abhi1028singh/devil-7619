import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { 
  developmentSkills, 
  aiSkills, 
  toolsSkills, 
  softSkills 
} from "@/lib/data";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('dev-skills');
  
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section id="skills" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-3xl font-bold font-poppins mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>
        
        {/* Skill Categories Tabs */}
        <div className="flex flex-wrap justify-center mb-10 space-x-2">
          <TabButton 
            id="dev-skills" 
            active={activeTab === 'dev-skills'} 
            onClick={() => handleTabClick('dev-skills')}
          >
            Development
          </TabButton>
          <TabButton 
            id="ai-skills" 
            active={activeTab === 'ai-skills'} 
            onClick={() => handleTabClick('ai-skills')}
          >
            AI & ML
          </TabButton>
          <TabButton 
            id="tools-skills" 
            active={activeTab === 'tools-skills'} 
            onClick={() => handleTabClick('tools-skills')}
          >
            Tools & Software
          </TabButton>
          <TabButton 
            id="soft-skills" 
            active={activeTab === 'soft-skills'} 
            onClick={() => handleTabClick('soft-skills')}
          >
            Soft Skills
          </TabButton>
        </div>
        
        {/* Development Skills */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className={`${activeTab === 'dev-skills' ? 'block' : 'hidden'}`}
        >
          <SkillGrid skills={developmentSkills} color="bg-primary" />
        </motion.div>
        
        {/* AI & ML Skills */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className={`${activeTab === 'ai-skills' ? 'block' : 'hidden'}`}
        >
          <SkillGrid skills={aiSkills} color="bg-green-500" />
        </motion.div>
        
        {/* Tools & Software Skills */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className={`${activeTab === 'tools-skills' ? 'block' : 'hidden'}`}
        >
          <SkillGrid skills={toolsSkills} color="bg-indigo-500" />
        </motion.div>
        
        {/* Soft Skills */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className={`${activeTab === 'soft-skills' ? 'block' : 'hidden'}`}
        >
          <SkillGrid skills={softSkills} color="bg-primary" />
        </motion.div>
      </div>
    </section>
  );
}

function TabButton({ 
  id, 
  active, 
  onClick, 
  children 
}: { 
  id: string, 
  active: boolean, 
  onClick: () => void, 
  children: React.ReactNode 
}) {
  return (
    <button 
      id={id}
      onClick={onClick}
      className={`px-4 py-2 rounded-md mb-2 transition duration-300 ${
        active 
          ? 'bg-primary text-white' 
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
      }`}
    >
      {children}
    </button>
  );
}

function SkillGrid({ 
  skills, 
  color 
}: { 
  skills: { name: string, percentage: number }[], 
  color: string 
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, index) => (
          <SkillBar 
            key={index} 
            name={skill.name} 
            percentage={skill.percentage} 
            color={color} 
          />
        ))}
      </div>
      
      <div className="space-y-6">
        {skills.slice(Math.ceil(skills.length / 2)).map((skill, index) => (
          <SkillBar 
            key={index} 
            name={skill.name} 
            percentage={skill.percentage} 
            color={color} 
          />
        ))}
      </div>
    </div>
  );
}

function SkillBar({ 
  name, 
  percentage, 
  color 
}: { 
  name: string, 
  percentage: number, 
  color: string 
}) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`absolute h-full rounded-full ${color}`}
        ></motion.div>
      </div>
    </div>
  );
}
