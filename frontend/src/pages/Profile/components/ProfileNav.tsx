import React from 'react';
import { NavLink } from 'react-router-dom';

const ProfileNav = () => {
  return (
    <div className="relative h-[48px] border-b-2 border-gray-600">
      

      <nav className="grid grid-cols-3 text-center h-full">
        <NavLink to="posts" className="px-4 py-2">Posts</NavLink>
        <NavLink to="replies" className="px-4 py-2">Replies</NavLink>
        <NavLink to="likes" className="px-4 py-2">Likes</NavLink>
      </nav>
    </div>
  );
};

export default ProfileNav;
