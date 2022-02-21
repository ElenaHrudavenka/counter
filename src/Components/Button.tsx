import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled: boolean
}
const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        // alert("+ or -")
        props.callBack()
    }
    return (
        <button onClick={onClickHandler} disabled={props.disabled}> {props.name} </button>
    );
};

export default Button;