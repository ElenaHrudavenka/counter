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

type SettingsPropsType = {
    settings: SettingsType
    disabled: boolean
    settingsSet: (setingsCallback: SettingsType) => void
    setCount: (setMin: number) => void
}

export const SettingsBox = (props: SettingsPropsType) => {
    const [localSettings, setLocalSettings] = useState<SettingsType>({
        setMin: props.settings.setMin,
        setMax: props.settings.setMax,
        setStep: props.settings.setStep,
    })
    const [visibleHelp, setVisibleHelp] = useState(false)
    const [visibleSettings, setVisibleSettings] = useState(false)
    const onClickHandler = () => {
        props.settingsSet(localSettings)
        props.setCount(localSettings.setMin)
    }

    const onChangeHandlerMin = (eValue: number) => {
        (eValue < localSettings.setMax) &&
        (eValue <= localSettings.setMax - localSettings.setStep) &&
        setLocalSettings({...localSettings, setMin: eValue})
    }
    const onChangeHandlerMax = (eValue: number) => {
        (eValue > localSettings.setMin) &&
        (eValue >= localSettings.setMin + localSettings.setStep) &&
        setLocalSettings({...localSettings, setMax: eValue})
    }
    const onClickHandlerStep = (eValue: number) => {
        (eValue >= 0) &&
        (eValue <= localSettings.setMax - localSettings.setMin) &&
        setLocalSettings({...localSettings, setStep: eValue})
    }
    const onClickSettingsHelp = () => {
        setVisibleHelp(!visibleHelp)
        setVisibleSettings(false)
    }
    const onClickSettingsSettings = () => {
        setVisibleSettings(!visibleSettings)
        setVisibleHelp(false)
    }
    return (
        <div>
            <IconButton onClick={onClickSettingsSettings}><SettingsIcon/></IconButton>
            <IconButton onClick={onClickSettingsHelp}><HelpIcon/></IconButton>
            {visibleSettings &&
                <>
                    <h3>Settings</h3>
                    <span>Set maximum value</span>
                    <Input type="number" value={localSettings.setMax} onChange={onChangeHandlerMax}
                           step={localSettings.setStep}/>
                    <span> Set minimum value</span>
                    <Input type="number" value={localSettings.setMin} onChange={onChangeHandlerMin}
                           step={localSettings.setStep}/>
                    <span>Set step</span>
                    <Input type="number" value={localSettings.setStep} onChange={onClickHandlerStep}/>
                    <Button name="SET" disabled={props.disabled} callBack={onClickHandler}/>
                </>}

            {visibleHelp && <Help/>}

        </div>
    );
};