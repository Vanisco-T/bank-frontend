import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Log from './component/Log';
import Home from './component/Home';
import Sign from './component/Sign';
import Profile from './component/Profile';
import Deposit from './component/Deposit';
import Transaction  from './component/Transaction';
import Transfer from './component/Transfer';
function App() {
  return (
    <Router>
      <Routes>
          <Route index path='/' element={<Home/>}/>
          <Route path='/log' element={<Log/>}/>
          <Route path='/sign' element={<Sign/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/deposit' element={<Deposit/>}/>
          <Route path='/transaction' element={<Transaction/>}/>
          <Route path='/transfer' element={<Transfer/>}/>
      </Routes>
    </Router>
  );
}

export default App;