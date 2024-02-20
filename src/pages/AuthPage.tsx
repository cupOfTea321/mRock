import { Box, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import rightBack from "../assets/lk/rightBack.svg";
import Logo from "../component/layout/Logo";
import AuthForm from "../component/lk/AuthForm";
import FullBack from "../component/lk/FullBack";
import { colStyle } from "../mui/palette";
const AuthPage = () => {
  useEffect(() => {
    document.body.classList.add("full-height-body");

    return () => {
      document.body.classList.remove("full-height-body");
    };
  }, []);

  return (
    <>
      <FullBack />
      <Box
        src={rightBack}
        component={"img"}
        sx={{
          position: "absolute",
          objectFit: "cover",
          display: { lg: "block", md: "none", sm: "none", xs: "none" },
          right: 0,
          top: 0,
          height: "97svh",
          width: "auto",
        }}
        className={"animate__bounceIn animate__animated wow"}
      />
      <Container
        sx={{
          position: "relative",
        }}
        maxWidth={"xl"}
      >
        <Logo
          sx={{
            marginTop: "26px",
            marginBottom: { md: "90px", sm: "40px", xs: "40px" },
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: {xxl: "space-between",xl: "space-around"},
            flexDirection: {
              lg: "row",
              md: "column-reverse",
              sm: "column-reverse",
              xs: "column-reverse",
            },
            alignItems: "center",
            gap: { xs: "140px" },
          }}
        >
          <Box
            sx={{
              ...colStyle,
              justifyContent: "center",
              width: { xs: "100%", sm: "70%", md: "50%", lg: "30%" },
            }}
          >
            <Typography variant={"h2"}>
              Станьте голосом, мелодией и драйвом самого масштабного концерта
              2024 года!
            </Typography>
          </Box>
          <AuthForm />
        </Box>
      </Container>
    </>
  );
};

export default AuthPage;
