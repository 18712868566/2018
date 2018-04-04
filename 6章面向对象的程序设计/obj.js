var person = new Object();

person.name = 'lixuefeng';
person.age = 26;
person.job = 'web';

person.sayName = function() {
    console.log(this.name)
}

person.sayName();


// 对象字面量的形式创建对象

var person1 = {
    name: 'heqing',
    age: 25,
    job: 'photo',

    sayName: function() {
        console.log(this.name)
    }
}

person1.sayName();
person1.name = 'xiaokeai'
console.log(person1.name)


// 属性类型
/**
 *      数据属性
 *          Configurable        --可删除 (delete)    默认 true
 *          Enumerable          --可遍历(for in)     默认 true
 *          Writable            --可编辑             默认 true
 *          Value               --具体数据           默认值 undefined
 *      
 *      修改属性的默认特性
 *          EC5 -- Object.defineProperty()
 *              参数:
 *                  属性所在的对象,属性的名字和一个描述符对象
 *          
 *      访问器属性
 *          Configurable        --可删除 (delete)    默认 true
 *          Enumerable          --可遍历(for in)     默认 true
 *          Get                 --在读取属性时,调用的函数       默认 undefined
 *          Set                 --在写入属性时,调用的函数       默认 undefined
 * 
 *      访问器属性不能直接定义,必须使用 Object.defineProperty()来定义
 */

// "use strict";

var person2 = {};
Object.defineProperty(person2, 'name', {
    writable: false, //不可修改
    configurable: false, //不可删除
    value: 'heqing'
});

console.log(person2.name) //heqing
person2.name = 'Greg';
delete person2.name; //非严格模式下什么都不会发生,严格模式下报错
console.log(person2.name) //heqing

// 一旦把属性定义为不可配置,就不能再把它变回可配置
// 再次调用 Object.defineProperty() 方法修改 除 writable 之外的特性,都会报错

//抛出错误
/* Object.defineProperty(person2, 'name', {
    configurable: true,
    value: 'lxf - hq'
}) */


// 访问器属性

var book = {
    _year: 2004,
    edition: 1
};

Object.defineProperty(book, 'year', {
    get: function() {
        return this._year;
    },
    set: function(newValue) {
        if (newValue > 2004) {
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
})

book.year = 2015;
console.log(book._year) //2015
console.log(book.edition) //12


var book2 = {
    _year: 2004,
    edition: 1
}

// 定义访问器的旧有方法
book2.__defineSetter__('year', function() {
    return this._year;
});

book2.__defineSetter__('year', function(newValue) {
    if (newValue > 2004) {
        this._year = newValue;
        this.edition += newValue - 2004;
    }
});

book2.year = 2006;
console.log(book2.edition); //3



// 定义多个属性
var book3 = {};

Object.defineProperties(book3, {
    _year: {
        value: 2000
    },
    edition: {
        value: 1
    },

    year: {
        get: function() {
            return this._year;
        },
        set: function(newValue) {
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
})

// 读取属性的特性
var descriptor = Object.getOwnPropertyDescriptor(book3, '_year');
console.log(descriptor.value) //2000
console.log(descriptor.configurable) //false
console.log(typeof descriptor.get); //undefined

var descriptor = Object.getOwnPropertyDescriptor(book3, 'year');
console.log(descriptor.value); //undefined
console.log(descriptor.enumerable); //false
console.log(typeof descriptor.get); //function