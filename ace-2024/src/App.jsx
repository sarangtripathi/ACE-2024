import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/DashBoard/Home/Home';
import OrgHome from './components/Organization/Home/OrgHome';
import OrgSidebar from './components/Organization/Sidebar/OrgSidebar';
import Testing from './components/Organization/Sidebar/Testing';
import OrgHistory from './components/Organization/History/History';
import VolSidebar from './components/Volunteer/Sidebar/VolSIdeBar';
import VolHome from './components/Volunteer/Home/VolHome';
import Community from './components/Volunteer/community/community';
import Login from './components/DashBoard/Auth/Login';
import Register from './components/DashBoard/Auth/Register';
import Add from './components/Organization/Add/Add';


function App() {


  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/> } />  
      <Route path="/login" element={<Login/> } />  
      <Route path="/signup" element={<Register/> } />  
      <Route path="/orghome" element={ <OrgSidebar><OrgHome/></OrgSidebar> } />  
      <Route path="/orghistory" element={ <OrgSidebar><OrgHistory/></OrgSidebar> } />  
      <Route path="/orgadd" element={ <OrgSidebar><Add/></OrgSidebar> } />  
      <Route path="/testing" element={<Testing/> } />  
      <Route path="/volhome" element={ <VolSidebar><VolHome/></VolSidebar> } />  
     <Route path="/Community" element={<VolSidebar><Community/></VolSidebar>}/>
      </Routes>
    </Router>
  )
}

export default App
