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

    setTypes(types) {
        this._types = types;
    };

    setBrands(brands) {
        this._brands = brands;
    };

    setDevices(devices) {
        this._devices = devices;
    };

    setSelectedType(type) {
        this.setPage(1);
        this._selectedType = type;
    };

    setSelectedBrand(brand) {
        this.setPage(1);
        this._selectedBrand = brand;
    };

    setPage(page) {
        this._page = page;
    };

    setTotalCount(count) {
        this._totalCount = count;
    };


    get types() {
        return this._types;
    };

    get brands() {
        return this._brands;
    };

    get devices() {
        return this._devices;
    };

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }

    get page() {
        return this._page;
    };

    get totalCount() {
        return this._totalCount;
    }

    get limit() {
        return this._limit;
    }
};