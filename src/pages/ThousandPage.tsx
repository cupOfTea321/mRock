import React from 'react';
import BlackBackground from "../utils/BlackBackground";
import backItem1 from "../assets/items/item1.png";
import back3 from "../assets/about/aboutBack3.svg";
import back1 from "../assets/thousand/back1.svg";
import back4 from "../assets/about/aboutBack4.svg";
import back2 from "../assets/about/aboutBack2.svg";
import {Box, Container, Typography} from "@mui/material";
import CardsBlock from "../component/thousand/CardsBlock";
import item1 from "../assets/items/item1.png";
import ItemText from "../component/ui/ItemText";
import Loader from "../utils/Loader";
import {useGetMusiciansQuery} from "../redux/services/musiciansCore";

const ThousandPage = () => {
    const {data, isLoading} = useGetMusiciansQuery()
    if (isLoading) return <Loader title={`Загрузка событий...`} />;
    console.log(data)
    return (
        <Box sx={{
            zIndex: 150,
        }}>
            <BlackBackground/>
            <Box sx={{
                position: 'relative',
                zIndex: 400,
                textAlign: 'center',
                width: {xl: '65%', lg: '80%'},
                margin: '0 auto',
                paddingTop: '150px',
                // paddingBottom: '100px',
            }} className={'animate__fadeInUp animate__animated wow'}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: {md: 'row', sm: 'column', xs: 'column'},
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: {sm: '100%', xs: '70%'},
                    margin: '0 auto'
                }}>

                    <Typography variant={'h2'}>
                        Самый масштабный
                    </Typography>
                    <ItemText variant={'h2'} sx={{
                        background: `url(${backItem1})`,
                        width: {sm: '238px', xs: '221px'},
                        height: {sm: '55px', xs: '31px'},
                    }} title={'рок-бэнд'}/>
                    <Typography variant={'h2'}>
                        страны
                    </Typography>
                </Box>

            </Box>
            <CardsBlock data={data}/>
            <Box component={'img'} src={back3} sx={{
                position: 'absolute',
                zIndex: 650,
                right: 0,
                top: 200
            }} className={'animate__fadeInRight animate__animated wow'}/>
            <Box component={'img'} src={back1} sx={{
                position: 'absolute',
                zIndex: 650,
                left: -30,
                top: 350
            }} className={'animate__fadeInLeft animate__animated wow'}/>
        </Box>
    );
};

export default ThousandPage;
