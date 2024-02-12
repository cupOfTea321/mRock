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
                marginTop: '40px'
            }}>
                <Box sx={{
                    // marginLeft: '100px',
                    background: `url(${itemLeft})`,
                    width: '549px',
                    height: '390px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center'
                    // right: 50,
                    // zIndex: 500,
                    // top: 0,
                    // right: 0,
                }}>
                    <Typography sx={{
                        fontSize: '80px',
                        fontWeight: 700,
                        color: '#6833b0',
                        width: '60%',
                        lineHeight: '63.6px',
                        marginBottom: '50px'
                        // textAlign: 'center'
                    }}>
                        мега маркет
                    </Typography>
                </Box>
                <Box component={'img'} src={rock} sx={{

                }}/>

            </Box>
            <Box component={'img'} src={back4} sx={{
                position: 'absolute',
                bottom: 150,
                zIndex: 500,
                right: 200,
            }}/>
            <Box component={'img'} src={back5} sx={{
                position: 'absolute',
                top: 131,
                right: -20,
                zIndex: 500,
            }}/>
            <Box component={'img'} src={back3} sx={{
                // background: `url(${back3})`,
                display: {sm: 'block', xs: 'none'},
                position: 'absolute',
                top: -31,
                left: 200,
                zIndex: 500,
                // top: 0,
                // right: 0,
            }}/>
            </Container>
        </WhiteContainer>
    );
};

export default Partners;
