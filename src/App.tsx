import {Paper} from '@mui/material';
import React, {useState} from 'react';
import './App.css';
import ClickCounter from "./Components/ClickCounter";
import {SettingsBox} from './Components/SettingsBox';

export type SettingsType = {
    min: number,
    max: number,
    step: number,
}

function App() {
    //BLL:
    //const [counter, setCounter] = useState()
    const [count, setCount] = useState<number>(0)
    const [inputMax, setInputMax] = useState<boolean>(false)
    const [disabledInc, setDisabledInc] = useState<boolean>(false)
    const [disabledReset, setDisabledReset] = useState<boolean>(true)
    const [settings, setSettings] = useState<SettingsType>({min: 0, max: 5, step: 1})
    const [language, setLanguage] = useState("ENG")
    const incClick = () => {
        if (count + settings.step > settings.max - settings.step) {
            setDisabledReset(false)
            setInputMax(true)
            setDisabledInc(true)
            setCount(count + settings.step)
        } else if (count === settings.min) {
            setCount(count + settings.step)
            setInputMax((count <= settings.max - settings.step) ? false : true)
            setDisabledReset(false)
        } else {
            setCount(count + settings.step)
            setInputMax((count <= settings.max - settings.step) ? false : true)
        }
    }
    const resetClick = () => {
        if (count > settings.max - settings.step) {
            setDisabledInc(false)
            setDisabledReset(true)
            setInputMax(false)
            return setCount(settings.min)
        } else if (count === settings.min + settings.step) {
            setDisabledReset(true)
            setCount(count - settings.step)
        }
        if (count > settings.min) {
            setCount(count - settings.step)
        }

    }
    const settingsSet = (settingsCallback: SettingsType) => {
        setSettings(settingsCallback)
    }

    return (
        <div className="App">
            <ClickCounter
                incClick={incClick}
                count={count}
                resetClick={resetClick}
                inputMax={inputMax}
                disabledInc={disabledInc}
                disabledReset={disabledReset}
                language={language}
            />
            <Paper className="Paper">
                <SettingsBox settings={settings}
                             disabled={false}
                             settingsSet={settingsSet}
                             setCount={setCount}
                             language={language}
                             setLanguage={setLanguage}
                />
            </Paper>

        </div>
    );
}

export default App;
