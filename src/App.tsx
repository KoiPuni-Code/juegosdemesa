// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from './components/TopNav/TopNav';
import Home from './pages/Home';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <TopNav />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;