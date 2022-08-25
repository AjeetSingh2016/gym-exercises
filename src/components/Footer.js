import React from 'react'
import { Box, Stack, Typography } from '@mui/material'


import logo from '../assets/images/Logo.png'


const Footer = () => {
  return (
    <Box mt="80px" bgcolor="transparent" width="100%">
      <Stack pb="20px" gap="20px" alignItems="center"px="40px" pt="24px" >
        <img src={logo} alt="logo" width="100px" height="80px"/>
        <Typography fontWeight="bold" >Made by Ajeet</Typography>
      </Stack>
      
    </Box>
  )
}

export default Footer