import { Box, Container, Grid } from "@mui/material";
import moreBtn from "../../assets/hovers/purpleHover.webp";
import person1 from "../../assets/thousand/img1.png";
import person2 from "../../assets/thousand/img2.png";
import person3 from "../../assets/thousand/img3.png";
import person4 from "../../assets/thousand/img4.png";
import { input, Input } from "../ui/Input";
import ItemText from "../ui/ItemText";
import PeopleCard from "./PeopleCard";
import ThousandChangeSelect from "../lk/ThuosandChangeSelect";
import CustomSelect from "../lk/CustomSelect";

import { ChangeEvent, useState } from "react";
import arrow from "../../assets/CustomSelect/arrow.svg";

import classNames from "classnames";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const roles = ["Гитарист", "Вокалист", "Барабанщик", "Басист", "Все"];

const people = [
   { image: person1 },
   { image: person2 },
   { image: person3 },
   { image: person4 },
];

const CardsBlock = ({
   data,
   selectedValue,
   setSelectedValue,
   searchValue,
   setSearchValue,
}: any) => {
   const [isOpen, setIsOpen] = useState(false);
   const [isError, setIsError] = useState(false);
   const selectRef = useOutsideClick(() => setIsOpen(false));

   let cx = classNames;
   const arrowClasses = cx({
      select__arrow: true,
      select__arrow_active: isOpen,
   });

   const selectClasses = cx({
      select: true,
      _active: isOpen,
      _error: isError,
   });

   return (
      <Container
         sx={{
            zIndex: 600,
            position: "relative",
            marginBottom: "80px",
         }}>
         <Box
            sx={{
               display: "flex",
               alignItems: "center",
            }}
            className={"animate__fadeInUp animate__animated wow"}>
            <Input
               sx={{
                  label: {
                     color: "white",
                     paddingLeft: "16px",
                  },
               }}
               value={searchValue}
               handleChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSearchValue(e.target.value)
               }
               title={"Имя"}
               placehold={""}
            />
            <div
               className="selectWrap"
               style={{
                  width: "213px",
               }}>
               <div className={selectClasses} ref={selectRef}>
                  <div
                     className="select__header"
                     onClick={() => setIsOpen((prev) => !prev)}>
                     <span>{selectedValue ? selectedValue : "Роль"}</span>
                     <img
                        src={arrow}
                        alt="Выберите инструмент"
                        className={arrowClasses}
                     />
                  </div>
                  <div
                     className={`listWrap ${isOpen ? "listWrap_active" : ""}`}>
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
                                    selectedValue?.toLocaleLowerCase()
                                 ) {
                                    setSelectedValue(item);
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
         <Grid
            container
            sx={{
               marginTop: "72px",
            }}>
            {data?.map((item, index) => (
               <Grid
                  key={data.name}
                  item
                  lg={3}
                  md={3}
                  sm={6}
                  xs={6}
                  sx={{
                     display: "flex",
                     justifyContent: "center",
                  }}>
                  <PeopleCard person={item} />
               </Grid>
            ))}
         </Grid>
      </Container>
   );
};

export default CardsBlock;
