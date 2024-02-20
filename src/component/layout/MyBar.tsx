import MenuIcon from "@mui/icons-material/Menu";
import {Avatar, Box, Container, IconButton, Menu, MenuItem, Tooltip, Typography,} from "@mui/material";
import React, {useEffect, useRef, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import menuBack from "../../assets/menu.webp"
import {CSSTransition} from 'react-transition-group'
import BlackBackground from "../../utils/BlackBackground";
import Logo from "./Logo";
import AuthButton from "../ui/AuthButton";
import ym from "react-yandex-metrika";
import {AccountCircle} from "@mui/icons-material";
const settings = [
    {name: 'Профиль', to: '/musician'},
    {name: 'Выйти', to: null},
];
const MyBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const handleMobileClose = () => {
        setOpen(!open);
    };
    const token = localStorage.getItem('access')
    console.log(token)
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
    const navigate = useNavigate();
    const handleClickAuth = (to) => {
        ym('reachGoal','log_in')
        navigate('auth')
    }
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


    // USER MENU
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleExit = () => {
        localStorage.removeItem('access');
        navigate('')
    }
    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                right: 0,
                left: 0,
                zIndex: 800,
                height: { sm: "124px", xs: "104px" },

                display: "flex",
                animation: "colorFade 0.5s",
            }}
            className={"appBar"}
        >
            <CSSTransition in={show} timeout={500} classNames="fade">
                <BlackBackground
                    sx={{
                        background,
                    }}
                />
            </CSSTransition>
            <Container
                maxWidth={"lg"}
                sx={{
                    display: "grid",
                    gridTemplateColumns: { md: "4fr 5fr 1fr", xs: "9fr 7fr 0.5fr" },
                    justifyItems: { md: "none", xs: "baseline" },
                    alignItems: "center",
                    marginTop: '10px',
                    marginBottom: { sm: "20px", xs: "10px" },
                    position: "relative",
                    zIndex: 1200,
                }}
                className="animate__animated animate__fadeInDown wow"
            >
                <Logo />
                <Box
                    sx={{
                        fontSize: "16px",
                        // paddingRight: '20%',
                        display: { md: "flex", sm: "none", xs: "none" },
                        justifyContent: "flex-start",
                    }}
                >
                    {pages.map((page, index) => (
                        <NavLink
                            key={index}
                            to={page.to}
                            style={{
                                color: "#FEFDFD",
                                marginRight: "16px",
                            }}
                        >
                            <Typography sx={navCSS}>{page.name}</Typography>
                        </NavLink>
                    ))}
                </Box>
                {token ? <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            {/*<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />*/}
                            <AccountCircle sx={{
                            width: '30px',
                            height: '30px',
                            }
                            }  />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting,index) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <NavLink onClick={index === 1 && handleExit} to={setting.to && setting.to} textAlign="center" style={{
                                    color: 'black'
                                }}>{setting.name}</NavLink>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                : <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            // width: '20%'
                        }}
                    >
                        <AuthButton onClick={handleClickAuth} />
                    </Box>
                }


                {/* МОБИЛЬНАЯ ВЕРСИЯ*/}
                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                    sx={{
                        display: { md: "none", sm: "block", xs: "block" },
                        // background: 'red'
                        background: `url(${menuBack})`,
                        backgroundRepeat: "no-repeat",
                        borderRadius: 0,
                        backgroundSize: "contain",
                        marginLeft: "-30px",
                        width: { sm: "54px", xs: "38px" },
                        height: { sm: "54px", xs: "35px" },
                    }}
                >
                    <MenuIcon
                        sx={{
                            color: "black",
                            background: "transparent",
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
