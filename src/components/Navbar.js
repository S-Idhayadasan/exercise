import { Stack ,Typography} from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../Assests/running.png";
import './style.css';


const Navbar = () => {
  return (
    <div className='nav'>
    <Stack className='navbar' direction="row" justifyContent="space-around" sx={{ height:{lg:"80px",xs:"50px"},gap:{lg:'800px',md:"750px",sm:"550px",xs:"200px"}}} px="20px" alignItems="center">
    <Link to ="/">
    <Stack sx={{flexDirection:"row"}}>
    <Stack sx={{width:{lg:"50px",xs:"30px"},height:{lg:"50px",xs:"30px"},mt:{lg:"18px",xs:"13px"},direction:"row"}}>
    <img className='logo'src={Logo} alt='logo'></img>
    </Stack>   
    </Stack>
    </Link>
    <Stack direction="row" justifyContent="space-evenly" sx={{ gap: {lg:'40px' , xs: '20px'}, mt:"10px", justifyContent: 'none'}} px="20px">
    <Link  className='link' to="/about" >
    <Typography sx={{fontSize:{lg:"30px",xs:"20px"},fontWeight:"bolder",fontFamily:"roboto"}}>About</Typography>
    </Link>
    <Link className='link'>
    <Typography  sx={{fontSize:{lg:"30px",xs:"20px"},fontWeight:"bolder",fontFamily:"roboto"}}>
    Exercise
    </Typography>  
    </Link>
    </Stack>
    </Stack>
    </div>
  )
}

export default Navbar