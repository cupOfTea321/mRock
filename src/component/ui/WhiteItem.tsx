import React from 'react';
import whiteBack from "../../assets/items/tickets.webp";
import greenHover from "../../assets/rightHover.svg";
import whiteBackM from "../../assets/items/ticketsM.webp";
import {Box, Typography} from "@mui/material";
import {backText, h3} from "../../mui/palette";
import ym from "react-yandex-metrika";
import {motion} from "framer-motion";

const WhiteItem =  ({sx}) => {
    const yandexClick = () => {
        console.log('yandexClick')
        ym(96408862, 'reachGoal', 'tickets')
    }
    return (
        <Box component={motion.div}  sx={{
            ...backText,
            cursor: 'pointer',
            width: {sm: '200px', xs: '115px'},
            height: {sm: '50px', xs: '40px'},
            // marginBottom: '20px',
            backgroundImage: {
                sm: `url(${whiteBack})`,
                xs: `url(${whiteBackM})`,
            },
            // backgroundSize: 'contain',
            color: 'black',
            fontWeight: 400,
            display: 'flex',
            alignItems: 'center',
            // backgroundBlendMode: 'multiply',
            // transition: 'background-color 0.3s ease',
            ...sx
        }} onClick={yandexClick}
             whileHover={{
                 backgroundImage: `url(${greenHover})`,
                 transition: { delay: 0.1, duration: 0.2 }
        }}
              >
            {/*<Typography sx={h3}>*/}
            {/*    Билеты*/}

            {/*</Typography>*/}
            {/*<div id="ya-widget-frame"></div>*/}
            <y:ticket data-session-id="ticketsteam-6369@16168107" data-template="yandex-button"></y:ticket>
        </Box>
    );
};

export default WhiteItem;
