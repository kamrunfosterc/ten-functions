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

//******** ******** ******** FINISHED ******** ******** ********

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
    var value_A = ((value % 2) === 0);
    return value_A;
}

//or function DONE
function or(opt1, opt2){
    return opt1 || opt2;
}

// not function
function not(value){
    return !value;
}

//isIdentical function DONE
function isIdentical(par1, par2){
    return par1 === par2;
}

//and function NO
function and(x_1, x_2){
    return x_1 && x_2;
}