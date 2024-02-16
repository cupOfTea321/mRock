import React from 'react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import {SwiperSlide, Swiper} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

    import slider1 from '../assets/slides/slide1.png';
    import slider2 from '../assets/slides/slide2.png';
    import slider3 from '../assets/slides/slide3.png';
    import slider4 from '../assets/slides/slide4.png';
    import arrowBack from '../assets/items/arrowBack.svg';
    import arrowBackRight from '../assets/items/rightArrow.svg';
import {Box, Container, Typography} from "@mui/material";
import {blackText, h3, title2} from "../mui/palette";

const MySwiper = ({slides}) => {
     slides = [
        {
            img: slider2,
            name: 'Сергей Денисенко',
            about: 'директор'
        },
        {
            img: slider3,
            name: 'Алексей Куликов',
            about: 'кастинг-директор'
        },
        {
            img: slider4,
            name: 'Маргарита Илющенко',
            about: 'режиссер'
        },


        {
            img: slider1,
            name: 'Светлана Шабаева-Маркина',
            about: 'продюсер'
        },
    ]
    const arrowStyle = {
        transform: 'translateX(-58%) !important',

        color: 'white',
        width: {sm: '58px', xs: '50px'},
        height: {sm: '53px', xs: '50px'},
    }
    return (
        <Container>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                style={{
                    position: 'relative',
                    zIndex: 500,

                }}
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
                className="swiper_container animate__animated animate__bounceIn wow"
            >
                {slides.map((item, index) => {
                    let imageStyle = {}
                    let textStyle = {}
                    switch (index) {
                        case 1:
                            imageStyle = {
                                marginTop: '61px',
                            }
                            textStyle = {
                                transform: 'rotate(3.21deg)'
                            }
                            break
                        case 2:
                            imageStyle = {
                                marginTop: '34px'
                            }
                            textStyle = {
                                transform: 'rotate(-5.32deg)'
                            }
                            break
                        case 3:
                            imageStyle = {
                                marginTop: '63px'
                            }
                            textStyle = {
                                transform: 'rotate(-2.36deg)'
                            }
                            break
                        default:
                            imageStyle = {
                                marginTop: '24px'
                            }


                    }
                    return (
                        <SwiperSlide key={item} style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',

                        }}>
                            <Box component={'img'} src={item.img} sx={{
                                ...imageStyle,
                            }}/>
                            <Typography sx={{
                                // ...blackText,
                                ...title2,
                                ...textStyle,
                                marginTop: '10px'
                            }}>{item.name}</Typography>
                            <Typography sx={{
                                // ...blackText,
                                ...h3,
                                ...textStyle,
                                marginTop: '10px'
                            }}>{item.about}</Typography>
                        </SwiperSlide>)
                })}

                <Box className="slider-controler" sx={{
                    // marginTop: {sm: '470px', xs: '-12%'},
                    position: 'relative',
                    marginBottom: '200px'
                }}>
                    <Box className="swiper-button-prev slider-arrow" sx={{
                        ...arrowStyle,
                        left: '36%',
                        background: `url(${arrowBack})`,
                        // padding: {sm: '25px 25px 26px 15px', xs: '25px 25px 26px 20px'}
                    }}>
                    </Box>
                    <Box className="swiper-button-next slider-arrow" sx={{
                        ...arrowStyle,
                        background: `url(${arrowBackRight})`,
                        right: {lg: '29%', md: '25%', sm: '24%', xs: '23%'},
                        // padding: {sm: '25px 15px 26px 25px', xs: '25px 21px 26px 28px'}
                    }}>
                    </Box>
                </Box>
            </Swiper>
        </Container>
    );
};

export default MySwiper;
