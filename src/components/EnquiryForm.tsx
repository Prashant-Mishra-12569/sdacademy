import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { ADDRESSES, PHONE_NUMBERS, CONTACT_EMAILS } from '@/constants/contact';

export const EnquiryForm = () => {
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
    toast({
      title: "Enquiry Submitted Successfully!",
      description: "We'll get back to you soon.",
      duration: 3000,
    });
    setFormData({
      enquiryType: "",
      name: "",
      email: "",
      phone: "",
      fullAddress: "",
      message: ""
    });
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 w-full max-w-7xl mx-auto">
      {/* Contact Information Section */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-sdblue mb-6">Contact Information</h2>
        
        <div className="space-y-6">
          {/* Addresses */}
          <div className="space-y-4">
            <div className="flex items-start gap-3 group">
              <MapPin className="w-5 h-5 text-sdblue mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-semibold text-gray-800">Main Branch</h3>
                <p className="text-gray-600">{ADDRESSES.MAIN}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 group">
              <MapPin className="w-5 h-5 text-sdblue mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-semibold text-gray-800">Second Branch</h3>
                <p className="text-gray-600">{ADDRESSES.SECOND}</p>
              </div>
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="flex items-start gap-3 group">
            <Phone className="w-5 h-5 text-sdblue mt-1 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="font-semibold text-gray-800">Phone Numbers</h3>
              <p className="text-gray-600">{PHONE_NUMBERS.join(', ')}</p>
            </div>
          </div>

          {/* Email Addresses */}
          <div className="space-y-3">
            {Object.entries(CONTACT_EMAILS).map(([key, email]) => (
              <div key={key} className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-sdblue group-hover:scale-110 transition-transform" />
                <a 
                  href={`mailto:${email}`}
                  className="text-gray-600 hover:text-sdblue transition-colors"
                >
                  {email}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="mt-8 rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.5956576869307!2d83.3814157752671!3d26.789155976721045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145015195c359%3A0x477ad60165759ca3!2sS%20D%20ACADEMY%20%26%20TENDERCARE%20PLAYWAY%20RAPTINAGAR%20GORAKHPUR!5e0!3m2!1sen!2sin!4v1738936171984!5m2!1sen!2sin"
            className="w-full h-[300px] md:h-[400px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Enquiry Form Section */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-sdblue mb-6">Send us a Message</h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <Select
            onValueChange={(value) => setFormData({ ...formData, enquiryType: value })}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Enquiry Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admission">Admission Enquiry</SelectItem>
              <SelectItem value="general">General Enquiry</SelectItem>
              <SelectItem value="academic">Academic Enquiry</SelectItem>
              <SelectItem value="transport">Transport Enquiry</SelectItem>
              <SelectItem value="fee">Fee Structure Enquiry</SelectItem>
            </SelectContent>
          </Select>

          <div className="space-y-5">
            <Input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />

            <Input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-lg"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />

            <Input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-2 rounded-lg"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />

            <Input
              type="text"
              placeholder="Full Address"
              className="w-full px-4 py-2 rounded-lg"
              value={formData.fullAddress}
              onChange={(e) => setFormData({ ...formData, fullAddress: e.target.value })}
              required
            />

            <Textarea
              placeholder="Your Message or Query"
              className="w-full px-4 py-2 rounded-lg min-h-[120px]"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-sdblue hover:bg-blue-600 text-white py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <span>Submit Enquiry</span>
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>
      </div>
    </div>
  );
};
