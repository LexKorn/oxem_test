import React from 'react';
import './outputField.sass';

const OutputField = ({title, result}) => {
    return (
        <div className='output'>
            <div className='output__title'>{title} Сумма договора лизинга</div>
            <div className='output__result'>{result} 4467313 ₽</div>
        </div>
    );
};

export default OutputField;