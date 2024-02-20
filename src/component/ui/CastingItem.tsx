import React from 'react';
import authBack from "../../assets/items/casting.webp";
import authBackM from "../../assets/items/castingM.webp";
import {Box, Typography} from "@mui/material";
import {backText} from "../../mui/palette";
import {useNavigate} from "react-router-dom";
import ym from "react-yandex-metrika";
import {motion} from "framer-motion";
import greenHover from "../../assets/leftHover.svg";
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
        ym('reachGoal','kasting')
        navigate('/reg')

    }
    return (
        <Box component={motion.button} sx={{
            ...castingBtn,
            color: 'white',
            backgroundImage: {
                sm: `url(${authBack})`,
                xs: `url(${authBackM})`,
            },
            ...sx,

        }} whileHover={{
            backgroundImage: `url(${greenHover})`,
            color: 'black',
            transition: { delay: 0.1, duration: 0.2 }
        }} onClick={yandexClick}>
            {/*<Typography>*/}
            Кастинг
            {/*</Typography>*/}
        </Box>
    );
};

export default CastingItem;
