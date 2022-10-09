import React, {useState} from 'react';
import './inputField.sass';

//${value}

const InputField = ({id, title, current, units}) => {
    const [value, setValue] = useState(0);

    return (
        <div className='input' id={id}>
            <div className='input__title'>{title}</div>
            <input
                type="text"
                className="input__text input__text_value"
                placeholder={current}
            />
            <div className='input__text input__text_units'>{units}</div>
            <div className="input__scale"><span style={{width: `70%`}} ></span></div>  
        </div>
    );
};

export default InputField;