import {Box, Container, Link, Typography} from "@mui/material";
import BlackBackground from "../BlackBackground";
import item5 from "../../assets/item5.svg";
import footerItem from "../../assets/footerItem.png";
import footerItemM from "../../assets/footerM.png";
import footerRock from "../../assets/footerRock.svg";
import back6 from "../../assets/back6.svg";
import back7 from "../../assets/back7.svg";
import back8 from "../../assets/back8.svg";
import React from "react";
import CastingItem from "../ui/CastingItem";
import WhiteItem from "../ui/WhiteItem";
import {useNavigate} from "react-router-dom";
import {NavLink} from "react-router-dom";
import {blackText} from "../../mui/palette";
type FooterMenu = {
    page: string;
    to?: string
};
const InviteText = ({sx}) => {
    return(
        <Typography sx={{
            fontSize: {xl: '81.41px', lg: '60px', md: '40px', sm: '30px', xs: '40px'},
            lineHeight: '95.25px',
            marginTop: '34px',
            paddingBottom: '28px',
            display: {sm: 'block', xs: 'none'},
            ...sx,
            // textAlign: {xl: 'left', lg: 'right'}
        }}>
            ПРИСОЕДИНЯЙТЕСЬ!
        </Typography>
    )
}
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
        marginRight: {sm: '16px', xs: '8px'},
        lineHeight: '14.4px'
    }
    const navigate = useNavigate()
    const handleMenu = (to) => {
        navigate(to);
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
                    flexDirection: {sm: 'row', xs: 'column-reverse'},
                    paddingTop: '100px',
                }}>

                    <Box sx={{
                        // width: '10%',
                        textAlign: {sm: 'left', xs: 'center'},
                        // margin: '0 auto',
                        // display: 'flex',
                        // flexDirection: 'column',
                        // alignItems: 'centre'
                    }}>
                        <Typography variant={'h2'} sx={{
                            // width: '100%'
                            // margin: '0 auto'
                        }}>
                            Остались вопросы?
                        </Typography>
                        <Typography sx={{
                            fontSize: {md: '32px', sm: '24px', xs: '16px'}
                        }}>
                            Свяжитесь с нами
                        </Typography>
                        <Box component={'img'} src={item5} sx={{
                            marginTop: '14px'
                        }}/>
                    </Box>
                    <Box sx={{
                        backgroundImage: {
                            sm: `url(${footerItem})`,
                            xs: `url(${footerItemM})`,
                        },
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        width: {sm: '90%', xs: '320px'},
                        margin: '0 auto',
                        marginBottom: {sm: 0, xs: '-40px'},
                        height: '350px',
                        position: 'relative',
                    }}>
                        <CastingItem sx={{
                            position: 'absolute',
                            bottom: {md: 0, sm: 80, xs: 'auto'},
                            top: {sm: 'auto', xs: 0},
                            left: 0,

                        }}/>
                        <WhiteItem sx={{
                            position: 'absolute',
                            bottom: {md: 0, sm: 80, xs: 70},
                            right: {md: 50, sm: 20, xs: 0},
                            // top: {sm: 'auto', xs: 0}
                        }}/>
                    </Box>
                    <InviteText
                        sx={{
                            display: {sm: 'none', xs: 'block'},
                            textAlign: 'center',
                            marginTop: '-20px',
                            marginBottom: '-20px',
                        }}
                    />
                </Box>

                <Box sx={{
                    marginLeft: {xl: '17%', lg: '38%', md: '40%', sm: '38%'},
                    paddingBottom: '40px'
                }}>
                    <InviteText/>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: {sm: 0, xs: '300px'},

                    }}>
                        <Box sx={{
                            display: 'flex',
                            gap: {sm: 2, xs: 1},
                            width: {sm: 'auto', xs: '200px'},
                            margin: '0 auto',
                            flexWrap: 'wrap',
                            justifyContent: {sm: 'flex-start', xs: 'center'},
                        }}>
                            {footerMenu.map(item => (
                                <Box onClick={() => handleMenu(item.to)} key={item.page} style={footerText}>
                                    {item.page}
                                </Box>
                            ))}
                        </Box>
                        <Box   sx={{
                            ...footerText,
                            textAlign: 'right',
                            display: {sm: 'block', xs: 'none'},

                            // marginBottom: '-15px'
                        }}>
                            Политика конфиденциальности
                        </Box>
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
                width: {lg: '419px', md: '335px', sm: '300px', xs: '347px'},
                height: {lg: '361px', md: '289px', sm: '270px', xs: '290px'},
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
            }}>
                <Typography sx={{
                    ...footerText,
                    ...blackText,
                    paddingBottom: {lg: '30px', md: '15px', sm: '15px', xs: '30px'},
                    width: {lg: '65%', md: '80%', xs: '347px'},
                    paddingRight: '60px',
                    textAlign: {lg: 'left', md: 'center', sm: 'center', xs: 'center'},
                    marginRight: {md: '16px', sm: '-15px', xs: 0},
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
                    display: {lg: 'block', md: 'none', sm: 'none', xs: 'none'},
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
                    width: {sm: '187px', xs: '95px'},
                    height: {sm: '180px', xs: '76px'},
                    top: {sm: -50, xs: 0}
                }}
            />
            <Box
                src={back8}
                component={'img'}
                sx={{
                    position: 'absolute',
                    display: {lg: 'block', md: 'none', sm: 'none', xs: 'none'},
                    zIndex: 500,
                    right: 0,
                    bottom: 250
                }}
            />

        </Box>
    );
};

export default Footer;
