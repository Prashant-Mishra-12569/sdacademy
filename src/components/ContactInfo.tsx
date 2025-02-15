import { MapPin, Phone, Mail } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      
      {/* Address */}
      <div className="flex items-start gap-2">
        <MapPin className="w-5 h-5 text-sdblue mt-1" />
        <p className="text-gray-700">
          Rapti Nagar, Near Shahpur Thana, Gorakhpur
        </p>
      </div>

      {/* Phone Numbers */}
      <div className="flex items-start gap-2">
        <Phone className="w-5 h-5 text-sdblue mt-1" />
        <p className="text-gray-700">
          +918881110745, +917388277496
        </p>
      </div>

      {/* Email */}
      <div className="flex items-start gap-2">
        <Mail className="w-5 h-5 text-sdblue mt-1" />
        <a 
          href="mailto:sdacademyho@gmail.com"
          className="text-gray-700 hover:text-sdblue"
        >
          sdacademyho@gmail.com
        </a>
      </div>

      {/* Map */}
      <div className="mt-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.3446543788367!2d83.35655827499171!3d26.89031447679721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991446a0c332939%3A0x2d3146a0c0884722!2sS.D.%20ACADEMY!5e0!3m2!1sen!2sin!4v1708612805399!5m2!1sen!2sin"
          width="100%"
          height="250"
          style={{ border: 0, borderRadius: '0.5rem' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}; 