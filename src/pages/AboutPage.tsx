import React from 'react';
import BlackBackground from "../component/BlackBackground";
import {Box, Container, Typography} from "@mui/material";
import backItem1 from "../assets/about/aboutItem3.svg";
import item1 from "../assets/about/about1.png";
import item2 from "../assets/about/about2.png";
import item3 from "../assets/about/about3.png";
import item4 from "../assets/about/about4.png";
import MainThousand from "../component/main/MainThousand";
import AboutBanner from "../component/about/AboutBanner";

const AboutPage = () => {

    return (
        <>
            {/*<BlackBackground/>*/}
            <AboutBanner/>
            <Box sx={{
                position: 'relative',
                zIndex: 500,
            }}>
                <MainThousand/>
            </Box>

        </>
    );
};

export default AboutPage;
