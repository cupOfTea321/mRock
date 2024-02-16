import React from 'react';
import {backText} from "../../mui/palette";
import item2 from "../../assets/lk/item2.png";
import {Box, Typography} from "@mui/material";

const ItemText = ({
            sx,
            typo,
            title = 'Анкета музыканта',
            onClick,
            img = item2,
            variant = ''
                  }) => {
    return (
        <Box
            onClick={onClick}
            sx={{
                ...backText,
                marginTop: '24px',
                marginBottom: '50px',
                background: `url(${img})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: {sm: '414px'},
                height: {sm: '61px'},
                ...sx
            }}
        >
            <Typography variant={variant} sx={{
                color: 'black',
                ...typo
            }}>
                {title}
            </Typography>

        </Box>
    );
};

export default ItemText;
