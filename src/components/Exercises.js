import React from 'react'
import { useEffect, useState } from 'react'
import { Pagination } from '@mui/material'
import {Box, Stack, Typography} from '@mui/material'
import ExerciseCard from './ExerciseCard'
// import { exercisesOptions, fetchData} from '../utils/fetchdata'


import {exercisesOptions, fetchData} from '../utils/fetchdata'

const Exercises = ({setExercises, exercises, bodyPart})=> {




  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9;


  const indexOfLastExercise = currentPage * exercisesPerPage;

  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, val)=>{
    setCurrentPage(val);

    window.scrollTo({top: 1800, behavior: 'smooth'}) 

  }

  useEffect(() => {

    const fetchExercisesData = async () => {
      let exercisesData = [];
      if(bodyPart==='all'){
        exercisesData =  await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);
      }
      else{
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exercisesOptions);
      }

      setExercises(exercisesData);

    }


    fetchExercisesData();

  }, [bodyPart])
  
  return (
    <Box  id="excercises" sx={{mt:{lg:'110px'}}}
    mt="50px"
    p="20px">

      <Typography variant="h3" mb="46px">
        Showing Result
      </Typography>
      <Stack direction="row" sx={{gap:{lg:'110px', xs: '50px'}}}
      flexWrap="wrap">
        {currentExercises.map( (exercises, index) =>(
      
          <ExerciseCard key={index} exercise={exercises}/>
          
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination color="standard"
          count={Math.ceil(exercises.length / 9)}
          page={currentPage}
          onChange={paginate}
          size="large"
          >

            
          </Pagination>
        )}

      </Stack>
    </Box>
  )
}

export default Exercises