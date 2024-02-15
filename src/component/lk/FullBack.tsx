import React from 'react';
import authPhone from "../../assets/lk/authPhone.png";
import {Box} from "@mui/material";

const FullBack = () => {
    return (
        <Box sx={{
            position: 'absolute',
            width: '100vw',
            height: '100%',
            backgroundImage: `url(${authPhone})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // background: 'black',
            zIndex: -100,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        }}>

        </Box>
    );
};

export default FullBack;
