import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Explore } from './components/Explore';
import { About } from './components/About';
import { Footer } from './shared/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { Register } from './components/Register';
import Quiz from './components/Quiz';
import  ResultPage  from './components/ResultPage';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/quiz" element={<Quiz />}/>
          <Route path="/resultpage" element={<ResultPage />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
