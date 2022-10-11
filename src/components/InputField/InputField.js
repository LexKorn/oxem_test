import React, {useContext, useEffect, useState} from 'react';
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import Range from "../Range/Range";

import './inputField.sass';


const InputField = observer(({id, title, units, disabled}) => {
    const {input} = useContext(Context);
    const [value, setValue] = useState(id === "price" ? input.price : input.months);

    useEffect(() => {
        if (id === "price") {
            input.setPrice(value); 
        } else {
            input.setMonths(value); 
        }              
    }, [value]);


    return (
        <div className='input' id={id}>
            <div className='input__title'>{title}</div>
            <input
                type="number"
                className="input__text input__text_value"
                value={value}
                onChange={e => setValue(e.target.value)}
                disabled={disabled}
            />
            <div className='input__text input__text_units'>{units}</div>
            <Range
                value={value}
                handleChange={e => setValue(e.target.value)}
                min={id === "price" ? 1000000 : 1}
                max={id === "price" ? 6000000 : 60}
                step={id === "price" ? 100000 : 1}
                progress={id === "price" ? (value * 100 / 6000000) : (value * 100 / 60)}
                disabled={disabled}
            /> 
        </div>
    );
});

export default InputField;