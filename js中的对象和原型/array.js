// 创建数组指定长度
var color = new Array();

var colors = new Array(20);

var colors1 = new Array('red','blue','green')

var colors2 = new Array(3);

var colors3 = new Array('Greg')

// 省略 new 操作符
var colors4 = Array(2);
var colors5 = Array('pink');


// 第二种基本方法

var colros6 = ['pink','blue','green']
var names = [];
// 不要这样, 不同浏览器,解析会有差异 , ie8-,多一项 undefined
var values = [1,2,]
var options = [,,,,,]

// 读取数组 , 使用 方括号 并提供基于 0 的索引
var colros6 = ['pink','blue','green']
alert(colors6[0])

colors6[2] = 'black'    // 修改第三项
colors6[3] = 'brown'    // 新增第四项

console.log(colors6.length);    //数组的长度属性  3

// 数组的最后一项的索引始终是 lenght-1
// 因此下一个新项的位置就是length
var colros6 = ['pink','blue','green']
colros6[colors6.length] = 'black';  //在位置3添加一种颜色
colros6[colors6.length] = 'borwn';  //在位置4添加一种颜色


var colors7 = ['red','blue','green']
colors7[99] = 'pink';
alert(colors7.length)   //100


// 检测数组

if (value instanceof Array) {
    // 执行对数组的一些操作
}

// es5 新增 ie9+

if (Array.isArray(value)) {
    // 对数组执行一些操作
}

// 转换方法

var colors8 = ['red','blue','green']
// 数组转成字符串
alert(colors8.toString())
alert(colors8.valueOf())
alert(colors8)      // alert() 要接受字符串参数, 所以他会在后台调用 toString()方法



// toLocaleString(),调用数组的每一项 toLocaleString()

var person1 = {
    toLocaleString:function(){
        return 'lixuefeng';
    },
    toString:function(){
        return 'yujun'
    }
};

var person2 = {
    toLocaleString:function(){
        return 'lixuefeng2'
    },
    toString:function(){
        return 'yujun2'
    }
};


var people = [person1,person2];

alert(people);      // yujun , yujun2
alert(people.toString());   // yujun , yujun2
alert(people.toLocaleString());     //lixuefeng , lixuefeng2

// join() 方法
// 以不同的分割符,返回包含所有数组项的字符串

var colors9 = ['red','pink','green']

console.log(colors9.join('---'));   //red---pink---green
console.log(colors9.join('||'));     //red||pink||green



// 栈方法

// last in first out  LIFO

push();     // 任意数量,添加到数组末尾
pop();      // 从数组末尾移除最后一项

// 列队方法
// first in first out

shift();    // 能够移除数组中的第一个项并返回该项
unshft();   // 能够在数组的前端添加任意个项,并返回新数组的长度

// 重新排序

// reverse() 翻转数组顺序
var val = [1,2,3,4,5]
val.reverse();
console.log(val)    //[5, 4, 3, 2, 1]

// sort()
// 先 toString() 在比较的到的字符串
// 接收一个 比较函数

function compare(v1,v2){
    if (v1<v2) {
        return -1;
    } else if(v1>v2) {
        return 1;
    }else{
        return 0;
    }
}

function compare(v1,v2){
    return v2 - v1;
}
//[42, 33, 15, 5, 1, 0]

var value2 = [1,0,5,33,42,15];
value2.sort(compare);
console.log(value2)     //[0, 1, 5, 15, 33, 42]

// 操作方法

// concat() 数组合并
var colros = ['red','pink','green']
var colors2 = colros.concat('yellow',['orange','black'])

console.log(colors2)    //["red", "pink", "green", "yellow", "orange", "black"]

// 一个参数时,返回从指定位置,到数组末尾的所有项
// 两个参数时,返回从指定开始位置,到结束位置,不包括结束位置,的项
slice(1);
slice(1,3);

// 数组最强大的方法

// 删除 指定两个参数, 第一项的位置,和要删除的项数
splice(0,2); //删除数组中的前两项

//插入 提供三个参数 : 起始位置, 0(要删除的项数), 要插入的项
splice(0,0,'red','pink')    // 插入多项 , 继续追加任意多项

//替换 3个参数: 起始位置, 要删除的项, 要插入的项
splice(2,1,'red')


// 位置方法

// EC5 为数组实例 添加 两个位置方法 , 没有找到返回 -1
// 要求查找的项必须 严格相等     ====
// indexOf()
// lastIndexOf()


// 迭代方法

every();    // 对数组中每一项运行指定函数,如果改函数的 每一项 都返回 true,则返回true
filter();
forEach();
map();
some();     // 对数组中每一项运行指定函数,如果改函数的 任意一项 返回 true,则返回true


var numbers = [1,2,3,4,5,4,3,2,1]

var everyResult = numbers.every(function(item,index,array){
    return (item > 2)
})
console.log(everyResult)    // false


var someResult = numbers.some(function(item,index,array){
    return (item > 2)
});
console.log(someResult);    // true


var filterResult = numbers.filter(function(item,index,array) {
    return (item > 2);
});

console.log(filterResult)   //[3, 4, 5, 4, 3]

var mapResult = numbers.map(function(item,index,array) {
    return item * 2;
})

console.log(mapResult)      //[2, 4, 6, 8, 10, 8, 6, 4, 2]


numbers.forEach(function(item,index,array){
    //执行某些操作
    //类似 for 循环迭代数组
    //没有返回值
    console.log(item)
})


// 缩小方法
// EC5 新增  IE9+

// 接受4个参数: 前一个值, 当前值, 项的索引, 数组对象
reduce();       // 从左到右
reduceRight();  // 从右到左

var values = [1,2,356,7,54]
var sum = values.reduce(function(prev, next, index, array){
    return prev + next;
})

alert(sum)      // 420