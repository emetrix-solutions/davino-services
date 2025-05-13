
import { useEffect, useRef } from "react";
import { Check } from "lucide-react";

const features = [
  "40+ years of industry experience",
  "Certified and skilled craftsmen",
  "Premium materials and finishes",
  "Transparent pricing and processes",
  "On-time project completion",
  "Comprehensive warranty coverage"
];

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={contentRef}
            className="animate-on-scroll"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display heading-underline">
              Why Choose Elite Builders
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              For over four decades, Elite Builders has maintained a reputation for exceptional quality, integrity, and client satisfaction in all aspects of construction.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent-100 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-accent-600" />
                  </div>
                  <p className="text-gray-600">{feature}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
              <blockquote className="italic text-lg text-gray-600">
                "Elite Builders transformed our vision into reality with exceptional attention to detail and professionalism. They weren't just contractors; they were partners in our project."
              </blockquote>
              <div className="mt-4">
                <p className="font-semibold">Michael Johnson</p>
                <p className="text-sm text-gray-500">Commercial Client</p>
              </div>
            </div>
          </div>
          
          <div 
            ref={imageRef}
            className="animate-on-scroll"
          >
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-64 h-64 bg-accent-100 rounded-lg -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80" 
                alt="Construction project" 
                className="rounded-lg shadow-xl w-full h-auto" 
              />
              <div className="absolute -right-4 -bottom-4 w-full h-32 bg-construction-800 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
