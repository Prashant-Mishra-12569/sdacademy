import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Calendar, Book, Users, Phone, LogIn, Award, School, Info, Building, Star } from 'lucide-react';
import { NavItem } from '@/types/nav';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

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
      { label: 'Our Affiliation', href: '/about/affiliation' },
      { label: 'Management', href: '/about/management' },
      { label: 'Chairman\'s Message', href: '/about/chairman-message' },
      { label: 'Director\'s Message', href: '/about/director-message' },
      { label: 'Principal\'s Message', href: '/about/principal-message' },
      { label: 'Public Disclosure', href: '/about/public-disclosure' },
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
    label: 'Beyond',
    href: '/beyond-academic',
    icon: Award,
    subItems: [
      { label: 'Sports & Games', href: '/beyond-academic#sports' },
      { label: 'Dance & Music', href: '/beyond-academic#arts' },
      { label: 'Art & Craft', href: '/beyond-academic#craft' },
      { label: 'Yoga', href: '/beyond-academic#yoga' }
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
  { label: 'Login', href: '/login', icon: LogIn }
];

// Remove the Library option from the infrastructureLinks array
const infrastructureLinks = [
  {
    title: "Building",
    href: "/infrastructure/building",
  },
  {
    title: "Smart Class",
    href: "/infrastructure/smart-class",
  },
  {
    title: "Computer Lab",
    href: "/infrastructure/computer-lab",
  },
  {
    title: "Safety",
    href: "/infrastructure/safety",
  }
];

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      navigate(path);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(href);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-gradient-to-r from-white/95 to-blue-50/95 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <img 
              src="/SchoolLogo.png" 
              alt="School Logo" 
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-bold text-gray-800">
                SD Academy
              </span>
              <span className="text-[10px] md:text-xs text-gray-600">
                Excellence in Education
              </span>
            </div>
          </div>

          <div className="hidden md:block">
            <DesktopNav 
              navItems={navItems} 
              handleNavClick={handleNavClick}
            />
          </div>

          <div className="md:hidden">
            <MobileNav 
              navItems={navItems} 
              handleNavClick={handleNavClick}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </div>
        </div>
      </div>

      {/* Backdrop overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};
