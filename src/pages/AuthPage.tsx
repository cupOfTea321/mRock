import React, {useEffect} from 'react';
import Logo from "../component/layout/Logo";
import {Box, Container, Typography} from "@mui/material";
import authPhone from "../assets/lk/authPhone.png"
import item1 from "../assets/lk/item1.png"
import WhiteItem from "../component/ui/WhiteItem";
import rightBack from "../assets/lk/rightBack.svg";
import Input from "../component/ui/Input";
import AuthForm from "../component/lk/AuthForm";
import {colStyle} from "../mui/palette";
const AuthPage = () => {
    useEffect(() => {
        document.body.classList.add("full-height-body");

        return () => {
            document.body.classList.remove("full-height-body");
        };
    }, []);

    return (
        <>
            <Box sx={{
                position: 'absolute',
                width: '100vw',
                height: '100%',
                backgroundImage: `url(${authPhone})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                // background: 'black',
                zIndex: -100,
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            }}>

            </Box>
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
                            Станьте голосом, мелодией и драйвом самого масштабного концерта 2024 года!
                        </Typography>
                        <WhiteItem sx={{
                            marginTop: '24px'
                        }}/>
                    </Box>
                    <AuthForm/>
                </Box>
            </Container>

        </>

    );
};

export default AuthPage;
