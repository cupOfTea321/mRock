import React, {useEffect} from 'react';
import FullBack from "../component/lk/FullBack";
import Logo from "../component/layout/Logo";
import {colStyle} from "../mui/palette";
import WhiteItem from "../component/ui/WhiteItem";
import AuthForm from "../component/lk/AuthForm";
import {Box, Container, Typography} from "@mui/material";
import rightBack from "../assets/lk/regBack.svg";
import RegForm from "../component/lk/RegForm";
const RegPage = () => {
    useEffect(() => {
        document.body.classList.add("full-height-body");

        return () => {
            document.body.classList.remove("full-height-body");
        };
    }, []);
    return (
        <>
            <FullBack/>
            <Box
                src={rightBack}
                component={'img'}
                sx={{
                    position: 'absolute',
                    display: {lg: 'block', md: 'none', sm: 'none', xs: 'none'},
                    // zIndex: 500,
                    right: 0,
                    top: -50,
                    width: '50%',
                    height: '90%'
                    // bottom: 250
                }} className={'animate__bounceIn animate__animated wow'}
            />
            <Container sx={{
                position: 'relative'
            }}>
                <Logo sx={{
                    marginTop: '26px',
                    marginBottom: '140px',
                }}/>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',

                }}>
                    <Box sx={{
                        ...colStyle,
                        justifyContent: 'center'
                    }}>
                        <Typography variant={'h2'}>
                            Станьте участником самого масштабного рок-бэнда страны!
                        </Typography>
                    </Box>
                    <RegForm  />
                </Box>
            </Container>
        </>
    );
};

export default RegPage;
