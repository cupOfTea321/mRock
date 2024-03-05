import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
   Box,
   IconButton,
   InputAdornment,
   TextField,
   Typography,
} from "@mui/material";
import React, {
   ChangeEvent,
   FormEvent,
   FormEventHandler,
   useEffect,
   useState,
} from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import authIcon from "../../assets/reset.svg";
import authMob from "../../assets/resetBtn.svg";

import FormBack from "../../assets/mobileFormBack.png";
import { blackText, colStyle, h3 } from "../../mui/palette";
import { setUser } from "../../redux/features/userSlice";
import {
   useRefreshPwdMutation,
   useUserAuthMutation,
} from "../../redux/services";
import { input } from "../ui/Input";
import { TextMaskCustom } from "./TextMaskCustom";
import AuthButton from "../ui/AuthButton";

const authText = {
   label: {
      color: "#131313",
      paddingLeft: "16px",
   },
   width: { lg: "403px ", md: "268px", sm: "268px", xs: "268px" },
   marginBottom: 0,
};

const ResetForm: React.FC = ({}) => {
   const [reset, refreshResult] = useRefreshPwdMutation();
   const [phoneNumber, setPhoneNumber] = useState("");
   const [err, setErr] = useState(false);
   const navigate = useNavigate();

   const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
      const modifiedPhoneNumber = cleanedPhoneNumber.replace(/^7/, "8");

      try {
         await reset({ phone: modifiedPhoneNumber }).unwrap();
      } catch (err) {
         console.log(err);
      }
   };
   useEffect(() => {
      if (refreshResult.isSuccess) {
         setErr(false);
         navigate("/auth");
      }
      if (refreshResult.isError) {
         setErr(true);
      }
   }, [refreshResult]);
   return (
      <Box
         sx={{
            ...colStyle,
            width: { lg: "20%", md: "60%" },
         }}
         component={"form"}
         onSubmit={handleFormSubmit}>
         <Box
            component={"img"}
            src={authIcon}
            sx={{
               width: { md: "345px", sm: "201px", xs: "201px" },
               height: "56px",
            }}
         />
         <Box
            component={"img"}
            sx={{
               display: { lg: "none", md: "block", sm: "block", xs: "block" },
               position: "absolute",
               width: { sm: "70%", xs: "100%" },
               height: { xs: "65%", md: "50%" },
               zIndex: -1,
            }}
            src={FormBack}
            alt=""
         />
         <Typography
            sx={{
               color: blackText,
               marginTop: "10px",
            }}>
            Введите телефон и новый пароль придет вам в СМС
         </Typography>
         <TextField
            label="Телефон"
            variant="outlined"
            value={phoneNumber}
            name={"username"}
            onChange={(e) => setPhoneNumber(e.target.value)}
            InputProps={{
               inputComponent: TextMaskCustom as any,
            }}
            sx={{
               ...input,
               ...authText,
            }}
         />
         <AuthButton
            text={"Восстановить"}
            sx={{
               width: { sm: "230px", xs: "115px" },
               height: { sm: "42px", xs: "36px" },
               marginTop: "16px",
            }}
            type="submit"
         />
         {err && (
            <Box
               sx={{
                  color: "red",
               }}>
               Введен некорректный номер
            </Box>
         )}
      </Box>
   );
};

export default ResetForm;
