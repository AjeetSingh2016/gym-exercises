import React, {useEffect, useState} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import '../App.css'
import { exercisesOptions, fetchData} from '../utils/fetchdata'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {


 
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([])


  useEffect(() => {
    const fetchExercisesData = async () =>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExercisesData();
    
  }, [])
  

  const handleSearch = async () => {
    if(search){
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);
      

      const searchExercises = exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search) 
      );
      setSearch('');
      setExercises([...searchExercises])

    }
  } 



  return (
    <Stack alignItems="center" justifyContent="center"
    mt="37px" p="20px">

      <Typography sx={{fontSize: {lg: '44px', xs: '30px'}}}
      mb="50px" textAlign="center"
      fontWeight={700}> 
        Awesome Exercises you <br /> should know
      </Typography>

      <Box  position="relative" mb="72px">

        <TextField
         sx={{input: {
          fontWeight: '700',
          },
          width:{lg: '800px', xs: '350px'},
          backgroundColor: "#fff",
        }}
        height="76px" 
        value={search} 
        onChange={(e) => setSearch(e.target.value.toLowerCase())} 
        placeholder="Search Excercises"
        type="text"
        />
        <Button className="search-btn"
        sx={{
          bgcolor: '#2C3333',
          color: '#fff',
          width: {lg: '175px', xs: '100px'},
          textTransform: 'none',
          fontSize: {lg: '20px', xs:'14px'},
          height: '56px',
          position:'absolute',
          right: '0',
        }}
        onClick={handleSearch}
        >Search</Button>

      </Box>

       {/* Body bodyParts */}
      <Box  sx={{position: 'relative', width: '100%',p:'20px'}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      </Box>

    </Stack>
  )
}

export default SearchExercises