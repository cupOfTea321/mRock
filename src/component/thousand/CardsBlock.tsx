import React from 'react';
import {Autocomplete, Box, Container, Grid, TextField, Typography} from "@mui/material";
import Input, {input} from "../ui/Input";
import person1 from '../../assets/thousand/img1.png'
import person2 from '../../assets/thousand/img2.png'
import person3 from '../../assets/thousand/img3.png'
import person4 from '../../assets/thousand/img4.png'
import moreBtn from '../../assets/thousand/moreBack.svg'
import PeopleCard from "./PeopleCard";
import {backText} from "../../mui/palette";
const CardsBlock = () => {
    const top100Films = [
        { label: "The Shawshank Redemption", year: 1994 },
        { label: "The Godfather", year: 1972 },
        { label: "The Godfather: Part II", year: 1974 },
        { label: "The Dark Knight", year: 2008 },
    ];
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
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                // justifyContent: 'center',
            }}>
                <Input   title={"Имя"} placehold={''}/>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    renderInput={(params) => (
                        <TextField {...params} sx={{
                            ...input,
                        }} label={
                            <Box
                                sx={{
                                    display: "flex",
                                }}
                            >
                                <Typography sx={{ fontSize: "16px" }}>Инструмент</Typography>
                            </Box>
                        } />
                    )}
                />
                <Input   title={"Группа"} placehold={''}/>
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
                }}
            >
                Загрузить ещё
            </Box>
        </Container>
    );
};

export default CardsBlock;
