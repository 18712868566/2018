function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function () {
    return this.property;
}

function SubType() {
    this.subproperty = false;
}

//继承
SubType.prototype = new SuperType;

//使用字面量添加新方法,会导致上一行代码无效
SubType.prototype = {
    getSubValue: function () {
        return this.subproperty;
    },
    someOtherMethod: function () {
        return false;
    }
};

var instance = new SubType();

console.log(instance.getSuperValue())   // 报错

//由于现在的原型包含的是一个 Object 的实例, 而非SuperType的实例
//因此我们设想中的原型链已经被切断了-- - SubType和SuperType之间已经没有关系了

