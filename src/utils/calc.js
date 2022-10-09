let price = 1000000;
let initial = 10;
let months = 1;
let percent = 0.035;

function calcMonthPay (price, initial, months, percent) {
    const monthPay = Math.round((price - initial) * ((percent * Math.pow((1 + percent), months)) / (Math.pow((1 + percent), months) - 1)));
    const totalSum = initial + months * monthPay;
    const result = {monthPay, totalSum};

    return result;
}

console.log(calcMonthPay(price, initial, months, percent));