import React, {useContext, useEffect, useState} from 'react';
import { observer } from "mobx-react-lite";

import InputField from '../InputField/InputField';
import OutputField from '../OutputField/OutputField';
import { Context } from "../../index";
import {calcMonthPay} from '../../utils/calc';

import './form.sass';


const Form = observer(() => {
    const {input} = useContext(Context);
    const [totalSum, setTotalSum] = useState(input.totalSum);
    const [monthPay, setMonthPay] = useState(input.monthPay);

    useEffect(() => {
        const res = calcMonthPay(input.price, input.initial, input.months, 0.035);
        setTotalSum(res.totalSum);
        setMonthPay(res.monthPay);
    }, [input]);

    const convertNum = (num) => {
        return new Intl.NumberFormat('ru-RU').format(num);
    };

    const initPay = input.price * input.initial / 100;

    return (
        <div className='form'>
            <div>
                <h1 className='form__title'>Рассчитайте стоимость автомобиля в лизинг</h1>
                <div className='form__wrapper'>
                    <InputField id="first" title="Стоимость автомобиля" current={convertNum(input.price)} units="₽" />
                    <InputField id="second" title="Первоначальный взнос" current={convertNum(initPay)} units={input.initial}/>
                    <InputField id="third" title="Срок лизинга" current={input.months} units="мес."/>
                    <OutputField title="Сумма договора лизинга" result={convertNum(totalSum)} />
                    <OutputField title="Ежемесячный платеж от" result={convertNum(monthPay)} />
                    <button className='form__button'>Оставить заявку</button>
                </div>   
            </div>                     
        </div>
    );
});

export default Form;