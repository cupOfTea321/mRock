import React from 'react';
import back from "../../assets/mainBack2.png";
import back2 from "../../assets/main/mainBan.png";
import BannerText from "./BannerText";
import backItem1 from "../../assets/back/backItem1.svg";
import mobileBanner from "../../assets/mobileBanner.png";
import {Box} from "@mui/material";
import WhiteItem from "../ui/WhiteItem";
import CastingItem from "../ui/CastingItem";

const MainBanner = () => {
    return (
        <Box sx={{
            // paddingTop: '114px',
            height: '95vh',
            backgroundImage: `url(${back})`,
            width: '100vw',
            backgroundSize: 'cover',
            // backgroundRepeat: 'no-repeat',
            position: 'relative',
            zIndex: 320,
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                // marginTop: '100px'
                height: '100%',
                zIndex: 250,
                position: 'relative'
            }} className={'animate__fadeInUp animate__animated wow'}>
                <BannerText/>
                <Box sx={{
                    display: 'flex',
                    position: 'relative',
                    zIndex: 350,
                    marginTop: '40px'
                }}>
                    <CastingItem/>
                    <WhiteItem/>
                </Box>
            </Box>
            {/*<Box component={'img'} src={back1} sx={{*/}
            {/*    position: 'absolute',*/}
            {/*    top: 0,*/}
            {/*    bottom: 0,*/}
            {/*    left: 0,*/}
            {/*    right: 0,*/}
            {/*    margin: 'auto',*/}
            {/*    zIndex: 150*/}
            {/*    // top: 0,*/}
            {/*    // right: 0,*/}
            {/*}}/>*/}


            <Box component={'img'} src={mobileBanner} sx={{
                position: 'absolute',
                bottom: 130,
                // right: 50,
                margin: '0 auto',
                zIndex: 500,
                display: {sm: 'none', xs: 'block'},
                // top: 0,
                left: 0,
                right: 0,

            }}/>
        </Box>
    );
};

export default MainBanner;
