import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Calendar, 
  Book, 
  Users, 
  Phone, 
  Mail, 
  LogIn, 
  Award, 
  School, 
  Info, 
  Building, 
  Star, 
  Menu, 
  X, 
  ChevronDown, 
  Bell, 
  Download, 
  Facebook, 
  Instagram, 
  Youtube,
  ChevronRight
} from 'lucide-react';
import { NavItem } from '@/types/nav';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from './ui/button';
import { NoticesDrawer } from './NoticesDrawer';
import { motion, AnimatePresence } from 'framer-motion';
import { AdmissionBanner } from './AdmissionBanner';

const navItems: NavItem[] = [
  { 
    label: 'Home', 
    href: '/', 
    icon: Users 
  },
  { 
    label: 'About', 
    href: '/about',
    icon: Building,
    subItems: [
      { label: 'Unique Choice', href: '/about/unique-choice' },
      { label: 'Vision & Mission', href: '/about/vision-mission' },
      { label: 'Success Saga', href: '/about/success-saga' },
      { label: "Chairman's Message", href: '/about/chairman-message' },
      { label: "Director's Message", href: '/about/director-message' },
      { label: "Principal's Message", href: '/about/principal-message' },
      { label: 'Management', href: '/about/management' },
      { label: 'Our Teachers', href: '/#teachers' },
      { label: 'Our Gallery', href: '/#gallery' },
      { label: 'Affiliation', href: '/about/affiliation' },
      { label: 'Public Disclosure', href: '/about/public-disclosure' }
    ]
  },
  {
    label: 'Infrastructure',
    href: '/infrastructure',
    icon: Building,
    subItems: [
      { label: 'School Building', href: '/infrastructure/building' },
      { label: 'Safety & Security', href: '/infrastructure/safety' },
      { label: 'Smart Classes', href: '/infrastructure/smart-class' },
      { label: 'Computer Lab', href: '/infrastructure/computer-lab' },
      { label: 'Science Lab', href: '/infrastructure/science-lab' },
      { label: 'Health & Hygiene', href: '/infrastructure/health' },
    ]
  },
  {
    label: 'Academic',
    href: '/academic',
    icon: Book,
    subItems: [
      { label: 'Primary', href: '/academic/primary' },
      { label: 'Middle', href: '/academic/middle' },
      { label: 'Senior', href: '/academic/senior' }
    ]
  },
  {
    label: 'Results',
    href: '/results',
    icon: Star,
    subItems: [
      { label: 'Academic', href: '/results/academic' },
      { label: 'Olympiad', href: '/results/olympiad' },
      { label: 'Competition', href: '/results/competition' },
      { label: 'Entrance', href: '/results/entrance' }
    ]
  },
  {
    label: 'Beyond Academic',
    href: '/beyond-academic',
    icon: Star,
    subItems: [
      { label: 'Sports & Games', href: '/beyond-academic/sports' },
      { label: 'Dance & Music', href: '/beyond-academic/dance-music' },
      { label: 'Art & Craft', href: '/beyond-academic/art-craft' },
      { label: 'Yoga', href: '/beyond-academic/yoga' }
    ]
  },
  {
    label: 'Essential Info',
    href: '/essential-info',
    icon: Info,
    subItems: [
      { label: 'School Uniform', href: '/essential-info/school-uniform' },
      { label: 'School Timing', href: '/essential-info/school-timing' },
      { label: 'Transport', href: '/essential-info/transport' },
      { label: 'Code of Conduct', href: '/essential-info/code-of-conduct' },
      { label: 'SDA in Newspaper', href: '/essential-info/sda-newspaper' },
      { label: 'Online Registration', href: '/essential-info/online-registration' },
      { label: 'Job Entrance', href: '/essential-info/job-entrance' }
    ]
  },
  { label: 'Contact', href: '/enquiry', icon: Phone },
];

