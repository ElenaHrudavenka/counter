import React, {ChangeEvent, useState} from 'react';
import { SettingsType } from '../App';
import Button from './Button';

type SettingsPropsType = {
    settings: SettingsType
    disabled: boolean
}

const SettingsBox = (props: SettingsPropsType) => {
    const [localSettings, setLocalSettings] = useState<SettingsType>(props.settings)
    const onClickHandler = () => {

    }
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {

    }
    return (
        <div>
            <h3>Settings</h3>
            <input type="number" value={props.settings.setMin} onChange={onChangeHandler}/>
            <input type="number" value={props.settings.setMax}/>
            <input value={props.settings.setStep}/>
            {/*прикрутить файл настройки*/}
            <Button name="SET" disabled={props.disabled} callBack={onClickHandler}/>
        </div>
    );
};

export default SettingsBox;