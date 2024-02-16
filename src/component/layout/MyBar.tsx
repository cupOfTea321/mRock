import MenuIcon from "@mui/icons-material/Menu";
import {Box, Container, IconButton, Menu, MenuItem, Typography,} from "@mui/material";
import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import logo from "../../assets/logo.png"
import mobileLogo from "../../assets/Лого.png"
import menuBack from "../../assets/items/menuBack.png"
import authBack from "../../assets/items/authBack.png"
import authBackM from "../../assets/items/authBackM.png";
import { CSSTransition } from 'react-transition-group'
import BlackBackground from "../../utils/BlackBackground";
import Logo from "./Logo";
import AuthButton from "../ui/AuthButton";
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
        {name: "О мероприятии", to: "/about"},
        {name: "Тысяча", to: "/thousand"},
    ];
    const navCSS = {
        color: "#FEFDFD",
        fontSize: "16px",
        "&:hover": {
            color: "rgba(134, 84, 204, 1)",
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
                    height: {sm: '124px', xs: '104px'},

                    display: 'flex',
                    animation: 'colorFade 0.5s'
                }} className={'appBar'}
            >
                <CSSTransition in={show} timeout={500} classNames="fade">
                    <BlackBackground sx={{
                        background
                    }}/>
                </CSSTransition>
                <Container
                    maxWidth={"lg"}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: {sm: "20px", xs: "10px"},
                        marginBottom: {sm: "20px", xs: "10px"},
                        position: 'relative',
                        zIndex: 1200,
                    }}
                    className="animate__animated animate__fadeInDown wow"
                >
                    <Logo/>

                    <Box
                        sx={{
                            // width: "50%",
                            // justifyContent: "space-between",
                            // margin: '0 auto',
                            // textAlign: 'left',
                            fontSize: "16px",
                            // paddingRight: '20%',
                            display: {md: "flex", sm: "none", xs: "none"},
                            justifyContent: 'flex-start'
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
                        justifyContent: 'flex-end',
                        // width: '20%'
                    }}>
                        <AuthButton/>
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
                            // background: 'red'
                            background: `url(${menuBack})`,
                            backgroundRepeat: 'no-repeat',
                            borderRadius: 0,
                            backgroundSize: 'contain',
                            marginLeft: '-30px',
                            width: {sm: "54px", xs: "38px"},
                            height: {sm: "54px", xs: "35px"},
                        }}
                    >
                        <MenuIcon
                            sx={{
                                color: "black",
                                background: 'transparent'

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