const DesktopNav = ({ navItems, handleNavClick }: { navItems: NavItem[]; handleNavClick: (href: string) => void }) => {
  return (
    <nav className="flex items-center space-x-8">
      {navItems.map((item) => (
        <div key={item.href} className="relative group">
          <button
            onClick={() => handleNavClick(item.href)}
            className="text-[#003049] hover:text-[#003049]/80 transition-all duration-300 text-lg font-bold flex items-center group-hover:scale-105"
          >
            {item.label}
            {item.subItems && (
              <ChevronDown className="w-5 h-5 ml-1 text-[#003049] group-hover:text-[#003049]/80 transition-colors duration-300" />
            )}
          </button>
          {item.subItems && (
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-[#A2CEE8] rounded-md shadow-lg py-2 w-48">
                {item.subItems.map((child) => (
                  <button
                    key={child.href}
                    onClick={() => handleNavClick(child.href)}
                    className="w-full text-left px-4 py-2 text-base font-bold text-[#003049] hover:text-[#003049]/80 hover:bg-[#A2CEE8]/80 transition-all duration-300"
                  >
                    {child.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent body scroll when mobile menu is open
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Close mobile menu on location change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  }, [location]);

  return (
    <header className="w-full">
      {/* Fixed Navigation Container */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full bg-[#A2CEE8] shadow-sm">
        {/* Top Bar */}
        <div className="bg-[#003049] text-white py-1">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="flex items-center justify-between">
              {/* Contact Info */}
              <div className="hidden md:flex items-center space-x-4">
                <a href="tel:+918881110735" className="flex items-center text-white hover:text-yellow-300 transition-all duration-300 text-sm">
                  <Phone className="w-3.5 h-3.5 mr-1" />
                  <span>+91 8881110735</span>
                </a>
                <a href="mailto:info@sdacademy.com" className="flex items-center text-white hover:text-yellow-300 transition-all duration-300 text-sm">
                  <Mail className="w-3.5 h-3.5 mr-1" />
                  <span>info@sdacademy.com</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-3 w-full md:w-auto justify-end">
                <a
                  href="https://facebook.com/sdacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#1877F2] transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://instagram.com/sdacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#E4405F] transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://youtube.com/sdacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FF0000] transition-all duration-300 hover:scale-110"
                >
                  <Youtube className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="bg-[#A2CEE8] py-2">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="flex items-center justify-between gap-2">
              {/* Logo */}
              <div className="flex-shrink-0">
                <a href="/" className="flex items-center group">
                  <img 
                    src="/favicon.png" 
                    alt="SD Academy Logo" 
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="ml-2">
                    <div className="flex items-center">
                      <span className="text-black font-bold text-base sm:text-xl md:text-2xl whitespace-nowrap group-hover:text-black/80 transition-colors duration-300">S.D. Academy</span>
                    </div>
                    <span className="text-black/90 text-xs sm:text-sm font-medium">Excellence in Education</span>
                  </div>
                </a>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center">
                <DesktopNav navItems={navItems} handleNavClick={(href) => handleNavClick(href)} />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={handleMobileMenuToggle}
                className="lg:hidden p-2 rounded-md bg-white/20 text-black hover:bg-white/30 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div 
            className={`lg:hidden fixed inset-0 bg-black/50 transition-opacity duration-300 ${
              isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            onClick={handleMobileMenuToggle}
          >
            <div 
              className={`fixed right-0 top-0 h-full w-[280px] bg-[#A2CEE8] shadow-xl transform transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
              onClick={e => e.stopPropagation()}
            >
              {/* Mobile Menu Header */}
              <div className="p-4 bg-[#003049] text-white flex items-center justify-between">
                <span className="font-bold text-lg">Menu</span>
                <button
                  onClick={handleMobileMenuToggle}
                  className="p-1 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="overflow-y-auto h-[calc(100%-60px)]">
                <div className="p-4">
                  <ul className="space-y-2">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <button
                          onClick={() => handleNavClick(item.href)}
                          className="w-full text-left px-3 py-2 rounded-md text-[#003049] hover:bg-white/30 transition-all duration-300 font-bold text-base flex items-center justify-between"
                        >
                          <span>{item.label}</span>
                          {item.subItems && (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </button>
                        {item.subItems && (
                          <ul className="pl-4 mt-1 space-y-1">
                            {item.subItems.map((child) => (
                              <li key={child.href}>
                                <button
                                  onClick={() => handleNavClick(child.href)}
                                  className="w-full text-left px-3 py-2 rounded-md text-[#003049]/90 hover:bg-white/30 transition-all duration-300 text-sm font-medium"
                                >
                                  {child.label}
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>

                  {/* Mobile Quick Actions */}
                  <div className="mt-6 space-y-3">
                    <a href="tel:+918881110735" className="flex items-center text-[#003049] hover:bg-white/30 transition-all duration-300 px-3 py-2 rounded-md">
                      <Phone className="w-4 h-4 mr-3" />
                      <span className="font-medium">+91 8881110735</span>
                    </a>
                    <a href="mailto:info@sdacademy.com" className="flex items-center text-[#003049] hover:bg-white/30 transition-all duration-300 px-3 py-2 rounded-md">
                      <Mail className="w-4 h-4 mr-3" />
                      <span className="font-medium">info@sdacademy.com</span>
                    </a>
                  </div>

                  {/* Mobile Social Links */}
                  <div className="mt-6 flex items-center justify-center space-x-6">
                    <a
                      href="https://facebook.com/sdacademy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#003049] hover:scale-110 transition-all duration-300"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://instagram.com/sdacademy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#003049] hover:scale-110 transition-all duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://youtube.com/sdacademy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#003049] hover:scale-110 transition-all duration-300"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Admission Banner */}
        <div className="bg-white h-8 flex items-center overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center">
            <span className="text-[#003049] font-bold mx-4 flex items-center text-xs sm:text-sm">
              <span className="bg-yellow-400 text-[#003049] px-1.5 py-0.5 rounded text-[10px] sm:text-xs mr-1.5">New</span>
              Admissions Open 2024-25
            </span>
            <span className="text-[#003049] mx-4 text-xs sm:text-sm">
              Pre-Primary to Class 10th
            </span>
            <span className="text-[#003049] mx-4 text-xs sm:text-sm">
              <span className="text-red-500 font-bold">Early Bird Discount</span>
            </span>
            <span className="text-[#003049] mx-4 text-xs sm:text-sm">
              Call: +91 8881110735
            </span>
            {/* Duplicate content for seamless loop */}
            <span className="text-[#003049] font-bold mx-4 flex items-center text-xs sm:text-sm">
              <span className="bg-yellow-400 text-[#003049] px-1.5 py-0.5 rounded text-[10px] sm:text-xs mr-1.5">New</span>
              Admissions Open 2024-25
            </span>
            <span className="text-[#003049] mx-4 text-xs sm:text-sm">
              Pre-Primary to Class 10th
            </span>
            <span className="text-[#003049] mx-4 text-xs sm:text-sm">
              <span className="text-red-500 font-bold">Early Bird Discount</span>
            </span>
            <span className="text-[#003049] mx-4 text-xs sm:text-sm">
              Call: +91 8881110735
            </span>
          </div>
        </div>
      </div>

      {/* Add styles for the marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
      `}</style>

      {/* Spacer for Fixed Header - Adjusted for different screen sizes */}
      <div className="h-[116px] sm:h-[124px] md:h-[132px]"></div>
    </header>
  );
};