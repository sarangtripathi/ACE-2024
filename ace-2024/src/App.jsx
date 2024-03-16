import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/DashBoard/Home/Home';

function App() {


  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/> } />  
      </Routes>
    </Router>
  )
}

export default App
