import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { personalInfo } from "@/lib/data";
import { 
  GraduationCap, 
  Building, 
  Award, 
  Mail, 
  MapPin, 
  Activity
} from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-3xl font-bold font-poppins mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-semibold font-poppins mb-4 text-primary">Who Am I?</h3>
            <p className="text-gray-300 mb-6">
              I'm a Computer Science graduate with a specialization in Artificial Intelligence from Babu Banarasi Das University. With a strong academic foundation and practical skills in Java Full Stack Development, I'm passionate about building efficient and scalable applications.
            </p>
            <p className="text-gray-300 mb-6">
              Throughout my academic journey, I've maintained a good CGPA while simultaneously developing my practical skills in various technologies. I'm particularly interested in machine learning, data analytics, and web development.
            </p>
            <p className="text-gray-300">
              Beyond academics, I have a keen interest in cricket and enjoy both playing and following the sport. I believe in maintaining a balance between professional growth and personal interests.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-semibold font-poppins mb-4 text-primary">Personal Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoItem
                icon={<GraduationCap className="text-green-500" />}
                label="Degree"
                value={personalInfo.degree}
              />
              
              <InfoItem
                icon={<Building className="text-green-500" />}
                label="University"
                value={personalInfo.university}
              />
              
              <InfoItem
                icon={<Award className="text-green-500" />}
                label="CGPA"
                value={personalInfo.cgpa}
              />
              
              <InfoItem
                icon={<Mail className="text-green-500" />}
                label="Email"
                value={personalInfo.email}
              />
              
              <InfoItem
                icon={<MapPin className="text-green-500" />}
                label="Location"
                value={personalInfo.location}
              />
              
              <InfoItem
                icon={<Activity className="text-green-500" />}
                label="Interest"
                value="Cricket"
              />
            </div>
            
            <div className="mt-8">
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="mt-1">{icon}</div>
      <div>
        <p className="text-gray-400 text-sm">{label}</p>
        <p className="text-gray-200">{value}</p>
      </div>
    </div>
  );
}
