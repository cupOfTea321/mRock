import React from 'react';
import authBack from "../../assets/authBack.png";
import authBackM from "../../assets/main/authBackM.png";
import {NavLink} from "react-router-dom";
import {Box, Typography} from "@mui/material";

const AuthButton = ({
    text = 'Авторизация',
    sx
                    }) => {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: {
                sm: `url(${authBack})`,
                xs: `url(${authBackM})`,
            },
            // backgroundSize: 'contain',
            // backgroundRepeat: 'no-repeat',
            // transform: 'rotate(26deg)',
            width: {sm: '161px', xs: '115px'},
            height: {sm: '41px', xs: '36px'},
            ...sx
        }}>
            <NavLink to={'auth'}
                     style={{

                         // marginRight: '16px'
                     }}>
                <Typography sx={{
                    color: "#FEFDFD",
                    fontSize: {sm: "16px", xs: '12px'},

                }}>{text}</Typography>
            </NavLink>
        </Box>
    );
};

export default AuthButton;
