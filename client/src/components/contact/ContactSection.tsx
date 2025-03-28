import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { personalInfo } from "@/lib/data";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

// Create a schema for the form
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: async (res) => {
      const data = await res.json();
      toast({
        title: "Message sent successfully!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    setIsSubmitting(true);
    mutate(data);
  };

  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-3xl font-bold font-poppins mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <motion.div variants={fadeIn}>
            <h3 className="text-2xl font-semibold font-poppins mb-6 text-primary">Contact Information</h3>
            <p className="text-gray-300 mb-8">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out using any of 
              the methods below. I'm always open to new ideas and collaborations.
            </p>
            
            <div className="space-y-6">
              <ContactInfoItem 
                icon={<Mail className="text-primary" size={20} />}
                title="Email"
                content={
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="text-gray-400 hover:text-primary transition duration-300"
                  >
                    {personalInfo.email}
                  </a>
                }
              />
              
              <ContactInfoItem 
                icon={<Phone className="text-primary" size={20} />}
                title="Phone"
                content={
                  <a 
                    href={`tel:${personalInfo.phone}`} 
                    className="text-gray-400 hover:text-primary transition duration-300"
                  >
                    {personalInfo.phone}
                  </a>
                }
              />
              
              <ContactInfoItem 
                icon={<MapPin className="text-primary" size={20} />}
                title="Location"
                content={<p className="text-gray-400">{personalInfo.location}</p>}
              />
            </div>
            
            <div className="mt-10">
              <h4 className="text-lg font-medium text-gray-200 mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <SocialLink href="https://linkedin.com" icon={<FaLinkedinIn size={18} />} />
                <SocialLink href="https://github.com" icon={<FaGithub size={18} />} />
                <SocialLink href="https://twitter.com" icon={<FaTwitter size={18} />} />
                <SocialLink href="https://instagram.com" icon={<FaInstagram size={18} />} />
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Form {...form}>
              <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-700"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-gray-300">Your Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          className="bg-gray-700 text-gray-200 border-gray-600 focus:border-primary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-gray-300">Your Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="john@example.com" 
                          className="bg-gray-700 text-gray-200 border-gray-600 focus:border-primary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-gray-300">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Project Inquiry" 
                          className="bg-gray-700 text-gray-200 border-gray-600 focus:border-primary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-gray-300">Your Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Hello Abhishek, I'd like to discuss a project..." 
                          rows={5}
                          className="bg-gray-700 text-gray-200 border-gray-600 focus:border-primary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-blue-600 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactInfoItem({ 
  icon, 
  title, 
  content 
}: { 
  icon: React.ReactNode, 
  title: string, 
  content: React.ReactNode 
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-medium text-gray-200 mb-1">{title}</h4>
        {content}
      </div>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition duration-300"
    >
      <div className="text-gray-300 hover:text-white">
        {icon}
      </div>
    </a>
  );
}
