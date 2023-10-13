import React from 'react'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion'
import Image from 'next/image'
import duro from '../../../public/assets/duro.png'
import sphere from '../../../public/assets/sphere.png'

const Hero = () => {
    const isSmallScreen = useMediaQuery('(max-width: 900px)');
    const motionVariantsOne = {
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1.1,

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

    const motionVariantsThree = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1.1,

        }
    }
    return (
        <Box sx={{
            mt: 20,
            zIndex: 1000,
            height: '100%'
        }}>
            <Box sx={{ width: '80%', margin: 'auto' }}>
                <motion.div
                    variants={motionVariantsOne}
                    initial='hidden'
                    animate='visible'
                    transition={{
                        // delay: 0.5,
                        duration: 1,
                        type: 'spring',
                        stiffness: 100,
                        mass: 1,
                        // damping: 2,
                        // repeat: Infinity,
                        // repeatType: 'reverse'
                    }}
                // whileHover={{
                //     scale: 1.1,
                //     color: '#FF6363',
                //     textShadow: '0px 0px 8px rgb(255,99,99)',

                //     // boxShadow: '0px 0px 8px rgb(255,255,255)',
                // }}

                >
                    <Typography sx={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: '20px'
                    }}>
                        {'const frontend = ( ) => <Front-end Developer/>'}
                    </Typography>
                </motion.div >

            </Box>

            <Box>
                <>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: '50px',
                            gap: '20px',
                            animation: 'move 35s infinite ',
                        }}
                    >
                        {Array.from({ length: 25.5 }).map((_, index) => (
                            <React.Fragment key={index}>
                                <motion.div
                                    variants={motionVariantsTwo}
                                    initial='hidden'
                                    animate='visible'
                                    transition={{
                                        delay: 1,
                                        duration: 1
                                    }}
                                >
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }} >
                                        <Typography sx={{
                                            fontSize: { xs: '30px', md: '60px' },
                                            whiteSpace: 'noWrap',
                                            color: '#FF6363',
                                            fontWeight: 'bold'
                                        }}>DUROSINMI VICTORY</Typography>
                                        <Image
                                            src={duro}
                                            alt='set'
                                            style={{
                                                animation: 'rotate 9s  infinite',
                                                marginLeft: '10px',
                                                width: isSmallScreen ? '10%' : 'auto',
                                                objectFit: 'contain',
                                                marginRight: isSmallScreen ? '30px' : 'auto'
                                            }}
                                        />
                                    </Box>
                                </motion.div>

                            </React.Fragment>
                        ))}
                    </div>
                    <style jsx>
                        {`
              @keyframes move {
                0%,
                100% {
                  transform: translateX(0px);
                }
                50% {
                  transform: translateX(-400px);
                }
              }
            `}
                    </style>

                    <style jsx>
                        {`
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
                    </style>
                </>

            </Box>

            <motion.div
                variants={motionVariantsThree}
                initial='hidden'
                animate='visible'
                transition={{
                    delay: 2,
                    duration: 3,
                    type: 'spring',
                    stiffness: 100,
                    mass: 1,

                }}
            >
                <Box sx={{
                    width: { xs: '85%', md: '60%' },
                    margin: 'auto',
                    textAlign: 'center',
                    my: 5
                }}>
                    <Typography sx={{
                        color: 'white',
                    }}>
                        Welcome to my corner of the web, where code meets creativity. I&apos;m passionate about developing user-centric websites and web applications that not only look stunning but also deliver seamless user experiences. Explore my portfolio to see how I bring ideas to life through the power of code.
                    </Typography>
                </Box>
            </motion.div>

            <>
                <style jsx>
  {`
    @keyframes rotate3D {
    from {
        transform: rotateX(0deg) rotateY(0deg);
      }
      to {
        transform: rotateZ(360deg) ;
      }
    }
  `}
</style>
            </>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                // my: 9,
                width: '60%',
                margin: 'auto'
            }}>
                <Box sx={{
                    animation: 'rotate3D 10s infinite ',
                }}>
                <Image
                    src={sphere}
                    alt='sphere'

                    style={{
                        objectFit: 'contain',
                        width: isSmallScreen ? '300px' : '400px',
                        height: isSmallScreen ? '300px' : '400px'
                    }}
                />
                </Box>
              
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    alignItems: 'center',
                    position: 'absolute',
                    top: '30%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    
                }}>
                    <Typography sx={{
                        color: 'white'
                    }}>
                        Let&apos;s talk
                    </Typography>

                    <Button
                        variant='outlined'
                        disableElevation
                        disableRipple
                        sx={{
                            'backgroundColor': 'transparent',
                            'padding': '',
                            borderColor: 'white',
                            borderRadius: '27px',
                            color: 'white',
                            textTransform: 'capitalize',
                            whiteSpace: 'noWrap',
                            '&:hover': {
                                // backgroundColor: 'var(--orange)',
                                borderColor: '#FF6363'
                            },
                        }}
                    >
                        View my CV
                    </Button>
                </Box>
            </Box>

        </Box>
    )
}

export default Hero



