import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import backItem7 from "../../assets/back/backItem7.svg";
import item1 from "../../assets/items/item1.png";
import thousand from "../../assets/items/thousand.png";
import whiteBack from "../../assets/main/whiteBack.svg"
import slider1 from "../../assets/slides/hard1.jpg";
import slider2 from "../../assets/slides/hard2.jpg";
import slider3 from "../../assets/slides/hard3.jpg";
import slider4 from "../../assets/slides/img4.png";
import {blackText, h3, title2} from "../../mui/palette";
import WhiteContainer from "../../utils/WhiteContainer";
import ItemText from "../ui/ItemText";
import {useGetMusiciansQuery, useGetRandomQuery} from "../../redux/services/musiciansCore";
import Loader from "../../utils/Loader";
import RandomBlock from "../ui/RandomBlock";
import Swiper from "../../utils/Swiper";

const MainThousand = () => {

    // const {data, isLoading} = useGetRandomQuery()
    // if (isLoading) return <Loader title={`Загрузка...`} />;
    const data = [
        {
            avatar: slider1,
            name: 'Артем Камалетдинов',
            role: 'Гитара'
        },
        {
            avatar: slider2,
            name: 'Леонид Никонов',
            role: 'Барабаны'
        },
        {
            avatar: slider3,
            name: 'Никита Муравьев',
            role: 'Бас'
        },
        // {
        //     avatar: slider4,
        //     name: 'Маргарита Илющенко',
        //     role: 'режиссер'
        // },



    ]
    return (
        <WhiteContainer sx={{
            paddingBottom: {sm: '120px', xs: '80px'},
            // // backgroundRepeat: {sm: 'repeat', xs: 'no-repeat'},
            // backgroundRepeat: 'no-repeat',
            // width: '120%',
            // marginLeft: '20%'
        }} >
            <Box sx={{
                display: 'flex',
                // flexDirection: {sm: 'row', xs: 'column'},
                alignItems: 'center',
                width: {sm: '100%', xs: '70%'},
                flexWrap: 'wrap',
                margin: '0 auto',
                justifyContent: 'center',
                // marginTop: '200px',
                paddingTop: {sm: '100px', xs: '60px'},
                // marginBottom: {sm: 0, xs: '-250px'}
                // paddingTop: '-50px'
            }} className={'animate__fadeInUp animate__animated wow'}>
                <Typography variant={'h2'} sx={blackText}>
                    Самый масштабный
                </Typography>
                {/*<Box component={'img'} src={item1} sx={{*/}
                {/*    width: {md: '238px', sm: '180px', xs: '144px'},*/}
                {/*    height: {md: '55px', sm: '40px', xs: '28px'},*/}
                {/*}}/>*/}
                <ItemText variant={'h2'} sx={{
                    background: `url(${item1})`,
                    width: {md: '238px', sm: '180px', xs: '144px'},
                    height: {md: '55px', sm: '40px', xs: '28px'},
                }} title={'рок-бэнд'}/>
                <Typography variant={'h2'} sx={blackText}>
                    страны
                </Typography>
            </Box>
            <RandomBlock sx={{
                display: {lg: 'flex', md: 'none', sm: 'none', xs: 'none'}
            }} data={data}/>
            <Swiper  random={true}  sx={{
                display: {lg: 'none', md: 'flex', sm: 'flex', xs: 'flex'}
            }} slides={data}/>
            <ItemText typo={{color: 'white', ...h3}} img={thousand} sx={{
                margin: '0 auto',
                display: 'flex',
                marginTop: '25px',
                width: {md: '240px', sm: '180px', xs: '144px'},
                height: {md: '50px', sm: '40px', xs: '28px'},
                cursor: 'pointer'

            }} title={'Тысяча'} className={'animate__fadeInUp animate__animated wow'}/>
            <Box component={'img'} src={backItem7} sx={{
                position: 'absolute',
                display: {sm: 'block', xs: 'none'},
                top: -30,
                left: 100,
                zIndex: 600,
            }} className={'animate__fadeInLeft animate__animated wow'}/>
        </WhiteContainer>
    );
};

export default MainThousand;
