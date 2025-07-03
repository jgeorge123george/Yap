// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/dashboardComponents/AppLayout.tsx'

import LoginForm from './components/accountComponents/LoginForm.tsx';
import AccountCreation from './components/accountComponents/AccountCreation.tsx';
import Trending from './pages/Trending.tsx';
import Feed from './pages/Feed.tsx';
import News from './pages/News.tsx';
import Profile from './pages/Profile/Profile.tsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/createAccount" element={<AccountCreation />} />

        <Route path="/" element={<AppLayout />}>
          <Route path="login" element={<LoginForm />} />
          <Route path="createAccount" element={<AccountCreation />} />
          <Route path="feed" element={<Feed />} />
          <Route path="trending" element={<Trending />} />
          <Route path="news" element={<News />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}
