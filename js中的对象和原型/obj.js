var person = new Object();

person.name = 'lixuefeng';
person.age = 26;



// 创建object实例的两种方法

var person1 = {
    name:'lixuefeng',
    age:'26'
}

// 属性名也可以使用字符串

var person2 = {
    "name":"lixuefeng",
    "age":"26",
    5 : true        // 数值属性会被自动传唤为字符串
}


var person3 = {};
person3.name = 'lixuefeng';
person3.age = 26;


// 对象字面量的优点,代码少,封装的感觉,传递参数

function displayInfo(ages){
    var output = '';

    if (typeof ages.name == 'string') {
        output +="Name:" + ages.name + "\n";
    }
    if (typeof ages.age == "number") {
        output += "Age:" + ages.age + "\n";
    }
    alert(output)
}


displayInfo({
    name: 'lixuefeng',
    age: 25
})

displayInfo({
    name : 'Greg'
})


// 访问对象 属性的方法
// . 方法  [] 方法
// ['first name']
// 通过变量的形式访问属性
var propertyName = 'name'
alert(person[propertyName])

alert(person['name'])
alert(person.name)
