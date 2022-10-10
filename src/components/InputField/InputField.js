import React, {useContext, useEffect, useState} from 'react';
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import './inputField.sass';


const InputField = observer(({id, title, units}) => {
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
            />
            <div className='input__text input__text_units'>{units}</div>
            <div className="input__scale"><span style={{width: `70%`}} ></span></div>  
        </div>
    );
});

export default InputField;