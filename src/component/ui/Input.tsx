import { Box, TextField, Typography } from "@mui/material";

export const input = {
  marginBottom: "20px",
  background: "transparent",
  marginRight: "13px",
  marginTop: "24px",
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "100px",
    borderColor: "rgba(134, 84, 204, 1) !important",
    color: "white !important",
  },
  "& .MuiInput-root": {
    borderRadius: "100px",
    borderColor: "rgba(134, 84, 204, 1) !important",
    color: "white !important",
  },
  "&:hover": {
    color: "red !important",
  },
  label: {
    color: "rgba(201, 201, 201, 1)",
    paddingLeft: "16px",
  },
  placeholder: {
    color: "#9395CC",
    fontSize: "30px",
  },
  fontSize: "16px",
};
export const Input = ({
  title,
  placehold = "Введите название...",
  handleChange,
  value,
  type = "",
  name,
  sx,
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
      sx={{
        ...input,
        ...sx,
      }}
      placeholder={`${placehold}`}
      name={name}
    />
  );
};

// export default Input;
