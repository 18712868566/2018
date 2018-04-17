'use strict'
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
}

var num = factorial(5);

console.log(num);//120

// 在严格模式下 脚本不能访问 ， arguments.callee, 访问这个属性会导致错误

// 可以使用命名函数表达式来达成相同的效果



