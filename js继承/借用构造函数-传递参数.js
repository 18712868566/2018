function SuperType(name) {
    this.name = name;
}

function SubType() {
    // 继承了SuperType,同时传递了参数
    SuperType.call(this, 'lixuefeng');

    // 实例属性
    this.age = 29;
}


var instance = new SubType();

console.log(instance.name)
console.log(instance.age)

//借用构造函数的问题?
/**
 * 如果仅仅是借用构造函数,那么也将无法避免构造函数模式存在的问题--方法都在
 * 构造函数中定义,因此函数复用就无从谈起,
 * 而且,在超类型的原型中定义的方法,与子类型而言也是不可见的,
 * 结果所有类型都只能使用构造函数模式.
 * 
 * 所以会有后面的 组合继承模式
 * 
 */