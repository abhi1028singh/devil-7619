import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { Logo } from "@/components/ui/logo";
import { FaDev } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <a href="/" className="text-xl font-bold text-white hover:text-primary transition duration-300">
              Abhishek Singh
            </a>
            <p className="text-gray-400 mt-2">Java Full Stack Developer & AI Enthusiast</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400">© {currentYear} Abhishek Singh. All rights reserved.</p>
            <div className="flex justify-center md:justify-end space-x-4 mt-4">
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
              <a 
                href="https://dev.to" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition duration-300"
              >
                <FaDev size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}