import React from 'react'
import { Box, Button, Typography, useMediaQuery, Grid } from '@mui/material'
import { motion } from 'framer-motion'
import Image from 'next/image'
import spintwo from '../../../public/assets/spintwo.png'
import { articles } from '../data/articles'
import ArticleCard from '../cards/article-card'


const Articles = () => {
    const isSmallScreen = useMediaQuery('(max-width: 900px)');

    return (
        <Box>
            <Box sx={{
                my: 12
            }} id="articles">
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
                        {Array.from({ length: 20 }).map((_, index) => (
                            <React.Fragment key={index}>

                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }} >
                                    <Typography sx={{
                                        fontSize: { xs: '30px', md: '60px' },
                                        whiteSpace: 'noWrap',
                                        color: '#FFFFFF',
                                        fontWeight: 'bold'
                                    }}>MY ARTICLES</Typography>
                                    <Image
                                        src={spintwo}
                                        alt='set'
                                        style={{
                                            // animation: 'rotate 9s  infinite',
                                            marginLeft: '10px',
                                            width: isSmallScreen ? '10%' : 'auto',
                                            objectFit: 'contain',
                                            marginRight: isSmallScreen ? '30px' : 'auto'
                                        }}
                                    />
                                </Box>
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

                    {/* <style jsx>
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
                    </style> */}
                </>

            </Box>

            <Box sx={{
                width: { xs: '100%', md: '80%' },
                margin: 'auto',
            }}>
                <motion.div>
                <Grid container spacing={1}>
                    {articles?.map((item, index) => {
                        return (
                            <Grid 
                            item 
                            key={index} 
                            sx={{ mb: 5, }}
                            xs= {12} md= {6}
                            >
                                <ArticleCard item={item} />
                            </Grid>
                        )
                    })}

                </Grid>

                </motion.div>
            </Box>
        </Box>
    )
}

export default Articles