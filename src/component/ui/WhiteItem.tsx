import React from 'react';
import whiteBack from "../../assets/whiteItem.png";
import {Box} from "@mui/material";
import {backText} from "../../mui/palette";

const WhiteItem = ({sx}) => {
    return (
        <Box  sx={{...backText,
            cursor: 'pointer',
            width: {sm: '200px', xs: '115px'},
            height: {sm: '50px', xs: '40px'},
            backgroundImage: `url(${whiteBack})`,
            color: 'black',
            ...sx
        }}>

        </Box>
    );
};

export default WhiteItem;
