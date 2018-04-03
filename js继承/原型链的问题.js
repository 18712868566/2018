//原型链的问题
function SuperType(nane) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

function SubType() {

}

//继承
SubType.prototype = new SuperType();

var instance = new SubType('小红');

instance.colors.push('pink');
console.log(instance.colors);
console.log(instance.name);

var instance2 = new SubType('小蓝');
console.log(instance2.colors)
console.log(instance2.name)

// 包含引用类型值得原型,
// 包含引用类型值得原型属性会被所有实例共享,
// 在创建子类型的实例是,不能向超类型的构造函数中传递参数