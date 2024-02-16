import React, {useEffect} from 'react';
import BlackBackground from "../utils/BlackBackground";
import MusRight from "../component/lk/MusRight";
import Logo from "../component/layout/Logo";
import AuthButton from "../component/ui/AuthButton";
import itemSave from "../assets/items/saveBack.png";
import {Box, Container, Grid, Typography} from "@mui/material";

import {NavLink, useNavigate} from "react-router-dom";
import {backText, h3} from "../mui/palette";
import ItemText from "../component/ui/ItemText";
import Input from "../component/ui/Input";
import MyAuto from "../component/ui/MyAuto";
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
    const inputStyle = {
        width: '228px',
        marginRight: '24px',
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
                    width: '520px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    <ItemText title={'Редактирование'} variant={'h2'}/>
                    <Grid container>
                        <Input sx={inputStyle} title={'Ваше имя'} placehold={'Введите имя'}/>
                        <MyAuto sx={inputStyle}/>
                        <Input sx={inputStyle} title={'Ссылка на Вконтакте'} placehold={'Введите ссылку'}/>
                        <Input sx={inputStyle} title={'Фотография'} placehold={'Файл'}/>
                    </Grid>

                    <ItemText
                        onClick={handleClick}
                        img={itemSave}
                        title={'Сохранить'}
                        sx={{
                            width: {sm: '170px', xs: ''},
                            height: {sm: '50px', xs: ''},
                            cursor: 'pointer',
                        }}
                        typo={{
                            ...h3,
                            color: 'white'
                        }}
                    />
                </Box>
            </Container>
        </>
    );
};

export default ChangePage;
