import React, {useEffect, useState} from 'react';
import item1 from "../../assets/lk/item1.png";
import regBack1 from "../../assets/lk/regBack1.png";
import Input, {input} from "../ui/Input";
import {Box, Checkbox, TextField, Typography} from "@mui/material";
import {backText, colStyle} from "../../mui/palette";
import {TextMaskCustom} from "./TextMaskCustom";
import AuthButton from "../../../public/AuthButton";
import {useNavigate} from "react-router-dom";
import authBackM from "../../assets/items/authBackM.png";
import MyAuto from "../ui/MyAuto";
import {useUserCreateMutation} from "../../redux/services";
import {setUser} from "../../redux/features/userSlice";
import {useDispatch} from "react-redux";
import {setRolesTarget} from "../../handlers/rolesTarget";

const RegForm: React.FC = ({
                           }) => {

    const handleChange = ({target: {name, value}}) => {
        console.log(
            'АААААААААААААА НАЗХУЙ БЛЯТЬ'
        )
        console.log(name,  value)

        setFormState((prev) => ({...prev, [name]: value}));
    };
    const dispatch = useDispatch();
    const [reg, regResult] = useUserCreateMutation();
    const [role, setRole] = useState('');
    const [formState, setFormState] = React.useState({
        name: '',
        phone: '',
    });
    const navigate = useNavigate();
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormState((prev) => ({...prev, ['role']: role}));
        const cleanedPhoneNumber = formState.phone.replace(/\D/g, '');
        const modifiedPhoneNumber = cleanedPhoneNumber.replace(/^7/, '8');
        formState.phone = modifiedPhoneNumber
        formState.role = setRolesTarget(formState.role)

        console.log(formState)
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
            paddingLeft: '16px',

        },
        width: '403px ',
        marginBottom: 0
    }
    useEffect(() => {
        const isAuth = () => {
            console.log(formState)
            if (regResult.isSuccess) {
                dispatch(setUser(formState));
                navigate("/musician");
            }
        };
        isAuth();
    }, [regResult]);
    return (
        <Box sx={{
            ...colStyle,
            width: '20%'
        }} component={'form'} onSubmit={handleFormSubmit}>
            <Box sx={{
                ...backText,
                background: `url(${item1})`,
                width: '345px',
                height: '56px'
            }}>
                <Typography variant={'h2'}>
                    Регистрация
                </Typography>
            </Box>
            <Input
                value={formState.name}
                name="name"

                handleChange={handleChange}
                title={'Ваше имя'}
                placehold={'Введите имя'}
                sx={{
                    ...authText
                }}/>

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
                    ...authText
                }}
            />
            <MyAuto sx={{

                ...authText
            }} setRole={setRole} onChange={handleChange} name={'role'} value={formState.role}/>
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
            <AuthButton text={'Зарегистрироваться'} sx={{
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

        </Box>
    );
};

export default RegForm;
