import React, {useState} from 'react';
import item1 from "../../assets/lk/item1.png";
import regBack1 from "../../assets/lk/regBack1.png";
import Input, {input} from "../ui/Input";
import {Box, Checkbox, IconButton, InputAdornment, TextField, Typography} from "@mui/material";
import {backText, colStyle, h3} from "../../mui/palette";
import {TextMaskCustom} from "./TextMaskCustom";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import AuthButton from "../../../public/AuthButton";
import {NavLink} from "react-router-dom";
import authBack from "../../assets/items/authBack.png";
import authBackM from "../../assets/items/authBackM.png";
import MyAuto from "../ui/MyAuto";

const AuthForm: React.FC = ({reg = false}) => {
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
        width: '403px ',
        marginBottom: 0
    }
    return (
        <Box sx={{
            ...colStyle,
            width: '20%'
        }} component={'form'}>
            <Box sx={{
                ...backText,
                background: `url(${item1})`,
                width: '345px',
                height: '56px'
            }}>
                <Typography variant={'h2'}>
                    {reg ? 'Регистрация' : 'Авторизация'}
                </Typography>
            </Box>

            <Input
                title={'Ваше имя'}
                placehold={'Введите имя'}
                sx={{
                    ...authText
                }}/>
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
            {
                !reg && <TextField
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
                                    {showPassword ? <Visibility/> : <VisibilityOff/>}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            }
            {
                reg && <MyAuto sx={{

                    ...authText
                }}/>
            }
            {
                reg && (
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '402px',
                        marginRight: '13px',
                        marginTop: '16px'
                    }}>
                        <Checkbox
                            sx={{
                                background: 'white',
                                borderRadius: '50% '
                            }}
                        />
                        <Typography sx={{
                            fontSize: '14px',
                            color: 'black',

                        }}>
                            Согласие на обработку персональных данных
                        </Typography>
                    </Box>
                )

            }
            <AuthButton text={reg ? 'Зарегистрироваться' : 'Войти'} sx={{
                width: {sm: '230px', xs: '115px'},
                height: {sm: '42px', xs: '36px'},
                marginTop: '16px',
                backgroundImage: {
                    sm: `url(${regBack1})`,
                    xs: `url(${authBackM})`,
                },
            }} to={'/musician'}/>
            {!reg && (<>
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
            </>)}

        </Box>
    );
};

export default AuthForm;
