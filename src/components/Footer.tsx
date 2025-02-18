import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Users } from 'lucide-react';
import { CONTACT_EMAILS, ADDRESSES, PHONE_NUMBERS } from '@/constants/contact';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

// Function to get visitor count from localStorage
const getVisitorCount = () => {
  const count = localStorage.getItem('visitorCount');
  return count ? parseInt(count) : 0;
};

// Function to increment and save visitor count
const incrementVisitorCount = () => {
  const currentCount = getVisitorCount();
  const newCount = currentCount + 1;
  localStorage.setItem('visitorCount', newCount.toString());
  return newCount;
};

export const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isCounterVisible, setIsCounterVisible] = useState(false);

  useEffect(() => {
    // Check if this is a new session
    const lastVisitTime = localStorage.getItem('lastVisitTime');
    const currentTime = new Date().getTime();
    const sessionTimeout = 30 * 60 * 1000; // 30 minutes

    if (!lastVisitTime || currentTime - parseInt(lastVisitTime) > sessionTimeout) {
      // Increment count only if it's a new session
      const newCount = incrementVisitorCount();
      setVisitorCount(newCount);
      localStorage.setItem('lastVisitTime', currentTime.toString());
    } else {
      // Just display the current count
      setVisitorCount(getVisitorCount());
    }

    // Animate counter after a short delay
    const timer = setTimeout(() => {
      setIsCounterVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Convert CONTACT_EMAILS object to array
  const emailList = Object.entries(CONTACT_EMAILS).map(([key, email]) => ({
    key,
    email
  }));

  return (
    <footer className="bg-[#003049] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-gray-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/admission" className="hover:text-gray-300 transition-colors">
                  Admission
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-gray-300 transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">Contact Info</h3>
            <ul className="space-y-2">
              {PHONE_NUMBERS.map((phone, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-300" />
                  <span>{phone}</span>
                </li>
              ))}
              {emailList.map(({ key, email }) => (
                <li key={key} className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-300" />
                  <a href={`mailto:${email}`} className="hover:text-gray-300 transition-colors">
                    {email}
                  </a>
                </li>
              ))}
              {Object.entries(ADDRESSES).map(([key, address]) => (
                <li key={key} className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-300" />
                  <span>{address}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877F2] hover:text-[#1877F2]/90 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E4405F] hover:text-[#E4405F]/90 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF0000] hover:text-[#FF0000]/90 transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Visitor Counter
            </h3>
            <div 
              className={`transform transition-all duration-1000 ease-out ${
                isCounterVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-4 opacity-0'
              }`}
            >
              <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-full">
                    <Users className="w-6 h-6 text-gray-300" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Total Visitors</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                      {visitorCount.toLocaleString()}
                    </div>
                  </div>
                </div>
                <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-white/20 rounded-full transition-all duration-1000"
                    style={{ 
                      width: isCounterVisible ? '100%' : '0%',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} S.D. Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
