import React from 'react'
import '../App.css'
import { Box, Stack, Typography, Button } from '@mui/material'
import { positions } from '@mui/system'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    // Box
    <Box sx={{mt:{lg: "212px", xs:"70px"}, ml:{sm: "50px"}}}
      position="relative" p="20px">

      <Typography
      color="#FF2625"
      fontWeight="600"
      fontSize="26px">
      Fitness Club
      </Typography>

      <Typography sx={{fontSize: {lg: "44px", xs:"40px"}}}
      fontWeight={700}
      mb="23px" mt="30px">
        Sweat, Smile <br /> and Repeat
      </Typography>

      <Typography fontSize="22px" lineHeight="35px" mb={4}>
       Check out most effective exercises exercises
      </Typography>

      <Button sx={{backgroundColor: "#FF2625", padding: "10px"}}
      color="error" href="#Ecercises" variant="contained">Explore Exercises</Button>

      <Typography sx={{opacity: 0.1, display: 
      {lg: 'block', xs: 'none'}}}
      color="#FF2625"
      fontSize="200px"
      fontWeight={600}>
      Exercise</Typography>

      <img src={HeroBannerImage} alt="banner" 
      className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner