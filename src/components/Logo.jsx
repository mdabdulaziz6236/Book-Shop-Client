import React from 'react';

export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Book Icon */}
        <path 
          d="M12 6.253V19.253M12 6.253C10.832 5.477 9.246 5 7.5 5C5.754 5 4.168 5.477 3 6.253V19.253C4.168 18.477 5.754 18 7.5 18C9.246 18 10.832 18.477 12 19.253M12 6.253C13.168 5.477 14.754 5 16.5 5C18.246 5 19.832 5.477 21 6.253V19.253C19.832 18.477 18.246 18 16.5 18C14.754 18 13.168 18.477 12 19.253" 
          stroke="currentColor" 
          className="text-primary"
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* Bookmark Icon */}
        <path 
          d="M16 5V10L14.5 9L13 10V5" 
          className="fill-secondary text-secondary" 
          stroke="none"
        />
      </svg>
      
      {/* Logo Text */}
      <span className="text-2xl font-bold text-primary">
        Book<span className="text-secondary">Shop</span>
      </span>
    </div>
  );
}