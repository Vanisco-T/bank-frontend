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
import Widthdraw from './component/Widthdraw';
function App() {
  return (
    <Router>
      <Routes>
          <Route index path='/' element={<Log/>}/>
          <Route path='/log' element={<Log/>}/>
          <Route path='/sign' element={<Sign/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/deposit' element={<Deposit/>}/>
          <Route path='/transaction' element={<Transaction/>}/>
          <Route path='/transfer' element={<Transfer/>}/>
          <Route path='/widthdraw' element={<Widthdraw/>}/>
      </Routes>
    </Router>
  );
}

export default App;
