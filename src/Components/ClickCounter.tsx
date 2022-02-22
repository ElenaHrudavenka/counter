import { Button } from '@mui/material';
import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DoDisturbOnOutlinedIcon from '@mui/icons-material/DoDisturbOnOutlined';

type ClickCounterPropsType = {
    incClick: ()=>void
    resetClick: ()=>void
    count: number
    inputMax: boolean
    disabledInc: boolean
    disabledReset: boolean
    language: string
}

const ClickCounter = (props:ClickCounterPropsType) => {
    return (
        <div className="Click-counter">
            <h3>{(props.language === "ENG") ? "ClickCounter" : "Счетчик"}</h3>
            <input className={props.inputMax ? "input-max" : "input"} type="text" value={props.count}/>
            <div>
                <Button startIcon={<AddCircleOutlineIcon />}
                        size="large"
                        onClick={props.incClick}
                        disabled={props.disabledInc}>{(props.language === "ENG") ?'inc' : 'увел'} </Button>
                <Button endIcon={<DoDisturbOnOutlinedIcon />}
                        size="large"
                        onClick={props.resetClick}
                        disabled={props.disabledReset}>{(props.language === "ENG") ? 'reset' : 'сброс'} </Button>
            </div>
        </div>
    );
};

export default ClickCounter;