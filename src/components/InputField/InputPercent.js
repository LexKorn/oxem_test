import React, {useContext, useEffect, useState} from 'react';
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import './inputField.sass';


const InputPercent = observer(({id, title, initPay}) => {
    const {input} = useContext(Context);
    const [value, setValue] = useState(input.initial);

    useEffect(() => {
        input.setInitial(value);        
    }, [value]);

    // useEffect(() => {
    //     if (value < 10) {
    //         setValue(10);
    //     } else if (value > 60) {
    //         setValue(60);
    //     } 
    //     input.setInitial(value);     
    // }, [value]);
    
    // useEffect(() => {
    //     if (value < 10) {
    //         input.setInitial(10); 
    //     } else if (value > 60) {
    //         input.setInitial(60); 
    //     } else {
    //         input.setInitial(value); 
    //     }            
    // }, [value]);
    

    return (
        <div className='input' id={id}>
            <div className='input__title'>{title}</div>
            <input
                type="number"
                className="input__text input__text_value"
                placeholder={initPay}
                readOnly
            />
            <input 
                type="number"
                className="input__text input__text_percent"                
                value={value}
                onChange={e => setValue(e.target.value)}
            /><span className="input__text input__text_percent input__text_unit">%</span>
            <div className="input__scale"><span style={{width: `${value}%`}} ></span></div>  
            {/* <div className="slider" id='slider'>
                <output for="fader" id="volume">0</output>
                <input type="range" id="fader" min="0" max="600" value="0" step="1" onInputCapture={outputUpdate(value)} />
            </div> */}
        </div>
    );
});

export default InputPercent;