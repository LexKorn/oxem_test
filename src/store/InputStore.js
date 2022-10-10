import {makeAutoObservable} from 'mobx';

export default class InputStore {
    constructor() {
       this._price = 3300000;
       this._initial = 13;
       this._months = 60;

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


    get price() {
        return this._price;
    };
    get initial() {
        return this._initial;
    };
    get months() {
        return this._months;
    };
}