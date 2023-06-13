import React from 'react';
import bannerimg from "../Assests/banner.jpg";
import {Stack,Typography } from '@mui/material';
import "./style.css"


const Header = () => {
  return (
    <Stack sx={{mt:{lg:"80px",xs:"30px",sm:"40px"},fontFamily:"merriweather"}} >
    <Typography sx={{fontSize:{lg:"170px",md:"150px",sm:"100px",xs:"60px"} ,fontFamily:"merriweather",mt:{md:"0px",sm:'0',xs:'20px'}}}  position={'absolute'} color={'white'}>Wake <br/>Work<br/>Win</Typography>
    <img className='Banner' src={bannerimg} alt='Banner_Image'/> 
    </Stack>
  )
}

export default Header