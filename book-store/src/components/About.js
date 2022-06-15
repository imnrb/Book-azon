import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' mt="100px">
      <Typography variant="h2" sx={{fontFamily:"fantasy"}}>This is a Book Store application using Mern Stack.</Typography>
      <Typography variant="h3">User can add,update,view and delete books from the website </Typography>

    </Box>
  )
}

export default About