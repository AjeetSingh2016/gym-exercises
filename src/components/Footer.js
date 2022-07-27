import React from 'react'
import { Box, Stack, Typography } from '@mui/material'


import logo from '../assets/images/Logo-1.png'


const Footer = () => {
  return (
    <Box mt="80px" bgcolor="primary.main" width="100%">
      <Stack pb="20px" gap="40px" alignItems="center"px="40px" pt="24px" >
        <img src={logo} alt="logo" width="200px" height="40px"/>
        <Typography>My name is Ajeet Singh</Typography>
      </Stack>
      
    </Box>
  )
}

export default Footer