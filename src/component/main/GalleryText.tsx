import React from 'react';
import backItem8 from "../../assets/back/backItem8.svg";
import {h3} from "../../mui/palette";
import {Box, Typography} from "@mui/material";

const GalleryText = () => {
    // const secondText = {
    //     fontSize: '40px',
    //     lineHeight: '37.2px',
    // }
    return (
        <Box sx={{
            zIndex: 650,
            position: 'relative',
            margin: '0 auto',
            textAlign: 'center',
            width: {xl: '60%', lg: '80%', sm: '100%', xs: '60%'},
            paddingTop: {sm: '100px', xs: '60px'},
        }} className={'animate__fadeInUp animate__animated wow'}>
            <Typography sx={{
                marginTop: '-5px',
            }} variant={'h2'}>
                Впервые в России! 1000 музыкантов
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: {sm: 'row', xs: 'column'},
                justifyContent: 'center',
                alignItems: 'center'
            }} >
                <Box component={'img'} src={backItem8} sx={{
                    // paddingTop: '-10px'
                    width: {md: '342px', sm: '240px', xs: '220px'},
                    height: {md: '50px', sm: '40px', xs: '32px'},
                }}/>
                <Typography variant={'h2'}>
                    вместе исполнят мировые
                </Typography>
            </Box>
            <Typography variant={'h2'}>
                и отечественные хиты культовых рок-групп
            </Typography>
            <Typography sx={{
                ...h3,
                margin: '0 auto',
                marginTop: '24px',
                marginBottom: {sm: '40px', xs: '24px'},
                width: {sm: '100%', xs: '80%'},

            }}>
                29 июня 2024 г. на ЦСКА Арене (Москва)
            </Typography>
        </Box>
    );
};

export default GalleryText;
