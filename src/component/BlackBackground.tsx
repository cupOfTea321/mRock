import React from 'react';
import backLines from "../assets/back/backLines.png";

import {Box} from "@mui/material";

const BlackBackground = ({
            back = backLines,
            sx
                         }) => {
    return (
        <>
            <Box sx={{
                position: 'absolute',
                zIndex: 340,
                top: 0,
                left: 0,
                width: '100vw',
                height: '100%',
                backgroundColor: 'black',
                ...sx
            }}>
            </Box>
            <Box sx={{
                position: 'absolute',
                zIndex: 360,
                width: '100vw',
                height: '100%',
                opacity: 0.4    ,
                background: `url(${back})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                ...sx
            }}>

            </Box>
        </>
    );
};

export default BlackBackground;
