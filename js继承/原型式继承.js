function object(o) {
    function F() { };
    F.prototype = o;
    return new F();
}

// 从本质上讲,object(),对传入其中的对象执行了一次浅复制

var person = {
    nama: 'lixuefeng',
    friends: ['Shelby', 'Count', 'Van']
};

var anotherPerson = object(person);
anotherPerson.name = 'yujun';
anotherPerson.friends.push('Rob');

var yetAnotherPerson = object(person);
yetAnotherPerson.name = 'wanzhenfeng';
yetAnotherPerson.friends.push('barbie');

console.log(person.friends);


// ECMAScript 5通过 Object.create()方法 ,规范化了原型式继承
// 这个方法接收连个参数,

// 一个用作新对象原型的对象和
// (可选的)一个为新对象定义额外属性的对象
// 在传入一个参数的情况下， Object.create()与 object(),方法的行为相同

var colors = {
    name: 'xxx',
    age: '222',
    col: ['red', 'blue', 'pink'],
    sayName() {
        console.log(this.age)
    }
};

var newCol = Object.create(colors);
newCol.name = 'newxxx';
newCol.age = '122312';
newCol.col.push('orange');

newCol.sayName = function () {
    console.log('sssss')
}

var newCol2 = Object.create(colors);
newCol2.name = 'new2xxx';
newCol2.col.push('green');

console.log(newCol.name)
console.log(colors.col)
newCol.sayName()

var newCol3 = Object.create(colors, {
    name: {
        value: 'newCol3_name'
    }
})

console.log(newCol3.name);


// 兼容性 ie9+

在没有必要兴师动众的创建构造函数,
    而只想让一个对象与另一个对象保持类似的情况下, 原型式继承是
完全可以胜任的,
    不过别忘了, 包含引用类型值得属性, 始终都会共享相应的值,
    就像使用原型模式一样
