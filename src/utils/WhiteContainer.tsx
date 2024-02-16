import React from 'react';
import whiteBack from "../assets/main/whiteBack.svg";
import whiteBackM from "../assets/main/WhiteContainerM.png";
import whiteBackM2 from "../assets/backM.png";
import {Box} from "@mui/material";

const WhiteContainer = ({children, sx}) => {
    return (
        <Box sx={{
            width: '100vw',
            backgroundImage: {
                sm: `url(${whiteBack})`,
                xs: `url(${whiteBackM})`,
            },
            backgroundSize: 'contain',
            marginTop: '-50px',
            marginBottom: '-50px',
            paddingBottom: '120px',
            zIndex:   350,
            height: '100%',
            position: 'relative',
            ...sx
        }}>
            {children}
        </Box>
    );
};

export default WhiteContainer;
