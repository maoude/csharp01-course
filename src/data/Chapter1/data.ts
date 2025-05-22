// src/chapters/Chapter1/data.ts

export interface ChapterDetail {
  title: string;
  description: string;
  videoUrl?: string;
  slidesUrl?: string;
  codeSamplesUrl?: string;
  homeworkPromptUrl?: string;
  homeworkSolutionUrl?: string;
  learningOutcomes: string[];
}

export const chapter1Data: ChapterDetail = {
  title: 'Chapter 1: Introduction to C# and .NET',
  description: `This chapter introduces the fundamentals of the C# programming language and the .NET ecosystem. 
We will cover the history of C#, its key features, setting up your development environment (Visual Studio/VS Code), 
and writing your first "Hello, World!" application. You will also get an overview of the .NET Framework, .NET Core, and the modern .NET platform.`,
  videoUrl: "https://www.youtube.com/embed/your-video-id", // Replace or omit
  slidesUrl: "/chapters/Chapter1/slides.pdf",
  codeSamplesUrl: "https://github.com/yourusername/csharp-course/tree/main/Chapter1",
  homeworkPromptUrl: "/chapters/Chapter1/homework.pdf",
  homeworkSolutionUrl: "/chapters/Chapter1/solution.pdf",
  learningOutcomes: [
    "Understand the history and evolution of C#.",
    "Set up a C# development environment using VS Code or Visual Studio.",
    "Write and run your first C# program.",
    "Describe the .NET platform and its components."
  ]
};
