import React from 'react'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import Link from 'next/link';
const ReviewCard = ({ item }: any) => {
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'block', md: 'center' },
                gap: '15px'
            }}>
                <Box>
                    <Image
                        style={{
                            width: '50px',
                            height: '50px',
                            objectFit: 'cover',
                            borderRadius: '10px'
                        }}
                        src={item?.img}
                        alt='person' />
                </Box>
                <Box>
                    <Typography sx={{
                        fontWeight: 'bold',
                    }}>
                        {item?.name}
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <Typography sx={{
                            fontStyle: 'italic',
                            my: 1
                        }}>
                            {item?.stack}
                        </Typography>

                        <Box>
                            <Link href={item?.path} target='_blank'>
                                <LinkedInIcon sx={{ color: 'white' }} />
                            </Link>
                        </Box>

                    </Box>

                    <Typography sx={{ textAlign: 'justify', mb: 1 }}>
                        {item?.review}
                    </Typography>
                </Box>
            </Box>

        </Box>
    )
}

export default ReviewCard