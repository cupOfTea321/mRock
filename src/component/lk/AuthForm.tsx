import React, {useState} from 'react';
import item1 from "../../assets/lk/item1.png";
import Input, {input} from "../ui/Input";
import {Box, IconButton, InputAdornment, TextField, Typography} from "@mui/material";
import {backText, colStyle, h3} from "../../mui/palette";
import {TextMaskCustom} from "./TextMaskCustom";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import AuthButton from "../ui/AuthButton";
import {NavLink} from "react-router-dom";

const AuthForm: React.FC = () => {
    const [phone, setPhone] = React.useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    };
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const authText = {
        label: {
            color: "#131313",
            paddingLeft: '16px',

        },
        width: '403px',
        marginBottom: 0
    }
    return (
        <Box sx={{
            ...colStyle,
            width: '20%'
        }}>
            <Box sx={{
                ...backText,
                background: `url(${item1})`,
                width: '345px',
                height: '56px'
            }}>
                <Typography variant={'h2'}>
                    Авторизация
                </Typography>
            </Box>
            <TextField
                label="Телефон"
                variant="outlined"
                value={phone}
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
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handleChangePassword}
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
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <AuthButton text={'Войти'}   sx={{
                // width: {sm: '230px', xs: '115px'},
                // height: {sm: '42px', xs: '36px'},
                marginTop: '16px'
            }}/>

            <Typography sx={{
                h3,
                color: 'rgba(19, 19, 19, 1)',
                marginTop: '50px'
            }}>
                У вас еще нет аккаунта?
            </Typography>
            <NavLink to={'login'} style={{
                color: 'rgba(132, 88, 203, 1)',
                textDecoration: 'underline'
            }}>
                Зарегистрироваться
            </NavLink>
        </Box>
    );
};

export default AuthForm;
