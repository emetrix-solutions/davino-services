
import { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Home, ClipboardList, Edit, Calendar } from "lucide-react";

const services = [
  {
    icon: <Home className="h-10 w-10 text-accent-600 mb-4" />,
    title: "Residential Construction",
    description: "Custom home building with premium materials and craftsmanship, designed to exceed your expectations and built to last generations.",
  },
  {
    icon: <Building className="h-10 w-10 text-accent-600 mb-4" />,
    title: "Commercial Projects",
    description: "Efficient and strategic commercial construction that prioritizes functionality, durability, and timely project completion.",
  },
  {
    icon: <Edit className="h-10 w-10 text-accent-600 mb-4" />,
    title: "Renovations",
    description: "Transformative renovation services that modernize and enhance your existing spaces while maintaining their original character.",
  },
  {
    icon: <ClipboardList className="h-10 w-10 text-accent-600 mb-4" />,
    title: "Project Management",
    description: "Comprehensive oversight from initial concept to completion, ensuring quality, efficiency, and adherence to timelines and budgets.",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 heading-underline inline-block text-black">
            Our Services
          </h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            We offer comprehensive construction solutions tailored to meet your specific needs and vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => (cardRefs.current[index] = el)}
              className="animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full service-card border-none shadow-lg hover:shadow-xl">
                <CardHeader className="text-center pb-2">
                  <div className="flex justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-black">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
