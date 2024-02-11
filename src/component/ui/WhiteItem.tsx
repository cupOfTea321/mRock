import React from 'react';
import whiteBack from "../../assets/whiteItem.png";
import {Box} from "@mui/material";
import {backText} from "../../mui/palette";

const WhiteItem = ({sx}) => {
    return (
        <Box  sx={{...backText,
            cursor: 'pointer',
            width: '200px',
            height: '50px',
            backgroundImage: `url(${whiteBack})`,
            color: 'black',
            ...sx
        }}></Box>
    );
};

export default WhiteItem;
