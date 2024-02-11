import React from 'react';
import authBack from "../../assets/back/authBack.png";
import {Box} from "@mui/material";
import {backText} from "../../mui/palette";

const CastingItem = ({sx}) => {
    const castingBtn = {
        ...backText,
        cursor: 'pointer',
        width: '200px',
        height: '50px',

    }
    return (
        <Box sx={{...castingBtn, backgroundImage: `url(${authBack})`, ...sx}}>Кастинг</Box>
    );
};

export default CastingItem;
