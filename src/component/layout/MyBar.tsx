import MenuIcon from "@mui/icons-material/Menu";
import {Box, Container, IconButton, Menu, MenuItem, Typography,} from "@mui/material";
import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import logo from "../../assets/Лого.png"
import mobileLogo from "../../assets/Лого.png"
import authBack from "../../assets/back/authBack.png"
import { CSSTransition } from 'react-transition-group'
import BlackBackground from "../BlackBackground";
const MyBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const handleMobileClose = () => {
        setOpen(!open);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const pages = [
        {name: "Главная", to: "/"},
        {name: "Идея", to: "/idea"},
        {name: "О мероприятие", to: "/about"},
        {name: "Тысяча", to: "/thousand"},
    ];
    const navCSS = {
        color: "#FEFDFD",
        fontSize: "16px",
        "&:hover": {
            color: "#3278FF",
        },
    };
    const [background, setBackground] = useState('transparent');

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            if (scrollTop > 0) {
                setShow(true)
                setBackground('#282828'); // Установите цвет фона верхней панели при начале прокрутки
            } else {
                setShow(false)
                setBackground('transparent'); // Установите прозрачный цвет фона верхней панели при попадании наверх страницы
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [show, setShow] = useState(false);
    return (

            <Box
                sx={{


                    position: "fixed",
                    top: 0,
                    right: 0,
                    left: 0,
                    zIndex: 800,
                    height: '104px',
                    display: 'flex',
                    animation: 'colorFade 0.5s'
                }} className={'appBar'}
            >

                <CSSTransition in={show} timeout={500} classNames="fade">
                    <BlackBackground sx={{
                        background
                    }}/>
                {/*<Box sx={{*/}
                {/*    background,*/}
                {/*    width: '100%',*/}
                {/*    height: '100%',*/}
                {/*    position: 'absolute',*/}
                {/*    zIndex: 1000*/}
                {/*}}>*/}

                {/*</Box>*/}
                </CSSTransition>
                <Container
                    maxWidth={"lg"}
                    sx={{
                        display: "flex",
                        // width: '100%',
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: {sm: "26px", xs: "10px"},
                        marginBottom: {sm: "20px", xs: "10px"},
                        position: 'relative',
                        zIndex: 1200
                    }}
                    className="animate__animated animate__fadeInUp wow"
                >
                    <Typography
                        sx={{
                            // float: 'left',
                            // marginLeft: '0'
                            textAlign: "left",
                            width: "40%",
                            fontSize: "32px",
                        }}
                    >
                        <NavLink to={"/"} style={{color: "#FEFDFD"}}>
                            <Box
                                component={"img"}
                                src={logo}
                                sx={{
                                    width: "96.6px",
                                    height: "87.43",
                                    display: {sm: "flex", xs: "none"},
                                }}
                            />
                            <Box
                                component={"img"}
                                src={mobileLogo}
                                sx={{
                                    width: "47px",
                                    height: "16px",
                                    display: {sm: "none", xs: "block"},
                                }}
                            />
                        </NavLink>
                    </Typography>

                    <Box
                        sx={{
                            width: "60%",
                            // justifyContent: "space-between",
                            fontSize: "16px",
                            display: {md: "flex", sm: "none", xs: "none"},
                        }}
                    >
                        {pages.map((page, index) => (
                            <NavLink key={index} to={page.to}
                                     style={{
                                         color: "#FEFDFD",
                                         marginRight: '16px'
                                     }}>
                                <Typography sx={navCSS}>{page.name}</Typography>
                            </NavLink>
                        ))}
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundImage: `url(${authBack})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        // transform: 'rotate(26deg)',
                        width: '161px',
                        height: '41px'

                    }}>
                        <NavLink to={'auth'}
                                 style={{

                                     // marginRight: '16px'
                                 }}>
                            <Typography sx={{
                                color: "#FEFDFD",
                                fontSize: "16px",

                            }}>Авторизация</Typography>
                        </NavLink>
                    </Box>
                    {/* МОБИЛЬНАЯ ВЕРСИЯ*/}
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                        sx={{
                            display: {md: "none", sm: "block", xs: "block"},
                        }}
                    >
                        <MenuIcon
                            sx={{
                                color: "white",
                                width: {sm: "54px", xs: "36px"},
                                height: {sm: "54px", xs: "36px"},
                            }}
                            onClick={handleMobileClose}
                        />
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                                "aria-labelledby": "long-button",
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClick={handleMobileClose}
                        >
                            {pages.map((option) => (
                                <NavLink
                                    key={option.name}
                                    to={option.to}
                                    style={{
                                        color: "black",
                                    }}
                                >
                                    <MenuItem
                                        selected={option === "Pyxis"}
                                        onClick={handleMobileClose}
                                    >
                                        {option.name}
                                    </MenuItem>
                                </NavLink>
                            ))}
                        </Menu>
                    </IconButton>
                </Container>
            </Box>

    );
};

export default MyBar;
