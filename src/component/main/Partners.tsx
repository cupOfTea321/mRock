import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import item9 from "../../assets/back/backItem9.webp";
import back3 from "../../assets/back3.svg";
// import blast from "../../assets/blast.svg";
// import mega from "../../assets/sbermegamarket.svg";
// import itemLeft from "../../assets/items/item4.svg";
// import back4 from "../../assets/main/maxim.svg";
// import rock from "../../assets/rock.svg";
// import images from "../../assets/images/Images";
import { backText, blackText } from "../../mui/palette";
import WhiteContainer from "../../utils/WhiteContainer";

import partner1 from "../../assets/partners/partner-1.svg";
import partner2 from "../../assets/partners/partner-2.png";
import partner3 from "../../assets/partners/partner-3.svg";
import partner4 from "../../assets/partners/partner-4.svg";
import partner4Bg from "../../assets/partners/partner-4-bg.png";

const Partners = () => {
   const handleClick = (to) => {
      window.open(to, "_blank");
   };

   return (
      <WhiteContainer
         sx={{
            marginTop: "-120px",
            // marginBottom: '0',
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
               <div className="partners__partner">
                  <img src={partner1} alt="партнер" />
               </div>
               <div className="partners__partner">
                  <img src={partner2} alt="партнер" />
               </div>
               <div className="partners__partner">
                  <img src={partner3} alt="партнер" />
               </div>
               <div className="partners__partner">
                  <img src={partner4} alt="партнер" />
                  <img src={partner4Bg} alt="bg" />
               </div>
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
