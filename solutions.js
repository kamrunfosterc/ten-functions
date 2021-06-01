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
 * isTrue CHECK
 * isFalse CHECK
 * not
 * addOne CHECK
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
// isTrue function
function isTrue(value){
    return value === true;
}
// isFalse function
function isFalse(value){
    return value === false;
}
// not function
function not(value){
    return isTrue(value) === "";
}
//addOne function
function addOne(value){
    return Number(value) + 1;
}
//isEven function
function isEven(value){
    //value = value % 2;
    return (value % 2 == true);
}
//isEqual function
function isEqual(){
    /* should return a boolean value
should be a defined function
should return true when passed 2 and "2" as inputs since they are equal in value
should return false when passed "java" and "javascript" as inputs, since they are not equal in value
should return false when passed -4 and 5 as inputs
should return true when passed "3.6" and 3.6 as inputs, since they have the same value
should return true when passed true and 1, since == performs type coersion
should return true when passed 0 and false, since == performs type coersion*/
}
//or function
function or(value){
    if (true || false){
        return true;
    }
}

//and function
function and(){
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