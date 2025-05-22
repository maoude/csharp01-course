import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, Menu } from 'lucide-react';
import SocialLinksMenu from './SocialLinksMenu'; // Import the SocialLinksMenu component

// --- Configuration (can be moved to a central config file) ---
const COURSE_TITLE = "Introduction to Programming Using C#";

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isSidebarOpen }) => {
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false);
  const socialMenuRef = useRef<HTMLDivElement>(null);

  const toggleSocialMenu = () => {
    setIsSocialMenuOpen(prev => !prev);
  };
  
  // Close social menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (socialMenuRef.current && !socialMenuRef.current.contains(event.target as Node)) {
        setIsSocialMenuOpen(false);
      }
    };
    if (isSocialMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSocialMenuOpen]);

  return (
    <header className="bg-gray-800 dark:bg-gray-900 text-white p-4 flex items-center justify-between shadow-md sticky top-0 z-30"> {/* z-index lower than sidebar overlay */}
      <div className="flex items-center">
        <button 
          onClick={toggleSidebar} 
          className="mr-3 p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isSidebarOpen && window.innerWidth < 1024 ? <ChevronLeft size={24} /> : <Menu size={24} />}
        </button>
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold truncate">{COURSE_TITLE}</h1>
      </div>
      <div className="relative" ref={socialMenuRef}>
        <button 
            onClick={toggleSocialMenu} 
            className="p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="User social links"
            aria-expanded={isSocialMenuOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-cog"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><circle cx="18" cy="15" r="3"/><path d="m19.5 17.5-.4.4"/><path d="m17.5 19.5.4-.4"/><path d="m16.2 13.8-.4.4"/><path d="m13.8 16.2.4-.4"/></svg>
        </button>
        <SocialLinksMenu isOpen={isSocialMenuOpen} onClose={() => setIsSocialMenuOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
