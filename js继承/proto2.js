function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
}

function SubType() {
    this.subproperty = false;
}

//继承
SubType.prototype = new SuperType;

//添加方法
SubType.prototype.getSubValue = function() {
    return this.subproperty;
}

//重写超类型中的方法
SubType.prototype.getSuperValue = function() {
    return 'lixuefeng'
}


var instance = new SubType;
console.log(instance.getSuperValue());

// 必须在用 SuperType 的实例替换原型之后,在定义这两个方法
var supers = new SuperType;
console.log(supers.getSuperValue())