import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project.jsx/Project';
import About from './pages/About/About';
import Error from './pages/Error/Error';
import Skills from './pages/Skills/Skills';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
