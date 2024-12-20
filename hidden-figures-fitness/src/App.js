import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes'
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
      <Footer />
    </Router>
    
   
  );
}

export default App;
