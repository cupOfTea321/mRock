import React from 'react';
import rightBack from "../../assets/lk/musBack.png";
import likeBack from "../../assets/lk/likeBack.png";
import {backText} from "../../mui/palette";
import like from "../../assets/lk/like.png";
import {Box} from "@mui/material";

const MusRight = () => {
    const imgStyle = {
        position: 'absolute',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <Box
            sx={{
                background: `url(${rightBack})`,
                ...imgStyle,
                right: 0,
                top: -50,
                zIndex: 380,
                width: '689px',
                height: '95%',


                // bottom: 250

            }} className={'animate__bounceIn animate__animated wow'}
        >
            <Box
                sx={{
                    background: `url(${likeBack})`,
                    ...imgStyle,
                    position: 'absolute',
                    right: 0,
                    left: 80,
                    margin: '0 auto',
                    bottom: -20,
                    width: '140px',
                    height: '77px',
                    ...backText
                }}
            >
                <Box
                    component={'img'}
                    src={like}
                    sx={{
                        marginRight: '6px'
                    }}
                />
                132
            </Box>
        </Box>
    );
};

export default MusRight;
