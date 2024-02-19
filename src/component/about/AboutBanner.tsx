import React from 'react';
import backItem1 from "../../assets/items/aboutItem3.svg";
import {Box, Container, Typography} from "@mui/material";
import item1 from "../../assets/about/w1.webp";
import item2 from "../../assets/about/about2.png";
import item3 from "../../assets/about/w3.webp";
import item4 from "../../assets/about/about4.png";
import back1 from "../../assets/about/aboutBack1.svg";
import back2 from "../../assets/about/aboutBack2.svg";
import back3 from "../../assets/about/aboutBack3.svg";
import back4 from "../../assets/about/aboutBack4.svg";
import BlackBackground from "../../utils/BlackBackground";

const AboutBanner = () => {
    const items = [
        item1,
        item2,
        item3,
        item4,
    ]
    return (
        <>
            <Box sx={{
                position: 'relative',
                zIndex: 400,
                textAlign: 'center',
                width: {xl: '65%', lg: '80%'},
                margin: '0 auto',
                paddingTop: '150px',
                // paddingBottom: '100px',
            }} className={'animate__fadeInUp animate__animated wow'}>

                <Typography sx={{width: {sm: '100%', xs: '70%'}, margin: '0 auto'}} variant={'h2'}>
                    Впервые в России! 1000 музыкантов
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: {md: 'row', sm: 'column', xs: 'column'},
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: {sm: '100%', xs: '70%'},
                    margin: '0 auto'
                }}>
                    <Box component={'img'} src={backItem1} sx={{
                        width: {sm: '349px', xs: '221px'},
                        height: {sm: '50px', xs: '31px'}
                    }}/>
                    <Typography variant={'h2'}>
                        вместе исполнят мировые
                    </Typography>
                </Box>
                <Typography sx={{width: {sm: '100%', xs: '70%'}, margin: '0 auto'}} variant={'h2'}>
                    и отечественные хиты культовых рок-групп
                </Typography>

            </Box>
            <Container sx={{
                zIndex: 400,
                position: 'relative',
                display: 'flex',
                marginBottom: '80px'
            }} className={'animate__bounceIn animate__animated wow'}>
                {items.map((item, index) => {
                    let imgStyle = {
                        marginTop: '280px',
                        height: '263px'
                    }
                    switch (index) {
                        case 0:
                            imgStyle = {
                                marginTop: '67px',
                                height: '284px'
                            }
                            break
                        case 1:
                            imgStyle = {
                                marginTop: '160px',
                                height: '303px'
                            }
                            break
                        case 2:
                            imgStyle = {
                                marginTop: '30px',
                                height: '226px'
                            }
                            break
                        default:
                    }
                    return (
                        <Box key={item} src={item} component={'img'} sx={
                            imgStyle
                        }/>
                    )
                })}
            </Container>
            <Box component={'img'} src={back3} sx={{
                display: {sm: 'block', xs: 'none'},
                position: 'absolute',
                zIndex: 650,
                right: 0,
                top: 200
            }} className={'animate__fadeInRight animate__animated wow'}/>
            <Box component={'img'} src={back4} sx={{
                position: 'absolute',
                zIndex: 650,
                right: 0,
                bottom: 1500
            }} className={'animate__fadeInRight animate__animated wow'}/>
            <Box component={'img'} src={back2} sx={{
                display: {sm: 'block', xs: 'none'},
                position: 'absolute',
                zIndex: 650,
                left: 0,
                top: 250
            }} className={'animate__fadeInLeft animate__animated wow'}/>
        </>
    );
};

export default AboutBanner;
