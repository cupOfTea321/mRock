import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import backItem1 from "../../assets/back/backItem1.svg";
import backItem2 from "../../assets/back/backItem2.svg";
import centreGalleryM from "../../assets/main/CentreGalM.svg";
import rightGallery from "../../assets/main/RightGal.svg";
import centreGallery from "../../assets/main/centreGal.svg";
import leftGalleryM from "../../assets/main/leftGalM.svg";
import leftGallery from "../../assets/main/leftGallery.svg";
import rightGalleryM from "../../assets/main/rightGalM.svg";
import back from "../../assets/фон.png";
import GalleryText from "./GalleryText";

const MainGallery = () => {
  const navigate = useNavigate();
  const handleClick = (to) => navigate(to);
  return (
    <Box
      sx={{
        marginTop: "-140px",
        zIndex: 350,
        position: "relative",
        paddingBottom: "150px",
      }}
    >
      {/*<BlackBackground/>*/}
      {/*<Box sx={{*/}
      {/*    position: 'absolute',*/}
      {/*    zIndex: 340,*/}
      {/*    top: 0,*/}
      {/*    left: 0,*/}
      {/*    width: '100vw',*/}
      {/*    height: '100%',*/}
      {/*    backgroundColor: 'black',*/}
      {/*    backgroundRepeat: 'no-repeat',*/}
      {/*}} >*/}
      {/*</Box>*/}
      <Box
        sx={{
          position: "absolute",
          zIndex: 360,
          width: "100vw",
          height: "105%",
          top: "-70px",
          // opacity: 0.3    ,
          // filter: 'blur(20px)',
          background: `url(${back})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
      <GalleryText />
      {/* ПК ГАЛЕРЕЯ*/}
      <Box
        sx={{
          display: { sm: "flex", xs: "none" },
          flexDirection: { sm: "row", xs: "column" },
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "no-wrap",
          position: "relative",

          zIndex: 400,
        }}
      >
        <Box
          onClick={() => handleClick("/reg")}
          component={motion.img}
          src={leftGallery}
          sx={{
            cursor: "pointer",
            width: { md: "385px", sm: "308px", xs: "308px" },
            height: { md: "530px", sm: "424px", xs: "424px" },
          }}
          className={"animate__fadeInLeft animate__animated wow"}
          whileHover={{ scale: 1.1 }}
        />
        <Box
          onClick={() => handleClick("/about")}
          component={motion.img}
          src={centreGallery}
          sx={{
            marginRight: { md: "-8%", sm: "-10%", xs: 0 },
            marginLeft: { md: "-8%", sm: "-10%", xs: 0 },
            marginTop: "40px",
            cursor: "pointer",
            width: { md: "698px", sm: "558px", xs: "300px" },
            height: { md: "490px", sm: "392px", xs: "221px" },
          }}
          className={"animate__fadeInUp animate__animated wow"}
          whileHover={{ scale: 1.1 }}
        />
        <Box
          component={motion.img}
          whileHover={{ scale: 1.1 }}
          src={rightGallery}
          sx={{
            cursor: "pointer",
            width: { md: "393px", sm: "308px", xs: "235px" },
            height: { md: "530px", sm: "424px", xs: "176px" },
          }}
          className={"animate__fadeInRight animate__animated wow"}
        />
      </Box>
      {/* МОБИЛЬНАЯ ГАЛЕРЕЯ */}
      <Box
        sx={{
          display: { sm: "none", xs: "flex" },
          flexDirection: { sm: "row", xs: "column" },
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "no-wrap",
          position: "relative",
          zIndex: 400,
        }}
        className={"animate__fadeInUp animate__animated wow"}
      >
        <Box
          component={motion.img}
          whileHover={{ scale: 1.1 }}
          src={leftGalleryM}
          onClick={() => handleClick("/reg")}
          sx={{
            cursor: "pointer",
            width: "90%",
          }}
        />
        <Box
          component={motion.img}
          onClick={() => handleClick("/about")}
          whileHover={{ scale: 1.1 }}
          src={centreGalleryM}
          sx={{
            marginRight: { md: "-8%", sm: "-10%", xs: 0 },
            marginLeft: { md: "-8%", sm: "-10%", xs: 0 },
            marginTop: "-40px",
            cursor: "pointer",
            width: "90%",
          }}
        />
        <Box
          component={motion.img}
          whileHover={{ scale: 1.1 }}
          src={rightGalleryM}
          sx={{
            cursor: "pointer",
            marginTop: "-30px",
            width: "80%",
            marginLeft: "10%",
          }}
        />
      </Box>
      <Box
        component={"img"}
        src={backItem2}
        sx={{
          position: "absolute",
          top: 200,
          left: 0,
          zIndex: 500,
          display: { md: "block", sm: "none", xs: "none" },
        }}
      />
      <Box
        component={"img"}
        src={backItem1}
        sx={{
          position: "absolute",
          top: 50,
          right: 50,
          zIndex: 700,
          display: { sm: "block", xs: "none" },
        }}
      />
    </Box>
  );
};

export default MainGallery;
