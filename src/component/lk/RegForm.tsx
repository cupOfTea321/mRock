import { Box, Checkbox, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthButton from "../../../public/AuthButton";
import item1 from "../../assets/lk/item1.png";
import regMob from "../../assets/lk/regMob.svg";
import FormBack from "../../assets/mobileFormBack.png";

import { setRolesTarget } from "../../handlers/rolesTarget";
import { backText, colStyle } from "../../mui/palette";
import { setUser } from "../../redux/features/userSlice";
import { useUserCreateMutation } from "../../redux/services";
import { Input, input } from "../ui/Input";
import MyAuto from "../ui/MyAuto";
import { TextMaskCustom } from "./TextMaskCustom";

const RegForm: React.FC = ({}) => {
  const handleChange = ({ target: { name, value } }) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  const dispatch = useDispatch();
  const [reg, regResult] = useUserCreateMutation();
  const [role, setRole] = useState("");
  const [formState, setFormState] = React.useState({
    name: "",
    phone: "",
  });
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, ["role"]: role }));
    const cleanedPhoneNumber = formState.phone.replace(/\D/g, "");
    const modifiedPhoneNumber = cleanedPhoneNumber.replace(/^7/, "8");
    formState.phone = modifiedPhoneNumber;
    formState.role = setRolesTarget(formState.role);

    console.log(formState);
    try {
      await reg(formState)
        .unwrap()
        .then((payload) => {
          return console.log("fulfilled", payload);
        })
        .catch((error) => {
          return console.error("rejected", error);
        });
      if (!regResult.isSuccess) return;
    } catch (e) {
      console.error(e);
    }
  };
  const authText = {
    label: {
      color: "#131313",
      paddingLeft: "16px",
    },
    width: { lg: "403px ", md: "268px", sm: "268px", xs: "268px" },
    marginBottom: 0,
  };
  useEffect(() => {
    const isAuth = () => {
      console.log(formState);
      if (regResult.isSuccess) {
        dispatch(setUser(formState));
        navigate("/musician");
      }
    };
    isAuth();
  }, [regResult]);
  return (
    <Box
      sx={{
        ...colStyle,
        width: "20%",
      }}
      component={"form"}
      onSubmit={handleFormSubmit}
    >
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
      <Box
        sx={{
          ...backText,
          backgroundImage: `url(${item1})`,
          width: { sm: "345px", xs: "217px" },
          height: { sm: "56px", xs: "35px" },
          backgroundSize: "cover",
        }}
      >
        <Typography variant={"h2"}>Регистрация</Typography>
      </Box>
      <Input
        value={formState.name}
        name="name"
        handleChange={handleChange}
        title={"Ваше имя"}
        placehold={"Введите имя"}
        sx={{
          ...authText,
        }}
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
        }}
      />
      <MyAuto
        sx={{
          ...authText,
        }}
        setRole={setRole}
        onChange={handleChange}
        name={"role"}
        value={formState.role}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: { sm: "402px", xs: "268px" },
          marginRight: "13px",
          marginTop: "16px",
        }}
      >
        <Checkbox
          sx={{
            background: "white",
            borderRadius: "50% ",
          }}
        />
        <Typography
          sx={{
            fontSize: "14px",
            color: "black",
          }}
        >
          Согласие на обработку персональных данных
        </Typography>
      </Box>
      <AuthButton
        text={""}
        sx={{
          width: { sm: "230px", xs: "186px" },
          height: { sm: "42px", xs: "34px" },
          marginTop: "16px",
          backgroundImage: {
            sm: `url(${regMob})`,
            xs: `url(${regMob})`,
          },
          backgroundSize: "cover",
        }}
        type="submit"
        to={"/musician"}
      />
    </Box>
  );
};

export default RegForm;
