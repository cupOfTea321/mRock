import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import item9 from "../../assets/back/backItem9.webp";
import back3 from "../../assets/back3.svg";
import { backText, blackText } from "../../mui/palette";
import WhiteContainer from "../../utils/WhiteContainer";

import partner1 from "../../assets/partners/partner-1.svg";
import partner2 from "../../assets/partners/partner-2.png";
import partner3 from "../../assets/partners/partner-3.svg";
import partner4 from "../../assets/partners/partner-4.svg";
import partner4Bg from "../../assets/partners/partner-4-bg.png";
import partner5 from "../../assets/partners/partner-5.svg";
import partner6 from "../../assets/partners/partner-6.svg";
import partner7 from "../../assets/partners/partner-7.svg";
import partner8 from "../../assets/partners/partner-8.svg";
import partner9 from "../../assets/partners/partner-9.svg";

const Partners = () => {
   const handleClick = (to) => {
      window.open(to, "_blank");
   };

   return (
      <WhiteContainer
         sx={{
            marginTop: "-120px",
            paddingBottom: "220px",
         }}>
         <Container
            sx={{
               position: "relative",
            }}>
            <Box
               sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "100px",
                  marginBottom: "50px",
               }}
               className={"animate__fadeInUp animate__animated wow"}>
               <Typography sx={blackText} variant={"h2"}>
                  Партнеры
               </Typography>
               <Box
                  sx={{
                     width: "309px",
                     backgroundImage: `url(${item9})`,
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                     height: "63px",
                     ...backText,
                  }}>
                  <Typography
                     sx={{
                        ...blackText,
                        marginRight: "20px",
                     }}
                     variant={"h2"}>
                     мероприятия
                  </Typography>
               </Box>
            </Box>
            <div className="partners">
               <a href="https://megamarket.ru/" className="partners__partner">
                  <img src={partner1} alt="Мегамаркет" />
               </a>
               <a
                  href="https://blastbeat-shop.ru/"
                  className="partners__partner">
                  <img src={partner2} alt="Blastbeat Shop" />
               </a>
               <a href="https://maximonline.ru/" className="partners__partner">
                  <img src={partner3} alt="Maxim Online" />
               </a>
               <a
                  href="https://rockafterwork.com/"
                  className="partners__partner">
                  <img src={partner4} alt="Rock After Work" />
                  <img src={partner4Bg} alt="Rock After Work" />
               </a>
               <a href="https://citydrive.ru/" className="partners__partner">
                  <img src={partner5} alt="Ситидрайв" />
               </a>
               <a
                  href="https://vk.com/revolutionfest"
                  className="partners__partner">
                  <img src={partner6} alt="Revolution Festival" />
               </a>
               <a href="https://dailymoscow.ru/" className="partners__partner">
                  <img src={partner7} alt="Revolution Festival" />
               </a>
               <a href="https://kudago.com/" className="partners__partner">
                  <img src={partner8} alt="Revolution Festival" />
               </a>
               <a
                  href="https://typical-moscow.ru/"
                  className="partners__partner">
                  <img src={partner9} alt="Revolution Festival" />
               </a>
            </div>
         </Container>

         <Box
            component={"img"}
            src={back3}
            sx={{
               display: { sm: "block", xs: "none" },
               position: "absolute",
               top: -31,
               left: 200,
               zIndex: 500,
            }}
            className={"animate__fadeInUp animate__animated wow"}
         />
      </WhiteContainer>
   );
};

export default Partners;
