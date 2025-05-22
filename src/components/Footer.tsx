
import { Mail, Phone, Home, Building, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 font-display">Davino Services Concrete & Excavation</h3>
            <p className="mb-6">
              Transforming spaces with quality construction and exceptional craftsmanship for over 40 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 font-display">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Home className="h-5 w-5 mr-3 text-accent-500 mt-0.5" />
                <span>123 Construction Ave<br />Building City, ST 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent-500" />
                <a href="tel:+11234567890" className="hover:text-accent-500 transition-colors">(123) 456-7890</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent-500" />
                <a href="mailto:info@davinoservices.com" className="hover:text-accent-500 transition-colors">info@davinoservices.com</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 font-display">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-accent-500 transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Residential Construction
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent-500 transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Commercial Projects
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent-500 transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Renovations
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent-500 transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Project Management
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent-500 transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Interior Design
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 font-display">Business Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Calendar className="h-5 w-5 mr-3 text-accent-500" />
                <div>
                  <p>Monday - Friday</p>
                  <p className="text-gray-400">8:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-center">
                <Calendar className="h-5 w-5 mr-3 text-accent-500" />
                <div>
                  <p>Saturday</p>
                  <p className="text-gray-400">9:00 AM - 2:00 PM</p>
                </div>
              </li>
              <li className="flex items-center">
                <Calendar className="h-5 w-5 mr-3 text-accent-500" />
                <div>
                  <p>Sunday</p>
                  <p className="text-gray-400">Closed</p>
                </div>
              </li>
            </ul>
            <Button className="mt-4 bg-accent-600 hover:bg-accent-700" asChild>
              <a href="#estimate">Schedule Consultation</a>
            </Button>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-800" />
        
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Davino Services Concrete & Excavation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
