import {
   Box,
   Checkbox,
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   SelectChangeEvent,
   TextField,
   Typography,
} from "@mui/material";
import React, { FormEvent, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import item1 from "../../assets/lk/item1.png";
import greenHover from "../../assets/hovers/leftHover.webp";
import FormBack from "../../assets/mobileFormBack.png";
import arrow from "../../assets/CustomSelect/arrow.svg";

import { setRolesTarget } from "../../handlers/rolesTarget";
import { backText, changeStyle, colStyle } from "../../mui/palette";
import { useUserCreateMutation } from "../../redux/services";
import { ModalPolice } from "../main/ModalPolice";
import AuthButton from "../ui/AuthButton";
import { input } from "../ui/Input";
import { ModalData } from "./ModalData";
import { TextMaskCustom } from "./TextMaskCustom";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import classNames from "classnames";

const authText = {
   label: {
      color: "#131313",
      paddingLeft: "16px",
   },
   width: { lg: "403px ", md: "268px", sm: "268px", xs: "268px" },
   marginBottom: 0,
};

const RegForm: React.FC = ({}) => {
   const [reg, regResult] = useUserCreateMutation();
   const [role, setRole] = useState("");
   const [err, setErr] = useState(false);
   const [isSuccessForm, setIsSuccessForm] = useState(false);
   const [open, setOpen] = useState(false);
   const [openData, setDataOpen] = useState(false);
   const roles = ["Гитарист", "Вокалист", "Барабанщик", "Басист"];
   const [formState, setFormState] = useState({
      name: "",
      phone: "",
      role: "",
   });

   const [isOpen, setIsOpen] = useState(false);
   const [isError, setIsError] = useState(false);
   const [selectedValue, setSelectedValue] = useState<string | null>(null);
   const selectRef = useOutsideClick(() => setIsOpen(false));

   let cx = classNames;
   const arrowClasses = cx({
      select__arrow: true,
      select__arrow_active: isOpen,
   });

   const selectClasses = cx({
      select: true,
      _active: isOpen,
      _error: isError,
   });
   const navigate = useNavigate();

   console.log(regResult);

   const handleChange = ({ target: { name, value } }: any) => {
      setFormState({ ...formState, [name]: value });
   };

   const handleSelect = (e: SelectChangeEvent) => {
      setFormState({
         ...formState,
         role: e.target.value,
      });
   };

   const handleFormSubmit = async (e: FormEvent) => {
      e.preventDefault();

      setFormState((prev) => ({ ...prev, ["role"]: role }));
      const cleanedPhoneNumber = formState.phone.replace(/\D/g, "");
      formState.phone = cleanedPhoneNumber;
      formState.role = setRolesTarget(formState.role);

      console.log(formState);

      try {
         await reg(formState).unwrap();
      } catch (e) {
         console.error(e);
      }
   };

   useEffect(() => {
      if (regResult.isSuccess) {
         setErr(false);
         setIsSuccessForm(true);
         setTimeout(() => {
            navigate("/auth");
         }, 1500);
      }
      if (regResult.isError) {
         setErr(true);
      }
   }, [regResult]);
   return (
      <Box
         sx={{
            ...colStyle,
            width: "20%",
         }}
         component={"form"}
         onSubmit={handleFormSubmit}>
         {!isSuccessForm ? (
            <>
               <Box
                  component={"img"}
                  sx={{
                     display: {
                        lg: "none",
                        md: "block",
                        sm: "block",
                        xs: "block",
                     },
                     position: "absolute",
                     width: { sm: "70%", xs: "100%" },
                     height: { xs: "65%", md: "50%" },
                     zIndex: -1,
                  }}
                  src={FormBack}
                  alt=""
               />
               <Box
                  sx={{
                     ...backText,
                     backgroundImage: `url(${item1})`,
                     width: { sm: "345px", xs: "217px" },
                     height: { sm: "56px", xs: "35px" },
                     backgroundSize: "cover",
                  }}>
                  <Typography variant={"h2"}>Регистрация</Typography>
               </Box>
               <TextField
                  label="Ваше имя"
                  variant="outlined"
                  value={formState.name}
                  name={"name"}
                  onChange={handleChange}
                  // InputProps={{
                  //     inputComponent: TextMaskCustom as any,
                  // }}
                  sx={{
                     ...input,
                     ...authText,
                  }}
                  required={true}
               />
               <TextField
                  label="Телефон"
                  variant="outlined"
                  value={formState.phone}
                  name={"phone"}
                  onChange={handleChange}
                  InputProps={{
                     inputComponent: TextMaskCustom as any,
                  }}
                  sx={{
                     ...input,
                     ...authText,
                     marginBottom: "25px",
                  }}
                  required={true}
               />
               <FormControl>
                  <InputLabel
                     id="select-role"
                     sx={{
                        paddingLeft: "17px",
                     }}>
                     Роль
                  </InputLabel>
                  <Select
                     sx={{
                        ...changeStyle,
                        ...authText,
                        textAlign: "left",
                        border: "1.8px solid #8654CC !important",
                        marginRight: "13px",
                        color: "ButtonText !important",
                     }}
                     labelId="select-role"
                     id="select-role"
                     value={formState.role}
                     label="Роль"
                     onChange={handleSelect}>
                     {roles.map((role) => (
                        <MenuItem value={role}>{role}</MenuItem>
                     ))}
                  </Select>
               </FormControl>
               <Box
                  sx={{
                     display: "flex",
                     alignItems: "center",
                     width: { sm: "370px", xs: "268px" },
                     marginRight: "13px",
                     marginTop: "16px",
                  }}>
                  <Checkbox
                     sx={{
                        background: "white",
                        borderRadius: "50% ",
                     }}
                     required={true}
                  />
                  <Typography
                     sx={{
                        fontSize: "14px",
                        color: "black",
                        textAlign: "start",
                     }}>
                     Согласие на обработку{" "}
                     <span
                        style={{
                           cursor: "pointer",
                           textDecoration: "underline",
                        }}
                        onClick={() => setOpen(true)}>
                        персональных данных
                     </span>
                  </Typography>
                  <ModalData open={openData} setOpen={setDataOpen} />
                  <ModalPolice open={open} setOpen={setOpen} />
               </Box>
               <Typography
                  sx={{
                     fontSize: "14px",
                     color: "black",
                     width: { sm: "370px", xs: "268px" },
                  }}>
                  <span
                     style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        paddingLeft: "10px",
                     }}
                     onClick={() => setDataOpen(true)}>
                     Регистрируясь, вы принимаете условия публичной оферты
                  </span>
               </Typography>
               <AuthButton
                  text={"Зарегистрироваться"}
                  sx={{
                     width: { sm: "230px", xs: "186px" },
                     height: { sm: "42px", xs: "34px" },
                     marginTop: "16px",
                     backgroundSize: "cover",
                  }}
                  type="submit"
               />
               {err && (
                  <Box
                     sx={{
                        color: "red",
                     }}>
                     {regResult?.error?.status === 400 ? (
                        <>
                           Аккаунт зарегистрирован, для восстановления пароля
                           перейдите по{" "}
                           <NavLink to={"/reset"}>
                              <span
                                 style={{
                                    cursor: "pointer",
                                    color: "ButtonText",
                                    textDecoration: "underline",
                                    paddingLeft: "10px",
                                 }}
                                 onClick={() => setDataOpen(true)}>
                                 ссылке
                              </span>
                           </NavLink>
                        </>
                     ) : (
                        "Введены некорректные данные"
                     )}
                  </Box>
               )}
            </>
         ) : (
            <>
               <Box
                  sx={{
                     ...colStyle,
                  }}
                  component={"form"}>
                  <Box
                     sx={{
                        ...backText,
                        backgroundImage: `url(${greenHover})`,
                        rotate: "180deg",
                        width: { sm: "435px", xs: "217px" },
                        height: { sm: "136px", xs: "35px" },
                        backgroundSize: "cover",
                     }}>
                     <Typography
                        variant={"h4"}
                        color={"ButtonText"}
                        style={{
                           rotate: "180deg",
                           fontWeight: "400",
                        }}>
                        Вы зарегистрированы!
                     </Typography>
                  </Box>
                  <Typography
                     sx={{
                        fontSize: "14px",
                        color: "#C9C9C9",
                        width: { sm: "270px", xs: "248px" },
                        textAlign: "left",
                     }}>
                     Дождитесь перенаправления на страницу авторизации или
                     нажмите{" "}
                     <NavLink
                        style={{
                           color: "#131313",
                           textDecoration: "underline",
                           textUnderlineOffset: "2px",
                        }}
                        to={"/auth"}>
                        здесь
                     </NavLink>
                  </Typography>
               </Box>
            </>
         )}
      </Box>
   );
};

export default RegForm;
