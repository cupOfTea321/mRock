import React from 'react';
import whiteBack from "../../assets/items/tickets.webp";
import whiteBackM from "../../assets/items/ticketsM.webp";
import {Box, Typography} from "@mui/material";
import {backText, h3} from "../../mui/palette";

const WhiteItem = ({sx}) => {
    return (
        <Box  sx={{
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
            display: 'flex',
            alignItems: 'center',
            ...sx
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
