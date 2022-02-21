import {Alert, IconButton, Paper, Snackbar, Stack} from '@mui/material';
import React, {ChangeEvent, useState} from 'react';
import {SettingsType} from '../App';
import Button from './Button';
import {Help} from './Help';
import Input from './Input';
import s from './SettingsBox.module.css'
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

type SettingsPropsType = {
    settings: SettingsType
    disabled: boolean
    settingsSet: (setingsCallback: SettingsType) => void
    setCount: (min: number) => void
    language: string
    setLanguage: (language: string) => void
}

export const SettingsBox = (props: SettingsPropsType) => {
    const [localSettings, setLocalSettings] = useState<SettingsType>({
        min: props.settings.min,
        max: props.settings.max,
        step: props.settings.step,
    })
    const [visibleHelp, setVisibleHelp] = useState(false)
    const [visibleSettings, setVisibleSettings] = useState(false)

    const onClickHandler = () => {
        props.settingsSet(localSettings)
        props.setCount(localSettings.min)
    }
    const onChangeHandlerMin = (eValue: number) => {
        (eValue < localSettings.max) && (eValue <= localSettings.max - localSettings.step) ?
            setLocalSettings({...localSettings, min: eValue}) :
            setLocalSettings({...localSettings})
    }
    const onChangeHandlerMax = (eValue: number) => {
        (eValue > localSettings.min) && (eValue >= localSettings.min + localSettings.step) ?
            setLocalSettings({...localSettings, max: eValue}) :
            setLocalSettings({...localSettings})
    }
    const onClickHandlerStep = (eValue: number) => {
        (eValue >= 0) && (eValue <= localSettings.max - localSettings.min) ?
            setLocalSettings({...localSettings, step: eValue}) :
            setLocalSettings({...localSettings})
    }
    const onClickSettingsHelp = () => {
        setVisibleHelp(!visibleHelp)
        setVisibleSettings(false)
    }
    const onClickSettingsSettings = () => {
        setVisibleSettings(!visibleSettings)
        setVisibleHelp(false)
    }
    const onClickHandlerChangeLang = () => {
        props.setLanguage(props.language==="ENG" ? "RUS" : "ENG" )
    }
    return (
        <div>
            <IconButton onClick={onClickSettingsSettings}><SettingsIcon/></IconButton>
            <IconButton onClick={onClickSettingsHelp}><HelpIcon/></IconButton>
            <IconButton onClick={onClickHandlerChangeLang} style={{fontSize: '0.3em'}}><LanguageOutlinedIcon/>{props.language}</IconButton>
            {visibleSettings &&
                <>
                    <h3>{(props.language === "ENG") ? "Settings" : "Настройки"}</h3>
                    <span>{(props.language === "ENG") ? "Set maximum value" : "Установить максимальное значение"}</span>
                    <Input type="number" value={localSettings.max} onChange={onChangeHandlerMax}
                           step={localSettings.step}/>
                    <span> {(props.language === "ENG") ? "Set minimum value" : "Установите минимальное значение"}</span>
                    <Input type="number" value={localSettings.min} onChange={onChangeHandlerMin}
                           step={localSettings.step}/>
                    <span> {(props.language === "ENG") ? "Set step" : "Установить шаг"} </span>
                    <Input type="number" value={localSettings.step} onChange={onClickHandlerStep}/>
                    <Button name={(props.language === "ENG") ? "SET" : "Установить"}
                            disabled={props.disabled}
                            callBack={onClickHandler}/>
                </>}

            {visibleHelp && <Help language={props.language}/>}

        </div>
    );
};