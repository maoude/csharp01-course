import React from 'react';
// User reported 'Youtube' and 'Github' as deprecated (ts(6385) in lucide-react.d.ts).
// These are the official names for these icons according to the Lucide documentation.
// This warning might be due to an issue in the type definition file of the
// specific lucide-react version being used (e.g., ^0.309.0).
// Consider updating lucide-react to its latest patch or minor version,
// or check the library's changelog for that version for correct icon names if they were changed.
import { Youtube, Linkedin, Github } from 'lucide-react';

// --- Configuration (can be moved to a central config file) ---
const YOUR_YOUTUBE_CHANNEL_URL = "https://www.youtube.com/yourchannel"; // REPLACE
const YOUR_LINKEDIN_URL = "https://www.linkedin.com/in/yourprofile"; // REPLACE
const YOUR_GITHUB_PAGE_URL = "https://github.com/yourusername"; // REPLACE

interface SocialLinksMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SocialLinksMenu: React.FC<SocialLinksMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const socialLinks = [
    // If 'Youtube' is indeed deprecated in your specific lucide-react version and the warning persists after update,
    // please consult the lucide-react documentation or changelog for that version to find the correct replacement icon name.
    { name: 'YouTube', url: YOUR_YOUTUBE_CHANNEL_URL, icon: Youtube },
    { name: 'LinkedIn', url: YOUR_LINKEDIN_URL, icon: Linkedin },
    // If 'Github' is indeed deprecated in your specific lucide-react version and the warning persists after update,
    // please consult the lucide-react documentation or changelog for that version to find the correct replacement icon name.
    { name: 'GitHub', url: YOUR_GITHUB_PAGE_URL, icon: Github },
  ];

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border dark:border-gray-700">
      {socialLinks.map(link => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          onClick={onClose} // Close menu on link click
        >
          <link.icon className="w-4 h-4 mr-2" />
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default SocialLinksMenu;
