import React, { useEffect, useState } from "react";
import editIcon from "../../assets/lk/editicon.svg";
import { input, Input as MyInput } from "../ui/Input";
import MyAuto from "../ui/MyAuto";
import saveIc from "../../assets/lk/save.svg";
import { setRolesTarget } from "../../handlers/rolesTarget";
import { fetchGetWithToken } from "../../handlers/tokenFetch";
import { useChangeDataMutation } from "../../redux/services";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ym from "react-yandex-metrika";

const url = "https://xn--80affwgpn.xn--p1ai/api/profile/my/";
const inputStyle = {
   width: { md: "228px", xs: "300px" },
   height: { md: "56px", xs: "50px" },
   marginRight: "24px",
   label: {
      display: "none",
      position: "fixed",
   },
};

const ChangeForm = () => {
   // const token = localStorage.getItem('access')

   const [data, setData] = useState(null);

   const setUser = async () => {
      const { avatar, name, role, social_link } = data;
      return { avatar, name, role, social_link };
   };
   useEffect(() => {
      setUser().then((res) => {
         setFormState(res);
      });
      fetchGetWithToken(url, token)
         .then((result) => {
            setData(result);
         })
         .catch((error) => {
            console.error(error);
         });
   }, []);
   useEffect(() => {
      setUser().then((res) => {
         setFormState(res);
      });
   }, [data]);
   if (data === null) {
      return <div>Loading...</div>;
   }
   const labelStyle = {
      paddingLeft: "16px",
   };
   const [formState, setFormState] = React.useState({
      name: "",
      avatar: "",
      role: "",
      social_link: "",
   });
   const [selectedFile, setSelectedFile] = useState(null);

   const navigate = useNavigate();
   const formData = new FormData();
   const token = localStorage.getItem("access");
   const [role, setRole] = useState("");
   const [reg, regResult] = useChangeDataMutation();
   const handleUpload = () => {
      if (selectedFile) {
         // Выполните действия, связанные с загрузкой выбранного файла
         // console.log(selectedFile);
      }
   };
   const [err, setErr] = useState(false);

   const handleChange = ({ target: { name, value } }) => {
      setFormState((prev) => ({ ...prev, [name]: value }));
   };

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
   // const formData = new FormData();
   const handleFormSubmit = async (e) => {
      e.preventDefault();
      setFormState((prev) => ({ ...prev, ["role"]: role }));
      formState.role = setRolesTarget(formState.role);
      const formData = new FormData();
      formData.append("name", formState.name);
      formData.append("avatar", formState.avatar);
      formData.append("role", formState.role);
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
   const handleFileChange = (event) => {
      formState.avatar = event.target.files[0];
      setSelectedFile(event.target.files[0]);
      handleUpload();
   };

   return (
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
               <Typography sx={labelStyle}>Имя</Typography>
               <MyInput
                  required={true}
                  name={"name"}
                  handleChange={handleChange}
                  value={formState.name}
                  sx={inputStyle}
                  placehold={"Введите имя"}
               />
            </Box>

            <MyAuto
               setRole={setRole}
               onChange={handleChange}
               name={"role"}
               sx={inputStyle}
            />
            <MyInput
               required={true}
               name={"social_link"}
               handleChange={handleChange}
               value={formState.social_link}
               sx={inputStyle}
               placehold={"Введите ссылку"}
            />
            {/*<MyInput type={'file'} handleChange={handleChange} name={'avatar'} value={formState.avatar} sx={inputStyle}  placehold={'Файл'}/>*/}
            <Input
               required={true}
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
         {err && (
            <Box
               sx={{
                  color: "red",
               }}>
               Введите корректные данные
            </Box>
         )}
         <Box component={"button"} type={"submit"}>
            <Box component={"img"} src={saveIc} />
         </Box>
      </Box>
   );
};

export default ChangeForm;
