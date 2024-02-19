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
                // result.role = rolesTarget(data.role);
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
    // useEffect(() => {
    //
    // }, [data.role])
    // data.role = rolesTarget(data.role);
    // console.log(rolesTarget(data.role))

    return (
        <>
            <BlackBackground  />
            <MusRight likes={data.likes}/>
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

                    <AuthButton exit={true} text={'Выйти'} to={'/'}/>
                </Box>

                <Box sx={{
                    marginLeft: '50px',
                    width: '403px',

                }}>
                    <ItemText variant={'h2'} sx={{
                        marginTop: '24px',
                        marginBottom: '50px',
                    }}/>
                    <MusItem item={data?.name}/>
                    <MusItem item={rolesTarget(data?.role)}/>
                    <MusItem item={data?.social_link}/>
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

export default MusicianPage;
