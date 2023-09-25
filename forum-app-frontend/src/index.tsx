import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { PostsPage } from './pages/PostsPage/PostsPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);