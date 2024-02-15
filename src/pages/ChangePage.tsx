import React, {useEffect} from 'react';
import BlackBackground from "../component/BlackBackground";
import MusRight from "../component/lk/MusRight";
import Logo from "../component/layout/Logo";
import AuthButton from "../component/ui/AuthButton";
import item2 from "../assets/lk/item2.svg";
import {Box, Container, Typography} from "@mui/material";

import {NavLink, useNavigate} from "react-router-dom";
const ChangePage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        document.body.classList.add("full-height-body");

        return () => {
            document.body.classList.remove("full-height-body");
        };
    }, []);
    const handleClick = () => {
        navigate('/musician')
    }
    return (
        <>
            <BlackBackground />
            <MusRight/>
            <Container sx={{
                position: 'relative',
                zIndex: 400
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Logo sx={{
                        marginTop: '26px',
                        marginBottom: '26px',
                    }}/>

                    <AuthButton text={'Выйти'} to={'/'}/>
                </Box>

                <Box sx={{
                    marginLeft: '50px',
                    width: '403px',

                }}>
                    <Box
                        component={'img'}
                        src={item2}
                        sx={{

                            marginTop: '24px',
                            marginBottom: '50px'
                        }}
                    />
                    <Typography
                        onClick={handleClick}
                        style={{
                            textAlign: 'center',
                            textDecoration: 'underline',
                            marginTop: '38px',
                            cursor: 'pointer'
                        }}>
                        Редактировать анкету
                    </Typography>
                </Box>
            </Container>
        </>
    );
};

export default ChangePage;
