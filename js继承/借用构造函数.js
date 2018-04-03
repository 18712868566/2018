// 在解决原型中包含引用累心值所带来的问题的过程中,
// 借用构造函数的技术

// 在子类型构造函数内部调用超类型构造函数
function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'pink', 'orange'];
}

SuperType.prototype.sayName = function () {
    console.log(this.name)
}
function SubType(name) {
    //继承SuperType
    SuperType.call(this, name);
}

var instance = new SubType('小红');

instance.colors.push('black');
console.log(instance.colors)
console.log(instance.name)
// console.log(instance.sayName())

var instance1 = new SubType('小明');
instance1.colors.push('李学峰');

console.log(instance1.colors)
console.log(instance1.name)

