import { Box, useMediaQuery, useTheme } from "@mui/material";
import back from "../assets/Union.png";

const WhiteContainer = ({ children, sx }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        width: "100vw",
        marginTop: "-50px",
        marginBottom: "-50px",
        paddingBottom: "120px",
        zIndex: 350,
        height: "50%",
        position: "relative",
        ...sx,
      }}
    >
      <Box
        component={"img"}
        width={"100%"}
        src={back}
        sx={{
          position: "absolute",
          height: "100%",
          bottom: 0,
          zIndex: -100,
        }}
      />
      {children}
    </Box>
  );
};

export default WhiteContainer;
