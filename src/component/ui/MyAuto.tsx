import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import { input } from "./Input";
import {rolesTarget} from "../../handlers/rolesTarget";
const top100Films = ["гитарист", "вокалист", "барабанщик", "басист"];
const MyAuto = (props) => {
  let { sxAuto, sx, onChange, name, value, setRole, role } = props;
    // value = rolesTarget(value)
    value = rolesTarget(value)
  // console.log(name, value)
  // const onBlyatChange = (event, value) => {
  //   // setValue(newValue)
  //   setRole(value);
  //     console.log(role)
  //   console.log(name, value, event.target.innerText);
  //   const target = { name, value };
  //   // onChange(target)
  // };
  return (
    <Autocomplete
      onChange={onChange}
      disablePortal
      sx={{
          ...sxAuto
      }}
      // name={name}
      isOptionEqualToValue={
          (option, value) => {
              // console.log(option, value)
              // console.log('isOptionEqualToValue')
          }
      }
      // value={value}
      id="combo-box-demo"
      options={top100Films}
      renderInput={(params) => (
        <TextField
            name={name}
            value={value}
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
