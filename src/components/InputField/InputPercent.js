import React, {useContext, useEffect, useState} from 'react';
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import Range from "../Range/Range";

import './inputField.sass';


const InputPercent = observer(({id, title, initPay, disabled}) => {
    const {input} = useContext(Context);
    const [value, setValue] = useState(input.initial);
    const [range, setRange] = useState(100);

    useEffect(() => {
        input.setInitial(value); 
        setRange(range)       
    }, [value]);
    // console.log(value);

    // const handleChange = (e) => {
    //     setValue(e.target.value);
    // };
    

    return (
        <div className='input' id={id}>
            <div className='input__title'>{title}</div>
            <input
                type="number"
                className="input__text input__text_value"
                placeholder={initPay}
                readOnly
                disabled={disabled}
            />
            <input 
                type="number"
                className="input__text input__text_percent"                
                value={value}
                onChange={e => setValue(e.target.value)}
                disabled={disabled}
            /><span className="input__text input__text_percent input__text_unit">%</span>
            <Range
                value={value}
                handleChange={e => setValue(e.target.value)}
                min={10}
                max={60}
                step={1}
                progress={value / 60 * 100}
                disabled={disabled}
            />
        </div>
    );
});

export default InputPercent;