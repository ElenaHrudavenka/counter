import React, {ChangeEvent} from 'react';

type InputPropsType = {
    type: string,
    value: number,
    onChange: (eValue: number) => void,
    step?: number
}

const Input = (props: InputPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(Number(e.currentTarget.value))
        console.log(e.currentTarget.value)
    }
    return (
        <div>
            <input type={props.type} onChange={onChangeHandler} value={props.value} step={props.step}/>
        </div>
    );
};

export default Input;