import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CourseIntro from './components/CourseIntro'; // For the main landing page
// import MainContent from './components/MainContent'; // MainContent is no longer used directly by App.tsx for chapter content

import { Sun, Moon } from 'lucide-react'; // For dark mode toggle
import { chapters as chapterDataList } from './data/chapters'; // To get initial chapter ID

// --- Placeholder Chapter Components ---
// Replace these with actual imports from './chapters/ChapterX' when created
const PlaceholderChapterComponent: React.FC<{ title: string }> = ({ title }) => (
  <div className="p-6 md:p-8 flex-1 overflow-y-auto bg-white dark:bg-gray-900">
    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{title}</h1>
    <p className="mt-4 text-gray-600 dark:text-gray-300">Content for this chapter will be available soon.</p>
    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
      This is a placeholder. You'll need to create the actual component at <code>src/chapters/{title.split(" ")[0]}/index.tsx</code>.
    </p>
  </div>
);

const Chapter1: React.FC = () => <PlaceholderChapterComponent title="Chapter1" />; // Example placeholder
const Chapter2: React.FC = () => <PlaceholderChapterComponent title="Chapter2" />; // Example placeholder
const Chapter3: React.FC = () => <PlaceholderChapterComponent title="Chapter3" />; // Example placeholder

// Map chapter IDs to their components
// Ensure keys match the 'id' from src/data/chapters.ts
const chapterComponents: { [key: string]: React.ReactNode } = {
  chapter1: <Chapter1 />,
  chapter2: <Chapter2 />,
  chapter3: <Chapter3 />,
  // Add more chapters here as you create them, e.g.:
  // chapter4: <Chapter4 />,
};
// --- End Placeholder Chapter Components ---


const App: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isDesktopSidebarVisible, setIsDesktopSidebarVisible] = useState(true); 
  
  // selectedChapterId will store the ID of the chapter, e.g., "chapter1"
  // Default to null, so CourseIntro shows initially.
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null); 
  
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode) return savedMode === 'true';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1024) { // lg breakpoint
      setIsMobileSidebarOpen(false); 
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); 
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleSidebar = () => {
    if (window.innerWidth < 1024) {
      setIsMobileSidebarOpen(prev => !prev);
    } else {
      setIsDesktopSidebarVisible(prev => !prev);
    }
  };
  
  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  const handleSelectChapter = (id: string) => {
    setSelectedChapterId(id);
    // If on mobile, also close the sidebar after selection
    if (window.innerWidth < 1024) {
      closeMobileSidebar();
    }
  };

  // Determine what content to render
  const currentContent = selectedChapterId ? chapterComponents[selectedChapterId] : <CourseIntro />;

  return (
    <div className={`flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-gray-900 dark:text-gray-100`}>
      {/* Mobile/Overlay Sidebar */}
      <Sidebar 
        isOpen={isMobileSidebarOpen} 
        onClose={closeMobileSidebar} 
        selectedChapterId={selectedChapterId} 
        onSelectChapter={handleSelectChapter} // Changed from onSelectItem
        isPermanentSidebar={false} 
      />
      
      {/* Static/Permanent Sidebar for Larger Screens */}
      <div className={`hidden lg:flex lg:flex-shrink-0 transition-all duration-300 ease-in-out
                       ${isDesktopSidebarVisible ? 'lg:w-64 xl:w-72' : 'lg:w-0'}`} // Adjusted width
      >
        {isDesktopSidebarVisible && (
          <div className="w-full h-full">
            <Sidebar
                isOpen={true} 
                onClose={() => {}} 
                selectedChapterId={selectedChapterId}
                onSelectChapter={handleSelectChapter} // Changed from onSelectItem
                isPermanentSidebar={true}
            />
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          toggleSidebar={toggleSidebar} 
          isSidebarOpen={window.innerWidth < 1024 ? isMobileSidebarOpen : isDesktopSidebarVisible} 
        />
        {/* Main content area now dynamically renders CourseIntro or the selected Chapter component */}
        {currentContent}
      </div>
      
      <button
        onClick={() => setDarkMode(prev => !prev)}
        className="fixed bottom-4 right-4 bg-gray-700 hover:bg-gray-600 dark:bg-gray-200 dark:hover:bg-gray-300 text-white dark:text-gray-800 p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
};

export default App;
