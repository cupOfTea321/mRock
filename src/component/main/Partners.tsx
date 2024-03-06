import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import item9 from "../../assets/back/backItem9.webp";
import back3 from "../../assets/back3.svg";
import blast from "../../assets/blast.svg";
import mega from "../../assets/sbermegamarket.svg";
import itemLeft from "../../assets/items/item4.svg";
import back4 from "../../assets/main/maxim.svg";
import rock from "../../assets/rock.svg";
import images from "../../assets/images/Images";
import { backText, blackText } from "../../mui/palette";
import WhiteContainer from "../../utils/WhiteContainer";

// import styles from "./Partners.module.css";

const Partners = () => {

   const handleClick = (to) => {
       window.open(to, '_blank');
   }

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
            <Box
               sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: { sm: "row", xs: "column" },

                  marginTop: "40px",
               }}
               className={"animate__fadeInUp animate__animated wow"}>
               <Box
                  sx={{
                     background: `url(${itemLeft})`,
                     width: {
                        lg: "549px",
                        md: "439px",
                        sm: "329px",
                        xs: "271px",
                     },
                     height: {
                        lg: "390px",
                        md: "321px",
                        sm: "234px",
                        xs: "175px",
                     },
                     backgroundSize: "cover",
                     cursor: "pointer",
                     display: "flex",
                     alignItems: "flex-end",
                     justifyContent: "center",
                  }}
                  component={motion.div}
                  whileHover={{
                     scale: 1.1,
                  }}
                  onClick={() => handleClick("https://megamarket.ru/")}>
                  <Box
                     src={mega}
                     component={"img"}
                     alt={"Мегамаркет"}
                     sx={{
                        width: { md: "371px", sm: "280px", xs: "208px" },
                        height: { md: "149px", sm: "100px", xs: "90px" },
                        marginBottom: { md: "50px", sm: "30px", xs: "10px" },
                     }}
                  />
               </Box>
               <Box
                  component={motion.img}
                  whileHover={{
                     scale: 1.1,
                  }}
                  src={rock}
                  alt="Rock After Work"
                  onClick={() => handleClick("https://rockafterwork.com/")}
                  sx={{
                     marginTop: { sm: 0, xs: "19px" },
                     position: "relative",
                     marginLeft: { sm: 0, xs: "50%" },
                     cursor: "pointer",
                     width: {
                        lg: "254px",
                        md: "203px",
                        sm: "152px",
                        xs: "149px",
                     },
                     height: {
                        lg: "184px",
                        md: "147px",
                        sm: "110px",
                        xs: "100px",
                     },
                  }}
               />
            </Box>
            <Box
               component={motion.img}
               whileHover={{
                  scale: 1.1,
               }}
               alt="Maxim Online"
               onClick={() => handleClick("https://maximonline.ru/")}
               src={back4}
               sx={{
                  position: "absolute",
                  bottom: { sm: -100, xs: -150 },
                  zIndex: 500,
                  cursor: "pointer",
                  right: { sm: 50, xs: 20, md: 0 },
                  width: { lg: "324px", md: "259px", sm: "200px", xs: "184px" },
                  height: {
                     lg: "224px",
                     md: "179px",
                     sm: "130px",
                     xs: "118px",
                  },
               }}
               className={"animate__fadeInUp animate__animated wow"}
            />
            <Box
               component={motion.img}
               whileHover={{
                  scale: 1.1,
               }}
               src={images.partner1}
               alt="Blastbeat Shop"
               onClick={() => handleClick("https://blastbeat-shop.ru/")}
               sx={{
                  position: "absolute",
                  top: {
                     lg: "290px",
                     md: "260px",
                     custom800: "260px",
                     sm: "470px",
                  },
                  right: {
                     lg: "-80px",
                     md: "40px",
                     custom800: "40px",
                     sm: "50%",
                  },
                  cursor: "pointer",
                  display: "block",
                  rotate: "18deg",
                  width: { lg: "327px", md: "257px", sm: "210px", xs: "154px" },
                  height: { lg: "152px", md: "122px", sm: "102px", xs: "80px" },
                  backgroundColor: "rgba(255, 227, 199, 1)",
                  borderRadius: "10px",
                  padding: "20px",
               }}
            />
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
