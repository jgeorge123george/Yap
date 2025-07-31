import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/dashboardComponents/AppLayout.tsx';
import React from 'react'; 
import LoginForm from './components/accountComponents/LoginForm.tsx';
import AccountCreation from './components/accountComponents/AccountCreation.tsx';
import Trending from './pages/Trending.tsx';
import Feed from './pages/Feed.tsx';
import News from './pages/News.tsx';
import Profile from './pages/Profile/Profile.tsx';
import Posts from './pages/Profile/components/Posts.tsx';
import Replies from './pages/Profile/components/Replies.tsx';
import Likes from './pages/Profile/components/Likes.tsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/createAccount" element={<AccountCreation />} />

        <Route path="/" element={<AppLayout />}>
          <Route path="feed" element={<Feed />} />
          <Route path="trending" element={<Trending />} />
          <Route path="news" element={<News />} />

          {/* Profile with nested child routes */}
          <Route path="profile" element={<Profile />}>
            <Route index element={<Posts />} /> {/* default to /profile/posts */}
            <Route path="posts" element={<Posts />} />
            <Route path="replies" element={<Replies />} />
            <Route path="likes" element={<Likes />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
