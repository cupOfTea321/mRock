import React from 'react';
import {Autocomplete, Box, Container, Grid, TextField, Typography} from "@mui/material";
import Input, {input} from "../ui/Input";
import person1 from '../../assets/thousand/img1.png'
import person2 from '../../assets/thousand/img2.png'
import person3 from '../../assets/thousand/img3.png'
import person4 from '../../assets/thousand/img4.png'
import moreBtn from '../../assets/items/moreBack.svg'
import PeopleCard from "./PeopleCard";
import {backText} from "../../mui/palette";
import MyAuto from "../ui/MyAuto";
const CardsBlock = () => {

    const people = [
        {image: person1},
        {image: person2},
        {image: person3},
        {image: person4},
    ]
    return (
        <Container sx={{
            zIndex: 600,
            position: 'relative',
            // display: 'flex',
            marginBottom: '80px'
        }} >
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                // justifyContent: 'center',
            }} className={'animate__fadeInUp animate__animated wow'}>
                <Input   title={"Имя"} placehold={''}/>
                <MyAuto/>
            </Box>
            <Grid container   sx={{
                marginTop: "72px",

            }}>
                {people?.map((item, index) => (
                    <Grid
                        key={index}
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
                        <PeopleCard  person={item} />
                    </Grid>
                ))}
            </Grid>
            <Box
                sx={{
                    ...backText,
                    margin: '0 auto',
                    background: `url(${moreBtn})`,

                    width: {sm: '190px', xs: '189px'},
                    height: {sm: '43px', xs: '42px'},
                    marginTop: {sm: 0, xs: '40px'}
                }} className={'animate__fadeInUp animate__animated wow'}
            >
                Загрузить ещё
            </Box>
        </Container>
    );
};

export default CardsBlock;
