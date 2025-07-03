import { useState } from 'react';


// src/components/postComponents/PostButton.tsx
interface PostButtonProps {
  onClick: () => void;
  className?: string;
}

export default function PostButton({ onClick, className = '' }: PostButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg ${className}`}
    >
      +
    </button>
  );
}
