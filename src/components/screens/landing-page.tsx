import React from 'react'
import { Box } from '@mui/material';
import Navbar from '../features/navbar'
import Hero from '../features/hero';
import About from '../features/about';
import Projects from '../features/projects';
import Articles from '../features/articles';
import Reviews from '../features/reviews';
import Contact from '../features/contact';

const LandingPage = () => {
  return (
    <Box sx={{
      backgroundColor: 'var(--background)',
      color: 'var(--white)'
    }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Articles />
      <Reviews />
      <Contact />
    </Box>
  )
}

export default LandingPage

