import React, { useEffect, useRef } from 'react'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import { motion, useInView, useAnimation } from 'framer-motion'
import Link from 'next/link';
import Image from "next/image";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import dashboard from '../../../public/assets/dashboard.png'
import elab from '../../../public/assets/elab.jpg'
import { projects } from '../data/projects';
import ProjectCard from '../cards/project-card';
const Projects = () => {
    const isSmallScreen = useMediaQuery('(max-width: 900px)');
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControlOne = useAnimation()
    const mainControlTwo = useAnimation()
    useEffect(() => {
        if (isInView) {
            mainControlOne.start('visible');
            mainControlTwo.start('visible');
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

    const motionVariantsTwo = {
        hidden: {
            opacity: 0,  
        },
        visible: {
            opacity: 1,
        }
    }
    return (
        <Box sx={{
            width: { xs: '100%', md: '80%' },
            margin: 'auto',
        }} 
        ref={ref}
        id="projects"
        >

            <motion.div
                variants={motionVariantsOne}
                initial='hidden'
                animate={mainControlOne}
                transition={{
                    delay: 0.5,
                    duration: 1,
                    type: 'spring',
                    stiffness: 100,
                    mass: 1,
                    // damping: 2,
                }}
            >
                <Box sx={{
                    display: 'flex',
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    mb: 3,

                }}>
                    <Typography sx={{ fontSize: '18px' }}>
                        Projects
                    </Typography>
                </Box>
            </motion.div>

            <motion.div 
             variants={motionVariantsTwo}
             initial='hidden'
             animate={mainControlTwo}
             transition={{
                 delay: 1,
                 duration: 1,
                 type: 'spring',
                 stiffness: 100,
                 mass: 1,
                 // damping: 2,
             }}>
              {projects.map((item, index) => {
                return (
                    <Box key = {index} sx={{ mb: 5}}>
                        <ProjectCard  item = {item}/>
                    </Box>
                )
              })} 
            </motion.div>
        </Box>
    )
}

export default Projects