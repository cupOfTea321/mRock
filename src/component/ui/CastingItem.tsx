import React from 'react';
import authBack from "../../assets/items/castingBack.png";
import authBackM from "../../assets/items/castingBackM.png";
import {Box, Typography} from "@mui/material";
import {backText} from "../../mui/palette";

const CastingItem = ({sx}) => {
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
    return (
        <Box sx={{
            ...castingBtn,
            backgroundImage: {
                sm: `url(${authBack})`,
                xs: `url(${authBackM})`,
            },
            ...sx
        }}>
            {/*<Typography>*/}
            Кастинг
            {/*</Typography>*/}
        </Box>
    );
};

export default CastingItem;
