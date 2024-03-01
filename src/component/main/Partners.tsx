import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import item9 from "../../assets/back/backItem9.webp";
import back3 from "../../assets/back3.svg";
import blast from "../../assets/blast.svg";
import mega from "../../assets/sbermegamarket.svg";
import itemLeft from "../../assets/items/item4.svg";
import back4 from "../../assets/main/maxim.svg";
import rock from "../../assets/rock.svg";
import { backText, blackText } from "../../mui/palette";
import WhiteContainer from "../../utils/WhiteContainer";

const Partners = () => {
  const handleFirst = (to) => {
    window.location.href = "https://megamarket.ru/";
  };
  const handleSecond = (to) => {
    window.location.href = "https://www.maximonline.ru/";
  };

  return (
    <WhiteContainer
      sx={{
        marginTop: "-120px",
        // marginBottom: '0',
        paddingBottom: "220px",
      }}
    >
      <Container
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "100px",
          }}
          className={"animate__fadeInUp animate__animated wow"}
        >
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
            }}
          >
            <Typography
              sx={{
                ...blackText,
                marginRight: "20px",
              }}
              variant={"h2"}
            >
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
          className={"animate__fadeInUp animate__animated wow"}
        >
          <Box
            sx={{
              background: `url(${itemLeft})`,
              width: { lg: "549px", md: "439px", sm: "329px", xs: "271px" },
              height: { lg: "390px", md: "321px", sm: "234px", xs: "175px" },
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
            onClick={() => handleFirst()}
          >
            {/*<Typography*/}
            {/*  sx={{*/}
            {/*    fontSize: { lg: "80px", md: "60px", sm: "50px", xs: "40px" },*/}
            {/*    fontWeight: 700,*/}
            {/*    color: "#6833b0",*/}
            {/*    width: "60%",*/}
            {/*    lineHeight: {*/}
            {/*      lg: "63.6px",*/}
            {/*      md: "50px",*/}
            {/*      sm: "40px",*/}
            {/*      xs: "32px",*/}
            {/*    },*/}
            {/*    marginBottom: { sm: "50px", xs: "30px" },*/}
            {/*    // textAlign: 'center'*/}
            {/*  }}*/}
            {/*>*/}
            {/*  мега маркет*/}
            {/*</Typography>*/}
              <Box src={mega} component={'img'} sx={{
                    width: {md: '371px', sm: '280px', xs: '208px'},
                  height: {md: '149px', sm: '100px', xs: '90px'},
                  marginBottom: {md: '50px', sm: "30px", xs: "10px" },

              }}/>
          </Box>
          <Box
            component={motion.img}
            whileHover={{
              scale: 1.1,
            }}
            src={rock}
            sx={{
              marginTop: { sm: 0, xs: "19px" },
              position: "relative",
              marginLeft: { sm: 0, xs: "50%" },
              width: { lg: "254px", md: "203px", sm: "152px", xs: "149px" },
              height: { lg: "184px", md: "147px", sm: "110px", xs: "100px" },
            }}
          />
        </Box>
        <Box
          component={motion.img}
          whileHover={{
            scale: 1.1,
          }}
          onClick={() => handleSecond()}
          src={back4}
          sx={{
            position: "absolute",
            bottom: { sm: -100, xs: -150 },
            zIndex: 500,
            right: { sm: 50, xs: 20, md: 0 },
            width: { lg: "324px", md: "259px", sm: "200px", xs: "184px" },
            height: { lg: "224px", md: "179px", sm: "130px", xs: "118px" },
          }}
          className={"animate__fadeInUp animate__animated wow"}
        />
      </Container>
        {/*<Box sx={{*/}
        {/*    backgroundColor: '#FFE3C7',*/}
        {/*    width: { lg: "254px", md: "203px", sm: "152px", xs: "149px" },*/}
        {/*    height: { lg: "184px", md: "147px", sm: "110px", xs: "100px" },*/}
        {/*    position: "absolute",*/}
        {/*    top: { sm: 131, xs: 450 },*/}
        {/*    borderRadius: '20px',*/}
        {/*    right: { sm: 20, xs: "auto" },*/}
        {/*    left: { sm: "auto", xs: -70 },*/}
        {/*    zIndex: 500,*/}
        {/*}}>*/}
        {/*    <Box*/}
        {/*        component={"img"}*/}
        {/*        src={blast}*/}
        {/*        sx={{*/}
        {/*            // width: '120%',*/}
        {/*            // height: '120%',*/}
        {/*            // width: { lg: "371px", md: "297px", sm: "222px", xs: "194px" },*/}
        {/*            // height: { lg: "307px", md: "246px", sm: "184px", xs: "123px" },*/}
        {/*              }}*/}
        {/*        className={"animate__fadeInRight animate__animated wow"}*/}
        {/*    />*/}
        {/*</Box>*/}

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
