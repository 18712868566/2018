'use strict'
var factorial = (function f(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * f(num - 1);
    }
})

var num = factorial(5);
console.log(num);