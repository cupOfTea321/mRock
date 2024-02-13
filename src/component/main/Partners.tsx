import React from 'react';
import {backText, blackText} from "../../mui/palette";
import item9 from "../../assets/back/backItem9.svg";
import back3 from "../../assets/back3.svg";
import back4 from "../../assets/back4.svg";
import back5 from "../../assets/back5.svg";
import itemLeft from "../../assets/item4.svg";
import rock from "../../assets/rock.svg";
import WhiteContainer from "../WhiteContainer";
import {Box, Container, Typography} from "@mui/material";
import backItem1 from "../../assets/back/backItem1.png";

const Partners = () => {
    return (
        <WhiteContainer sx={{
            marginTop: '-120px',
            // marginBottom: '0',

            paddingBottom: '220px',

        }}>
            <Container>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '100px',
            }}>
                <Typography sx={blackText} variant={'h2'}>
                    Партнеры
                </Typography>
                <Box sx={{
                    width: '309px',
                    backgroundImage: `url(${item9})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '63px',
                    ...backText,
                }}>
                    <Typography sx={{
                        ...blackText,
                        marginRight: '20px'
                    }} variant={'h2'}>
                        мероприятия
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: {sm: 'row', xs: 'column'},

                marginTop: '40px'
            }}>
                <Box sx={{
                    // marginLeft: '100px',
                    background: `url(${itemLeft})`,
                    width: {lg: '549px', md: '439px', sm: '329px', xs: '271px'},
                    height: {lg: '390px', md: '321px', sm: '234px', xs: '175px'},
                    backgroundSize: 'cover',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center'
                    // right: 50,
                    // zIndex: 500,
                    // top: 0,
                    // right: 0,
                }}>
                    <Typography sx={{
                        fontSize: {lg: '80px', md: '60px', sm: '50px', xs: '40px'},
                        fontWeight: 700,
                        color: '#6833b0',
                        width: '60%',
                        lineHeight: {lg: '63.6px', md: '50px', sm: '40px', xs: '32px'},
                        marginBottom: {sm: '50px', xs: '30px'}
                        // textAlign: 'center'
                    }}>
                        мега маркет
                    </Typography>
                </Box>
                <Box component={'img'} src={rock} sx={{
                    marginTop: {sm: 0, xs: '19px'},
                    position: 'relative',
                    marginLeft: {sm: 0, xs: '50%'},
                    width: {lg: '254px', md: '203px', sm: '152px', xs: '149px'},
                    height: {lg: '184px', md: '147px', sm: '110px', xs: '100px'},
                }}/>

            </Box>
            <Box component={'img'} src={back4} sx={{
                position: 'absolute',
                bottom: {sm: 150, xs: 50},
                zIndex: 500,
                right: {sm: 200, xs: -20},
                width: {lg: '324px', md: '259px', sm: '200px', xs: '184px'},
                height: {lg: '224px', md: '179px', sm: '130px', xs: '118px'},
            }}/>
            <Box component={'img'} src={back5} sx={{
                position: 'absolute',
                top: {sm: 131, xs: 450},
                right: { sm: -20, xs: 'auto'},
                left: { sm: 'auto', xs: -70},
                zIndex: 500,
                width: {lg: '371px', md: '297px', sm: '222px', xs: '194px'},
                height: {lg: '307px', md: '246px', sm: '184px', xs: '123px'},
            }}/>
            <Box component={'img'} src={back3} sx={{
                display: {sm: 'block', xs: 'none'},
                position: 'absolute',
                top: -31,
                left: 200,
                zIndex: 500,
            }}/>
            </Container>
        </WhiteContainer>
    );
};

export default Partners;
