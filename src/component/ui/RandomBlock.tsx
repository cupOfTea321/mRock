import React from 'react';
import {blackText, h3, title2} from "../../mui/palette";
import {Box, Container, Typography} from "@mui/material";

import {useGetRandomQuery} from "../../redux/services/musiciansCore";
import Loader from "../../utils/Loader";
import {rolesTarget} from "../../handlers/rolesTarget";
import {musiciansSwitch, sliderSwitch} from "../../handlers/sliderSwitch";

const RandomBlock = ({sx, data}) => {

    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'space-between',
            ...sx
            // paddingTop: {sm: 0, xs: '250px'}
        }} className={'animate__fadeInUp animate__animated wow'}>
            {data.map((item, index) => {
                // let role = rolesTarget(item.role)
                const styles = musiciansSwitch(index)
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
                        }}>{item.role}</Typography>
                    </Box>)
            })}
        </Container>
    );
};

export default RandomBlock;
