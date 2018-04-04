function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
}

function SubType() {
    this.subproperty = false;
}

// 继承SuperType
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function() {
    return this.subproperty;
}


//创建一个实例
var instance = new SubType();

console.log(instance.getSuperValue())
console.log(instance.getSubValue())

// 确定原型和实例的关系
//方式一
console.log(instance instanceof Object)
console.log(instance instanceof SuperType)
console.log(instance instanceof SubType)

// 方式二
console.log(Object.prototype.isPrototypeOf(instance))
console.log(SuperType.prototype.isPrototypeOf(instance))
console.log(SubType.prototype.isPrototypeOf(instance))