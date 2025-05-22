
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Phone, Mail, Send } from "lucide-react";
import { Label } from "@/components/ui/label";

const projectTypes = [
  "Residential Construction",
  "Commercial Construction",
  "Renovation",
  "Extension",
  "Interior Design",
  "Other"
];

const EstimateForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    startDate: "",
    budget: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, projectType: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Estimate Request Received",
      description: "We'll contact you within 24-48 hours to discuss your project.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      startDate: "",
      budget: "",
      message: ""
    });
  };

  return (
    <section id="estimate" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-display text-center">
            Request a Free Estimate
          </h2>
          <p className="text-lg mb-10 text-center text-gray-300">
            Tell us about your project, and we'll get back to you with a detailed quote.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-construction-950 border-construction-800 focus:border-accent-500 text-white"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="pl-10 bg-construction-950 border-construction-800 focus:border-accent-500 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                    className="pl-10 bg-construction-950 border-construction-800 focus:border-accent-500 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectType">Project Type</Label>
                <Select onValueChange={handleSelectChange} value={formData.projectType}>
                  <SelectTrigger className="bg-construction-950 border-construction-800 focus:border-accent-500 text-white">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent className="bg-construction-950 border-construction-800">
                    {projectTypes.map((type) => (
                      <SelectItem key={type} value={type} className="focus:bg-construction-900">
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="startDate">Desired Start Date</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="startDate"
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="pl-10 bg-construction-950 border-construction-800 focus:border-accent-500 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Estimated Budget</Label>
                <Input
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="$"
                  className="bg-construction-950 border-construction-800 focus:border-accent-500 text-white"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Project Details</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={5}
                className="bg-construction-950 border-construction-800 focus:border-accent-500 text-white"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full py-6 text-lg bg-accent-600 hover:bg-accent-700"
            >
              <Send className="mr-2 h-5 w-5" />
              Submit Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EstimateForm;
