import React from 'react';
import greenZiro from "../../assets/main/greenZiro.png";
import pinkZiro from "../../assets/main/pinkZiro.png";
import {Box, Typography} from "@mui/material";
import {h3} from "../../mui/palette";

const BannerText = () => {
    const mainTypo = {
        fontSize: '80px',
        lineHeight: '93.6px',
    }
    return (
        <>

            <Box sx={{
                display: 'flex',

            }}>
                <Typography sx={mainTypo} component={'h1'}>
                    ШОУ 1
                </Typography>
                <Box component={'img'} src={greenZiro}/>
                <Typography sx={mainTypo}>
                    0
                </Typography>
                <Box component={'img'} src={pinkZiro}/>
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
