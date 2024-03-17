import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/DashBoard/Home/Home';
import OrgHome from './components/Organization/Home/OrgHome';
import OrgSidebar from './components/Organization/Sidebar/OrgSidebar';
import Testing from './components/Organization/Sidebar/Testing';
import OrgHistory from './components/Organization/History/History';
import Add from './components/Organization/Add/Add';

function App() {


  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/> } />  
      <Route path="/orghome" element={ <OrgSidebar><OrgHome/></OrgSidebar> } />  
      <Route path="/orghistory" element={ <OrgSidebar><OrgHistory/></OrgSidebar> } />  
      <Route path="/orgadd" element={ <OrgSidebar><Add/></OrgSidebar> } />  
      <Route path="/testing" element={<Testing/> } />  
      </Routes>
    </Router>
  )
}

export default App
