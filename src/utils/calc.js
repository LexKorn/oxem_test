export const calcMonthPay = (price, initial, months, percent) => {
    const monthPay = Math.round((price - initial) * ((percent * Math.pow((1 + percent), months)) / (Math.pow((1 + percent), months) - 1)));
    const totalSum = initial + months * monthPay;
    const result = {monthPay, totalSum};

    return result;
};