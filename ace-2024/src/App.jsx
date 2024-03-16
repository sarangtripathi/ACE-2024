import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index1 from './components/Index1'
import Login from './components/Login/Login'
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';


function App() {
  const alert = useAlert();

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/index1" element={<Index1/>}  />
      </Routes>
    </Router>
  )
}

export default App
