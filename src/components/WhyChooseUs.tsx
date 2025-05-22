
import { useRef } from "react";
import { Check } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { 
  Card, 
  CardContent, 
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import setupScrollAnimation from "@/utils/animateOnScroll";

// Features for the "Why Choose Us" section
const features = [
  "40+ years of industry experience",
  "Certified and skilled craftsmen",
  "Premium materials and finishes",
  "Transparent pricing and processes",
  "On-time project completion",
  "Comprehensive warranty coverage"
];

// Project portfolio items for the carousel
const projects = [
  {
    id: 1,
    title: "Modern Office Complex",
    description: "A state-of-the-art commercial building featuring sustainable materials and energy-efficient systems.",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80",
    insight: "Completed 2 months ahead of schedule with LEED Gold certification."
  },
  {
    id: 2,
    title: "Luxury Residential Home",
    description: "Custom-built 6,000 sq ft residence with premium finishes and smart home integration.",
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&q=80",
    insight: "Award-winning design featured in Architectural Digest."
  },
  {
    id: 3,
    title: "Shopping Center Renovation",
    description: "Complete overhaul of a 125,000 sq ft retail space, modernizing while preserving character.",
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=80",
    insight: "Increased foot traffic by 35% post-renovation."
  },
  {
    id: 4,
    title: "Corporate Headquarters",
    description: "Executive office building with cutting-edge conference facilities and collaborative spaces.",
    image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?auto=format&fit=crop&q=80",
    insight: "Engineered to reduce energy consumption by 40% compared to industry standards."
  },
  {
    id: 5,
    title: "Urban Mixed-Use Development",
    description: "Combined residential and commercial spaces creating a vibrant community hub.",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80",
    insight: "Full occupancy within 3 months of completion."
  }
];

const WhyChooseUs = () => {
  // Setup animation on scroll
  setupScrollAnimation();
  
  // Create refs for animation elements
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12">
          {/* Why Choose Us Content */}
          <div 
            ref={contentRef}
            className="animate-on-scroll"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display heading-underline text-black">
              Why Choose Elite Builders
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              For over four decades, Elite Builders has maintained a reputation for exceptional quality, integrity, and client satisfaction in all aspects of construction.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent-100 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-accent-600" />
                  </div>
                  <p className="text-gray-800">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Project Carousel Section */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-display text-black">
              Our Featured Projects
            </h3>
            
            <Carousel className="w-full">
              <CarouselContent>
                {projects.map((project) => (
                  <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="border-gray-200 overflow-hidden h-full bg-white">
                      <div className="h-48 overflow-hidden">
                        <AspectRatio ratio={16 / 9}>
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                          />
                        </AspectRatio>
                      </div>
                      <CardContent className="p-4">
                        <h4 className="text-xl font-semibold mb-2 text-black">{project.title}</h4>
                        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                        <CardDescription className="bg-accent-50 border-l-4 border-accent-500 p-3 italic">
                          "{project.insight}"
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="bg-gray-50 px-4 py-3">
                        <div className="text-accent-600 text-sm font-semibold flex items-center">
                          View Project Details
                        </div>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4 gap-2">
                <CarouselPrevious className="static translate-y-0 mx-2" />
                <CarouselNext className="static translate-y-0 mx-2" />
              </div>
            </Carousel>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
              <blockquote className="italic text-lg text-gray-600">
                "Elite Builders transformed our vision into reality with exceptional attention to detail and professionalism. They weren't just contractors; they were partners in our project."
              </blockquote>
              <div className="mt-4">
                <p className="font-semibold text-black">Michael Johnson</p>
                <p className="text-sm text-gray-500">Commercial Client</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
