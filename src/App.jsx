import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Bio from './components/Bio';
import Equipo from './components/Equipo';
import './index.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" replace />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Curriculum" element={<Bio />} />
          <Route path="/Equipo" element={<Equipo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



