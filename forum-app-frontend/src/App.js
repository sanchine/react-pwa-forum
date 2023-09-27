import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { PostsPage } from "./pages/PostsPage/PostsPage";

export const App = () => {
    
  const isAuth = useSelector((state) => state.user.isAuth);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          {!isAuth ? (
            <Route path="/" element={<AuthPage />} />
          ) : (
            <Route path="/posts" element={<PostsPage />} />
          )}
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};
