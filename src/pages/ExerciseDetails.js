
import SearchExercise from '../components/SearchExercise'
import { Box,Stack, Typography } from '@mui/material'
import Pagination from '@mui/material/Pagination';
import ExerciseCard from '../components/ExerciseCard'
import { exerciseOption, fetchData } from '../utils/fetchData';
import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';

const ExerciseDetails = ({exercises,setExercises,bodypart}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodypart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOption);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`, exerciseOption);
      }

      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodypart]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;
  return (
  <Box
  sx={{justifyContent:"center"}}
  >
  <Typography sx={{m:"80px",mb:"100px",fontFamily:"Roboto",fontWeight:'900',fontSize:"50px"}}>
    Showing results
  </Typography>
  <Stack direction={"row"}
  sx={{flexWrap:"wrap",gap:"20px",justifyContent:"center"}}>
  {currentExercises.map((exercise,index)=>(
    <ExerciseCard key={index} exercise={exercise}/>
  ))}
  </Stack>
  <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
  </Box>
  )
}

export default ExerciseDetails