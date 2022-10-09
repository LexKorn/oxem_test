import React, {useContext} from 'react';
import { observer } from "mobx-react-lite";

import Form from './components/Form/Form';
import { Context } from "./index";
import {calcMonthPay} from './utils/calc';


const App = observer(() => {
  const {input} = useContext(Context);
  // console.log(input.totalSum);
  // console.log(calcMonthPay(input.price, input.initial, input.months, 0.035));

  return (
    <div>
      <Form />
    </div>
  );
});

export default App;