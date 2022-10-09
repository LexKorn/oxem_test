import React from 'react';

import InputField from '../InputField/InputField';
import OutputField from '../OutputField/OutputField';

import './form.sass';


const Form = () => {
    return (
        <div className='form'>
            <div>
                <h1 className='form__title'>Рассчитайте стоимость автомобиля в лизинг</h1>
                <div className='form__wrapper'>
                    <InputField id="first" title="Стоимость автомобиля" current="3 300 000" units="₽" />
                    <InputField id="second" title="Первоначальный взнос" current="420 000" units="13%"/>
                    <InputField id="third" title="Срок лизинга" current="60" units="мес."/>
                    <OutputField title="Сумма договора лизинга" result="4 467 313" />
                    <OutputField title="Ежемесячный платеж от" result="114 455" />
                    <button className='form__button'>Оставить заявку</button>
                </div>   
            </div>                     
        </div>
    );
};

export default Form;