
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-black to-construction-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
          Ready to Start Your Construction Project?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Contact us today for a free consultation and estimate. Let's build something remarkable together.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button className="bg-accent-600 hover:bg-accent-700 text-white py-6 px-8 text-lg" asChild>
            <a href="#estimate">
              Request Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 py-6 px-8 text-lg" asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
