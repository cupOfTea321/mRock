import React from 'react';
import {Box, Typography} from "@mui/material";
import BlackBackground from "../component/BlackBackground";
import ideaItem2 from "../assets/idea/item2.svg";
import {h3} from "../mui/palette";
import ideaImg from "../assets/idea/ideaImg.png";
import ideaImgM from "../assets/idea/ideaImg.png";
import CastingItem from "../component/ui/CastingItem";
import WhiteItem from "../component/ui/WhiteItem";
import IdeaBanner from "../component/idea/IdeaBanner";
import Swiper from "../component/Swiper";
import Partners from "../component/main/Partners";

const IdeaPage = () => {
    return (
        <>
            <Box sx={{
                zIndex: 150,
                // position: 'relative',
                // marginBottom: '300px',

            }}>
                <BlackBackground/>
                <IdeaBanner/>
            </Box>

            <Box sx={{
                position: 'relative',
                zIndex: 500,
                textAlign: 'center',
                width: '65%',
                margin: '0 auto',
                // paddingTop: '90px',
                // paddingBottom: '60px',
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Typography variant={'h2'}>
                        Мы —
                    </Typography>
                    <Box component={'img'} src={ideaItem2} sx={{
                    }}/>
                    <Typography variant={'h2'}>
                        которая делает
                    </Typography>
                </Box>
                <Typography variant={'h2'}>
                    масштабное событие незабываемым
                </Typography>
            </Box>
            <Swiper/>
            <Partners/>

        </>
    );
};

export default IdeaPage;
