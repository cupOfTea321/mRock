import {Box, Container, Link, Typography} from "@mui/material";
import BlackBackground from "../BlackBackground";
import item5 from "../../assets/item5.svg";
import footerItem from "../../assets/footerItem.png";
import footerRock from "../../assets/footerRock.svg";
import back6 from "../../assets/back6.svg";
import back7 from "../../assets/back7.svg";
import back8 from "../../assets/back8.svg";
import React from "react";
import CastingItem from "../ui/CastingItem";
import WhiteItem from "../ui/WhiteItem";
import {NavLink} from "react-router-dom";
import {blackText} from "../../mui/palette";
type FooterMenu = {
    page: string;
    to?: string
};
const Footer = () => {
    const footerMenu: FooterMenu[] = [
        {
            page: 'Главная', to: '/'
        },
        {
            page: 'Идея', to: '/idea'
        },
        {
            page: 'О мероприятии', to: '/about'
        },
        {
            page: 'Тысяча', to: 'thousand'
        },
        {
            page: 'Личный кабинет', to: 'core'
        },
    ]
    const footerText = {
        color: 'white',
        fontSize: '12px',
        marginRight: '16px'
    }
    return (
        <Box
            sx={{
                // zIndex: 1500,
                position: "relative",
                bottom: 0,
                left: 0,
                right: 0,
                background: "#353535",
            }}
        >
            <BlackBackground/>
            <Container sx={{
                position: 'relative',
                zIndex: 500,
            }}>
                <Box sx={{
                    display: 'flex',

                    paddingTop: '100px',
                }}>
                    <Box sx={{
                        width: '50%'
                    }}>
                        <Typography variant={'h2'} sx={{

                        }}>
                            Остались вопросы?
                        </Typography>
                        <Typography sx={{
                            fontSize: '32px'
                        }}>
                            Свяжитесь с нами
                        </Typography>
                        <Box component={'img'} src={item5} sx={{
                            marginTop: '14px'
                        }}/>
                    </Box>
                    <Box sx={{
                        backgroundImage: `url(${footerItem})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        width: '90%',
                        height: '350px',
                        position: 'relative'
                    }}>
                        <CastingItem sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0
                        }}/>
                        <WhiteItem sx={{
                            position: 'absolute',
                            bottom: 0,
                            right: 50
                        }}/>
                    </Box>

                </Box>
                <Box sx={{
                    marginLeft: {xl: '17%', lg: '38%'},
                    paddingBottom: '40px'
                }}>
                    <Typography sx={{
                        fontSize: {xl: '81.41px', lg: '60px'},
                        lineHeight: '95.25px',
                        marginTop: '34px',
                        paddingBottom: '28px',
                        // textAlign: {xl: 'left', lg: 'right'}
                    }}>
                        ПРИСОЕДИНЯЙТЕСЬ!
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Box>
                            {footerMenu.map(item => (
                                <NavLink to={item.to} key={item.page} style={footerText}>
                                    {item.page}
                                </NavLink>
                            ))}
                        </Box>
                        <NavLink to={''}  style={{
                            ...footerText,
                            textAlign: 'right',
                            // marginBottom: '-15px'
                        }}>
                            Политика конфиденциальности
                        </NavLink>
                    </Box>
                </Box>

            </Container>
            <Box  src={footerRock} sx={{
                position: 'absolute',
                backgroundImage: `url(${footerRock})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                zIndex: 400,
                bottom: 0,
                left: 0,
                width: '419px',
                height: '361px',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
            }}>
                <Typography sx={{
                    ...footerText,
                    ...blackText,
                    paddingBottom: '30px',
                    width: '65%',
                    paddingRight: '60px'
                }}>
                    Организатор мероприятия продюсерский центр “ПОЗИЦИЯ”
                    (ИП Жарков К.С.,
                    ИНН 507461873349,
                    ОГРНИП 315507400000705
                </Typography>
            </Box>
            <Box
                src={back7}
                component={'img'}
                sx={{
                    position: 'absolute',
                    zIndex: 500,
                    left: 0,
                    top: 50
                }}
            />
            <Box
                src={back6}
                component={'img'}
                sx={{
                    position: 'absolute',
                    zIndex: 500,
                    right: 250,
                    top: -50
                }}
            />
            <Box
                src={back8}
                component={'img'}
                sx={{
                    position: 'absolute',
                    zIndex: 500,
                    right: 0,
                    bottom: 250
                }}
            />

        </Box>
    );
};

export default Footer;
