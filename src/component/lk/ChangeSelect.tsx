import { rolesTarget } from "../../handlers/rolesTarget";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const roles = ["Гитарист", "Вокалист", "Барабанщик", "Басист"];

const ChangeSelect = ({
   inputStyle,
   basicInput,
   formState,
   handleChange,
}: any) => {
   return (
      <div className={"custom-select"}>
         <Box
            sx={{
               ...inputStyle,
               ...basicInput,

               "&::-ms-expand": {
                  color: "black",
                  background: "red",
               },
            }}
            component={"select"}
            name={"role"}
            id="roleSelect"
            value={formState?.role}
            onChange={handleChange}>
            <option
               style={{ color: "black" }}
               value="Роль"
               disabled
               selected
               hidden>
               Роль
            </option>
            {roles.map((item) => (
               <option style={{ color: "black" }} value={item}>
                  {item}
               </option>
            ))}
         </Box>
      </div>
   );
};

export default ChangeSelect;
