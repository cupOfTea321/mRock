import React from "react";
import MaskedInput from "react-text-mask";

type TextMaskCustomProps = {
    inputRef: (ref: HTMLInputElement | null) => void;
};

export const TextMaskCustom: React.FC<TextMaskCustomProps> = (props) => {
    const { inputRef, ...other } = props;

    const phoneMask = [
        "+",
        "7",
        " ",
        "(",
        /[0-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
    ];

    return (
        <MaskedInput
            {...other}
            // ref={(ref: any) => {
            //     inputRef(ref ? ref.inputElement : null);
            // }}
            mask={phoneMask}
            placeholderChar={"\u2000"}
            showMask
            guide={false}
        />
    );
};
