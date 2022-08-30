import React from 'react'
import {Box, Stack, Typography} from '@mui/material'

const ExerciseVideos = ({exerciseVideos, name}) => {
  return (
    <Box sx={{marginTop:{lg:'50px', xs: '15px'}}} mb={5} >

      <Typography sx={{fontSize:{lg:'30px', xs:'20px'}}} mb="33px" variant="h3" fontWeight="600" textTransform="capitalize" pb="50px">
      watch {` `} {name} {` `} exercise Videos
      </Typography>
      
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" sx={{flexDirection:{lg:'row'}, gap:{lg:'110px', xs:'0'}}}>
        {exerciseVideos?.slice(0, 3).map((item, index)=>(
          <a
          key={index}
          className="exercise-video"
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target="_blank"
          rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt="hello" />

            <box>
              <Typography variant="h5" color="#000">
                {item.video.channelName}
              </Typography>
            </box>

          </a>
        ))}

      </Stack>
    </Box>
  )
}

export default ExerciseVideos