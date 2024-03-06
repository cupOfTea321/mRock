import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import backItem7 from "../../assets/back/backItem7.svg";
import thousand from "../../assets/hovers/purpleHover.webp";
import item1 from "../../assets/items/item1.png";
import slider1 from "../../assets/slides/hard1.jpg";
import slider2 from "../../assets/slides/hard2.jpg";
import slider3 from "../../assets/slides/hard3.jpg";
import { blackText, h3 } from "../../mui/palette";
import WhiteContainer from "../../utils/WhiteContainer";
import ItemText from "../ui/ItemText";

import { Swiper, SwiperSlide } from "swiper/react";

import person1 from "../../assets/thousand/img1.png";
import person2 from "../../assets/thousand/img2.png";
import person3 from "../../assets/thousand/img3.png";
import person4 from "../../assets/thousand/img4.png";
import { FreeMode } from "swiper/modules";

const MainThousand = () => {
   const navigate = useNavigate();

   const data = [
      {
         avatar: slider1,
         name: "Артем Камалетдинов",
         role: "Гитара",
      },
      {
         avatar: slider2,
         name: "Леонид Никонов",
         role: "Барабаны",
      },
      {
         avatar: slider3,
         name: "Никита Муравьев",
         role: "Бас",
      },
      {
         avatar: person1,
         name: "Евгений Симанин",
         role: "Бас",
      },
   ];
   return (
      <WhiteContainer
         sx={{
            paddingBottom: { sm: "120px", xs: "80px" },
         }}>
         <Box
            sx={{
               display: "flex",
               alignItems: "center",
               width: { sm: "100%", xs: "70%" },
               flexWrap: "wrap",
               margin: "0 auto 30px auto",
               justifyContent: "center",
               paddingTop: { sm: "100px", xs: "60px" },
            }}
            className={"animate__fadeInUp animate__animated wow"}>
            <Typography variant={"h2"} sx={blackText}>
               Самый масштабный
            </Typography>
            <ItemText
               variant={"h2"}
               text
               sx={{
                  background: `url(${item1})`,
                  width: { md: "238px", sm: "180px", xs: "144px" },
                  height: { md: "55px", sm: "40px", xs: "28px" },
               }}
               title={"рок-бэнд"}
            />
            <Typography variant={"h2"} sx={blackText}>
               страны
            </Typography>
         </Box>
         <div className="thousand">
            {data.map((data, index) => {
               let rotateValue = 2.84;
               if (index % 2 === 0) {
                  rotateValue = -2.84;
               }
               return (
                  <div
                     key={index}
                     className="thousand__card"
                     style={{
                        rotate: `${rotateValue}deg`,
                     }}>
                     <img src={data.avatar} alt="картинка" />
                     <b>{data.name}</b>
                     <small>{data.role}</small>
                  </div>
               );
            })}
         </div>
         <Swiper
            spaceBetween={80}
            modules={[FreeMode]}
            slidesPerView={"auto"}
            initialSlide={1}
            freeMode={true}
            centeredSlides={true}
            className="thousand__swiper">
            {data.map((data, index) => {
               let rotateValue = 2.84;
               if (index % 2 === 0) {
                  rotateValue = -2.84;
               }

               return (
                  <SwiperSlide
                     key={index}
                     style={{
                        width: "auto",
                        rotate: `${rotateValue}deg`,
                     }}>
                     <div className="thousand__card">
                        <img src={data.avatar} alt="картинка" />
                        <b>{data.name}</b>
                        <small>{data.role}</small>
                     </div>
                  </SwiperSlide>
               );
            })}
         </Swiper>
         {/* <Swiper
            random={true}
            sx={{
               display: { lg: "none", md: "flex", sm: "flex", xs: "flex" },
            }}
            slides={data}
         /> */}
         <ItemText
            typo={{ color: "white", ...h3 }}
            img={thousand}
            sx={{
               margin: "0 auto",
               display: "flex",
               marginTop: "25px",
               width: { md: "240px", sm: "180px", xs: "144px" },
               height: { md: "50px", sm: "40px", xs: "28px" },
               cursor: "pointer",
            }}
            onClick={() => navigate("/thousand")}
            title={"Тысяча"}
            className={"animate__fadeInUp animate__animated wow"}
         />
         <Box
            component={"img"}
            src={backItem7}
            sx={{
               position: "absolute",
               display: { sm: "block", xs: "none" },
               top: -30,
               left: 100,
               zIndex: 600,
            }}
            className={"animate__fadeInLeft animate__animated wow"}
         />
      </WhiteContainer>
   );
};

export default MainThousand;
