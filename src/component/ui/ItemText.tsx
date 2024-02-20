import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import greenHover from "../../assets/hovers/leftHover.webp";
import item2 from "../../assets/hovers/purpleHover.webp";
import { backText, blackText } from "../../mui/palette";

const ItemText = ({
  sx,
  typo,
  title = "Анкета музыканта",
  onClick,
  whitetext,
  img = item2,
  variant = "",
  type = "button",
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        ...backText,
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: { sm: "414px" },
        height: { sm: "61px" },
        ...sx,
      }}
      component={motion.button}
      type={type}
      whileHover={{
        backgroundImage: `url(${greenHover})`,
        transition: { delay: 0.1, duration: 0.2 },
      }}
    >
      <Typography
        component={motion.p}
        variant={variant}
        sx={{
          color: whitetext ? "white" : blackText,
          ...typo,
        }}
        whileHover={{
          color: "black",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default ItemText;
