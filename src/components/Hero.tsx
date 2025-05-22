
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80')`,
      }}
    >
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight animate-fade-in">
          Building Excellence<br />
          <span className="text-accent-500">Crafting Dreams</span>
        </h1>
        
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200 animate-fade-in" style={{animationDelay: "0.2s"}}>
          We transform concepts into reality with precision, innovation, and dedication to quality craftsmanship.
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
          <Button className="text-white bg-accent-600 hover:bg-accent-700 px-8 py-6 text-lg" size="lg" asChild>
            <a href="#estimate">Request Estimate</a>
          </Button>
          <Button variant="outline" className="border-white text-black bg-white hover:bg-white/90 px-8 py-6 text-lg" size="lg" asChild>
            <a href="#services">
              Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#services" 
          className="animate-bounce bg-white bg-opacity-20 p-2 w-10 h-10 ring-1 ring-white ring-opacity-20 rounded-full flex items-center justify-center"
        >
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
