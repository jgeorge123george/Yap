// src/components/AppLayout.tsx
import { Link, Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6">
        <h1 className="text-2xl font-bold mb-8">Pulse</h1>
        <nav className="space-y-4">
          <Link to="/feed" className="block hover:text-blue-400 text-xl">📣 Feed</Link>
          <Link to="/trending" className="block hover:text-blue-400 text-xl">🔥 Trending</Link>
          <Link to="/news" className="block hover:text-blue-400 text-xl">📰 News</Link>
          <Link to="/profile" className="block hover:text-blue-400 text-xl">👤 Profile</Link>
          <Link to="/login" className="block text-sm text-gray-400 hover:text-red-500 mt-10">Logout</Link>
        </nav>
      </aside>

      {/* Dynamic content area */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
