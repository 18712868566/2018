// 上接2018-4-11
/*
什么是寄生组合式继承 ?
    即通过借用构造函数来继承属性, 通过原型链的混成形式来继承方法.

    其背后的基本思路是: 不必为了指定子类型的原型而调用超类型的构造函数, 我们所需要的无非就是超类型原型的一个副本而已
    本质上, 就是使用寄生式继承来继承超类型的原型, 然后再将结果指定给子类型的原型

    function object(o) {
        function F() {};
        F.prototype = o;
        return new F();
    }
*/

function inheritPrototype(SubType, SuperType) {
    // var prototype = object(SuperType.prototype)
    // 创建了一个超类型原型的一个副本
    var prototype = Object.create(SuperType.prototype);
    // 为创建的副本添加constructor,从而弥补重写原型而失去的默认constructor属性
    prototype.constructor = SubType;
    // 将新创建的对象,赋值给子类型的原型,
    SubType.prototype = prototype;
}


function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'pink', 'blue'];
}

SuperType.prototype.sayName = function() {
    console.log(this.name + '000');
}

function SubType(name, age) {
    SuperType.call(this, name); //继承超类的实例方法 //第二次调用 SuperType()
    // SuperType.apply(this, arguments);

    this.age = age;
}

//SubType.prototype = new SuperType(); //继承超类的方法 //第一次调用 SuperType()


// 为了解决两次调用 SuperType() 
// 第一次调用SuperType构造函数时, SubType.prototype会得到两个属性: name和colors; 他们都是SuperType的实例属性,只不过现在位于 SubType的原型中.

// 当调用 SubType 构造函数时,又会调用一次 SuperType 构造函数,  `var lxf = new SubType('李学峰', '26');`  在 SubType构造函数内部再次调用.  
//这一次又在新的对象上创建了实例属性,  name 和 colors, 于是这两个属性就屏蔽了原型中的连个同名属性
// 这样有两组 name和colors属性: 一组在实例上, 一组在SubType原型中.

// 高程 page 173页 图像解释

// 这样的高效率体现在它只调用了一次 SuperType 构造函数,并且因此避免了在 SubType.prototype上面创建不必要的,多余的属性
// 同时还能够正常使用, instanceof 和 isPrototypeOf() ,,最理想的继承范式
inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function() {
    console.log(this.age + '111');
}

var lxf = new SubType('李学峰', '26');
var hq = new SubType('何晴', '25');

console.log(lxf.sayName());
console.log(lxf.sayAge());

console.log(hq.sayName());
console.log(hq.sayAge());