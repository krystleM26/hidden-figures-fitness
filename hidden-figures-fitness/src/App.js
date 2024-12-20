import React, {useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is logged in (check for a token in localStorage)
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Route */}
        <Route 
          path="/profile" 
          element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} 
        />

        {/* Default Redirect if no match */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>

    
   
  );
}

export default App;
