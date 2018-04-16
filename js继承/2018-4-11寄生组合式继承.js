// 组合继承最大的问题就是无论什么情况下,都会调用两次超类型构造函数
// 1.一次是在创建子类型原型的时候
// 2.另一次是在子类型构造函数内部

// 常用的继承 构造函数模式+原型模式 也叫经典继承

function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'pink', 'green']
}


SuperType.prototype.sayName = function() {
    console.log(this.name);
}

function SubType(name, age) {
    SuperType.call(this, name); //第二次调用 SuperType()

    this.age = age;
}

SubType.prototype = new SuperType(); //第一次调用 SuperType()
SubType.prototype.constructor = SubType;

SubType.prototype.sayAge = function() {
    console.log(this.age)
}


var lxf = new SubType('lixuefeng', '26');

lxf.sayAge();
lxf.sayName();

// 寄生组合式继承， 堪称完美

// 高程 / page / 172 / 6.3.6