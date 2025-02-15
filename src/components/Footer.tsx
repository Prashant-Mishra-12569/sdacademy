import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { CONTACT_EMAILS, ADDRESSES, PHONE_NUMBERS } from '@/constants/contact';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0EA5E9] to-[#8B5CF6] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">About S.D. Academy</h3>
            <p className="text-blue-50">
              Nurturing Tomorrow's Leaders through quality education and holistic development.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-yellow-300 transition-colors">About Us</a></li>
              <li><a href="/essential-info/online-registration" className="hover:text-yellow-300 transition-colors">Admissions</a></li>
              <li><a href="/academic" className="hover:text-yellow-300 transition-colors">Academics</a></li>
              <li><a href="/enquiry" className="hover:text-yellow-300 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">Contact Info</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>{PHONE_NUMBERS.join(', ')}</span>
              </p>
              
              <a 
                href={`mailto:${CONTACT_EMAILS.PRINCIPAL}`} 
                className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>{CONTACT_EMAILS.PRINCIPAL}</span>
              </a>
              
              <a 
                href={`mailto:${CONTACT_EMAILS.GENERAL}`} 
                className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>{CONTACT_EMAILS.GENERAL}</span>
              </a>
              
              <a 
                href={`mailto:${CONTACT_EMAILS.ADMISSIONS}`} 
                className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>{CONTACT_EMAILS.ADMISSIONS}</span>
              </a>

              <div className="space-y-2">
                <p className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Main Branch: {ADDRESSES.MAIN}</span>
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>Second Branch: {ADDRESSES.SECOND}</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/sdagorakhpur/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-yellow-300 transition-colors transform hover:scale-110"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="http://instagram.com/sdagorakhpur" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-yellow-300 transition-colors transform hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="http://youtube.com/@sdacademygorakhpur" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-yellow-300 transition-colors transform hover:scale-110"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-300/30 mt-8 pt-8 text-center">
          <p className="text-blue-50">&copy; {new Date().getFullYear()} S.D. Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
