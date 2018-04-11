// 寄生式继承是与原型式继承紧密相关的一种思路
// 寄生式继承的思路与寄生构造函数和工厂模式类似
// 即创建一个仅用于封装继承过程的函数
// 该函数在内部以某种方式来增强对象
// 最后在像真的是他所有所有工作一样返回对象

// 实例:
function object(o) {
    function F() { };
    F.prototype = o;
    return new F();
}

function createAnother(original) {
    var clone = object(original);
    clone.name = 'woshinidie'

    clone.sayHi = function () {
        console.log('hi')
    }
    return clone;
}

var person = {
    name: 'lixuefeng',
    age: '26',
    friends: ['red', 'pink', 'orange'],
    sayName() {
        console.log(`Hi${this.name}`)
    }
}

var lxf = createAnother(person);

lxf.sayHi();
lxf.sayName();

// person.sayHi();

/**
 * 在主要考虑对象而不是自定义类型和构造函数的情况下,寄生式继承也是一种有用的模式
 * 
 * 缺点
 *      使用寄生式继承来为对象添加函数,会由于不能做到函数复用而降低效率,这一点与构造函数模式类似
 */