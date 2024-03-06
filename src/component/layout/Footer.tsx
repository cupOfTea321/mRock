import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import back6 from "../../assets/back6.svg";
import back7 from "../../assets/back7.svg";
import back8 from "../../assets/back8.svg";
import footerItem from "../../assets/footerItem.png";
import footerItemM from "../../assets/footerM.png";
import footerRock from "../../assets/footerRock.svg";
import item5 from "../../assets/hovers/footerback.webp";
import { blackText } from "../../mui/palette";
import BlackBackground from "../../utils/BlackBackground";
import { ModalData } from "../lk/ModalData";
import { ModalPolice } from "../main/ModalPolice";
import CastingItem from "../ui/CastingItem";
import ItemText from "../ui/ItemText";
import WhiteItem from "../ui/WhiteItem";
type FooterMenu = {
   page: string;
   to?: string;
};
const InviteText = ({ sx }) => {
   return (
      <Typography
         sx={{
            fontSize: {
               xl: "81.41px",
               lg: "60px",
               md: "40px",
               sm: "30px",
               xs: "30px",
            },
            lineHeight: "95.25px",
            marginTop: "34px",
            paddingBottom: "28px",
            display: { sm: "block", xs: "none" },
            ...sx,
            // textAlign: {xl: 'left', lg: 'right'}
         }}>
         ПРИСОЕДИНЯЙТЕСЬ!
      </Typography>
   );
};
const Footer = ({ path }) => {
   const footerMenu: FooterMenu[] = [
      {
         page: "Главная",
         to: "/",
      },
      {
         page: "Идея",
         to: "/idea",
      },
      {
         page: "О мероприятии",
         to: "/about",
      },
      {
         page: "Тысяча",
         to: "thousand",
      },
      {
         page: "Личный кабинет",
         to: "musician",
      },
      {
         page: "Оферта",
         to: "ofer",
      },
   ];
   const footerText = {
      color: "white",
      fontSize: "12px",
      marginRight: { sm: "16px", xs: "8px" },
      lineHeight: "14.4px",
      cursor: "pointer",
   };
   const navigate = useNavigate();
   const [open, setOpen] = useState(false);
   const [openData, setOpenData] = useState(false);

   const [hovered, setHovered] = useState(false);
   const handleMenu = (to) => {
      if (to === "ofer") {
         setOpenData(true);
      } else {
         navigate(to);
      }
   };
   const handleHistory = (to) => {
      window.location.href = "https://t.me/mega_rock_bot";
   };
   return (
      <Box
         sx={{
            // zIndex: 1500,
            position: "relative",
            bottom: 0,
            left: 0,
            right: 0,
            background: "#353535",
         }}>
         {path !== "/idea" && path !== "/about" && path !== "/thousand" && (
            <BlackBackground />
         )}

         <Container
            sx={{
               position: "relative",
               zIndex: 500,
            }}
            className={"animate__fadeInUp animate__animated wow"}>
            <Box
               sx={{
                  display: "flex",
                  flexDirection: { sm: "row", xs: "column-reverse" },
                  paddingTop: "100px",
               }}>
               <Box
                  sx={{
                     // width: '10%',
                     textAlign: { sm: "left", xs: "center" },
                     flexDirection: "column",
                     display: "flex",
                     alignItems: { xs: "center", md: "start" },
                     gap: "20px",
                     marginBottom: "20px",
                  }}>
                  <Typography
                     variant={"h2"}
                     sx={
                        {
                           // width: '100%'
                           // margin: '0 auto'
                        }
                     }>
                     Остались вопросы?
                  </Typography>
                  <Typography
                     sx={{
                        fontSize: { md: "32px", sm: "24px", xs: "16px" },
                     }}>
                     Свяжитесь с нами
                  </Typography>
                  {/* <Box
              component={motion.img}
              src={hovered ? greenHover : item5}
              sx={{
                ma3rginTop: "14px",
                cursor: "pointer",
              }}
              onClick={handleHistory}
              onHoverStart={()=>setHovered(true)}
              onHoverEnd={()=>setHovered(false)}
            /> */}
                  <ItemText
                     title="Написать организаторам"
                     onClick={handleHistory}
                     whitetext
                     sx={{
                        backgroundImage: `url(${item5})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        color: "white",
                        width: "250px",
                        height: "55px",
                     }}
                  />
               </Box>
               <Box
                  sx={{
                     backgroundImage: {
                        sm: `url(${footerItem})`,
                        xs: `url(${footerItemM})`,
                     },
                     backgroundSize: "contain",
                     backgroundRepeat: "no-repeat",
                     width: { sm: "90%", xs: "320px" },
                     margin: "0 auto",
                     marginBottom: { sm: 0, xs: "-40px" },
                     height: "350px",
                     position: "relative",
                  }}>
                  <CastingItem
                     sx={{
                        position: "absolute",
                        bottom: { md: 0, sm: 80, xs: "auto" },
                        top: { sm: "auto", xs: 0 },
                        left: 0,
                     }}
                  />
                  <WhiteItem
                     sx={{
                        position: "absolute",
                        bottom: { md: 0, sm: 80, xs: 70 },
                        right: { md: 50, sm: 20, xs: 0 },
                        // top: {sm: 'auto', xs: 0}
                     }}
                  />
               </Box>
               <InviteText
                  sx={{
                     display: { sm: "none", xs: "block" },
                     textAlign: "center",
                     marginTop: "-20px",
                     marginBottom: "-20px",
                  }}
               />
            </Box>

            <Box
               sx={{
                  marginLeft: { xl: "17%", lg: "38%", md: "40%", sm: "38%" },
                  paddingBottom: "40px",
               }}>
               <InviteText />
               <Box
                  sx={{
                     display: "flex",
                     justifyContent: "space-between",
                     alignItems: "center",
                     marginBottom: { sm: 0, xs: "300px" },
                  }}>
                  <Box
                     sx={{
                        display: "flex",
                        gap: { sm: 2, xs: 1 },
                        width: { sm: "auto", xs: "200px" },
                        margin: "0 auto",
                        flexWrap: "wrap",
                        justifyContent: { sm: "flex-start", xs: "center" },
                     }}>
                     {footerMenu.map((item) => (
                        <Box
                           component={motion.div}
                           whileHover={{
                              color: "#8654CC",
                           }}
                           onClick={() => handleMenu(item.to)}
                           key={item.page}
                           style={footerText}>
                           {item.page}
                        </Box>
                     ))}
                  </Box>
                  <Box
                     sx={{
                        ...footerText,
                        textAlign: "right",
                        display: { sm: "block", xs: "none" },
                     }}
                     component={motion.div}
                     whileHover={{
                        color: "#8654CC",
                     }}
                     onClick={() => setOpen(true)}>
                     Политика конфиденциальности
                  </Box>
                  <ModalPolice open={open} setOpen={setOpen} />
                  <ModalData open={openData} setOpen={setOpenData} />
               </Box>
            </Box>

            <Box
               src={footerRock}
               sx={{
                  position: "absolute",
                  backgroundImage: `url(${footerRock})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  zIndex: 400,
                  bottom: 0,
                  left: { md: -100, xs: 0 },
                  width: { lg: "400px", md: "335px", sm: "300px", xs: "347px" },
                  height: {
                     lg: "290px",
                     md: "289px",
                     sm: "270px",
                     xs: "290px",
                  },
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
               }}
               className={"animate__fadeInLeft animate__animated wow"}>
               <Typography
                  sx={{
                     ...footerText,
                     ...blackText,
                     paddingBottom: {
                        lg: "30px",
                        md: "15px",
                        sm: "15px",
                        xs: "20px",
                     },
                     width: { lg: "65%", md: "80%", xs: "290px" },
                     paddingRight: "55px",
                     display: "flex",
                     flexDirection: "column",
                     textAlign: {
                        lg: "left",
                        md: "center",
                        sm: "center",
                        xs: "center",
                     },
                     marginRight: { md: "30px", sm: "-15px", xs: 0 },
                  }}>
                  Организатор мероприятия продюсерский центр “ПОЗИЦИЯ” (ИП
                  Жарков К.С., ИНН 507461873349, ОГРНИП 315507400000705)
                  <Typography
                     sx={{
                        marginTop: "10px",
                        display: { sm: "none", xs: "block" },
                     }}
                     onClick={() => setOpen(true)}
                     variant="h5">
                     Политика конфиденциальности
                  </Typography>
               </Typography>
            </Box>
         </Container>
         <Box
            src={back7}
            component={"img"}
            sx={{
               position: "absolute",
               display: { lg: "block", md: "none", sm: "none", xs: "none" },
               zIndex: 500,
               left: 0,
               top: 50,
            }}
            className={"animate__fadeInLeft animate__animated wow"}
         />
         <Box
            src={back6}
            component={"img"}
            sx={{
               position: "absolute",
               zIndex: 500,
               right: 250,
               width: { sm: "187px", xs: "95px" },
               height: { sm: "180px", xs: "76px" },
               top: { sm: -50, xs: 0 },
            }}
            className={"animate__fadeInUp animate__animated wow"}
         />
         <Box
            src={back8}
            component={"img"}
            sx={{
               position: "absolute",
               display: { lg: "block", md: "none", sm: "none", xs: "none" },
               zIndex: 500,
               right: 0,
               bottom: 250,
            }}
            className={"animate__fadeInRight animate__animated wow"}
         />
      </Box>
   );
};

export default Footer;
