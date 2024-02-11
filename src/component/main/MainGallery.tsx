import React from 'react';
import leftGallery from "../../assets/main/leftGallery.svg";
import centreGallery from "../../assets/main/centreGal.svg";
import rightGallery from "../../assets/main/RightGal.svg";
import backItem2 from "../../assets/back/backItem2.png";
import backLines from "../../assets/back/backLines.png";
import {Box} from "@mui/material";
import GalleryText from "./GalleryText";
import BlackBackground from "../BlackBackground";

const MainGallery = () => {

    return (
        <Box sx={{

            marginTop: '-60px',
            zIndex: 350,
            position: 'relative',
            paddingBottom: '100px',
        }}>
            <BlackBackground/>
            <GalleryText/>
            <Box sx={{

                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'no-wrap',
                position: 'relative',
                zIndex: 400
            }}>
                <Box component={'img'} src={leftGallery} sx={{
                    cursor: 'pointer'
                }}/>
                <Box component={'img'} src={centreGallery} sx={{
                    marginRight: {md: '-8%', sm: '-10%', xs: '-10%'},
                    marginLeft: {md: '-8%', sm: '-10%', xs: '-10%'},

                    marginTop: '40px',
                    cursor: 'pointer'
                }}/>
                <Box component={'img'} src={rightGallery} sx={{
                    cursor: 'pointer'
                }}/>
            </Box>
            <Box component={'img'} src={backItem2} sx={{
                position: 'absolute',
                top: 100,
                left: 0,
                zIndex: 500,
            }}/>

        </Box>
    );
};

export default MainGallery;
