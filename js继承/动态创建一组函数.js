/* for (var index = 0; index < 10; index++) {

}

console.log(index) */


/* function fn(j) {
    console.log(j)
}
var arr = [];

for (var index = 0; index < 5; index++) {
    fn(index);
    arr.push(fn)
}

console.log(arr)
console.log(arr.length)
console.log(arr[1])
console.log(arr[0]()) */

var funs;
for (var i = 0; i < 10; i++) funs[i] = (function (i) { return function () { return i; } })(i);
for (var h = 0; h < 10; h++) console.log(funs[h]())

/*
function f(k) { return function () { return k; } }
for (var i = 0; i < 10; i++) funs[i] = f(i);

for (var i = 0; i < 10; i++) funs[i] = (function(i){ return function() { return i; } })(i);
for (var h = 0; h < 10; h++) console.log(funs[h]())

@After 先理解正确的第一步编写法

@After function() { return i; }就是返回一个函数
它是new Function()的语法糖,简写方式

所以正确的第一步想法 for (var i = 0; i < 10; i++) funs[i] = function() { return i; }
for (var h = 0; h < 10; h++) console.log(funs[h]())

然后，这样就创建了10个函数

再考虑函数中的自由变量的引用是什么值，问这样一个问题：是不是在创建函数时，就会求值变量，那么在i=1,2,3..时，是否是等于unction() { return 1 }  function() { return 2; }… 答案是不会

因为函数体中变量的值，是在 调用函数 时才会求值的
所以这10个函数的函数体都是{ return i; }，而不会分别是{ return 1; },  { return 2; }..

在求值funs[h]时，i已经是10了，所以都是return 10

这样如何解决呢，除了new Function("", "return " + i)这样的方式。我们不可能创建 return 1，return 2的函数体吗，答案是可能

这种方式就是 for (var i = 0; i < 10; i++) funs[i] = (function(i){ return function() { return i; } })(i);

这样创建的10个函数的函数体依旧都是相同的{ reutrn i; }

但是他们却有了不同的上下文

10个函数有不同的上下文，上下文就是确定变量值的地方，是一组值与名字的映射，简单理解为map：i->1, i->2, i->3…
注意，每个函数都会带有一个上下文，这个上下文就是创建该函数时扑获的
然后在函数调用时，执行函数体时，变量的值就是优先从这个上下文寻找
实际上，最优先查找的是由实际参数映射到形式参数所组成的上下文

for (var i = 0; i < 10; i++) funs[i] = (function(k){ return function() { return k; } })(i);  假设第4次循环，i等于3，这个创建了一个匿名函数，并且马上执行，它有一个形式参数k，传递给它一个实际参数i的值3，先构造一个上下文k->3，然后再执行函数体function() { return k; }，它是一个函数创建，就会捕获到k->3这个上下文，和该函数绑定起来

在执行function() { return k; }这个函数时，k就从k->3上下文里找到里k的值3
*/