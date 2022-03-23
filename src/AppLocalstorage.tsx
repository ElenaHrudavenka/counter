import React, {useState, useEffect}  from 'react';


const AppLocalstorage = () => {
    const [value, setValue] = useState<number>(0)

    const getToLocalStorageHandler = () => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let valueAsNumber = JSON.parse(valueAsString)
            setValue(valueAsNumber)
        }
    }
    useEffect(getToLocalStorageHandler, [])

    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value))
/*        localStorage.setItem('counterValue + 1', JSON.stringify(value + 1))*/
    }
    useEffect(setToLocalStorageHandler, [value])

    const onClickHandler = () => {
        setValue(value+1)
    }

/*    const clearLocalStorageHandler = () => {
        localStorage.clear()
        setValue(0)
    }
    const removeItemFromLocalStorageHandler = () => {
        localStorage.removeItem('counterValue + 1')
    }*/
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={onClickHandler}>inc</button>

        </div>
    );
};

export default AppLocalstorage;