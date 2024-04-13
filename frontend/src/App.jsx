import './App.css';
import { useState } from 'react'; // Import useState
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Explore } from './components/Explore';
import { About } from './components/About';
import { Footer } from './shared/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { Register } from './components/Register';
import Quiz from './components/Quiz';
import ResultPage from './components/ResultPage';
import Select from './components/Select';
import LoginTeacher from './components/LoginTeacher';
import RegisterTeacher from './components/RegisterTeacher';
import HomePage from './components/HomePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize isLoggedIn state

  const handleLogin = () => {
    setIsLoggedIn(true); 
  };
  const handleLogout = () => {
    setIsLoggedIn(false); 
  };

  return (
    <Router>
      <div>
        {/* Pass isLoggedIn state and login/logout functions to Navbar */}
        <Navbar isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/homepage" element={<HomePage />} /> */}
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} /> {/* Pass login function to Login component */}
          <Route path="/register" element={<Register />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/resultpage" element={<ResultPage />} />
          <Route path="/select" element={<Select />} />
          <Route path="/loginteacher" element={<LoginTeacher />} />
          <Route path="/registerteacher" element={<RegisterTeacher />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
