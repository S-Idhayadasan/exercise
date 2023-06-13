import React from 'react'
import { Stack ,Box,Typography} from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './Bodypart';
import { ScrollMenu,VisibilityContext } from 'react-horizontal-scrolling-menu';
import "./style.css"
const HorizontalScrollbar = ({data,bodyparts,bodypart, setbodypart}) => {
  return (
    <ScrollMenu>
    <Stack
    direction={"row"}
    sx={{width:"100%"}}
    >  
        {
            data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 10px"
      >
       {
       bodyparts ? <BodyPart item={item}  bodypart={bodypart} setbodypart={setbodypart} /> : <ExerciseCard exercise={item} /> }
      </Box>
    ))}
    </Stack>
    </ScrollMenu>
  )
}

export default HorizontalScrollbar