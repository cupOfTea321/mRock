import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
   Box,
   IconButton,
   InputAdornment,
   TextField,
   Typography,
} from "@mui/material";
import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import authIcon from "../../assets/items/authIcon.svg";

import FormBack from "../../assets/mobileFormBack.png";
import { colStyle, h3 } from "../../mui/palette";
import { setUser } from "../../redux/features/userSlice";
import {
   useUserAuthMutation,
   useUserRefreshMutation,
} from "../../redux/services";
import { input } from "../ui/Input";
import { TextMaskCustom } from "./TextMaskCustom";
import AuthButton from "../ui/AuthButton";
import InputMask from "react-input-mask";
import PhoneMask from "./PhoneMask";
import { setCredentials } from "../../redux/features/auth/authSlice";

const authText = {
   label: {
      color: "#131313",
      paddingLeft: "16px",
   },
   width: { lg: "403px ", md: "268px", sm: "268px", xs: "268px" },
   marginBottom: 0,
};

const AuthForm: React.FC = ({}) => {
   const [login, loginResult] = useUserAuthMutation();
   const [formState, setFormState] = React.useState({
      username: "",
      password: "",
   });

   const [showPassword, setShowPassword] = useState(false);
   const [err, setErr] = useState(false);
   const navigate = useNavigate();

   const handleTogglePasswordVisibility = () => {
      setShowPassword(!showPassword);
   };

   const handleChange = ({ target: { name, value } }) => {
      setFormState({ ...formState, [name]: value });
   };

   const handleFormSubmit = async (e: FormEvent) => {
      e.preventDefault();

      const cleanedPhoneNumber = formState.username.replace(/\D/g, "");
      formState.username = cleanedPhoneNumber;

      try {
         const tokens = await login(formState).unwrap();
         localStorage.setItem("access", tokens.access);
         localStorage.setItem("refresh", tokens.refresh);
      } catch (error: any) {
         console.log(error);
      }
   };

   useEffect(() => {
      if (loginResult.isSuccess) {
         setErr(false);
         navigate("/musician");
      }
      if (loginResult.isError) {
         setErr(true);
      }
   }, [loginResult]);
   return (
      <Box
         sx={{
            ...colStyle,
            width: "fit-content",
            marginLeft: { md: "20%", sm: 0, xs: 0 },
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
         <TextField
            label="Телефон"
            variant="outlined"
            value={formState.username}
            name={"username"}
            onChange={handleChange}
            InputProps={{
               inputComponent: PhoneMask,
            }}
            sx={{
               ...input,
               ...authText,
            }}
         />
         <TextField
            label="Пароль"
            name={"password"}
            type={showPassword ? "text" : "password"}
            value={formState.password}
            onChange={handleChange}
            sx={{
               ...input,
               ...authText,
            }}
            InputProps={{
               endAdornment: (
                  <InputAdornment position="end">
                     <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleTogglePasswordVisibility}
                        onMouseDown={(event) => event.preventDefault()}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                     </IconButton>
                  </InputAdornment>
               ),
            }}
         />
         <Box sx={{ width: "90%" }}>
            <Typography
               onClick={() => navigate("/reset")}
               sx={{
                  color: "#C9C9C9",
                  cursor: "pointer",
                  marginTop: "20px",
                  textAlign: "right",
               }}>
               Забыли пароль?
            </Typography>
         </Box>
         <AuthButton
            text={"Войти"}
            sx={{
               width: { sm: "230px", xs: "115px" },
               height: { sm: "42px", xs: "36px" },
               marginTop: "16px",
            }}
            type="submit"
            to={"/musician"}
         />
         <Typography
            sx={{
               h3,
               color: "rgba(19, 19, 19, 1)",
               marginTop: "50px",
            }}>
            У вас еще нет аккаунта?
         </Typography>
         <NavLink
            to={"/reg"}
            style={{
               color: "rgba(132, 88, 203, 1)",
               textDecoration: "underline",
            }}>
            Зарегистрироваться
         </NavLink>
         {err && (
            <Box
               sx={{
                  color: "red",
               }}>
               Введен неверный логин или пароль
            </Box>
         )}
      </Box>
   );
};

export default AuthForm;
