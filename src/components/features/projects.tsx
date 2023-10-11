import React, { useEffect, useRef }  from 'react'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import { motion, useInView, useAnimation } from 'framer-motion'

const Projects = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControlOne = useAnimation()
    useEffect(() => {
        if (isInView) {
            mainControlOne.start('visible');
        }
    }, [isInView])

    const motionVariantsOne = {
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: {
            opacity: 1,
            y: 0,
        }
    }
  return (
    <Box  sx={{
        width: { xs: '800%', md: '80%' },
        margin: 'auto',
    }} ref={ref}>
        <motion.div>

        </motion.div>
    </Box>
  )
}

export default Projects