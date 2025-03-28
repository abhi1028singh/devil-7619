import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold font-poppins text-primary">
              Abhishek<span className="text-white">.dev</span>
            </a>
            <p className="text-gray-400 mt-2">Java Full Stack Developer & AI Enthusiast</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">© {currentYear} Abhishek Singh. All rights reserved.</p>
            <div className="flex justify-center md:justify-end space-x-4 mt-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition duration-300"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition duration-300"
              >
                <FaGithub size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition duration-300"
              >
                <FaTwitter size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary transition duration-300"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
