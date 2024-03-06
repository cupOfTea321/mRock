import back from "../../assets/mainBack2.png";
import BannerText from "./BannerText";
import { Box } from "@mui/material";
import WhiteItem from "../ui/WhiteItem";
import CastingItem from "../ui/CastingItem";

const MainBanner = () => {
   return (
      <Box
         sx={{
            height: "105vh",
            backgroundImage: `url(${back})`,
            backgroundSize: "cover",
            position: "relative",
            zIndex: 320,
         }}>
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               alignItems: "center",
               height: "100%",
               zIndex: 250,
               position: "relative",
            }}
            className={"animate__fadeInUp animate__animated wow"}>
            <BannerText />
            <Box
               sx={{
                  display: "flex",
                  position: "relative",
                  zIndex: 350,
                  marginTop: "40px",
               }}>
               <CastingItem />
               <WhiteItem />
            </Box>
         </Box>
      </Box>
   );
};

export default MainBanner;
