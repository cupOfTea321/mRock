import React from 'react';
import logo from "../../assets/logo.webp";
import {Box} from "@mui/material";
import {NavLink} from "react-router-dom";

const Logo = ({sx}) => {
    return (
        <Box
            sx={{
                textAlign: "left",
                // width: "40%",
                fontSize: "32px",
                ...sx
            }}
        >
            <NavLink to={"/"} style={{color: "#FEFDFD"}}>
                <Box
                    component={"img"}
                    src={logo}
                    sx={{
                        width: {md: "96.6px", sm: '65.76px', xs: '65.76px'},
                        height: {md: "104.34px", sm: '70.94px', xs: '70.94px'},
                        // display: {sm: "flex", xs: "none"},
                        display: 'flex'
                    }}
                />
            </NavLink>
        </Box>
    );
};

export default Logo;
