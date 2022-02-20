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
    const [counter, setCounter] = useState(

    )
    const [count, setCount] = useState<number>(0)
    const [inputMax, setInputMax] = useState<boolean>(false)
    const [disabledInc, setDisabledInc] = useState<boolean>(false)
    const [disabledReset, setDisabledReset] = useState<boolean>(true)
    const [settings, setSettings] = useState<SettingsType>({setMin: 0, setMax: 1,setStep:1})

    const incClick = () => {
        if (count === 0) {
            setDisabledReset(false)
            setCount(count + 1)
        } else if (count < 4) {
            setCount(count + 1)
        } else {
            //alert("Достигнуто максимальное значение")
            setInputMax(true)
            setDisabledInc(true)
            setCount(count + 1)
        }
    }
    const resetClick = () => {
        if (count === 5) {
            setDisabledInc(false)
            setDisabledReset(true)
            setInputMax(false)
            return setCount(0)
        } else if (count === 1) {
            setDisabledReset(true)
            setCount(count - 1)
        }
        if (count > 0) {
            //alert(count+1)
            setCount(count - 1)
        }

    }
    const settingsSet = () => {

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
            <SettingsBox settings = {settings}
                disabled={false}/>
        </div>

    );
}

export default App;
