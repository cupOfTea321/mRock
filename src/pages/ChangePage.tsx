import React, {useEffect, useState} from 'react';
import BlackBackground from "../utils/BlackBackground";
import MusRight from "../component/lk/MusRight";
import Logo from "../component/layout/Logo";
import AuthButton from "../component/ui/AuthButton";
import itemSave from "../assets/items/saveBack.png";
import {Box, Button, Container, Grid, Input} from "@mui/material";
import {h3} from "../mui/palette";
import ItemText from "../component/ui/ItemText";
import {input, Input as MyInput} from "../component/ui/Input";
import MyAuto from "../component/ui/MyAuto";
import {setRolesTarget} from "../handlers/rolesTarget";
import {useChangeDataMutation, useUserCreateMutation} from "../redux/services";
import {fetchGetWithToken} from "../handlers/tokenFetch";
import { useNavigate } from "react-router-dom";
import {setUser} from "../redux/features/userSlice";
const ChangePage = () => {
    const inputStyle = {
        width: '228px',
        marginRight: '24px',
    }
    const [formState, setFormState] = React.useState({
        name: '',
        avatar: '',
        role: '',
        social_link: '',
    });
    const handleChange = ({target: {name, value}}) => {

        setFormState((prev) => ({...prev, [name]: value}));
        console.log(formState)
    };
    const navigate = useNavigate();
    const formData = new FormData();
    const token = localStorage.getItem('access')
    const [role, setRole] = useState('');
    const [reg, regResult] = useChangeDataMutation();
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormState((prev) => ({...prev, ['role']: role}));
        formState.role = setRolesTarget(formState.role)
        const formData = new FormData();
        formData.append('name', formState.name)
        formData.append('avatar', formState.avatar)
        formData.append('role', formState.role)
        formData.append('social_link', formState.social_link)
        console.log(`formData ${formData}`  )
        console.log(formState)
        try {
            await reg(formData, token)
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
    const [data, setData] = useState(null);

    const url = 'https://xn--80affwgpn.xn--p1ai/api/profile/my/';
    const setUser = async () => {
        const {avatar, name, role, social_link} = data
        return  {avatar, name, role, social_link}
    }
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        formState.avatar = event.target.files[0]
        setSelectedFile(event.target.files[0]);
        handleUpload();
    };

    const handleUpload = () => {
        if (selectedFile) {
            // Выполните действия, связанные с загрузкой выбранного файла
            console.log(selectedFile);

        }
    };
    const [err, setErr] = useState(false)
    useEffect(() => {
        const isAuth = () => {
            if (regResult.isSuccess) {
                setErr(false)
                navigate("/musician");
            }
            if (regResult.isError) {
                setErr(true)
            }
        };
        isAuth();
    }, [regResult]);
    useEffect(() => {
        setUser().then((res) => {
            setFormState(res)
        })
        fetchGetWithToken(url, token)
            .then((result) => {
                setData(result);
            })
            .catch((error) => {
                console.error(error);
            });
        document.body.classList.add("full-height-body");

        return () => {
            document.body.classList.remove("full-height-body");
        };

    }, []);
    useEffect(() => {
        setUser().then((res) => {
            setFormState(res)
        })
    }, [data])
    if (data === null) {
        return <div>Loading...</div>;
    }
    console.log(data)

    return (
        <>
            <BlackBackground />
            <MusRight/>
            <Container sx={{
                position: 'relative',
                zIndex: 400
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Logo sx={{
                        marginTop: '26px',
                        marginBottom: '26px',
                    }}/>

                    <AuthButton exit={true} text={'Выйти'} to={'/'}/>
                </Box>

                <Box sx={{
                    marginLeft: '50px',
                    width: '520px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }} component={'form'} onSubmit={handleFormSubmit}>

                    <ItemText title={'Редактирование'} variant={'h2'} sx={{
                        marginTop: '24px',
                        marginBottom: '50px',
                    }}/>
                    <Grid container>
                        <MyInput handleChange={handleChange} name={'name'} value={formState.name} sx={inputStyle}   placehold={'Введите имя'}/>
                        <MyAuto setRole={setRole} onChange={handleChange} name={'role'}  sx={inputStyle} />
                        <MyInput handleChange={handleChange} name={'social_link'} value={formState.social_link} sx={inputStyle}  placehold={'Введите ссылку'}/>
                        {/*<MyInput type={'file'} handleChange={handleChange} name={'avatar'} value={formState.avatar} sx={inputStyle}  placehold={'Файл'}/>*/}
                        <Input variant="outlined"  sx={{
                            ...input,
                            ...inputStyle,
                            paddingLeft: '32px',
                            // borderRadius: "100px",
                            // borderColor: "rgba(134, 84, 204, 1) !important",
                            // color: 'white !important',
                                '& input[type="file"]::-webkit-file-upload-button': {
                                    visibility: 'hidden',
                                    display: 'none',
                                }
                        }} type="file"
                               onChange={handleFileChange}
                               onClick={handleUpload}
                               inputProps={{ accept: '.png, .jpg, .jpeg' }}/>
                        {/*<Button onClick={handleUpload}>Upload</Button>*/}
                    </Grid>
                    {
                        err && <Box sx={{
                            color: 'red'
                        }}>
                            Введите корректные данные
                        </Box>
                    }
                    <ItemText
                        img={itemSave}
                        title={'Сохранить'}
                        type={'submit'}
                        sx={{
                            width: {sm: '170px', xs: ''},
                            height: {sm: '50px', xs: ''},
                            cursor: 'pointer',
                        }}
                        typo={{
                            ...h3,
                            color: 'white'
                        }}
                    />
                </Box>
            </Container>
        </>
    );
};

export default ChangePage;
