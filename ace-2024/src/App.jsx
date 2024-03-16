import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';


function App() {
  const alert = useAlert();

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />  
      </Routes>
    </Router>
  )
}

export default App
