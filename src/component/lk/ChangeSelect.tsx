import { Box } from "@mui/material";

const roles = ["Гитарист", "Вокалист", "Барабанщик", "Басист"];

const ChangeSelect = ({
   inputStyle,
   basicInput,
   formState,
   handleChange,
}: any) => {
   let role: string;
   if (formState.role === "VC") {
      role = "Вокалист";
   } else if (formState.role === "GT") {
      role = "Гитарист";
   } else if (formState.role === "BS") {
      role = "Басист";
   } else if (formState.role === "DR") {
      role = "Барабанщик";
   }
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
            onChange={handleChange}>
            <option
               style={{ color: "black" }}
               value={role!}
               disabled
               selected
               hidden>
               {role!}
            </option>
            {roles.map((item) => (
               <option
                  style={{ color: "black" }}
                  selected={item === role}
                  value={item}>
                  {item}
               </option>
            ))}
         </Box>
      </div>
   );
};

export default ChangeSelect;
