// 创建对象

// 1.工厂模式
function createPerson(name, age, job) {
    var o = new Object();

    o.name = name;
    o.age = age;
    o.job = job;

    o.sayName = function() {
        console.log(this.name);
    };

    return o;
}

var person1 = createPerson('lxf', 26, 'web');
var person2 = createPerson('xq', 24, 'photo')

// 2.构造函数模式

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log(this.name)
    };
}

var lxf = new Person('lixuefeng', 26, 'web');
var hq = new Person('heqing', 25, 'photo');

console.log(hq.name) //heqing
console.log(lxf.age) //26


/* 
    1-没有显示的创建对象
    2-直接将属性和方法赋给了this对象
    3-没有 return 语句

    要创建 Person 的新实例, new 操作符 ,都干了什么?

        1-创建一个新对象
        2-将构造函数的作用域赋给新对象(因此this就指向了这个新对象)
        3-执行构造函数中的代码(为这个新对象添加属性)
        4-返回新对象

    lxf 和 qh 分别保存着 Person的一个不同实例
    这两个对象都有一个 constructor[构造函数]属性 (肯死抓k特),该属性指向 Person

    构造函数的缺点?
        实例方法--不是共享--每创建一个实例都会新创建一个实例方法 -- 这个方法的功能相同的情况下
*/

console.log(lxf.constructor == Person); //true
console.log(hq.constructor == Person); //true

// instanceof 操作符 -- 验证谁是谁的实例

console.log(lxf instanceof Object); //true
console.log(lxf instanceof Person); //true

// 当作构造函数使用
var lxf2 = new Person('lixuefeng-km', 26, 'web前端');
lxf2.sayName();

//作为普通函数调用
Person('jason', 55, '演员'); // 添加到window
global.sayName(); //nodejs环境

//在另一个对象的作用域中调用
var o = new Object();
Person.call(o, 'lxf-call', 25, 'web++'); //在对象o的作用域中调用,因此调用后o就拥有了所有属性和 sayName()方法
o.sayName(); //lxf-call


// 缺点改造 -- 相似的方法 共享

function Persons(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayJob = sayJob;
}

function sayJob() {
    console.log(this.job)
}

var hq_lxf = new Persons('李学峰', 26, 'weebb');
console.log(hq_lxf.sayJob()); //weebb


// 原型模式

function Person_2() {

}

Person_2.prototype.name = '李学峰';
Person_2.prototype.age = 25;
Person_2.prototype.job = 'web前端开发';
Person_2.prototype.sayName = function() {
    console.log(this.name);
}

var xiaoming = new Person_2();
xiaoming.sayName(); //李学峰

var xiaohong = new Person_2();
xiaohong.sayName();

console.log(xiaoming.sayName == xiaohong.sayName); //true


// ECMAScript 中原型对象的性质
/*
无论什么时候, 只要创建了一个新函数, 就会根据一组特定的规则为该函数创建一个 prototype 属性, 这个属性指向函数的原型对象
在默认情况下,所有原型对象都会自动获得一个 constructor(构造函数) 属性,这个属性包含一个指向 prototype 属性所在函数的指针

当调用构造函数创建一个新实例后,该实例内部将包含一个指针(内部属性) -> 指向构造函数的原型对象.

ECMA-262 - 5 中管这个指针 叫 [[Prototype]], 也就是 __proto__

isPrototypeOf();  -- 确认对象之间是否存在这种关系

ECMAScript 5 : Object.getPrototypeOf() , 这个方法返回 [[Prototype]]
*/

console.log(Person_2.prototype.isPrototypeOf(xiaohong));
console.log(Person_2.prototype.isPrototypeOf(xiaoming));

console.log(Object.getPrototypeOf(xiaohong))
console.log(Object.getPrototypeOf(xiaohong) == Person_2.prototype)
console.log(Object.getPrototypeOf(xiaohong).age)


/**
 * 当代码读取某个对象的某个属性时, 都会执行一次搜索,目标是具有给定名字的属性,
 * 搜索首先从对象的实例本身开始,如果找到就返回该属性的值,
 * 如果没有找到,则继续搜索指针指向的原型对象,然后查找
 * 
 * 可以通过对象实例访问保存在原型中的值,但却不能通过对象实例重写原型中的值.
 * 
 * 如果我们在实例中添加了一个属性,而该属性与实例原型中的一个属性名同名 
 * 那在实例中创建的该属性,就会屏蔽原型中的那个属性
 * 
 */
function PersonNew() {};

PersonNew.prototype.name = '李学峰';
PersonNew.prototype.age = 25;
PersonNew.prototype.job = 'web';
PersonNew.prototype.sayName = function() {
    console.log(this.name)
};

var person_hq = new PersonNew();
var person_lxf = new PersonNew();

person_hq.name = '何晴';
console.log(person_hq.name);
console.log(person_lxf.name);



function Person_news() {};

Person_news.prototype.name = '李学峰跑步去了';
Person_news.prototype.age = 35;
Person_news.prototype.job = 'web';
Person_news.prototype.sayName = function() {
    console.log(this.name)
};

var pers1 = new Person_news();
var pers2 = new Person_news();

pers2.name = '何晴一起跑步去啊';
console.log(pers1.name);
console.log(pers2.name);

delete pers2.name; // delete 操作符删除后,就取消了 实例对原型属性的屏蔽
console.log(pers2.name);

/*
hasOwnProperty();方法可以检测一个属性是存在于实例中,还是存在于 原型中

在实例中返回: true
在原型中返回: false 
Object.hasOwnProperty(vlaue)
*/
function Person_a() {

}
Person_a.prototype.name = 'lixuefeng';
Person_a.prototype.age = 25;
Person_a.prototype.sayName = function() {
    console.log(this.age)
};

var per_lxf1 = new Person_a();
var per_lxf2 = new Person_a();

console.log(per_lxf1.hasOwnProperty('name')); //false
per_lxf1.name = 'beijing_lixuefeng';
console.log(per_lxf1.name);
console.log(per_lxf1.hasOwnProperty('name')); //true