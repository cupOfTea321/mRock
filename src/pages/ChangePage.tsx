import { Box, Container, Input, Typography } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
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
import { Input as input } from "../component/ui/Input";
import ItemText from "../component/ui/ItemText";
import { setRolesTarget } from "../handlers/rolesTarget";
import { backText } from "../mui/palette";
import { useChangeDataMutation, useGetProfileQuery } from "../redux/services";
import classNames from "classnames";
import { useOutsideClick } from "../hooks/useOutsideClick";

import arrow from "../assets/CustomSelect/arrow.svg";

const inputStyle = {
   width: { md: "228px", xs: "300px" },
   height: { md: "56px", xs: "56px" },
   label: {
      display: "none",
      position: "fixed",
   },
   fontSize: "16px",
};

const labelStyle = {
   paddingLeft: "16px",
};
const basicInput = {
   color: "white",
   label: {
      color: "black",
   },
   background: "transparent",
   border: "2px solid #8654CC",
   borderRadius: "100px",
   paddingLeft: "16px",
};

const roles = ["Вокалист", "Гитарист", "Басист"];

let cx = classNames;

const ChangePage = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [isError, setIsError] = useState(false);
   const selectRef = useOutsideClick(() => setIsOpen(false));

   const navigate = useNavigate();

   const [formState, setFormState] = useState({
      name: "",
      avatar: "",
      role: "",
      social_link: "",
   });

   const { data, isSuccess, error } = useGetProfileQuery(undefined, {
      refetchOnMountOrArgChange: true,
   });

   const [userData, setUserData] = useState();

   const handleChange = ({ target: { name, value } }) => {
      setFormState((prev) => ({ ...prev, [name]: value }));
   };

   const [reg, regResult] = useChangeDataMutation();

   const handleFormSubmit = async (e: FormEvent) => {
      e.preventDefault();
      // СОЗДАНИЕ И УПАКОВКА FORM DATA
      const role = setRolesTarget(formState.role);
      const formData = new FormData();
      formData.append("name", formState.name);
      if (formState.avatar && formState.avatar !== userData?.avatar)
         formData.append("avatar", formState.avatar);
      formData.append("role", role);
      // ПРИ ОТСУТСТВИИ НАЧАЛА ССЫЛКИ ДОБАВЛЯЕМ ЕГО
      if (formState.social_link !== "" && formState.social_link !== null) {
         if (!formState.social_link.startsWith("https://")) {
            setFormState({
               ...formState,
               social_link: "https://" + formState.social_link,
            });
         }
      }

      if (formState.social_link !== "" && formState.social_link !== null) {
         formData.append("social_link", formState.social_link);
      }

      try {
         await reg(formData).unwrap();
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
         let role;
         if (res.role === "VC") {
            role = "Вокалист";
         } else if (res.role === "GT") {
            role = "Гитарист";
         } else if (res.role === "BS") {
            role = "Басист";
         }

         res = {
            ...res,
            role,
         };
         setFormState(res);
      });
   }, [data]);

   const arrowClasses = cx({
      select__arrow: true,
      select__arrow_active: isOpen,
   });

   const selectClasses = cx({
      select: true,
      _active: isOpen,
      _error: isError,
   });

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
                     width: { md: "520px", xs: "100%" },
                     display: "flex",
                     flexDirection: "column",
                     justifyContent: "center",
                     alignItems: "center",
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
                        marginTop: "20px",
                        gap: "20px",
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
                        <div className="selectWrap _change">
                           <div className={selectClasses} ref={selectRef}>
                              <div
                                 className="select__header _change"
                                 onClick={() => setIsOpen((prev) => !prev)}>
                                 <span>{formState.role}</span>
                                 <img
                                    src={arrow}
                                    alt="Выберите инструмент"
                                    className={arrowClasses}
                                 />
                              </div>
                              <div
                                 className={`listWrap ${
                                    isOpen ? "listWrap_active" : ""
                                 }`}>
                                 <ul className={"list"}>
                                    {roles.map((item) => (
                                       <li
                                          key={item}
                                          className={"list__item"}
                                          onClick={() => {
                                             if (setIsError) setIsError(false);
                                             setIsOpen(false);
                                             if (
                                                item.toLocaleLowerCase() !==
                                                formState.role?.toLocaleLowerCase()
                                             ) {
                                                setFormState({
                                                   ...formState,
                                                   role: item,
                                                });
                                             }
                                          }}>
                                          {item}
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                           </div>
                        </div>
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
