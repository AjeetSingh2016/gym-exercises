import React from 'react'
import { Stack , Typography} from '@mui/material'
import Icon from '../assets/icons/gym.png'


const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625': ' ',
        width:'270px', height:'280px', gap:'47px', cursor:'pointer'}}
    type="button"
    justifyContent="center"
    className="bodyPart-card"
    alignItems="center"
    backgroundColor="rgb(255, 244, 231)"
    onClick={()=>{
        setBodyPart(item);
    }}
    
    >
        <img src={Icon} alt="dumbbell" style={{width: '40px', height: '40px'}} />
        <Typography 
        fontSize="24px"
        fontWeight={600}
        textTransform="capitalize"

         >{item}</Typography>
    </Stack>
  )
}

export default BodyPart