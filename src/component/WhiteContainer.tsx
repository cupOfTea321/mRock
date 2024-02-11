import React from 'react';
import whiteBack from "../assets/main/whiteBack.svg";
import {Box} from "@mui/material";

const WhiteContainer = ({children, sx}) => {
    return (
        <Box sx={{
            width: '100vw',
            backgroundImage: `url(${whiteBack})`,
            backgroundSize: 'contain',
            marginTop: '-50px',
            marginBottom: '-50px',
            paddingBottom: '120px',
            zIndex:   350,
            position: 'relative',
            ...sx
        }}>
            {children}
        </Box>
    );
};

export default WhiteContainer;
