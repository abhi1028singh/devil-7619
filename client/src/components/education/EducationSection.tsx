import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animations";
import { education, certifications } from "@/lib/data";
import { GraduationCap, School, Award } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-3xl font-bold font-poppins mb-2">Education</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative border-l-2 border-primary pl-8 ml-6 space-y-12"
        >
          {/* Education Entries */}
          {education.map((edu, index) => (
            <EducationItem
              key={index}
              icon={edu.type === "bachelors" ? <GraduationCap size={16} /> : <School size={16} />}
              iconBgColor="bg-primary"
              title={edu.degree}
              institution={edu.institution}
              period={edu.period}
              description={edu.description}
              courses={edu.courses}
            />
          ))}
          
          {/* Certification Entries */}
          {certifications.map((cert, index) => (
            <EducationItem
              key={`cert-${index}`}
              icon={<Award size={16} />}
              iconBgColor="bg-green-500"
              title={cert.title}
              institution={cert.issuer}
              period={cert.year}
              description={cert.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function EducationItem({ 
  icon, 
  iconBgColor,
  title, 
  institution, 
  period, 
  description,
  courses
}: { 
  icon: React.ReactNode, 
  iconBgColor: string,
  title: string, 
  institution: string, 
  period: string, 
  description: string,
  courses?: string[]
}) {
  return (
    <motion.div variants={fadeIn} className="relative">
      <div className={`absolute -left-12 mt-1.5 h-7 w-7 rounded-full ${iconBgColor} flex items-center justify-center`}>
        <div className="text-white">{icon}</div>
      </div>
      
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <h3 className="text-xl font-semibold text-primary">{title}</h3>
          <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
            {period}
          </span>
        </div>
        
        <h4 className="text-lg text-gray-300 mb-3">{institution}</h4>
        
        <p className="text-gray-400 mb-4">{description}</p>
        
        {courses && courses.length > 0 && (
          <div>
            <h5 className="text-md font-medium text-gray-300 mb-2">Key Courses:</h5>
            <div className="flex flex-wrap gap-2">
              {courses.map((course, index) => (
                <span 
                  key={index} 
                  className="bg-gray-700 text-gray-300 px-3 py-1 rounded-md text-sm"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
