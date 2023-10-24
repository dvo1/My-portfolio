import React, { useEffect, useRef } from 'react'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import { motion, useInView, useAnimation } from 'framer-motion'


const About = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControlOne = useAnimation()
    const mainControlTwo = useAnimation()
    const slideControl = useAnimation()
    useEffect(() => {
        if (isInView) {
            mainControlOne.start('visible');
            mainControlTwo.start('visible')
            // slideControl.start('visible');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
        }
    }
    return (
        <Box sx={{
            width: { xs: '100%', md: '80%' },
            margin: 'auto',
            position: 'relative',
            my: 9
        }} ref={ref} id="about">
            <motion.div
                variants={motionVariantsOne}
                initial='hidden'
                animate={mainControlOne}
                transition={{
                    delay: 0.25,
                    duration: 1,
                    type: 'spring',
                    stiffness: 100,
                    mass: 1,
                    // damping: 2,
                }}
            >
                <Box sx={{
                    display: 'flex',
                    justifyContent: {xs: 'center', md: 'flex-start'},
                    mb: 3,
                    
                }}>
                    <Typography sx={{fontSize: '18px'}}>
                        About
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
             }}
             >
             <Box sx={{
                display: 'flex',
                justifyContent: {xs: 'center', md: 'flex-end'},
                
            }}>
                <Typography sx={{
                    width: {xs: '80%', md: '60%'},
                    textAlign: 'justify'
                }}>
                    Hello, I&apos;m Durosinmi Victory, <span style={{ color: ' rgba(255, 255, 255, 0.50)' }}>a
                        passionate  <span style={{ color: '#FF6363' }}>front-end engineer </span> and  
                        <span style={{ color: '#FF6363' }}> technical writer </span>
                        with expertise in tools and technologies like React, Next Js, Redux Toolkit,
                        TypeScript, Material UI, Bootstrap, and CSS3. </span>With a solid foundation in front-end development,
                    I specialize in creating intuitive and user-friendly interfaces, developing responsive web applications,
                    integrating APIs and optimizing performance through efficient code implementation.
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: {xs: 'center', md: 'flex-end'},
            }}>
                <Typography sx={{
                   width: {xs: '80%', md: '60%'},
                   textAlign: 'justify'
                }}>
                    I thrive in collaborative environments and enjoy working with multidisciplinary teams to solve
                    complex problems and deliver high-quality solutions.
                    <span style={{ color: 'rgba(255, 255, 255, 0.50)' }}>With a keen eye for detail and a passion
                        for continuous learning, I am committed to delivering exceptional results.</span>
                </Typography>
            </Box>
             </motion.div>   
        </Box>
    )
}

export default About