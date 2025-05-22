import React from 'react';
import { BookOpen, X } from 'lucide-react'; // Added X for potential close button on mobile overlay
import { chapters, ChapterMetadata } from '@/data/chapters'; // Assuming ChapterMetadata is exported from chapters.ts

interface SidebarProps {
  isOpen: boolean; // For mobile/overlay state
  onClose: () => void; // To close mobile/overlay sidebar
  selectedChapterId: string | null;
  onSelectChapter: (id: string) => void; // Renamed for clarity, was onSelect
  isPermanentSidebar: boolean; // To distinguish mobile overlay from permanent desktop
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen, 
  onClose, 
  selectedChapterId, 
  onSelectChapter,
  isPermanentSidebar
}) => {
  
  const sidebarNavigationContent = (
    <nav>
      <ul>
        {chapters.map((chapter: ChapterMetadata) => (
          <li key={chapter.id} className="mb-1">
            <button
              onClick={() => {
                onSelectChapter(chapter.id);
                if (!isPermanentSidebar && isOpen) { // Close mobile sidebar on selection
                  onClose();
                }
              }}
              className={`w-full flex items-center text-left py-2.5 px-3 rounded-md transition-colors duration-150
                          ${selectedChapterId === chapter.id 
                            ? 'bg-indigo-600 text-white dark:bg-indigo-500' 
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
              aria-current={selectedChapterId === chapter.id ? "page" : undefined}
            >
              <BookOpen className="w-4 h-4 mr-2.5 flex-shrink-0" />
              <span className="truncate text-sm font-medium">{chapter.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );

  const sidebarHeader = (
    <div className={`flex justify-between items-center mb-5 ${isPermanentSidebar ? '' : 'lg:hidden'}`}>
      <h2 className="text-base font-semibold text-gray-700 dark:text-gray-200">Course Chapters</h2>
      {!isPermanentSidebar && (
        <button 
          onClick={onClose} 
          className="p-1.5 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 lg:hidden"
          aria-label="Close menu"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );

  if (isPermanentSidebar) {
    return (
      <aside className="h-full bg-gray-50 dark:bg-gray-800 w-full p-4 shadow-sm border-r dark:border-gray-700 overflow-y-auto">
        {sidebarHeader}
        {sidebarNavigationContent}
      </aside>
    );
  }

  // Mobile/Overlay Sidebar
  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        ></div>
      )}
      <aside 
        className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 w-64 sm:w-72 p-4 transform transition-transform duration-300 ease-in-out shadow-xl z-50
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}
        aria-label="Course navigation"
        role="dialog"
        aria-modal="true"
      >
        {sidebarHeader}
        {sidebarNavigationContent}
      </aside>
    </>
  );
};

export default Sidebar;
