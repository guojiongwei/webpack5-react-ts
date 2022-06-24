import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const root = document.getElementById('root');
if(root) {
  createRoot(root).render(
    <BrowserRouter>
      <Link to='/'>首页</Link>
      <Link to='/user'>我的</Link>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="user" element={<User />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  return <h2>首页</h2>
}

function User() {
  return <h2>我的</h2>
}