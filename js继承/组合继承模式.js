// 组合继承也叫经典继承
// 组合继承模式 = 原型链 + 借用构造函数

/**
 * 使用原型链实现对原型属性和方法的继承,而通过借用构造函数来实现对实例属性的继承
*/

function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'pink'];
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
    // return this.name;
}

function SubType(name, age) {
    SuperType.call(this, name); //继承实例属性
    // SuperType.apply(this, arguments);

    this.age = age;
}

SubType.prototype = new SuperType();    //继承方法
SubType.prototype.constructor = SubType; //构造函数回指
console.log('构造函数:' + SubType.prototype.constructor)

SubType.prototype.sayAge = function () {
    console.log(this.age);
    // return this.age;
}


var instance = new SubType('李学峰', '27');
instance.colors.push('green');

console.log(instance.name)
console.log(instance.age)
console.log(instance.colors)
console.log(instance.sayName())
console.log(instance.sayAge())



var instance2 = new SubType('何晴', '26');

instance2.colors.push('orange');

console.log(instance2.name)
console.log(instance2.age)
console.log(instance2.colors)
console.log(instance2.sayName())
console.log(instance2.sayAge())

