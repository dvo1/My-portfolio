import React from 'react'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import { Padding } from '@mui/icons-material'
import Image from 'next/image'
import arrow from '../../../public/assets/arrow.png'
import Link from 'next/link'
const Contact = () => {
    return (
        <Box sx={{
            width: { xs: '80%', md: '80%' },
            margin: 'auto',
            mt: 9
        }} id = "contact">
            <Typography sx={{
                fontSize: { xs: '50px', md: '100px' },
                fontWeight: 'bold'
            }}>
                SAY HELLO!
            </Typography>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '20px',
                flexDirection: { xs: 'column', md: 'row' }
            }}>
                <Link 
                href={'https://www.linkedin.com/in/durosinmi-victory/'} 
                target='_blank' 
                style={{width: '100%'}}
                >
                    <Box sx={{
                        borderRadius: '10px',
                        backgroundColor: '#2A53BC',
                        padding: 1,
                        color: 'white',     
                    }}>
                        <Typography sx={{
                            fontSize: '20px',
                            fontWeight: 'bold'
                        }}>
                            LINKEDIN
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}>
                            <Image src={arrow} alt='arrow' />
                        </Box>
                    </Box>
                </Link>
                <Link 
                href={'https://wa.me/+2348179676988'} 
                target='_blank'
                style={{width: '100%'}}
                >
                    <Box sx={{
                        borderRadius: '10px',
                        backgroundColor: '#282828',
                        padding: 1,
                        flex: 1,
                        color: 'white',
                    }}>
                        <Typography sx={{
                            fontSize: '20px',
                            fontWeight: 'bold'
                        }}>
                            WHATSAPP
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}>
                            <Image src={arrow} alt='arrow' />
                        </Box>
                    </Box>
                </Link>
                
                <Link 
                href={'mailto:durosinmivictory1@gmail.com'} 
                target='_blank'
                style={{width: '100%'}}
                >
                <Box sx={{
                    borderRadius: '10px',
                    backgroundColor: '#000000',
                    padding: 1,
                    flex: 1,
                    color: 'white'
                }}>
                    <Typography sx={{
                        fontSize: '20px',
                        fontWeight: 'bold'
                    }}>
                        GMAIL
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>
                        <Image src={arrow} alt='arrow' />
                    </Box>
                </Box>
                </Link>
            </Box>
        </Box>
    )
}

export default Contact