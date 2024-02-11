import React from 'react';
import backItem8 from "../../assets/back/backItem8.svg";
import {h3} from "../../mui/palette";
import {Box, Typography} from "@mui/material";

const GalleryText = () => {
    const secondText = {
        fontSize: '40px',
        lineHeight: '37.2px',
    }
    return (
        <Box sx={{
            zIndex: 650,
            position: 'relative',
            margin: '0 auto',
            textAlign: 'center',
            width: '60%',
            paddingTop: '100px',
        }}>
            <Typography sx={{
                ...secondText,
                marginTop: '-5px',
            }}>
                Впервые в России! 1000 музыкантов
            </Typography>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box component={'img'} src={backItem8} sx={{
                    // paddingTop: '-10px'
                }}/>
                <Typography sx={secondText}>
                    вместе исполнят мировые
                </Typography>
            </Box>
            <Typography sx={{
                ...secondText,
            }}>
                и отечественные хиты культовых рок-групп
            </Typography>
            <Typography sx={{
                ...h3,
                marginTop: '24px',
                marginBottom: '40px'
            }}>
                29 июня 2024 г. на ЦСКА Арене (Москва)
            </Typography>
        </Box>
    );
};

export default GalleryText;
