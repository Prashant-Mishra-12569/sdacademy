import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

const Enquiry = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    enquiryType: "",
    name: "",
    email: "",
    phone: "",
    fullAddress: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    toast({
      title: "Enquiry Submitted",
      description: "We'll get back to you soon!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0EA5E9] mb-12">
            Send us a Message
          </h1>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Section - Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Select
                  value={formData.enquiryType}
                  onValueChange={(value) => setFormData({ ...formData, enquiryType: value })}
                >
                  <SelectTrigger className="w-full bg-white/70 backdrop-blur-sm">
                    <SelectValue placeholder="Select Enquiry Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admission">Admission Enquiry</SelectItem>
                    <SelectItem value="general">General Enquiry</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                  </SelectContent>
                </Select>

                <Input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/70 backdrop-blur-sm"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />

                <Input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/70 backdrop-blur-sm"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />

                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white/70 backdrop-blur-sm"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />

                <Input
                  type="text"
                  placeholder="Full Address"
                  className="w-full bg-white/70 backdrop-blur-sm"
                  value={formData.fullAddress}
                  onChange={(e) => setFormData({ ...formData, fullAddress: e.target.value })}
                  required
                />

                <Textarea
                  placeholder="Your Message or Query"
                  className="w-full min-h-[120px] bg-white/70 backdrop-blur-sm"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] hover:opacity-90 text-white py-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group text-lg"
                >
                  <span>Submit Enquiry</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Right Section - Map */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.3446543788367!2d83.35655827499171!3d26.89031447679721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991446a0c332939%3A0x2d3146a0c0884722!2sS.D.%20ACADEMY!5e0!3m2!1sen!2sin!4v1708612805399!5m2!1sen!2sin"
                className="w-full h-full min-h-[500px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Enquiry;
