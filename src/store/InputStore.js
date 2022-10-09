import {makeAutoObservable} from 'mobx';

export default class InputStore {
    constructor() {
       this._price = 1000000;
       this._initial = 10;
       this._months = 1;
       this._totalSum = 1035000;
       this._monthPay = 1034990;

       makeAutoObservable(this); 
    };

    setPrice(price) {
        this._price = price;
    };
    setInitial(initial) {
        this._initial = initial;
    };
    setMonths(months) {
        this._months = months;
    };
    setTotalSum(totalSum) {
        this._totalSum = totalSum;
    };
    setMonthPay(monthPay) {
        this._monthPay = monthPay;
    };


    get price() {
        return this._price;
    };
    get initial() {
        return this._initial;
    };
    get months() {
        return this._months;
    };
    get totalSum() {
        return this._totalSum;
    };
    get monthPay() {
        return this._monthPay;
    };
}