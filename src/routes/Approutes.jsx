import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '../page/HomePage';
import BlogPage from '../page/BlogPage';

const Approutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
      </Routes>
    </Router>
  );
};

export default Approutes;
