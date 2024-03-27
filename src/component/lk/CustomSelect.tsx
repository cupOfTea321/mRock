import { Dispatch, SetStateAction, useState } from "react";
import arrow from "../../assets/CustomSelect/arrow.svg";

import classNames from "classnames";
import { useOutsideClick } from "../../hooks/useOutsideClick";

interface SelectProps {
   children: string;
   isOpen: boolean;
   setIsSelectOpen: Dispatch<SetStateAction<boolean>>;
   setIsSelectError?: Dispatch<SetStateAction<boolean>>;
   isError?: boolean;
}

const data = ["Вокалист", "Клавишные", "Барабаны", "Гитарист"];

const CustomSelect = ({
   children,
   isOpen,
   setIsSelectOpen,
   isError,
   setIsSelectError,
}: SelectProps) => {
   const [selectedValue, setSelectedValue] = useState<string | null>(null);
   const selectRef = useOutsideClick(() => setIsSelectOpen(false));

   ///// Определяем и классы интерактива
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
      <div className="selectWrap">
         <div className={selectClasses} ref={selectRef}>
            <div
               className="select__header"
               onClick={() => setIsSelectOpen((prev) => !prev)}>
               <span>{selectedValue ? selectedValue : children}</span>
               <img
                  src={arrow}
                  alt="Выберите инструмент"
                  className={arrowClasses}
               />
            </div>
            <div className={`listWrap ${isOpen ? "listWrap_active" : ""}`}>
               <ul className={"list"}>
                  {data.map((item) => (
                     <li
                        key={item}
                        className={"list__item"}
                        onClick={() => {
                           if (setIsSelectError) setIsSelectError(false);
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
   );
};

export default CustomSelect;
