import {Box, Typography} from "@mui/material";
import vkIcon from "../../assets/thousand/vkIcon.svg";
import likeIcon from "../../assets/thousand/likeIcon.png";
import onLikeIcon from "../../assets/thousand/onLike.png";
import {h3} from "../../mui/palette";
import {useState} from "react";

export default function PeopleCard({ link, main = false, person }) {
  const like = true
    const vk = true
    const iconStyle = {
        width: { sm: "47px", xs: "25px" },
        position: "absolute",
        cursor: 'pointer',
    }
    const [onLike, setOnLike] = useState(false)
    const handleLike = () => {

        setOnLike(!onLike)
        console.log(onLike)
    }
  return (
      <Box
        sx={{
          // display: "flex",
          //   flexDirection: 'column',
          //   alignItems: 'center',
          marginBottom: { lg: "20px", md: "40px", sm: "20px" },
            position: 'relative',
            textAlign: 'center'
        }}
        className="animate__animated animate__fadeInUp wow"
      >
          <Box
            sx={{
              width: {
                xl: "262px",
                lg: "245px",
                md: "200px",
                sm: "275px",
                xs: "160px",
              },
              borderRadius: "20px",
              height: {
                xl: "300px",
                lg: "270px",
                md: "240px",
                sm: "300px",
                xs: "205px",
              },
              background: `url(${person.image})`,
              backgroundSize: "cover",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
          >
            {like && !vk && (
              <Box
                  onClick={handleLike}
                src={!onLike ? likeIcon : onLikeIcon}
                component={"img"}
                sx={{
                    ...iconStyle,
                  left: { sm: "22px", xs: "10px" },
                  top: { sm: "24px", xs: "10px" },
                }}
              />
            )}
            {like && vk && (
              <Box
                src={vkIcon}
                component={"img"}
                sx={{
                  ...iconStyle,
                  left: { sm: "22px", xs: "10px" },
                  top: { sm: "78px", xs: "40px" },
                }}
              />
            )}
            {vk && (
              <Box
                  onClick={handleLike}
                src={!onLike ? likeIcon : onLikeIcon}
                component={"img"}
                sx={{
                    ...iconStyle,
                  left: { sm: "22px", xs: "10px" },
                  top: { sm: "24px", xs: "10px" },
                }}
              />
            )}
          </Box>
          <Typography sx={{
              fontSize: {sm: '24px', xs: '16px'},
              marginTop: {sm: '8px', xs: '4px'},
              // marginBottom: {sm: '8px', xs: '8px'},
          }}>
              Имя Фамилия
          </Typography>
          <Typography sx={{...h3, marginBottom: '4px'}}>
              инструмент
          </Typography>
      </Box>
  );
}
