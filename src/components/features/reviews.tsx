import React from 'react'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import { reviews } from '../data/reviews'
import ReviewCard from '../cards/review-card'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';


const Reviews = () => {
    const renderBullet = (index: any, className: any) => {
        return `<span class=${className} style="background-color:
              var(--red);"></span>`;
    };
    return (
        <Box sx={{
            width: { xs: '80%', md: '80%' },
            margin: 'auto',
            mt: 9
        }}>
            <Typography sx={{
                mb: 6
            }}>
                Reviews and Recommendations
            </Typography>
            <Box sx={{ mb: 6 }}>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                        renderBullet: renderBullet,
                    }}
                    breakpoints={{
                        250: {
                            slidesPerView: 1,
                        },
                        300: {
                            slidesPerView: 1,
                        },
                        500: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                        1700: {
                            slidesPerView: 2,
                        },
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className='mySwiper'
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                    }}
                >
                    {reviews?.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <ReviewCard item={item} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Box>
        </Box>
    )
}

export default Reviews