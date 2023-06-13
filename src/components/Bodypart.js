import React from 'react';
import { Stack,Typography } from '@mui/material';
import allimg from "../Assests/dumbbell.png";

const BodyPart = ({item,setbodypart,bodypart}) => {
  return (
    <Stack
    direction={"row"}
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodypart === item? {backgroundColor: '#EAEAEA',width: '270px', height: '282px', cursor: 'pointer', gap: '1px'} : { backgroundColor: '#B2B2B2',width: '270px', height: '282px', cursor: 'pointer', gap: '1px' }}
    onClick={() => {
      setbodypart(item);
      window.scrollTo({ top:1800,behavior: 'smooth'});
    }}
  >
    
    <img src={allimg} alt="all" style={{ width: '40px', height: '40px' }} /> 
    <Typography fontSize="24px" fontWeight="1000" fontFamily="Roboto" color="black" textTransform="capitalize"> {item}</Typography>
  </Stack>
  )
}
export default BodyPart