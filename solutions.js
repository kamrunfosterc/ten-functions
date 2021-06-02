"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * not
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
// not function
function not(value){
    var nott = "";
    /* The value passed as the first parameter is converted to a boolean value, if necessary. If the value is omitted
    or is 0, -0, null, false, NaN, undefined, or the empty string (""), the object has an initial value of false. All
     other values, including any object, an empty array ([]), or the string "false", create an object with an initial
      value of true.
    */
}



//or function DONE
function or(opt1, opt2){
    return opt1 || opt2;
}

//and function NO
function isBoolean(input){
    return typeof input == 'boolean';
    /* should return a boolean when passed two boolean values
should return "world" when passed the inputs "hello" and "world" in that order
should return false when passed true and false as the inputs
should be a defined function
should return true when passed with true and true as the inputs
should return false when passed false and false as inputs*/

}

//isIdentical function
function isIdentical(){

}
// isTrue function DONE
function isTrue(value){
    return value === true;
}
// isFalse function DONE
function isFalse(value){
    return value === false;
}
//addOne function DONE
function addOne(value){
    return Number(value) + 1;
}
//isEqual function DONE
function isEqual(value1, value2){
    return value1 == value2;
}
//concat function DONE
function concat(value1, value2){
    var value = value1.toString() + value2.toString();
    return value; //assisted
}

//isEven function DONE
function isEven(value){
    //value = value % 2;
    var value_A = value % 2 === 0;
    return value_A;
}