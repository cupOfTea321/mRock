import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import BlackBackground from "../../utils/BlackBackground";
import item2 from "../../assets/items/item2.png";
import CastingItem from "../ui/CastingItem";
import WhiteItem from "../ui/WhiteItem";
import peopleBack from "../../assets/peopleBack.png";
const MainEmoji = () => {
    return (
        <Box
        sx={{
            zIndex: 250,
            position: 'relative',
            marginBottom: '300px',

        }}>
            <BlackBackground back={peopleBack} sx={{
                height: '200%',
                // backgroundSize: 'auto 80%',
                // width: '150%'

            }} />
            <Container sx={{
                zIndex: 360,
                position: 'relative',
                textAlign: 'center',
            }} className={'animate__fadeInUp animate__animated wow'}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: {sm: 'row', xs: 'column'},
                flexWrap: 'wrap',
                alignItems: 'center',
                textAlign: 'center',
                paddingTop: {sm: '182px', xs: '100px'},

            }}>
                <Typography variant={'h2'}>
                    Испытайте
                </Typography>
                <Box component={'img'} src={item2} sx={{
                    width: {md: '351px', sm: '300px', xs: '231px'},
                    height: {md: '52px', sm: '40px', xs: '37px'},
                }}/>
                <Typography variant={'h2'}>
                    музыкальную эмоцию,
                </Typography>
            </Box>
            <Typography variant={'h2'}>
                доступную лишь настоящим рок-звездам. Станьте частью самого масштабного рок-события 2024 года
            </Typography>
                <Box sx={{
                    display: 'flex',
                    marginTop: '24px',
                    justifyContent: 'center'
                }}>
                    <CastingItem/>
                    <WhiteItem/>
                </Box>
            </Container>
        </Box>
    );
};

export default MainEmoji;
