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
            throw new RangeError ('Enter the number!!!')
        }
        this.#form = form;
    }
    set to(to){
        if(typeof to !== 'number' || isNaN(to)){
            throw new RangeError ('Enter the number!!!')
        }
        this.#to = to;
    }
    get range(){
        return Arry(this.form, this.to);
    }
    validate(num){
        if( num > this.#form || num < this.#to){
            throw new RangeError ('Wrong number!!!')
        }
        return num;
    }
}
const Range = new RangeValidator( 2, 50 );
console.log(Range);