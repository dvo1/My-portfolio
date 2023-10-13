import React from 'react'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import Link from 'next/link';
import Image from "next/image";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import spin from '../../../public/assets/spin.png'

const ProjectCard = ({ item }: any) => {
    
    return (
        <Box sx={{
            width: { xs: '80%', md: '90%' },
            margin: 'auto',
        }}>
            <Card >
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', md: 'row' },

                }}>
                    <Box sx={{
                        flex: 1
                    }}>
                        <CardContent>
                            <Typography sx={{
                                fontSize: '20px',
                                fontWeight: 'bold',
                                mb: 3
                            }}>
                                {item?.title}
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                gap: '9px',
                                mb: 5
                            }}>
                                 {item?.tech.map((tech: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
                                    <Button
                                        key={index}
                                        variant="outlined"
                                        disableElevation
                                        disableRipple
                                        sx={{
                                            backgroundColor: 'transparent',
                                            padding: '',
                                            borderColor: 'var(--background)',
                                            borderRadius: '27px',
                                            color: 'var(--background)',
                                            textTransform: 'capitalize',
                                            whiteSpace: 'noWrap',
                                            cursor: 'default',
                                        }}
                                    >
                                        {tech}
                                    </Button>
                                ))}
                            </Box>

                            <Typography sx={{
                                textAlign: 'justify'
                            }}>
                                {item?.desc}
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '9px',
                                mt: 4
                            }}>
                                <Link
                                    href={item?.path}
                                    target="_blank"
                                    style={{
                                        color: 'var(--background)'
                                    }}
                                >
                                    <Typography sx={{
                                        textDecoration: 'underline',
                                        fontWeight: 'bold'
                                    }}>
                                        Visit live app
                                    </Typography>

                                </Link>

                                <Image
                                    src={spin}
                                    alt='spin'
                                    style={{
                                        animation: 'rotate 2s  infinite',
                                        width: '5%',
                                        objectFit: 'contain',
                                    }}
                                />
                            </Box>

                        </CardContent>
                    </Box>

                    <Box sx={{
                        flex: 1,
                    }}>
                        <Image
                            src={item?.img}
                            alt='dashboard'
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain'
                            }}
                        />
                    </Box>

                </Box>
            </Card>
        </Box>
    )
}

export default ProjectCard