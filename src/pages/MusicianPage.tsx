import { Box, Container, Typography } from "@mui/material";
import AuthButton from "../../public/AuthButton";
import anketa from "../assets/lk/anketa.svg";
import like from "../assets/lk/like.png";
import likeBack from "../assets/lk/likeBack.png";
import rightBack from "../assets/lk/musBack.png";
import personMob from "../assets/lk/person.png";
import Logo from "../component/layout/Logo";
import MusItem from "../component/lk/MusItem";
import MusRight from "../component/lk/MusRight";
import ItemText from "../component/ui/ItemText";
import { backText } from "../mui/palette";
import BlackBackground from "../utils/BlackBackground";

// const data = ["Имя фамилия", "Барабаны", "Ссылка вк"];
const MusicianPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
      document.body.classList.add("full-height-body");

      return () => {
        document.body.classList.remove("full-height-body");
      };
    }, []);
    const handleClick = () => {
      navigate("change");
    };
    const [data, setData] = useState(null);

    const token = localStorage.getItem("access");
    const url = "https://xn--80affwgpn.xn--p1ai/api/profile/my/";
    useEffect(() => {
      fetchGetWithToken(url, token)
        .then((result) => {
          setData(result);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
    if (data === null) {
      return <div>Loading...</div>;
    }
    console.log(data);
  return (
    <>
      <BlackBackground />
      <MusRight likes={data.likes} />
      <Container
        sx={{
          position: "relative",
          zIndex: 400,
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: "400",
            position: { md: "static", sm: "absolute", xs: "absolute" },
            width: { md: "auto", sm: "90%", xs: "90%" },
          }}
        >
          <Logo
            sx={{
              marginTop: "26px",
              marginBottom: "26px",
            }}
          />

          <AuthButton exit={true} text={"Выйти"} to={"/"} />
        </Box>
        <Box
          sx={{
            backgroundImage: {
              md: `url(${rightBack})`,
              xs: `url(${personMob})`,
            },
            backgroundRepeat: "no-repeat",
            backgroundSize: { sm: "contain", xs: "cover" },
            backgroundPosition: { xs: "center top" },
            zIndex: 200,
            width: { md: "689px", sm: "100%", xs: "100%" },
            height: { sm: "100%", xs: "70%" },
            display: { md: "none", xs: "block" },
            position: "relative",
          }}
          className={"animate__bounceIn animate__animated wow"}
        >
          <Box
            sx={{
              background: `url(${likeBack})`,
              right: 0,
              position: "absolute",
              left: 0,
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
            {data?.likes}
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: { xs: "flex", md: "block" },
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: { md: "0", xs: "70px" },
          }}
        >
          <ItemText
            variant={"h2"}
            sx={{
              marginTop: "24px",
              marginBottom: "50px",
              display: { md: "block", xs: "none" },
            }}
          />
          <Box
            sx={{
              display: { md: "none", xs: "block" },
            }}
            component={"img"}
            src={anketa}
          />
          <MusItem item={data?.name} />
          <MusItem item={data?.role} />
          <MusItem item={data?.social_link} />
          <Typography
            onClick={handleClick}
            style={{
              textDecoration: "underline",
              marginTop: "38px",
              cursor: "pointer",
            }}
          >
            Редактировать анкету
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default MusicianPage;
