import React from 'react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import {SwiperSlide, Swiper} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

    import slider1 from '../assets/slides/img1.png';
    import slider2 from '../assets/slides/img2.png';
    import slider3 from '../assets/slides/img3.png';
    import slider4 from '../assets/slides/img4.png';
import {Box, Typography} from "@mui/material";

const MySwiper = () => {
    const slides = [
        {
            img: slider1,
            name: 'Имя Фамилия',
            tool: 'инструмент'
        },
        {
            img: slider2,
            name: 'Имя Фамилия',
            tool: 'инструмент'
        },
        {
            img: slider3,
            name: 'Имя Фамилия',
            tool: 'инструмент'
        },
        {
            img: slider4,
            name: 'Имя Фамилия',
            tool: 'инструмент'
        },
    ]
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container animate__animated  animate__bounceIn "
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide} style={{
                        // width: {sm: '37rem', xs: '22rem'},
                        height: {sm: '40vh', xs: '30rem'},

                    }} className={`proj-imgbx`}>
                        <Box component={'img'} src={slide.img} alt="slide_image" sx={{
                            border: '3px solid black',
                            borderRadius: '2rem',
                            width: {sm: '37rem', xs: '22rem'},
                            height: {sm: '70vh', xs: '30rem'},
                            objectFit: 'cover',

                        }}/>
                        <Box className={`proj-txtx`} sx={{color: 'white'}}>
                            <Typography variant={'h6'} sx={{
                                fontSize: '32px'
                            }}>
                                {slide.name}
                            </Typography>
                            <span style={{
                                fontWeight: 600,
                                textShadow: 'black 0px 0 100px',
                                fontSize: '20px'
                            }}>{slide.tool}</span>
                            {/*<PositionButton1 sx={{*/}
                            {/*    position: '',*/}
                            {/*    marginTop: '20px',*/}

                            {/*}} link={`${index+1}`} typo={{*/}
                            {/*    fontSize: {md: '50px', sm: '40px', xs: '30px'},*/}
                            {/*    padding: {sm: '0px 18px', xs: '10px 20px'},*/}
                            {/*}}/>*/}
                        </Box>
                    </SwiperSlide>
                ))}


                <Box className="slider-controler" sx={{
                    marginTop: {sm: '-1%', xs: '-12%'}
                }}>
                    <Box className="swiper-button-prev slider-arrow" sx={{
                        left: '36%',
                        transform: 'translateX(-58%) !important',
                        borderRadius: '50%',
                        background: ' rgba(217, 217, 217, 0.3)',
                        width: {sm: '100px', xs: '50px'},
                        height: {sm: '100px', xs: '50px'},
                        padding: {sm: '25px 25px 26px 15px', xs: '25px 25px 26px 20px'}
                    }}>
                        {/*<ion-icon name="arrow-back-outline"></ion-icon>*/}
                        {/*<Box  component={'img'} src={btn} sx={{*/}
                        {/*    rotate: '180deg',*/}
                        {/*    width: {sm: '34px', xs: '17px'},*/}
                        {/*    height: {sm: '58px', xs: '29px'},*/}
                        {/*}}/>*/}
                    </Box>
                    <Box className="swiper-button-next slider-arrow" sx={{
                        right: {lg: '29%', md: '25%', sm: '24%', xs: '23%'},
                        transform: 'translateX(-58%) !important',
                        borderRadius: '50%',
                        background: ' rgba(217, 217, 217, 0.3)',
                        width: {sm: '100px', xs: '50px'},
                        height: {sm: '100px', xs: '50px'},
                        padding: {sm: '25px 15px 26px 25px', xs: '25px 21px 26px 28px'}
                    }}>
                        {/*<ion-icon name="arrow-forward-outline"></ion-icon>*/}
                        {/*<Box  component={'img'} src={btn} sx={{*/}
                        {/*    width: {sm: '34px', xs: '17px'},*/}
                        {/*    height: {sm: '58px', xs: '29px'},*/}
                        {/*}}/>*/}
                    </Box>
                    {/*<div className="swiper-pagination"></div>*/}
                </Box>
            </Swiper>
        </>
    );
};

export default MySwiper;
