import React from 'react';

import './range.sass';

const Range = ({ value, handleChange, min, max, step, progress, disabled }) => {
    return (
      <div>
        <div className='range'>
          <input
            className='range__slider'
            type="range"
            defaultValue={value}
            onChange={handleChange}
            min={min}
            max={max}
            step={step}
            disabled={disabled}
          />
        </div>
        <div className="range__scale"><span style={{width: `${progress}%`}} ></span></div>
      </div>        
      );
};

export default Range;