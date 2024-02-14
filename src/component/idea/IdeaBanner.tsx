import React from 'react';
import backItem1 from "../../assets/idea/item1.svg";
import {h3} from "../../mui/palette";
import ideaImg from "../../assets/idea/ideaImg.png";
import ideaImgM from "../../assets/idea/ideaImgM.png";
import CastingItem from "../ui/CastingItem";
import WhiteItem from "../ui/WhiteItem";
import {Box, Typography} from "@mui/material";

const IdeaBanner = () => {
    return (
        <Box sx={{
            position: 'relative',
            zIndex: 400,
            textAlign: 'center',
            width: {xl: '65%', lg: '80%'},
            margin: '0 auto',
            paddingTop: '150px',
            paddingBottom: '100px',
        }} className={'animate__fadeInUp animate__animated wow'}>

            <Typography sx={{width: {sm: '100%', xs: '70%'}, margin: '0 auto'}} variant={'h2'}>
                МЕГАРОК открывает самую большую сцену для 1000 начинающих и известных музыкантов. Вместе
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: {md: 'row', sm: 'column', xs: 'column'},
                justifyContent: 'center',
                alignItems: 'center',
                width: {sm: '100%', xs: '70%'},
                margin: '0 auto'
            }}>
                <Typography variant={'h2'}>
                    мы создадим
                </Typography>
                <Box component={'img'} src={backItem1} sx={{
                    width: {sm: '349px', xs: '221px'},
                    height: {sm: '50px', xs: '31px'}
                }}/>
                <Typography variant={'h2'}>
                    рок-концерт года
                </Typography>
            </Box>
            <Typography sx={{
                ...h3,
                width: '70%',
                margin: '0 auto',
                marginTop: '24px',
            }}>
                Мы верим, что каждый человек, увлеченный музыкой, может стать настоящим артистом – звездой, чей голос и талант услышат тысячи людей. Станьте участником рекордно-музыкального шоу – играйте рок вместе с нами!
            </Typography>

            <Box sx={{
                backgroundImage: {
                    sm: `url(${ideaImg})`,
                    xs: `url(${ideaImgM})`,
                },
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: {sm: '90%', xs: '320px'},
                margin: '0 auto',
                marginBottom: {sm: 0, xs: '-50px'},
                marginTop: {sm: 0, xs: '32px'},
                height: {md: '552px', sm: '400px', xs: '228px'},
                position: 'relative',
            }}>
                <CastingItem sx={{
                    position: 'absolute',
                    bottom: {md: 80, sm: 80, xs: 'auto'},
                    top: {sm: 'auto', xs: 0},
                    left: 80,

                }}/>
                <WhiteItem sx={{
                    position: 'absolute',
                    bottom: {md: 60, sm: 80, xs: 70},
                    right: {md: 80, sm: 20, xs: 0},
                    // top: {sm: 'auto', xs: 0}
                }}/>
            </Box>
        </Box>
    );
};

export default IdeaBanner;
