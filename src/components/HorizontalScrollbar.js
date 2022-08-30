import React, { useContext } from 'react';
import { Box, Typography} from '@mui/material'
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import BodyPart from './BodyPart'
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'
import ExerciseCard from './ExerciseCard';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography fontSize="50px" onClick={() => scrollPrev()} className="right-arrow">
        <span>&#8592;</span>
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography fontSize="50px" onClick={() => scrollNext()} className="left-arrow">
        <span>&#8594;</span>
      </Typography>
    );
  };

const HorizontalScrollbar = ({ data, bodyPart,  setBodyPart, isBodyParts}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item)=> (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
           { isBodyParts ? <BodyPart item={item}  setBodyPart={setBodyPart} bodyPart={bodyPart}/>
           : <ExerciseCard exercise={item}/>}
        </Box>
        ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar