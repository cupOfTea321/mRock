import React from 'react';
import {input} from "./Input";
import {Autocomplete, Box, TextField, Typography} from "@mui/material";
const top100Films = [
    'гитарист',
    'вокалист',
    'барабанщик',
];
const MyAuto = ({sx}) => {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            renderInput={(params) => (
                <TextField {...params} sx={{
                    ...input,
                    ...sx
                }} label={
                    <Box
                        sx={{
                            display: "flex",
                        }}
                    >
                        <Typography sx={{ fontSize: "16px" }}>Инструмент</Typography>
                    </Box>
                } />
            )}
        />
    );
};

export default MyAuto;
