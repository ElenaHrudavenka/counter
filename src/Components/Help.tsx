import React from 'react';

type HelpPropsType = {
    language: string
}

export const Help = (props: HelpPropsType) => {
    return (
        <div>
            {props.language === "ENG" ?
            <>
                <h3>Help</h3>
                <ul>
                    <li>The minimum value cannot be greater than the maximum value</li>
                    <li>The step value cannot be greater than the difference between the maximum and minimum values</li>
                    <li>The value of the maximum and minimum must differ by the step size</li>
                </ul>
            </>
            :
            <>
                <h3>Помощь</h3>
                <ul>
                    <li>Минимальное значение не может быть больше максимального значения</li>
                    <li>Значение шага не может быть больше разности максимального и минимального значения</li>
                    <li>Значение максимума и минима должны отличаться на величину шага</li>
                </ul>
            </>}
        </div>
    );
};
