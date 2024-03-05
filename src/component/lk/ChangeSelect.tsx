import React, {useState} from 'react';
import {rolesTarget} from "../../handlers/rolesTarget";
import {Box} from "@mui/material";
const roles = ["Гитарист", "Вокалист", "Барабанщик", "Басист"];
const ChangeSelect = (props) => {
    let {inputStyle, basicInput, formState, handleChange} = props
    const handleOptionChange = (event) => {
        localStorage.setItem('role', rolesTarget(formState?.role))
    }
    return (
        <div className={'custom-select'}>
            <Box sx={{
                ...inputStyle,
                ...basicInput,

                '&::-ms-expand': {
                    color: 'black',
                    background: 'red'
                }
            }} onchange={event => handleOptionChange(event)} component={'select'} name={'role'} id="roleSelect" value={formState?.role} onChange={handleChange}>
                <option style={{color: 'black'}} value=''>{rolesTarget(formState?.role)}</option>
                {roles.filter(item => item !== rolesTarget(formState?.role)).map(item =>  (
                    <option key={item}  style={{color: 'black'}} value={item}>{item}</option> ))}
            </Box>
        </div>
    );
};

export default ChangeSelect;
