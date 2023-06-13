import React, { useState } from 'react';
import "./homestyle.css";
import {Box} from '@mui/material';
import Header from '../components/Header';
import SearchExercise from '../components/SearchExercise';
import ExerciseDetails from './ExerciseDetails';


const Home = () => {
  const [bodypart,setbodypart]=useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
   <Header />
   <SearchExercise  setExercises={setExercises} bodypart={bodypart} setbodypart={setbodypart} />
   <ExerciseDetails  setExercises={setExercises} exercises={exercises} bodypart={bodypart} />
    </Box>

  )
}

export default Home