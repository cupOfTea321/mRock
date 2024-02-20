import React, {useEffect, useState} from 'react';
import BlackBackground from "../utils/BlackBackground";
import MusRight from "../component/lk/MusRight";
import Logo from "../component/layout/Logo";
import AuthButton from "../component/ui/AuthButton";
import editIcon from "../assets/lk/editicon.svg";
import like from "../assets/lk/like.png";
import likeBack from "../assets/lk/likeBack.png";
import rightBack from "../assets/lk/musBack.png";
import personMob from "../assets/lk/person.png";
import saveIc from "../assets/lk/save.svg";
import itemSave from "../assets/items/saveBack.png";
import {Box, Button, Container, Grid, Input} from "@mui/material";
import {backText, h3} from "../mui/palette";
import back from "../assets/back/backLines.png";
import ItemText from "../component/ui/ItemText";
import {input, Input as MyInput} from "../component/ui/Input";
import MyAuto from "../component/ui/MyAuto";
import {setRolesTarget} from "../handlers/rolesTarget";
import {useChangeDataMutation, useUserCreateMutation} from "../redux/services";
import {fetchGetWithToken} from "../handlers/tokenFetch";
import { useNavigate } from "react-router-dom";
const ChangePage = () => {
    const inputStyle = {
        width: { md: "228px", xs: "300px" },
        height: { md: "56px", xs: "50px" },
        marginRight: "24px",
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
            <Box
                sx={{
                    position: "absolute",
                    zIndex: 340,
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: { md: "100vh", sm: "1500px", xs: "1250px" },
                    backgroundColor: "black",
                    backgroundRepeat: "no-repeat",
                }}
            ></Box>
            <Box
                sx={{
                    position: "absolute",
                    zIndex: 360,
                    width: "100vw",
                    height: { md: "100vh", sm: "1500px", xs: "1250px" },
                    opacity: 0.3,
                    background: `url(${back})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            ></Box>
            <MusRight/>
            <Container sx={{
                position: 'relative',
                zIndex: 400,
                height: "100vh",
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: "400",
                    position: { md: "static", sm: "absolute", xs: "absolute" },
                    width: { md: "auto", sm: "90%", xs: "90%" },
                }}>
                    <Logo sx={{
                        marginTop: '26px',
                        marginBottom: '26px',
                    }}/>

                    <AuthButton exit={true} text={'Выйти'} to={'/'}/>
                </Box>
                <Box
                    sx={{
                        backgroundImage: {
                            md: `url(${rightBack})`,
                            xs: `url(${personMob})`,
                        },
                        backgroundRepeat: "no-repeat",
                        backgroundSize: { sm: "contain", xs: "cover" },
                        backgroundPosition: { xs: "center top" },
                        zIndex: 200,
                        width: { md: "689px", sm: "100%", xs: "100%" },
                        height: { sm: "100%", xs: "70%" },
                        display: { md: "none", xs: "block" },
                        position: "relative",
                    }}
                    className={"animate__bounceIn animate__animated wow"}
                >
                    <Box
                        sx={{
                            background: `url(${likeBack})`,
                            right: 0,
                            position: "absolute",
                            left: 0,
                            margin: "0 auto",
                            bottom: 0,
                            width: "140px",
                            height: "77px",
                            ...backText,
                        }}
                    >
                        <Box
                            component={"img"}
                            src={like}
                            sx={{
                                marginRight: "6px",
                            }}
                        />
                        {data?.likes}
                    </Box>
                </Box>
                <Box
                    sx={{
                        // marginLeft: "50px",
                        width: { md: "520px", xs: "100%" },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        // margin: { sm: "none", xs: "0 auto" },
                    }}
                    component={"form"}
                    onSubmit={handleFormSubmit}
                >
                    <Box
                        sx={{
                            marginTop: { md: "0", xs: "70px" },
                        }}
                        width={"75%"}
                        component={"img"}
                        src={editIcon}
                    />

                    <Box
                        sx={{
                            width: "100%",
                            display: { xs: "flex" },
                            flexWrap: { md: "wrap", xs: "none" },
                            flexDirection: { md: "row", xs: "column" },
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: { md: "30px", xs: "30px" },
                        }}
                    >
                        <MyInput
                            name={"name"}
                            handleChange={handleChange}
                            value={formState.name}
                            sx={inputStyle}
                            placehold={"Введите имя"}
                        />
                        <MyAuto
                            setRole={setRole}
                            onChange={handleChange}
                            name={"role"}
                            sx={inputStyle}
                        />
                        <MyInput
                            name={"social_link"}
                            handleChange={handleChange}
                            value={formState.social_link}
                            sx={inputStyle}
                            placehold={"Введите ссылку"}
                        />
                        {/*<MyInput type={'file'} handleChange={handleChange} name={'avatar'} value={formState.avatar} sx={inputStyle}  placehold={'Файл'}/>*/}
                        <Input
                            variant="outlined"
                            sx={{
                                ...input,
                                ...inputStyle,
                                paddingLeft: "32px",
                                // borderRadius: "100px",
                                // borderColor: "rgba(134, 84, 204, 1) !important",
                                // color: 'white !important',
                                '& input[type="file"]::-webkit-file-upload-button': {
                                    visibility: "hidden",
                                    display: "none",
                                },
                            }}
                            type="file"
                            onChange={handleFileChange}
                            onClick={handleUpload}
                            inputProps={{ accept: ".png, .jpg, .jpeg" }}
                        />
                        {/*<Button onClick={handleUpload}>Upload</Button>*/}
                    </Box>
                    {
                        err && <Box sx={{
                            color: 'red'
                        }}>
                            Введите корректные данные
                        </Box>
                    }
                    <Box
                        component={'button'}
                        type={'submit'}
                    >
                        <Box component={"img"} src={saveIc} />
                    </Box>

                </Box>
            </Container>
        </>
    );
};

export default ChangePage;
