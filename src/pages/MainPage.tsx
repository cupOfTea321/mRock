import React from 'react';
import MainBanner from "../component/main/MainBanner";
import {Box, Typography} from "@mui/material";
import candy from "../assets/back/backBorder2.png"
import item9 from "../assets/back/backItem9.svg"
import MainGallery from "../component/main/MainGallery";
import MainThousand from "../component/main/MainThousand";
import MainEmoji from "../component/main/MainEmoji";
import WhiteContainer from "../component/WhiteContainer";
import {backText, blackText} from "../mui/palette";
import Partners from "../component/main/Partners";

const MainPage = () => {

    return (
        <>
            <MainBanner/>
            <Box  sx={{
                width: '105%',
                backgroundImage: `url(${candy})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '100px',
                marginTop: '-100px',
                zIndex: 450,
                marginLeft: {sm: '-50px', xs: 0},
                position: 'relative',
                // opacity: 0.1,
            }}  className={'animate__fadeInUp animate__animated wow'}/>
            <MainGallery/>
            <MainThousand/>
            <MainEmoji/>
            <Partners/>
        </>

    );
};

export default MainPage;
