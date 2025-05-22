// src/data/chapters.ts
import { BookOpen, FileCode, Video, Puzzle, NotebookText, Presentation as SlidesIcon } from 'lucide-react'; // Using Presentation for Slides

export interface ChapterMetadata {
  id: string; // e.g., "chapter1", "chapter2"
  title: string;
  icon: React.ElementType;
  // Add any other top-level metadata needed for the sidebar or chapter listing
}

export const chapters: ChapterMetadata[] = [
  {
    id: 'chapter1',
    title: 'Chapter 1: Introduction to C# and .NET',
    icon: BookOpen,
  },
  {
    id: 'chapter2',
    title: 'Chapter 2: Core C# Programming Constructs',
    icon: FileCode,
  },
  {
    id: 'chapter3',
    title: 'Chapter 3: Object-Oriented Programming',
    icon: Puzzle,
  },
  // Add more chapters here
  // Example:
  // {
  //   id: 'videos-overview',
  //   title: 'Course Videos',
  //   icon: Video,
  // },
  // {
  //   id: 'slides-collection',
  //   title: 'All Slides',
  //   icon: SlidesIcon,
  // },
  // {
  //   id: 'homework-assignments',
  //   title: 'Homework & Solutions',
  //   icon: NotebookText,
  // },
];
