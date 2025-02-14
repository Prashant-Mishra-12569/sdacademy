import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavItem } from '@/types/nav';

interface MobileNavProps {
  navItems: NavItem[];
  handleNavClick: (href: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const MobileNav = ({ navItems, handleNavClick, isOpen, setIsOpen }: MobileNavProps) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-gray-600" />
        ) : (
          <Menu className="h-6 w-6 text-gray-600" />
        )}
      </button>

      {/* Mobile Menu */}
      <div 
        className={`absolute left-0 right-0 top-16 bg-white shadow-lg transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{
          maxHeight: isOpen ? 'calc(100vh - 64px)' : '0',
          overflow: 'hidden'
        }}
      >
        <div className="overflow-y-auto max-h-[calc(100vh-64px)]">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-gray-100">
              <button
                className="flex items-center justify-between w-full p-4 hover:bg-gray-50"
                onClick={() => {
                  if (item.subItems) {
                    setOpenSubmenu(openSubmenu === item.label ? null : item.label);
                  } else {
                    handleNavClick(item.href);
                    setIsOpen(false);
                  }
                }}
              >
                <div className="flex items-center gap-3">
                  {item.icon && <item.icon className="h-5 w-5 text-gray-600" />}
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                {item.subItems && (
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                      openSubmenu === item.label ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>

              {/* Submenu */}
              {item.subItems && openSubmenu === item.label && (
                <div className="bg-gray-50">
                  {item.subItems.map((subItem) => (
                    <button
                      key={subItem.label}
                      className="w-full p-4 pl-12 text-sm text-gray-600 hover:bg-gray-100 text-left"
                      onClick={() => {
                        handleNavClick(subItem.href);
                        setIsOpen(false);
                      }}
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};
