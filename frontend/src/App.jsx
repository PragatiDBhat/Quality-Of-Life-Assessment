import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './shared/Footer';
import { Routes, Route } from 'react-router-dom';
import PreLogin from './Prelogin';
import PostLogin from './Postlogin';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="*" element={<PreLogin />} />
          <Route path="/postlogin/*" element={<PostLogin />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
