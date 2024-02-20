import React from 'react';
import authBack from "../../assets/items/casting.webp";
import authBackM from "../../assets/items/castingM.webp";
import {Box, Typography} from "@mui/material";
import {backText} from "../../mui/palette";
import {useNavigate} from "react-router-dom";
import ym from "react-yandex-metrika";
const CastingItem = ({sx}) => {
    const navigate = useNavigate();
    // const handleClick = () => navigate('/reg')
    const castingBtn = {
        ...backText,
        cursor: 'pointer',
        width: {sm: '200px', xs: '115px'},
        height: {sm: '50px', xs: '40px'},
        fontSize: {sm: '16px', xs: '14px'},
        // display: 'flex',
        // justifyContent: 'centre',
        // alignItems: 'centre',
        textAlign: 'centre',
    }
    const yandexClick = () => {
        ym(96408862,'reachGoal','kasting')
        navigate('/reg')

    }
    return (
        <Box sx={{
            ...castingBtn,
            backgroundImage: {
                sm: `url(${authBack})`,
                xs: `url(${authBackM})`,
            },
            ...sx
        }} onClick={yandexClick}>
            {/*<Typography>*/}
            Кастинг
            {/*</Typography>*/}
        </Box>
    );
};

export default CastingItem;
