import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' mt="100px">
      <Typography variant='h2' >Bookazon</Typography>
      <Typography variant='h5' mb="50px" >One stop place for all your favorite books.</Typography>
      <Button LinkComponent={Link} to="/books" variant="contained" >
        <Typography variant='h6' >
          View All Books
        </Typography>
      </Button>
    </Box>
  )
}

export default Home