import React, {useEffect, useState} from 'react';
import BlackBackground from "../utils/BlackBackground";
import {Box, Container, Typography} from "@mui/material";
import Logo from "../component/layout/Logo";
import AuthButton from "../../public/AuthButton";
import item2 from "../assets/lk/item2.png";
import MusRight from "../component/lk/MusRight";
import {useNavigate} from "react-router-dom";
import ItemText from "../component/ui/ItemText";
import MusItem from "../component/lk/MusItem";
import {fetchGetWithToken} from "../handlers/tokenFetch";

// const data = [
//     'Имя фамилия',
//     'Барабаны',
//     'Ссылка вк',
// ]
const MusicianPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        document.body.classList.add("full-height-body");

        return () => {
            document.body.classList.remove("full-height-body");
        };
    }, []);
    const handleClick = () => {
        navigate('change')
    }
    const [data, setData] = useState(null);

    const token = localStorage.getItem('access')
    const url = 'http://85.193.87.7/api/profile/my/';
    useEffect(() => {
        fetchGetWithToken(url, token)
            .then((result) => {
                setData(result);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])
    if (data === null) {
        return <div>Loading...</div>;
    }
    console.log(data)
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
                    <MusItem item={data?.role}/>
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
