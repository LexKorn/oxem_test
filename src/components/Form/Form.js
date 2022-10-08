import React from 'react';

import InputField from '../InputField/InputField';
import OutputField from '../OutputField/OutputField';

import './form.sass';


const Form = () => {
    return (
        <div className='form'>
            <h1 className='form__title'>Рассчитайте стоимость автомобиля в лизинг</h1>
            <div className='form__wrapper'>
                <InputField id="first" />
                <InputField id="second"/>
                <InputField id="third"/>
                <OutputField />
                <OutputField />
                <button className='form__button'>Оставить заявку</button>
            </div>            
        </div>
    );
};

export default Form;