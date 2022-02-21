import React from 'react';


export const Help = () => {
    return (
        <div>
            <h3>Help</h3>
            <ul>
                <li>The minimum value cannot be greater than the maximum value</li>
                <li>The step value cannot be greater than the difference between the maximum and minimum values</li>
                <li>The value of the maximum and minimum must differ by the step size</li>
            </ul>
        </div>
    );
};
//Минимальное значение не может быть больше максимального значения
//Значение шага не может быть больше разности максимального и минимального значения
//Значение максимума и минима должны отличаться на величину шага