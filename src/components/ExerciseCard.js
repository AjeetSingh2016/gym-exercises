import React from 'react'
import { Link } from 'react-router-dom'
import {Button, Typography, Stack} from '@mui/material'

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>

      <Stack direction="row">

        <Button variant="contained" sx={{ml:'21px', color:'#fff', background:'#ffa9a9', fontSize:'14px', borderRadius: '20px', textTransform:'capitalize', fontWeight:'550'}}>
          {exercise.bodyPart}
        </Button>

        <Button variant="contained"  sx={{ml:'21px', color:'#fff', background:'#fcc757', fontSize:'14px', borderRadius: '20px', textTransform:'capitalize', fontWeight:'550'}}>
          {exercise.target}
        </Button>


      </Stack>
      <Typography ml="21px" mt="11px" color="#000" textTransform="capitalize" fontWeight="bold" pb="10px" fontSize="20px">
          {exercise.name}
        </Typography>

    </Link>
  )
}

export default ExerciseCard