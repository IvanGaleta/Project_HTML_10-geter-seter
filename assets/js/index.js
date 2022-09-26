'use strict';


class RangeValidator{
    #form;
    #to;
    constructor(form, to ){
        this.form = form;
        this.to = to;
}
    get form(){
    return this.#form;
}
    get to(){
        return  this.#to;
    }
    set form(form){
        if (typeof form !== 'number' || isNaN(form)){
            throw RangeError ('Enter the number!!!')
        }
        this.#form = form;
    }
    set to(to){
        if(typeof to !== 'number' || isNaN(to)){
            throw RangeError ('Enter the number!!!')
        }
        this.#to = to;
    }
    get range(){
        return [this.#form, this.#to];
    }
    validate(num){
        if(typeof num !== 'number' || isNaN(num)){
            throw RangeError ('Enter the number!!!')
        }
        if( num > this.#form || num < this.#to){
            throw RangeError ('Wrong number!!!')
        }
        return num;
    }
}
const Range = new RangeValidator( 5, 50 );
console.log(Range);