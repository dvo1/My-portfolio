import React from 'react'
import { Box } from '@mui/material';
import Navbar from '../features/navbar'
import Hero from '../features/hero';
import About from '../features/about';
import Projects from '../features/projects';

const LandingPage = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </Box>
  )
}

export default LandingPage