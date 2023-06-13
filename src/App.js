import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Exercise from './pages/Exercise';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetails';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => ( 
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<Exercise />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;