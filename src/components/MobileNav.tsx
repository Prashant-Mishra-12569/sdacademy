import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { NavItem } from '@/types/nav';

interface MobileNavProps {
  navItems: NavItem[];
  handleNavClick: (href: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const MobileNav = ({ navItems, handleNavClick }: MobileNavProps) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <div className="px-4 md:px-6 py-2 md:py-4 space-y-1 md:space-y-2">
      {navItems.map((item, index) => (
        <div key={index} className="border-b border-gray-100 last:border-0">
          <div
            className="flex items-center justify-between py-3 md:py-4 cursor-pointer"
            onClick={() => {
              if (item.subItems) {
                setOpenSubmenu(openSubmenu === item.label ? null : item.label);
              } else {
                handleNavClick(item.href);
              }
            }}
          >
            <div className="flex items-center gap-3 md:gap-4">
              <item.icon className="h-5 w-5 md:h-6 md:w-6 text-sdblue" />
              <span className="text-gray-800 font-medium md:text-lg">
                {item.label}
              </span>
            </div>
            {item.subItems && (
              <ChevronDown 
                className={`h-5 w-5 md:h-6 md:w-6 text-gray-400 transition-transform duration-200 ${
                  openSubmenu === item.label ? 'rotate-180' : ''
                }`}
              />
            )}
          </div>
          
          {item.subItems && openSubmenu === item.label && (
            <div className="pl-10 md:pl-12 pb-2 md:pb-3 space-y-1 md:space-y-2 bg-gray-50 rounded-lg">
              {item.subItems.map((subItem, subIndex) => (
                <div
                  key={subIndex}
                  className="py-2 md:py-3 px-3 md:px-4 cursor-pointer text-gray-600 md:text-lg hover:text-sdblue hover:bg-gray-100 rounded-md transition-colors"
                  onClick={() => handleNavClick(subItem.href)}
                >
                  {subItem.label}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
