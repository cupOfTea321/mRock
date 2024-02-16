import React, {useEffect} from 'react';
import BlackBackground from "../utils/BlackBackground";
import {Box, Container, Typography} from "@mui/material";
import Logo from "../component/layout/Logo";
import AuthButton from "../component/ui/AuthButton";
import item2 from "../assets/lk/item2.png";
import MusRight from "../component/lk/MusRight";
import {useNavigate} from "react-router-dom";
import ItemText from "../component/ui/ItemText";

const data = [
    'Имя фамилия',
    'Барабаны',
    'Ссылка вк',
]
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
                    <ItemText variant={'h2'}/>
                    {data.map(item => (
                        <Box key={item} sx={{
                            background: '#8654CC',
                            padding: '16px 32px 16px 32px',
                            borderRadius: '100px',

                            marginBottom: '16px'
                        }}>

                            {item}
                        </Box>
                    ))}
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
