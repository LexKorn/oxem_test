import React, {useState} from 'react';
import './inputField.sass';

//${value}

const InputField = ({title, units, id}) => {
    const [value, setValue] = useState(0);

    return (
        <div className='input' id={id}>
            <div className='input__title'>{title} Стоимость автомобиля</div>
            <input
                type="text"
                className="input__text input__text_value"
                placeholder="3300000" 
            />
            <div className='input__text input__text_units'>{units} ₽</div>
            <div class="input__scale"><span style={{width: `70%`}} ></span></div>  
        </div>
    );
};

export default InputField;