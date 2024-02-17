import React from 'react';
import {blackText, h3, title2} from "../../mui/palette";
import {Box, Container, Typography} from "@mui/material";
import slider1 from "../../assets/slides/img1.png";
import slider2 from "../../assets/slides/img2.png";
import slider3 from "../../assets/slides/img3.png";
import slider4 from "../../assets/slides/img4.png";
import {useGetRandomQuery} from "../../redux/services/musiciansCore";
import Loader from "../../utils/Loader";
import {rolesTarget} from "../../handlers/rolesTarget";
import {sliderSwitch} from "../../handlers/sliderSwitch";

const RandomBlock = () => {
    const {data, isLoading} = useGetRandomQuery()
    if (isLoading) return <Loader title={`Загрузка...`} />;
    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'space-between',
            // paddingTop: {sm: 0, xs: '250px'}
        }} className={'animate__fadeInUp animate__animated wow'}>
            {data.map((item, index) => {
                let role = rolesTarget(item.role)
                const styles = sliderSwitch(index)
                let imageStyle = styles[0]
                let textStyle = styles[1]
                return (
                    <Box key={item.id} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column'
                    }}>
                        <Box component={'img'} src={item.avatar} sx={{
                            ...imageStyle,
                            ...textStyle
                        }}/>
                        <Typography sx={{
                            ...blackText,
                            ...title2,
                            ...textStyle,
                            marginTop: '10px'
                        }}>{item.name}</Typography>
                        <Typography sx={{
                            ...blackText,
                            ...h3,
                            ...textStyle,
                            marginTop: '10px'
                        }}>{role}</Typography>
                    </Box>)
            })}
        </Container>
    );
};

export default RandomBlock;
