import {Visibility, VisibilityOff} from "@mui/icons-material";
import {
    Alert,
    Box,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";
import authIcon from "../../assets/items/authIcon.svg";
import CheckIcon from '@mui/icons-material/Check';
import FormBack from "../../assets/mobileFormBack.png";
import {colStyle, h3} from "../../mui/palette";
import {setUser} from "../../redux/features/userSlice";
import {useUserAuthMutation, useUserRefreshMutation} from "../../redux/services";
import {input} from "../ui/Input";
import {TextMaskCustom} from "./TextMaskCustom";
import AuthButton from "../ui/AuthButton";
import InputMask from 'react-input-mask'
import PhoneMask from "./PhoneMask";

const AuthForm: React.FC = ({}) => {
    const handleChange = ({target: {name, value}}) => {
        setFormState((prev) => ({...prev, [name]: value}));
    };
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [message, setMessage] = useState('')
    const [login, loginResult] = useUserAuthMutation();
    const [refresh, refreshResult] = useUserRefreshMutation();
    const [formState, setFormState] = React.useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const cleanedPhoneNumber = formState.username.replace(/\D/g, "");
        // const modifiedPhoneNumber = cleanedPhoneNumber.replace(/^7/, "8");
        formState.username = cleanedPhoneNumber;
        try {
            await login(formState)
                .unwrap()
                .then((payload) => {
                    localStorage.setItem("access", payload.access);
                    localStorage.setItem("refresh", payload.refresh);
                    // return console.log("fulfilled", payload);
                })
                .catch((error) => {
                    if (error.data.detail == "No active account found with the given credentials") {
                        setMessage('Аккаунт с такими данными не найден')
                    }
                    if (error.status === 403 || error.status === 401) {
                        const refreshToken = localStorage.getItem("refresh");
                        refresh(refreshToken)
                        return console.error("rejected 403", error);
                    }

                    return console.error("rejected", error);
                });

            if (!loginResult.isSuccess) return;
        } catch (e) {
        }
    };
    let regSuccess = localStorage.getItem('reg')
    useEffect(() => {
        // regSuccess = localStorage.getItem('reg')
        return () => localStorage.removeItem('reg')
    }, [])
    const authText = {
        label: {
            color: "#131313",
            paddingLeft: "16px",
        },
        width: {lg: "403px ", md: "268px", sm: "268px", xs: "268px"},
        marginBottom: 0,
    };
    const [err, setErr] = useState(false)
    useEffect(() => {
        const isAuth = () => {
            if (loginResult.isSuccess) {

                navigate("/musician");
                setErr(false)
            }
            if (loginResult.isError) {
                setErr(true)
            }
        };
        isAuth();
    }, [loginResult]);
    const handleTG = (to) => {
        window.location.href = "https://t.me/mega_rock_bot";
    };
    return (
        <Box
            sx={{
                ...colStyle,
                width: "fit-content",
                marginLeft: {md: '20%', sm: 0, xs: 0}
            }}
            component={"form"}
            onSubmit={handleFormSubmit}
        >
            {regSuccess && <Alert sx={{
                position: 'absolute',
                top: {sm: 100, xs: 50}
            }} icon={<CheckIcon fontSize="inherit" />} severity="success">
                Вы зарегистрированы, пароль для авторизации будет отправлен в смс.
                Администратор перезвонит вам, чтобы помочь активировать аккаунт.
            </Alert>}

            <Box
                component={"img"}
                src={authIcon}
                sx={{
                    width: {md: "345px", sm: "201px", xs: "201px"},
                    height: "56px",
                }}
            />
            <Box
                component={"img"}
                sx={{
                    display: {lg: "none", md: "block", sm: "block", xs: "block"},
                    position: "absolute",
                    width: {sm: "70%", xs: "100%"},
                    height: {xs: "65%", md: "50%"},
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
                                onMouseDown={(event) => event.preventDefault()}
                            >
                                {showPassword ? <Visibility/> : <VisibilityOff/>}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <Box sx={{width: "90%"}}>
                <Typography
                    onClick={handleTG}
                    sx={{
                        color: "#C9C9C9",
                        cursor: "pointer",
                        marginTop: "20px",
                        textAlign: "center",
                        textDecoration: 'underline'
                    }}
                >
                    Забыли пароль? Напишите нам в Telegram
                </Typography>
            </Box>
            {message && <Typography sx={{color: 'red'}}>
                {message}
            </Typography>}
            <AuthButton
                text={"Войти"}
                sx={{
                    width: {sm: "230px", xs: "115px"},
                    height: {sm: "42px", xs: "36px"},
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
                }}
            >
                У вас еще нет аккаунта?
            </Typography>
            <NavLink
                to={"/reg"}
                style={{
                    color: "rgba(132, 88, 203, 1)",
                    textDecoration: "underline",
                }}
            >
                Зарегистрироваться
            </NavLink>
        </Box>
    );
};

export default AuthForm;
