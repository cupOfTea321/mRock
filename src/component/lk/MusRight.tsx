import { Box } from "@mui/material";
import like from "../../assets/lk/like.png";
import likeBack from "../../assets/lk/likeBack.png";
import rightBack from "../../assets/lk/musBack.png";
import { backText } from "../../mui/palette";

const MusRight = ({ likes = 0, img = rightBack }) => {
  const imgStyle = {
    position: "absolute",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Box
      sx={{
          clipPath: 'polygon(10% 0%, 100% 0%, 100% 90%, 50% 98%, 20% 90%)',
        background: `url(${img})`,
        ...imgStyle,
        right: 0,
        top: -50,
        zIndex: 380,
        width: "689px",
        height: "95%",
        display: { md: "block", xs: "none" },
      }}
      className={"animate__fadeInRight animate__animated wow"}
    >
      <Box
        sx={{
          background: `url(${likeBack})`,
          ...imgStyle,
          position: "absolute",
            zIndex: 600,
          right: 0,
          left: 80,
          margin: "0 auto",
          bottom: 0,
          width: "140px",
          height: "77px",
          ...backText,
        }}
      >
        <Box
          component={"img"}
          src={like}
          sx={{
            marginRight: "6px",

          }}
        />
        {likes}
      </Box>
    </Box>
  );
};

export default MusRight;
