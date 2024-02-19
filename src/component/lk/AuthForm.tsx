import React, {useEffect, useState} from 'react';
import item1 from "../../assets/lk/item1.png";
import regBack1 from "../../assets/lk/regBack1.png";
import authIcon from "../../assets/items/authIcon.svg";
import {Input, input} from "../ui/Input";
import {Box, Checkbox, IconButton, InputAdornment, TextField, Typography} from "@mui/material";
import {backText, colStyle, h3} from "../../mui/palette";
import {TextMaskCustom} from "./TextMaskCustom";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import AuthButton from "../../../public/AuthButton";
import {NavLink, useNavigate} from "react-router-dom";
import authBack from "../../assets/items/authBack.png";
import authBackM from "../../assets/items/authBackM.png";
import MyAuto from "../ui/MyAuto";
import {useAppDispatch} from "../../redux/store";
import {useUserAuthMutation} from "../../redux/services";
import {setUser} from "../../redux/features/userSlice";
import {useDispatch, useSelector} from "react-redux";

const AuthForm: React.FC = ({
                            }) => {
    const handleChange = ({target: {name, value}}) => {

        setFormState((prev) => ({...prev, [name]: value}));
    };
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const dispatch = useDispatch();
    const [login, loginResult] = useUserAuthMutation();
    const [formState, setFormState] = React.useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const cleanedPhoneNumber = formState.username.replace(/\D/g, '');
        const modifiedPhoneNumber = cleanedPhoneNumber.replace(/^7/, '8');
        formState.username = modifiedPhoneNumber
        console.log(formState)
        try {
            await login(formState)
                .unwrap()
                .then((payload) => {
                    localStorage.setItem('access', payload.access)
                    return console.log("fulfilled", payload);
                })
                .catch((error) => {
                    return console.error("rejected", error);
                });
            if (!loginResult.isSuccess) return;
        } catch (e) {
            console.error(e);
        }
    };
    const authText = {
        label: {
            color: "#131313",
            paddingLeft: '16px',

        },
        width: '403px ',
        marginBottom: 0
    }
    useEffect(() => {
        const isAuth = () => {
            console.log('isAuth')
            if (loginResult.isSuccess) {
                dispatch(setUser(formState));
                navigate("/musician");
            }
        };
        isAuth();
    }, [loginResult]);
    return (
        <Box sx={{
            ...colStyle,
            width: '20%'
        }} component={'form'} onSubmit={handleFormSubmit}>
            <Box component={'img'} src={authIcon} sx={{
                width: '345px',
                height: '56px'
            }}/>
            <TextField
                label="Телефон"
                variant="outlined"
                value={formState.username}
                name={"username"}
                onChange={handleChange}
                InputProps={{
                    inputComponent: TextMaskCustom as any,
                }}
                sx={{
                    ...input,
                    ...authText
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
                    ...authText
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
            <AuthButton text={'Войти'} sx={{
                width: {sm: '230px', xs: '115px'},
                height: {sm: '42px', xs: '36px'},
                marginTop: '16px',
                backgroundImage: {
                    sm: `url(${regBack1})`,
                    xs: `url(${authBackM})`,
                },
            }}
                        type="submit"
                        to={'/musician'}
            />
            <Typography sx={{
                h3,
                color: 'rgba(19, 19, 19, 1)',
                marginTop: '50px'
            }}>
                У вас еще нет аккаунта?
            </Typography>
            <NavLink to={'/reg'} style={{
                color: 'rgba(132, 88, 203, 1)',
                textDecoration: 'underline'
            }}>
                Зарегистрироваться
            </NavLink>

        </Box>
    );
};

export default AuthForm;
