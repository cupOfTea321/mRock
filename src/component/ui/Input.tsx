import { Box, TextField, Typography } from "@mui/material";
import React from "react";
export const input = {
  // width: "100%",
  width: '220px',
  height: '56px',
  marginBottom: "20px",
  background: "transparent",
  marginRight: '13px',

  marginTop: '24px',
  // border: "none",
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "100px",
    borderColor: "rgba(134, 84, 204, 1) !important",
    color: 'white !important'
  },
  "&:hover":{
    color: 'red !important'
  },
  label: {
    color: "rgba(201, 201, 201, 1)",
    paddingLeft: '16px',
  },
  placeholder: {
    color: "#9395CC",
    fontSize: "30px",
  },
  fontSize: "16px"
};
const Input = ({
  title,
  placehold = "Введите название...",
  handleChange,
  value,
  name,
}) => {
  return (
    <TextField
      label={
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Typography sx={{ fontSize: "16px" }}>{title}</Typography>
        </Box>
      }
      value={value}
      onChange={handleChange}

      sx={input}
      placeholder={`${placehold}`}
      name={name}
      InputProps={{
        classes: {
          focused: {
            borderColor: 'red !important',
          },
        }
      }}
    />
  );
};

export default Input;
