import { Box, Container, Input, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ym from "react-yandex-metrika";
import back from "../assets/back/backLines.png";
import editIcon from "../assets/lk/editicon.svg";
import like from "../assets/lk/like.png";
import likeBack from "../assets/lk/likeBack.png";
import rightBack from "../assets/lk/musBack.png";
import personMob from "../assets/lk/person.png";
import Logo from "../component/layout/Logo";
import MusRight from "../component/lk/MusRight";
import AuthButton from "../component/ui/AuthButton";
import { Input as MyInput, input } from "../component/ui/Input";
import ItemText from "../component/ui/ItemText";
import { setRolesTarget } from "../handlers/rolesTarget";
import { backText } from "../mui/palette";
import { useChangeDataMutation, useGetProfileQuery } from "../redux/services";
import ChangeSelect from "../component/lk/ChangeSelect";

const inputStyle = {
   width: { md: "228px", xs: "300px" },
   height: { md: "56px", xs: "50px" },
   marginRight: "24px",
   label: {
      display: "none",
      position: "fixed",
   },
   marginTop: "8px",
};

const labelStyle = {
   paddingLeft: "16px",
   marginTop: "16px",
};
const basicInput = {
   color: "white",
   label: {
      color: "black",
   },
   background: "transparent",
   border: "2px solid #8654CC",
   borderRadius: "100px",
   marginBottom: "16px",
   paddingLeft: "16px",
};

const ChangePage = () => {
   const navigate = useNavigate();
   const [formState, setFormState] = React.useState({
      name: "",
      avatar: "",
      role: "",
      social_link: "",
   });
   const { data, isSuccess, error } = useGetProfileQuery(undefined, {
      refetchOnMountOrArgChange: true,
   });

   if (error?.status === 401) {
      navigate("/auth");
   }

   const [userData, setUserData] = useState();
   const handleChange = ({ target: { name, value } }) => {
      setFormState((prev) => ({ ...prev, [name]: value }));
   };

   const [reg, regResult] = useChangeDataMutation();

   const handleFormSubmit = async (e) => {
      e.preventDefault();
      // СОЗДАНИЕ И УПАКОВКА FORM DATA
      formState.role = setRolesTarget(formState.role);
      const formData = new FormData();
      formData.append("name", formState.name);
      if (formState.avatar && formState.avatar !== userData?.avatar)
         formData.append("avatar", formState.avatar);
      formData.append("role", formState.role);
      // ПРИ ОТСУТСТВИИ НАЧАЛА ССЫЛКИ ДОБАВЛЯЕМ ЕГО
      if (!formState.social_link.startsWith("https://")) {
         setFormState((prev) => ({
            ...prev,
            ["social_link"]: "https://" + formState.social_link,
         }));
         handleChange();
      }

      if (formState.social_link)
         formData.append("social_link", formState.social_link);
      try {
         await reg(formData, token)
            .unwrap()
            .then((payload) => {
               // return console.log("fulfilled", payload);
            })
            .catch((error) => {
               // return console.error("rejected", error);
            });
         if (!regResult.isSuccess) return;
      } catch (e) {
         console.error(e);
      }
   };

   const setUser = async () => {
      const { avatar, name, role, social_link } = data;
      return { avatar, name, role, social_link };
   };
   const [selectedFile, setSelectedFile] = useState(null);

   const handleFileChange = (event) => {
      formState.avatar = event.target.files[0];
      setSelectedFile(event.target.files[0]);
      handleUpload();
   };

   const handleUpload = () => {
      if (selectedFile) {
         // Выполните действия, связанные с загрузкой выбранного файла
         // console.log(selectedFile);
      }
   };
   const [err, setErr] = useState(false);

   useEffect(() => {
      const isAuth = () => {
         if (regResult.isSuccess) {
            ym("reachGoal", "lead_mus");
            setErr(false);
            navigate("/musician");
         }
         if (regResult.isError) {
            setErr(true);
         }
      };
      isAuth();
   }, [regResult]);

   useEffect(() => {
      setUser().then((res) => {
         setFormState(res);
      });
   }, [data]);

   if (isSuccess) {
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
               }}></Box>
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
               }}></Box>
            <MusRight img={data.avatar} />
            <Container
               sx={{
                  position: "relative",
                  zIndex: 400,
                  height: "100vh",
               }}>
               <Box
                  sx={{
                     display: "flex",
                     justifyContent: "space-between",
                     alignItems: "center",
                     zIndex: "400",
                     position: { md: "static", sm: "absolute", xs: "absolute" },
                     width: { md: "auto", sm: "90%", xs: "90%" },
                  }}>
                  <Logo
                     sx={{
                        marginTop: "26px",
                        marginBottom: "26px",
                     }}
                  />

                  <AuthButton exit={true} text={"Выйти"} to={"/"} />
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
                  className={"animate__bounceIn animate__animated wow"}>
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
                     }}>
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
                  onSubmit={handleFormSubmit}>
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
                     }}>
                     <Box>
                        <Typography
                           sx={{
                              ...labelStyle,
                           }}>
                           Имя
                        </Typography>
                        <Box
                           component={"input"}
                           required={true}
                           name={"name"}
                           onChange={handleChange}
                           value={formState.name}
                           sx={{
                              ...inputStyle,
                              ...basicInput,
                           }}
                           placehold={"Введите имя"}
                        />
                     </Box>
                     <Box>
                        <Typography sx={labelStyle}>Роль</Typography>
                        <ChangeSelect
                           inputStyle={inputStyle}
                           basicInput={basicInput}
                           formState={formState}
                           handleChange={handleChange}
                        />
                        {/*<div className={'custom-select'}>*/}
                        {/*    <Box sx={{*/}
                        {/*        ...inputStyle,*/}
                        {/*        ...basicInput,*/}
                        {/*        '&::-ms-expand': {*/}
                        {/*            color: 'black',*/}
                        {/*            background: 'red'*/}
                        {/*        }*/}
                        {/*    }} component={'select'} name={'role'} id="roleSelect" value={formState.role} onChange={handleChange}>*/}
                        {/*        <option style={{color: 'black'}} value=''>{rolesTarget(formState.role)}</option>*/}
                        {/*        {roles.filter(item => item !== rolesTarget(formState.role)).map(item =>  (*/}
                        {/*            <option style={{color: 'black'}} value={item}>{item}</option> ))}*/}
                        {/*    </Box>*/}
                        {/*</div>*/}
                        {/*<MyAuto*/}
                        {/*  setRole={setRole}*/}
                        {/*  onChange={handleChange}*/}
                        {/*  role={role}*/}
                        {/*  value={formState.role}*/}
                        {/*  name={"role"}*/}
                        {/*  sx={inputStyle}*/}
                        {/*/>*/}
                     </Box>
                     <Box>
                        <Typography sx={labelStyle}>Ссылка на vk</Typography>
                        <Box
                           component={"input"}
                           name={"social_link"}
                           onChange={handleChange}
                           value={formState.social_link}
                           sx={{
                              ...inputStyle,
                              ...basicInput,
                           }}
                           placehold={"Введите ссылку"}
                        />
                     </Box>
                     {/*<MyInput type={'file'} handleChange={handleChange} name={'avatar'} value={formState.avatar} sx={inputStyle}  placehold={'Файл'}/>*/}
                     <Box>
                        <Typography sx={labelStyle}>Фото</Typography>
                        <Input
                           variant="outlined"
                           sx={{
                              ...input,
                              ...inputStyle,
                              paddingLeft: "16px",
                              color: "white !important",
                              '& input[type="file"]::-webkit-file-upload-button':
                                 {
                                    visibility: "hidden",
                                    display: "none",
                                 },
                           }}
                           type="file"
                           onChange={handleFileChange}
                           onClick={handleUpload}
                           inputProps={{ accept: ".png, .jpg, .jpeg" }}
                        />
                     </Box>
                     {/*<Button onClick={handleUpload}>Upload</Button>*/}
                  </Box>
                  {err && (
                     <Box
                        sx={{
                           color: "red",
                        }}>
                        Введите корректные данные
                     </Box>
                  )}
                  <Box component={"button"} type={"submit"}>
                     <ItemText
                        title="Сохранить"
                        whitetext
                        sx={{
                           width: "170px",
                           height: "50px",
                           color: "white",
                           backgroundSize: "contain",
                        }}
                     />
                  </Box>
               </Box>
            </Container>
         </>
      );
   } else {
      return <div>Loading...</div>;
   }
};

export default ChangePage;
