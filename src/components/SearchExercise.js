import React from 'react';
import { useState,useEffect } from 'react';
import { Stack,Typography ,TextField,Button,Box} from '@mui/material';
import { exerciseOption,fetchData } from '../utils/fetchData';
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercise = ( {bodypart,setbodypart,setExercises}) => {
  const [search, setsearch] = useState('');
  const [bodyparts,setbodyparts]=useState([]);

  const handleclick=async()=>{
    var count=1
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOption);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setsearch('');
      setExercises(searchedExercises);
    }
  }
  useEffect(() => {
    const bodypartsdetail=async ()=> {
      const fetcheddata= await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",exerciseOption
      )
      setbodyparts(['all',...fetcheddata])
    };
    bodypartsdetail();
  },[])
  
  return (
   <Stack>
     <Typography sx={{fontSize:{lg:"60px",xs:"30px"},mt:{lg:"100px"}}} fontWeight={"900"}>
        Checkout the<br />latest Exercises..
     </Typography>
     <Box className='searchfield'>
     <TextField 
     value={search}
     onChange={(e)=>setsearch(e.target.value.toLowerCase())}
     fullWidth="500px"
    className='search'
    placeholder='Enter a Exercise'
    type='text'
    sx={{width:{lg:"800px",md:"600px",sm:"550px",xs:"300px"},justifyContent:"center",ml:"auto",mr:"auto"}}
     />
     <Button className='btn' sx={{height:"30px",color:"white",backgroundColor:"black",borderRadius:"0 40px 40px 0",p:"27px"}} onClick={handleclick}>
      search
     </Button>
     </Box>
     <Box>
      <Typography 
      sx={{fontSize:{lg:"40px",xs:"30px"},
      mt:"30px",mb:"50px"}} 
      fontWeight={"900"}>
         Exercises based on muscle groups.
      </Typography>
     </Box>
     <Box sx={{ position: 'relative', width: '100%', p: '10px',overflow: "hidden",
          overflowX: "scroll",scrollbarColor:"black"}}>
     <HorizontalScrollbar 
     data={bodyparts} bodyparts setbodypart={setbodypart} bodypart={bodypart} />
     </Box>
     
   </Stack>
  )
}

export default SearchExercise