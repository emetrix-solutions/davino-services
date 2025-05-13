
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import EstimateForm from "@/components/EstimateForm";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import setupScrollAnimation from "@/utils/animateOnScroll";

const Index = () => {
  // Setup the animation on scroll effect
  setupScrollAnimation();

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Update page title
  useEffect(() => {
    document.title = "Elite Builders - Premier Construction Services";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyChooseUs />
        <CallToAction />
        <EstimateForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
