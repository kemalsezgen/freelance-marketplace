import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Portfolio from './components/Portfolio';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/portfolio/:id" element={<Portfolio />} />
      </Routes>
    </Router>
  );
};

export default App;