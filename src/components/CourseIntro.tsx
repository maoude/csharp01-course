import React from 'react';

const CourseIntro: React.FC = () => (
  <section className="p-6 md:p-8 bg-white dark:bg-gray-900 flex-1 overflow-y-auto"> {/* Added flex-1 and overflow for layout consistency */}
    <div className="max-w-3xl mx-auto"> {/* Centering content */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        Introduction to C# Programming
      </h1>
      <p className="mb-6 text-md sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        This course teaches the fundamentals of C# through structured lectures, real exercises, and guided examples. 
        Learn to build robust applications, understand object-oriented principles, and prepare for advanced C# development.
      </p>
      
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
          <span role="img" aria-label="Instructor" className="mr-2">👨‍🏫</span> Instructor
        </h2>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow">
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Dr. Mohamad Aoude, PhD</strong>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            PhD in Telecommunications Engineering
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Senior educator and AI consultant with over 15 years of experience teaching C#, Artificial Intelligence, 
            and core programming fundamentals to university students and professionals. Passionate about making complex topics accessible and engaging.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default CourseIntro;
