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
    switch
    return isBoolean(!value);
}

//isEven function
function isEven(value){
    //value = value % 2;
    return (value % 2 == true);
}

//or function
function or(value){
    if (value = true || false){
        return true;
    }
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
//concat function
function concat(){
    /* should return "helloworld" when passed "hello" and "world" as the two inputs.
should return a string when passed to strings
should return "42" when passed the number 4 and 2, treating each input as a string
should return "truetrue" when passed true and true
should return "Codeup" when passed "Code" and "up" as the two inputs
should be a defined function*/

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
    return value1==value2
}