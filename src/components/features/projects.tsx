import React, { useEffect, useRef } from 'react'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import { motion, useInView, useAnimation } from 'framer-motion'
import Link from 'next/link';
import Image from "next/image";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import dashboard from '../../../public/assets/dashboard.png'
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
        <Box sx={{
            width: { xs: '100%', md: '80%' },
            margin: 'auto',
        }} ref={ref}>
            <motion.div>
                <Box sx={{
                    width: { xs: '80%', md: '50%' },
                    margin: 'auto',
                }}>
                    <Card>
                        <Image
                            src={dashboard}
                            alt='dashboard'
                            style={{
                                width: '248px',
                                height: '240px',
                                objectFit: 'cover'
                            }}
                        />
                        <CardContent>
                            <Box>dajfiol</Box>
                        </CardContent>
                    </Card>
                </Box>

            </motion.div>
        </Box>
    )
}

export default Projects