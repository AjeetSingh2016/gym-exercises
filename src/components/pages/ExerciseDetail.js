import React, { useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material';
import Detail from '../detailComp/Detail'
import ExerciseVideos from '../detailComp/ExerciseVideos'
import SimilarExercises from '../detailComp/SimilarExercises';
import { fetchData, exercisesOptions, youtubeOptions} from '../../utils/fetchdata';



const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const { id } = useParams();
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])

  useEffect(() => {
    const fetchExerciseData = async()=>{
    
      window.scrollTo({top:'100%', behavior: 'smooth'}) 
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
    
      
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exercisesOptions)

      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesdata = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exercisesOptions)
      setTargetMuscleExercises(targetMuscleExercisesdata)

      const equipmentExercisesdata = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exercisesOptions)
      setEquipmentExercises(equipmentExercisesdata)

     
    }
    
      
    fetchExerciseData();
  }, [id])
  

  return (
      <Box>
        <Detail exerciseDetail={exerciseDetail} />
        <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
        <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
      </Box>
    
  )
}

export default ExerciseDetail