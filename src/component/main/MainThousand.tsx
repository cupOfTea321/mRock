import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import backItem7 from "../../assets/back/backItem7.svg";
import item1 from "../../assets/main/item1.png";
import thousand from "../../assets/main/thousand.png";
import whiteBack from "../../assets/main/whiteBack.svg"
import slider1 from "../../assets/slides/img1.png";
import slider2 from "../../assets/slides/img2.png";
import slider3 from "../../assets/slides/img3.png";
import slider4 from "../../assets/slides/img4.png";
import {blackText, h3, title2} from "../../mui/palette";
import WhiteContainer from "../WhiteContainer";

const MainThousand = () => {

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
        <WhiteContainer>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '100px',
            }}>
                <Typography variant={'h2'} sx={blackText}>
                    Самый масштабный
                </Typography>
                <Box component={'img'} src={item1} sx={{}}/>
                <Typography variant={'h2'} sx={blackText}>
                    страны
                </Typography>
            </Box>
            <Container sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                {slides.map((item, index) => {
                    let imageStyle = {}
                    let textStyle = {}
                    switch (index) {
                        case 1:
                            imageStyle = {
                                marginTop: '61px'
                            }
                            break
                        case 2:
                            imageStyle = {
                                marginTop: '34px'
                            }
                            textStyle = {
                                transform: 'rotate(3.21deg)'
                            }
                            break
                        case 3:
                            imageStyle = {
                                marginTop: '63px'
                            }
                            textStyle = {
                                transform: 'rotate(-5.32deg)'
                            }
                            break
                        default:
                            imageStyle = {
                                marginTop: '24px'
                            }
                            textStyle = {
                                transform: 'rotate(-2.36deg)'
                            }
                    }
                    return (
                        <Box key={item} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>
                            <Box component={'img'} src={item.img} sx={imageStyle}/>
                            <Typography sx={{
                                ...blackText,
                                ...title2,
                                ...textStyle,
                                marginTop: '10px'
                            }}>{item.name}</Typography>
                            <Typography sx={{
                                ...blackText,
                                ...h3,
                                ...textStyle,
                                marginTop: '10px'
                            }}>{item.tool}</Typography>
                        </Box>)
                })}
            </Container>
            <Box component={'img'} src={thousand} sx={{
                margin: '0 auto',
                display: 'flex',
                marginTop: '25px'
            }}/>
            <Box component={'img'} src={backItem7} sx={{
                position: 'absolute',
                top: -30,
                left: 100,
                zIndex: 600,
            }}/>
        </WhiteContainer>
    );
};

export default MainThousand;
