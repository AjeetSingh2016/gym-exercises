import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodypartImage from '../../assets/icons/body-part.png'
import TargetImage from '../../assets/icons/target.png'
import EquipmentImage from '../../assets/icons/equipment.png'


const Detail = ({exerciseDetail}) => {


const {bodyPart, equipment, gifUrl, name, target} = exerciseDetail;


const extradetail = [
  {
    icon: BodypartImage,
    name: bodyPart,
    title: 'Body Part'
  },
  {
    icon: TargetImage,
    name: target,
    title: 'Target'
  },
  {
    icon: EquipmentImage,
    name: equipment,
    title: 'Equipment'
  }
]

  return (
    <Stack sx={{flexDirection:{lg:'row'}, p:'20px', alignItems:'center'}}>
      <img src={gifUrl} alt={name} className="detail-image" loading='lazy'/>
      <Stack sx={{gap:{lg:'35px', xs: '20px'}}}>
        <Typography textTransform='capitalize' variant="h4" fontWeight="600">
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong. {name} {` `}

          is one of the best exercise to target your {target}. It will help your mood and gain energy.
        </Typography>
        {extradetail.map((item)=>(
        <Stack key={item.name} direction="row" gap="24px" alignItems="center">
          <Button sx={{background:'#fff2db', borderRadius:'50%', width:'100px', height: '100px'}}>
            <img src={item.icon} alt={bodyPart} style={{width: '50px', height:'50px'}}/>
          </Button>
          <Stack>
          <Typography variant="h6" textTransform="capitalize">
            {item.name}
          </Typography>
          <Typography variant="h7">
            {item.title}
          </Typography>
          </Stack>

        </Stack>

      ))}
      </Stack>
    </Stack>
  )
}

export default Detail