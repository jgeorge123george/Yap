// src/pages/Profile/components/ProfileNav.tsx
import React from 'react';

export default function ProfileNav() {
  return (
    <div className="w-full border-b border-gray-300 flex justify-around">
      <button className="py-3 px-4 border-b-2 border-white text-white font-medium">
        Posts
      </button>
      <button className="py-3 px-4 text-gray-400 hover:text-white">
        Replies
      </button>
      <button className="py-3 px-4 text-gray-400 hover:text-white">
        Likes
      </button>
      <button className="py-3 px-4 text-gray-400 hover:text-white">
        Tagged
      </button>
    </div>
  );
}
