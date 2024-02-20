import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import { input } from "./Input";
const top100Films = ["гитарист", "вокалист", "барабанщик", "басист"];
const MyAuto = (props) => {
  const { sxAuto, sx, onChange, name, value, setRole } = props;

  // console.log(name, value)
  const onBlyatChange = (event, value) => {
    // setValue(newValue)
    setRole(value);
    console.log(name, value);
    const target = { name, value };
    // onChange(target)
  };
  return (
    <Autocomplete
      onChange={onBlyatChange}
      disablePortal
      sx={{
          ...sxAuto
      }}
      id="combo-box-demo"
      options={top100Films}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{
            ...input,
            ...sx,
          }}
          label={
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography sx={{ fontSize: "16px" }}>Роль</Typography>
            </Box>
          }
        />
      )}
    />
  );
};

export default MyAuto;
