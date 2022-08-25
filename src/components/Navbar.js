import React from 'react'
import {Link} from 'react-router-dom'
import {Stack} from '@mui/material'
import logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack
    sx={{gap:{sm:'122px', sx:'48px'}, mt:{sm: '32px', sx: '20px'}, justifyContent: 'none',}}
    justifyContent="space-around"
    px="20px"
    direction="row" >
      <Link to="/">
        <img src={logo} alt="logo" style={{width: '50px', height: '50px', margin: '0 20px'}} />
      </Link>
      <Stack 
      bgcolor="none"
      direction="row"
      gap="40px"
      alignItems="flex-end"
      fontSize="24px">
        <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #58E2F9'}} >Home</Link>
        <a href="Exercise" style={{textDecoration: 'none', color: '#3A1212'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar