import React from 'react';
import {Box, Typography} from "@mui/material";
import BlackBackground from "../component/BlackBackground";

const IdeaPage = () => {
    return (
        <>
            <BlackBackground/>
            <Box sx={{
                position: 'relative',
                zIndex: 400,
                textAlign: 'center',
                width: '65%',
                margin: '0 auto',
                paddingTop: '120px',
                paddingBottom: '100px',
            }}>
                <Typography variant={'h2'}>
                    МЕГАРОК открывает самую большую сцену для 1000 начинающих и известных музыкантов. Вместе
                </Typography>
            </Box>

        </>
    );
};

export default IdeaPage;
