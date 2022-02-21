import React from 'react';
import Button from "./Button";

type ClickCounterPropsType = {
    incClick: ()=>void
    resetClick: ()=>void
    count: number
    inputMax: boolean
    disabledInc: boolean
    disabledReset: boolean
}

const ClickCounter = (props:ClickCounterPropsType) => {
    return (
        <div className="Click-counter">
            <h3>ClickCounter</h3>
            <input className={props.inputMax ? "input-max" : "input"} type="number" value={props.count}/>
            <div>
                <Button name={'inc'} callBack={props.incClick} disabled={props.disabledInc} />
                <Button name={'reset'} callBack={props.resetClick} disabled={props.disabledReset} />
            </div>
        </div>
    );
};

export default ClickCounter;