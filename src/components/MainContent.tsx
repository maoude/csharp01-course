import React from 'react';
interface CourseItem {
  title: string;
  type: 'page' | 'video' | 'pdf';
  content?: string;
  url?: string;
}

interface MainContentProps {
  item: CourseItem | undefined;
}

const MainContent: React.FC<MainContentProps> = ({ item }) => {
  if (!item) {
    return (
        <div className="flex-1 p-6 md:p-8 bg-white dark:bg-gray-900 overflow-y-auto">
            <div className="text-center py-10">
                <h2 className="text-xl text-gray-600 dark:text-gray-400">Select an item from the menu to view content.</h2>
            </div>
        </div>
    );
  }

  return (
    <main className="flex-1 p-6 md:p-8 bg-white dark:bg-gray-900 overflow-y-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-b pb-3 dark:border-gray-700">{item.title}</h2>
      
      {item.type === 'page' && (
        <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
          {/* For security, if content can be HTML, consider sanitizing or using dangerouslySetInnerHTML with caution */}
          <p>{item.content}</p>
        </div>
      )}

      {item.type === 'video' && item.url && (
        // Ensure your Tailwind config includes aspect-ratio plugin or add custom CSS for it
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg bg-black">
          <iframe
            src={item.url}
            title={item.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      )}

      {item.type === 'pdf' && item.url && (
        // Height calculation might need adjustment based on header/footer heights
        <div className="h-[calc(100vh-180px)] md:h-[calc(100vh-200px)] rounded-lg overflow-hidden shadow-lg border dark:border-gray-700">
          <iframe
            src={item.url}
            title={item.title}
            className="w-full h-full border-0"
          >
            <div className="p-4 text-gray-700 dark:text-gray-300">
              <p>Your browser does not support embedding PDFs directly.</p>
              <p>Please download the PDF to view it: 
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-indigo-600 dark:text-indigo-400 hover:underline ml-1"
                >
                  Download PDF: {item.title}
                </a>.
              </p>
            </div>
          </iframe>
        </div>
      )}
       {!['page', 'video', 'pdf'].includes(item.type) && (
         <p className="text-red-500 dark:text-red-400">Error: Unknown content type specified for this item.</p>
       )}
    </main>
  );
};

export default MainContent;
