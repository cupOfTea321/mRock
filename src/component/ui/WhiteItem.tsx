import whiteBack from "../../assets/items/tickets.webp";
import greenHover from "../../assets/hovers/purpleHover.webp";
import whiteBackM from "../../assets/items/ticketsM.webp";
import { Box, Typography } from "@mui/material";
import { backText, h3 } from "../../mui/palette";
import ym from "react-yandex-metrika";
import { motion } from "framer-motion";

const WhiteItem = ({ sx }) => {
   const yandexClick = () => {
      ym("reachGoal", "tickets");
   };
   return (
      <Box
         id="yandex-button"
         component={motion.button}
         sx={{
            ...backText,
            cursor: "pointer",
            width: { sm: "200px", xs: "115px" },
            height: { sm: "50px", xs: "40px" },
            // marginBottom: '20px',
            backgroundImage: {
               sm: `url(${whiteBack})`,
               xs: `url(${whiteBackM})`,
            },
            // backgroundSize: 'contain',
            color: "black",
            fontWeight: 400,
            display: "flex",
            alignItems: "center",
            position: "relative",
            // backgroundBlendMode: 'multiply',
            // transition: 'background-color 0.3s ease',
            ...sx,
         }}
         onClick={yandexClick}
         whileHover={{
            backgroundImage: `url(${greenHover})`,
            transition: { delay: 0.1, duration: 0.2 },
            color: "white",
            fontWeight: 400,
         }}>
         {/*<div id="ya-widget-frame"></div>*/}
         <y:ticket
            data-session-id="ticketsteam-6369@16168107"
            data-template="yandex-button"></y:ticket>
         <Typography sx={h3}>Билеты</Typography>
      </Box>
   );
};

export default WhiteItem;
