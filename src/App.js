import React from 'react';
import { Routes,Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Pages/Home';
import History from './Pages/History';
import './style.css';

const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/history' element={<History/>} />
    </Routes>
    </>
  )
}

export default App;