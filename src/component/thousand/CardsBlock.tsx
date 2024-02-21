import { Box, Container, Grid } from "@mui/material";
import moreBtn from "../../assets/hovers/purpleHover.webp";
import person1 from "../../assets/thousand/img1.png";
import person2 from "../../assets/thousand/img2.png";
import person3 from "../../assets/thousand/img3.png";
import person4 from "../../assets/thousand/img4.png";
import { Input } from "../ui/Input";
import ItemText from "../ui/ItemText";
import MyAuto from "../ui/MyAuto";
import PeopleCard from "./PeopleCard";
const CardsBlock = ({ data }) => {
  const people = [
    { image: person1 },
    { image: person2 },
    { image: person3 },
    { image: person4 },
  ];
  return (
    <Container
      sx={{
        zIndex: 600,
        position: "relative",
        // display: 'flex',
        marginBottom: "80px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          // justifyContent: 'center',
        }}
        className={"animate__fadeInUp animate__animated wow"}
      >
        <Input sx={{
            label: {
                color: 'white',
                paddingLeft: "16px",
            },

        }} title={"Имя"} placehold={""} />
        <MyAuto   sxAuto={{

            width: "216px",
            label: {
                color: 'white',
                paddingLeft: "16px",
            },
        }}/>
      </Box>
      <Grid
        container
        sx={{
          marginTop: "72px",
        }}
      >
        {data?.map((item, index) => (
          <Grid
            key={data.name}
            item
            lg={3}
            md={3}
            sm={6}
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <PeopleCard person={item} />
          </Grid>
        ))}
      </Grid>
      <ItemText
        img={moreBtn}
        title={"Загрузить ещё"}
        typo={{ color: "white" }}
        sx={{
          margin: "0 auto",
          width: { sm: "190px", xs: "189px" },
          height: { sm: "43px", xs: "42px" },
          marginTop: { sm: 0, xs: "40px" },
        }}
      />
    </Container>
  );
};

export default CardsBlock;
