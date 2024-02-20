import React from 'react';
import InputMask from 'react-input-mask'
const PhoneMask = (props) => {
    return (
        <InputMask
            {...props}
            mask="+7 (999) 999-99-99"
            maskChar={null}
        />
    );
};

export default PhoneMask;
