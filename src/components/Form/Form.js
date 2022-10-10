import React, {useContext, useEffect, useState} from 'react';
import { observer } from "mobx-react-lite";

import InputField from '../InputField/InputField';
import InputPercent from '../InputField/InputPercent';
import OutputField from '../OutputField/OutputField';
import { Context } from "../../index";
import {calcMonthPay} from '../../utils/calc';

import './form.sass';


const Form = observer(() => {
    const {input} = useContext(Context);
    const [totalSum, setTotalSum] = useState(input.totalSum);
    const [monthPay, setMonthPay] = useState(input.monthPay);
    const [initPay, setInitPay] = useState(0);
    const percent = 0.035;

    useEffect(() => {
        setInitPay(input.price * input.initial / 100);
    }, [input.initial, input.price]);

    useEffect(() => {
        const res = calcMonthPay(input.price, initPay, input.months, percent);
        setTotalSum(res.totalSum);
        setMonthPay(res.monthPay);
    }, [input.price, initPay, input.months]);

    const convertNum = (num) => {
        return new Intl.NumberFormat('ru-RU').format(num);
    };   

    return (
        <div className='form'>
            <div>
                <h1 className='form__title'>Рассчитайте стоимость автомобиля в лизинг</h1>
                <div className='form__wrapper'>
                    <InputField id="price" title="Стоимость автомобиля" units="₽" />
                    <InputPercent id="init" title="Первоначальный взнос" initPay={convertNum(initPay)} />
                    <InputField id="months" title="Срок лизинга" units="мес."/>
                    <OutputField title="Сумма договора лизинга" result={convertNum(totalSum)} />
                    <OutputField title="Ежемесячный платеж от" result={convertNum(monthPay)} />
                    <button className='form__button'>Оставить заявку</button>
                </div>   
            </div>                     
        </div>
    );
});

export default Form;