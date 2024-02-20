import { Box, Checkbox, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import item1 from "../../assets/lk/item1.png";
import FormBack from "../../assets/mobileFormBack.png";

import { setRolesTarget } from "../../handlers/rolesTarget";
import { backText, colStyle } from "../../mui/palette";
import { useUserCreateMutation } from "../../redux/services";
import AuthButton from "../ui/AuthButton";
import { Input, input } from "../ui/Input";
import MyAuto from "../ui/MyAuto";
import { ModalData } from "./ModalData";
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
    // const modifiedPhoneNumber = cleanedPhoneNumber.replace(/^7/, "8");
    formState.phone = cleanedPhoneNumber;
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
  const [err, setErr] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const isAuth = () => {
      if (regResult.isSuccess) {
        navigate("/musician");
        setErr(false);
      }
      if (regResult.isError) {
        setErr(true);
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
          Согласие на обработку{" "}
          <span
          style={{
            cursor: 'pointer',
            textDecoration: "underline"
          }}
          onClick={() => setOpen(true)}>персональных данных</span>
        </Typography>
        <ModalData open={open} setOpen={setOpen} />
      </Box>
      <AuthButton
        text={"Зарегистрироваться"}
        sx={{
          width: { sm: "230px", xs: "186px" },
          height: { sm: "42px", xs: "34px" },
          marginTop: "16px",
          backgroundSize: "cover",
        }}
        type="submit"
        to={"/musician"}
      />
      {err && (
        <Box
          sx={{
            color: "red",
          }}
        >
          Введены некорректные данные
        </Box>
      )}
    </Box>
  );
};

export default RegForm;
