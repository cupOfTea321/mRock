import backLines from "../assets/back/backLines.png";

import { Box } from "@mui/material";

const BlackBackground = ({ back = backLines, sx }) => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          zIndex: 340,
          top: 0,
          left: 0,
          width: "100vw",
          height: { md: "100vh", sm: "1500px", xs: "1100px" },
          backgroundColor: "black",
          backgroundRepeat: "no-repeat",
          ...sx,
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          zIndex: 360,
          width: "100vw",
          height: { md: "100vh", sm: "1500px", xs: "1100px" },
          opacity: 0.3,
          // filter: 'blur(20px)',
          background: `url(${back})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          ...sx,
        }}
      ></Box>
    </>
  );
};

export default BlackBackground;
