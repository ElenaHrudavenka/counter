import React, {useState} from 'react';
import './App.css';
import ClickCounter from "./Components/ClickCounter";
import SettingsBox from './Components/SettingsBox';

export type SettingsType = {
    setMin: number,
    setMax: number,
    setStep: number,
}

function App() {
    //BLL:
    //const [counter, setCounter] = useState()
    const [count, setCount] = useState<number>(0)
    const [inputMax, setInputMax] = useState<boolean>(false)
    const [disabledInc, setDisabledInc] = useState<boolean>(false)
    const [disabledReset, setDisabledReset] = useState<boolean>(true)
    const [settings, setSettings] = useState<SettingsType>({setMin: 0, setMax: 1, setStep: 1})
    const incClick = () => {
        if (count === settings.setMin && count <= settings.setMax - settings.setStep) {
            setDisabledReset(false)
            setCount(count + settings.setStep)
            console.log(settings.setMax - settings.setStep)
        } else if (count <= settings.setMax - 2 * settings.setStep) {
            setCount(count + settings.setStep)
            console.log(settings.setMax - settings.setStep)
        } else {
            //alert("Достигнуто максимальное значение")
            setInputMax(true)
            setDisabledInc(true)
            setCount(count + settings.setStep)
            console.log("3")
        }
    }
    const resetClick = () => {
        if (count >= settings.setMax - settings.setStep) {
            setDisabledInc(false)
            setDisabledReset(true)
            setInputMax(false)
            return setCount(settings.setMin)
        } else if (count === settings.setMin + settings.setStep) {
            setDisabledReset(true)
            setCount(count - settings.setStep)
        }
        if (count > settings.setMin) {
            setCount(count - settings.setStep)
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
            />
            <SettingsBox settings={settings}
                         disabled={false}
                         settingsSet={settingsSet}
                         setCount={setCount}
            />
        </div>
    );
}

export default App;
