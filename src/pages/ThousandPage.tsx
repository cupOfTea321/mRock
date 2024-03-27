import { Box, Typography } from "@mui/material";
import back3 from "../assets/about/aboutBack3.svg";
import backItem1 from "../assets/items/item1.png";
import back1 from "../assets/thousand/back1.svg";
import CardsBlock from "../component/thousand/CardsBlock";
import ItemText from "../component/ui/ItemText";
import { useGetMusiciansQuery } from "../redux/services/musiciansCore";
import BlackBackground from "../utils/BlackBackground";
import Loader from "../utils/Loader";
import { useEffect, useState } from "react";

const limit = 12;

const ThousandPage = () => {
   const [params, setParams] = useState("");
   const [currentPage, setCurrentPage] = useState(0);

   const [canFetch, setCanFetch] = useState(true);
   const [isCurrentPageAdded, setIsCurrentPageAdded] = useState(false);

   const [users, setUsers] = useState<Array<Object>>([]);
   const [totalUsers, setTotalUsers] = useState(0);

   const [selectedValue, setSelectedValue] = useState<string | null>(null);

   const [searchValue, setSearchValue] = useState("");

   const { data, isLoading, isSuccess, isFetching } = useGetMusiciansQuery(
      `${params}&offset=${currentPage * limit}`
   );

   ///// Fetch музыкантов при скрлле
   useEffect(() => {
      if (isSuccess && !isFetching) {
         if (isCurrentPageAdded) {
            setUsers([...users, ...data.results]);
            setIsCurrentPageAdded(false);
         } else {
            setUsers(data.results);
         }
         setTotalUsers(data.count);
         setCanFetch(true);
      }
   }, [isFetching]);

   useEffect(() => {
      document.addEventListener("scroll", scrollHandler);

      return () => document.removeEventListener("scroll", scrollHandler);
   }, [totalUsers, canFetch]);

   ////// Триггер нового fetch когда приближаемся к концу страницы
   const scrollHandler = (e: any) => {
      if (
         e?.target?.documentElement.scrollHeight -
            (e.target.documentElement.scrollTop + window.innerHeight) <
         500
      ) {
         if (currentPage * limit < totalUsers && canFetch) {
            setIsCurrentPageAdded(true);
            setCanFetch(false);
            setCurrentPage(currentPage + 1);
         }
      }
   };

   ////// Делаем триггер новвого запроса с новыми параметрами role & name
   useEffect(() => {
      const newParams = createParams();
      setUsers([]);
      setCurrentPage(0);
      setParams(newParams);
   }, [selectedValue, searchValue]);

   ////// Создаем новые параметры url когда меняются name | role
   function createParams() {
      const name = searchValue;
      let role: string;
      if (selectedValue === "Вокалист") {
         role = "VC";
      } else if (selectedValue === "Гитарист") {
         role = "GT";
      } else if (selectedValue === "Басист") {
         role = "BS";
      }

      let params: string;
      if (name !== "" && role!) {
         params = `&name=${name}&role=${role}`;
         return params;
      } else if (name !== "") {
         params = `&name=${name}`;
         return params;
      } else if (name === "" && role!) {
         params = `&role=${role}`;
         return params;
      } else {
         params = "";
         return params;
      }
   }

   if (isLoading) return <Loader title={`Загрузка событий...`} />;

   return (
      <Box
         sx={{
            zIndex: 150,
         }}>
         <BlackBackground />
         <Box
            sx={{
               position: "relative",
               zIndex: 400,
               textAlign: "center",
               width: { xl: "65%", lg: "80%" },
               margin: "0 auto",
               paddingTop: "150px",
            }}
            className={"animate__fadeInUp animate__animated wow"}>
            <Box
               sx={{
                  display: "flex",
                  flexDirection: { md: "row", sm: "column", xs: "column" },
                  justifyContent: "center",
                  alignItems: "center",
                  width: { sm: "100%", xs: "70%" },
                  margin: "0 auto",
               }}>
               <Typography variant={"h2"}>Самый масштабный</Typography>
               <ItemText
                  variant={"h2"}
                  sx={{
                     background: `url(${backItem1})`,
                     width: { sm: "238px", xs: "221px" },
                     height: { sm: "55px", xs: "31px" },
                  }}
                  title={"рок-бэнд"}
                  text
               />
               <Typography variant={"h2"}>страны</Typography>
            </Box>
         </Box>
         <CardsBlock
            data={users}
            selectedValue={selectedValue}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            setSelectedValue={setSelectedValue}
         />
         <Box
            component={"img"}
            src={back3}
            sx={{
               position: "absolute",
               zIndex: 400,
               right: 0,
               top: 200,
            }}
            className={"animate__fadeInRight animate__animated wow"}
         />
         <Box
            component={"img"}
            src={back1}
            sx={{
               position: "absolute",
               zIndex: 650,
               left: -30,
               top: 350,
            }}
            className={"animate__fadeInLeft animate__animated wow"}
         />
      </Box>
   );
};

export default ThousandPage;
