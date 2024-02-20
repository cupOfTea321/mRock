import React, {useEffect, useState} from 'react';
import BlackBackground from "../utils/BlackBackground";
import {Box, Container, Typography} from "@mui/material";
import Logo from "../component/layout/Logo";
import AuthButton from "../component/ui/AuthButton";
import item2 from "../assets/lk/item2.png";
import MusRight from "../component/lk/MusRight";
import {useNavigate} from "react-router-dom";
import ItemText from "../component/ui/ItemText";
import MusItem from "../component/lk/MusItem";
import {fetchGetWithToken} from "../handlers/tokenFetch";
import {rolesTarget, setRolesTarget} from "../handlers/rolesTarget";
import back from "../assets/back/backLines.png";
import anketa from "../assets/lk/anketa.svg";
import like from "../assets/lk/like.png";
import likeBack from "../assets/lk/likeBack.png";
import rightBack from "../assets/lk/musBack.png";
import personMob from "../assets/lk/person.png";
import {backText} from "../mui/palette";
// const data = [
//     'Имя фамилия',
//     'Барабаны',
//     'Ссылка вк',
// ]
const MusicianPage = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('change')
    }
    const [data, setData] = useState(null);

    const token = localStorage.getItem('access')
    const url = 'https://xn--80affwgpn.xn--p1ai/api/profile/my/';
    useEffect(() => {
        document.body.classList.add("full-height-body");


        fetchGetWithToken(url, token)
            .then((result) => {
                setData(result);
            })
            .catch((error) => {
                console.error(error);
            });
        return () => {
            document.body.classList.remove("full-height-body");
        };
    }, [])
    if (data === null) {
        return <div>Loading...</div>;
    }

    console.log(data)
    return (
        <>
            <Box
                sx={{
                    position: "absolute",
                    zIndex: 340,
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: {md: "100vh", sm: "1500px", xs: "1100px"},
                    backgroundColor: "black",
                    backgroundRepeat: "no-repeat",
                }}
            ></Box>
            <Box
                sx={{
                    position: "absolute",
                    zIndex: 360,
                    width: "100vw",
                    height: {md: "100vh", sm: "1500px", xs: "1100px"},
                    opacity: 0.3,
                    background: `url(${back})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            ></Box>
            <MusRight likes={data.likes}/>
            <Container sx={{
                position: 'relative',
                zIndex: 400,
                height: "100vh",
            }}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    zIndex: "400",
                    position: {md: "static", sm: "absolute", xs: "absolute"},
                    width: {md: "auto", sm: "90%", xs: "90%"},
                }}>
                    <Logo sx={{
                        marginTop: '26px',
                        marginBottom: '26px',
                    }}/>

                    <AuthButton exit={true} text={"Выйти"} to={"/"}/>
                </Box>
                <Box
                    sx={{
                        backgroundImage: {
                            md: `url(${rightBack})`,
                            xs: `url(${personMob})`,
                        },
                        backgroundRepeat: "no-repeat",
                        backgroundSize: {sm: "contain", xs: "cover"},
                        backgroundPosition: {xs: "center top"},
                        zIndex: 200,
                        width: {md: "689px", sm: "100%", xs: "100%"},
                        height: {sm: "100%", xs: "70%"},
                        display: {md: "none", xs: "block"},
                        position: "relative",
                    }}
                    className={"animate__bounceIn animate__animated wow"}
                >
                    <Box
                        sx={{
                            background: `url(${likeBack})`,
                            right: 0,
                            position: "absolute",
                            left: 0,
                            margin: "0 auto",
                            bottom: 0,
                            width: "140px",
                            height: "77px",
                            ...backText,
                        }}
                    >
                        <Box
                            component={"img"}
                            src={like}
                            sx={{
                                marginRight: "6px",
                            }}
                        />
                        {data?.likes}
                    </Box>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        display: {xs: "flex", md: "block"},
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: {md: "0", xs: "70px"},
                    }}
                >
                    <ItemText
                    text
                        variant={"h2"}
                        sx={{
                            marginTop: "24px",
                            marginBottom: "50px",
                            display: {md: "block", xs: "none"},
                        }}
                    />
                    <Box
                        sx={{
                            display: {md: "none", xs: "block"},
                            marginBottom: "50px",
                        }}
                        component={"img"}
                        src={anketa}
                    />
                    <MusItem item={data?.name} title={'Имя'}/>
                    <MusItem item={rolesTarget(data?.role)} title={'Роль'} />
                    <MusItem item={data?.social_link} title={'Ссылка на страницу vk'}/>
                    <Typography
                        onClick={handleClick}
                        style={{
                            textDecoration: "underline",
                            marginTop: "38px",
                            cursor: "pointer",
                        }}
                    >
                        Редактировать анкету
                    </Typography>
                </Box>
            </Container>
        </>
    );
};

export default MusicianPage;
