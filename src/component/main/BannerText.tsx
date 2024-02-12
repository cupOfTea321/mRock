import React from 'react';
import greenZiro from "../../assets/main/greenZiro.png";
import pinkZiro from "../../assets/main/pinkZiro.png";
import {Box, Typography} from "@mui/material";
import {h3} from "../../mui/palette";

const BannerText = () => {
    const mainTypo = {
        fontSize: {sm: '80px', xs: '40px'},
        lineHeight: {sm: '93.6px', xs: '46.8px'},
    }
    return (
        <>

            <Box sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <Typography sx={mainTypo} component={'h1'}>
                    ШОУ 1
                </Typography>
                <Box component={'img'} src={greenZiro} sx={{
                    width: {sm: '55px', xs: '27px'},
                    height: {sm: '94px', xs: '45px'}
                }}/>
                <Typography sx={mainTypo}>
                    0
                </Typography>
                <Box component={'img'} src={pinkZiro} sx={{
                    width: {sm: '55px', xs: '27px'},
                    height: {sm: '94px', xs: '45px'}
                }}/>
            </Box>
            <Typography sx={mainTypo} component={'h1'}>
                МУЗЫКАНТОВ
            </Typography>

            <Typography sx={h3} component={'h1'}>
                29 июня 2024 г. на ЦСКА Арене (Москва)
            </Typography>
        </>
    );
};

export default BannerText;
