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
    import arrowBack from '../assets/back/leftArrow.png';
    import arrowBackRight from '../assets/back/rightArrow.png';
import {Box, Container, Typography} from "@mui/material";
import {blackText, h3, title2} from "../mui/palette";
import {rolesTarget} from "../handlers/rolesTarget";
import {aboutSwitch, musiciansSwitch, sliderSwitch} from "../handlers/sliderSwitch";

const MySwiper = ({
    random = false,
    about = false,
                      slides = [
                          {
                              avatar: slider2,
                              name: 'Сергей Денисенко',
                              role: 'директор'
                          },
                          {
                              avatar: slider3,
                              name: 'Алексей Куликов',
                              role: 'кастинг-директор'
                          },
                          {
                              avatar: slider4,
                              name: 'Маргарита Илющенко',
                              role: 'режиссер'
                          },


                          {
                              avatar: slider1,
                              name: 'Светлана Шабаева-Маркина',
                              role: 'продюсер'
                          },
                      ],
                      sx
}) => {
    console.log(slides, about)
    const arrowStyle = {
        transform: 'translateX(-58%) !important',

        color: 'white',
        width: {sm: '58px', xs: '50px'},
        height: {sm: '53px', xs: '50px'},
    }
    console.log(slides)
    return (
        <Container sx={sx}>
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
                {!about && slides.map((item, index) => {
                    let role = rolesTarget(item.role)
                    let styles
                    random ? styles = musiciansSwitch(index)  : styles = sliderSwitch(index)
                    let imageStyle = styles[0]
                    let textStyle = styles[1]
                    return (
                        <SwiperSlide key={item} style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',

                        }}>
                            <Box component={'img'} src={item.avatar} sx={{
                                ...imageStyle,
                                objectFit: 'cover'
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
                            }}>{item.role}</Typography>
                        </SwiperSlide>)
                })}
                {about && slides.map((item, index) => {
                    console.log(item)
                    const imgStyle = aboutSwitch(index)
                    console.log(imgStyle)
                    return (
                        <SwiperSlide key={item} style={{
                            display: {lg: 'none', md: 'flex', sm: 'flex', xs: 'flex'},
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            marginLeft: '80px',
                            marginRight: '250px'
                        }}>
                        <Box key={item} src={item} component={'img'} sx={{
                            ...imgStyle,
                            // background: '#1e1e1e',
                            // backgroundSize: 'cover'
                            // display: 'flex'

                            // display: {lg: 'block', md: 'none', sm: 'none', xs: 'none'},
                            // height: '100px',
                            // width: '100px',
                        }}/>
                        </SwiperSlide>
                    )
                })}
                {!random && !about &&  <Box className="slider-controler" sx={{
                    // marginTop: {sm: '470px', xs: '-12%'},
                    position: 'relative',
                    margin: '0 auto',
                    zIndex: 1000,
                    marginBottom: '200px',
                    display: 'flex',
                    justifyContent: 'center',
                    width: '150px'
                }}>
                    <Box className="swiper-button-prev slider-arrow" sx={{
                        ...arrowStyle,
                        // left: '36%',
                        background: `url(${arrowBack})`,
                        // padding: {sm: '25px 25px 26px 15px', xs: '25px 25px 26px 20px'}
                    }}>
                    </Box>
                    <Box className="swiper-button-next slider-arrow" sx={{
                        ...arrowStyle,
                        background: `url(${arrowBackRight})`,
                        // right: {lg: '29%', md: '25%', sm: '24%', xs: '23%'},
                        // padding: {sm: '25px 15px 26px 25px', xs: '25px 21px 26px 28px'}
                    }}>
                    </Box>
                </Box>
                }
            </Swiper>
        </Container>
    );
};

export default MySwiper;
