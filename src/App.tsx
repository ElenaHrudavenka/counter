import React, {useState} from 'react';
import './App.css';
import ClickCounter from "./Components/ClickCounter";

function App() {
    //BLL:
    const [count, setCount] = useState(0)
    const [inputMax, setInputMax] = useState(false)
    const [disabledInc, setDisabledInc] = useState(false)
    const [disabledReset, setDisabledReset] = useState(true)

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
        if(count === 5) {
            setDisabledInc(false)
            setDisabledReset(true)
            setInputMax(false)
            return setCount(0)
        } else if (count === 1) {
            setDisabledReset(true)
            setCount(count - 1)
        }
        if (count > 0)  {
            //alert(count+1)
            setCount(count - 1)
        }

    }

    return (
        <div className="App">
            <ClickCounter
                incClick={incClick}
                count={count}
                resetClick={resetClick}
                inputMax = {inputMax}
                disabledInc = {disabledInc}
                disabledReset = {disabledReset}
            />
        </div>

    );
}

export default App;
