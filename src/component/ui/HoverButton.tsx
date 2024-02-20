import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ym from "react-yandex-metrika";
import authBack from "../../../public/test2.webp";
import authBackM from "../../../public/testM.webp";
import greenHover from "../../assets/hovers/leftHover.webp";
import purpleHover from "../../assets/hovers/purpleHover.webp";
import { useState } from "react";


const HoverButton = ({
  text = "Авторизация",
  icon = false,
  sx,
  exit = false,
  white,
  to = "auth",
  type = "button",
  onClick,
}) => {
  const navigate = useNavigate();
  // const [hoverImg, setHoverImg]= useState(greenHover);
  const handleClick = (to) => {
    // navigate(to)
    ym(96408862, "reachGoal", "log_in");
  };
  const handleExit = () => {
    localStorage.removeItem("access");
    navigate("");
  };

  return (
    <Box
      type={type}
      onClick={exit ? handleExit : onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        backgroundImage: {
          sm: `url(${authBack})`,
          xs: `url(${authBackM})`,
        },
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        // transform: 'rotate(26deg)',
        width: { sm: "164px", xs: "115px" },
        height: { sm: "41px", xs: "36px" },
        ...sx,
      }}
      component={!icon ? motion.button : "button"}
      whileHover={{
        backgroundImage: `url(${white ? purpleHover: greenHover})`,
        transition: { delay: 0.1, duration: 0.2 },
      }}
    >
      {/*<NavLink to={to}*/}
      {/*         style={{*/}

      {/*             // marginRight: '16px'*/}
      {/*         }}>*/}
      <Typography
        component={motion.p}
        sx={{
          color: "#FEFDFD",
          fontSize: { sm: "16px", xs: "12px" },
        }}
        whileHover={{
          color: "black",
        }}
      >
        {text}
      </Typography>
      {/*</NavLink>*/}
    </Box>
  );
};

export default HoverButton;
