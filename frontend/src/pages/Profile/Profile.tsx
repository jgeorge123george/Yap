// src/pages/Profile/Profile.tsx
import React from 'react';
import ProfileNav from './components/ProfileNav.tsx';
import { Outlet } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="px-8 py-4">
      <h1 className="text-2xl font-bold mb-4">👤 My Profile</h1>
      <ProfileNav />
      <div className="mt-6">
        <Outlet /> {/* This is where Posts / Replies / Likes appear */}
      </div>
    </div>
  );
}
