import React, {ChangeEvent, useState} from 'react';
import {SettingsType} from '../App';
import Button from './Button';
import Input from './Input';

type SettingsPropsType = {
    settings: SettingsType
    disabled: boolean
}

const SettingsBox = (props: SettingsPropsType) => {
    const [localSettings, setLocalSettings] = useState<SettingsType>({
        setMin: props.settings.setMin,
        setMax: props.settings.setMax,
        setStep: props.settings.setStep,
    })
    const onClickHandler = () => {

    }

    const onChangeHandlerMin = (eValue: number) => {
        eValue<localSettings.setMax && setLocalSettings({...localSettings, setMin: eValue})
    }
    const onChangeHandlerMax = (eValue:number) => {
        eValue>localSettings.setMin ? setLocalSettings({...localSettings, setMax:eValue}) : alert("Errror")
    }
    const onClickHandlerStep = (eValue: number) => {
        eValue>=0 && setLocalSettings({...localSettings, setStep:eValue})
    }
    const onFocusSettings = () => {
        
    }

    return (
        <div>
            <h3>Settings</h3>
            <span>Set maximum value</span>
            <Input type="number" value={localSettings.setMax} onChange={onChangeHandlerMax} step={localSettings.setStep}/>
            <span> Set minimum value</span>
            <Input type="number" value={localSettings.setMin} onChange={onChangeHandlerMin} step={localSettings.setStep}/>
            <span>Set step</span>
            <Input type = "number" value={localSettings.setStep} onChange={onClickHandlerStep}/>
            {/*прикрутить файл настройки*/}
            <Button name="SET" disabled={props.disabled} callBack={onClickHandler}/> <span onFocus={onFocusSettings}>?</span>
        </div>
    );
};

export default SettingsBox;