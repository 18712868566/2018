function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

var num = factorial(10);
console.log(num);      // 3628800

var num2 = factorial;
factorial = null;
console.log(factorial == null)

console.log(num2(4))


