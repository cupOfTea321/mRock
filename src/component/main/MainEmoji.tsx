import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import BlackBackground from "../BlackBackground";
import item2 from "../../assets/main/item2.png";
import CastingItem from "../ui/CastingItem";
import WhiteItem from "../ui/WhiteItem";
import peopleBack from "../../assets/back/peopleBack.png";
const MainEmoji = () => {
    return (
        <Box
        sx={{
            // marginTop: '-140px',
            zIndex: 250,
            position: 'relative',
            marginBottom: '500px',

        }}>
            <BlackBackground back={peopleBack} sx={{
                height: '200%',
                // backgroundSize: 'auto 80%',
                // width: '150%'
            }}/>
            <Container sx={{
                zIndex: 360,
                position: 'relative',
                textAlign: 'center',
            }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                paddingTop: '182px',

            }}>
                <Typography variant={'h2'}>
                    Испытайте
                </Typography>
                <Box component={'img'} src={item2} />
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
