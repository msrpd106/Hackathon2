import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { NovelCarousel } from './components/home/NovelCarousel';
import { Chatbot } from './components/Chatbot';
import { Login } from './pages/Login';
import { About } from './pages/About';
import { Novels } from './pages/Novels';
import { NovelDetail } from './pages/NovelDetail';
import { Articles } from './pages/Articles';
import { News } from './pages/News';
import { Status } from './pages/Status';
import { Profile } from './pages/Profile';

function HomePage() {
  return (
    <>
      <Hero />
      <NovelCarousel />
      <Chatbot />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/novels" element={<Novels />} />
        <Route path="/novels/:id" element={<NovelDetail />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/news" element={<News />} />
        <Route path="/status" element={<Status />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;