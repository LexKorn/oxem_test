import React, {useContext, useEffect, useState} from 'react';
import { observer } from "mobx-react-lite";

import InputField from '../InputField/InputField';
import InputPercent from '../InputField/InputPercent';
import OutputField from '../OutputField/OutputField';
import Spinner from '../Spinner/Spinner';
import { Context } from "../../index";
import {calcMonthPay} from '../../utils/calc';

import './form.sass';


const Form = observer(() => {
    const {input} = useContext(Context);
    const [totalSum, setTotalSum] = useState(input.totalSum);
    const [monthPay, setMonthPay] = useState(input.monthPay);
    const [initPay, setInitPay] = useState(0);
    const [loading, setLoading] = useState(false);
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

    const pressHandler = async () => {
        setLoading(true);

        try {
            const response = await fetch('https://hookb.in/eK160jgYJ6UlaRPldJ1P', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Origin': '*'
                },
                body: {
                    "car_coast": 4000000,
                    "initail_payment": 400000,
                    "initail_payment_percent": 10,
                    "lease_term": 24,
                    "total_sum": 5000000,
                    "monthly_payment_from": 30000
                }
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error('Что-то пошло не так');
            }

            setLoading(false);
            return alert(data.message);

        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    return (
        <div className='form'>
            <div>
                <h1 className='form__title'>Рассчитайте стоимость автомобиля в лизинг</h1>
                <div className='form__wrapper'>
                    <InputField id="price" title="Стоимость автомобиля" units="₽" disabled={loading} />
                    <InputPercent id="init" title="Первоначальный взнос" initPay={convertNum(initPay)} disabled={loading} />
                    <InputField id="months" title="Срок лизинга" units="мес." disabled={loading}/>
                    <OutputField title="Сумма договора лизинга" result={convertNum(totalSum)} />
                    <OutputField title="Ежемесячный платеж от" result={convertNum(monthPay)} />
                    <button 
                        className='form__button' 
                        onClick={pressHandler} 
                        disabled={loading}                       
                        >{loading ? <Spinner /> : 'Оставить заявку'}
                    </button>
                </div>   
            </div>                     
        </div>
    );
});

export default Form;