// this的指向是根据函数被调用的场景来确定的
var name = 'otter';
Object.prototype.sayName = function() {
    return this.name;
}

var init = function() {
        var name = 'inner';
        var obj = {
            name: 'fanny',
            sex: 'female',
            sayName: function() {
                return this.name;
            }
        }

        return obj.sayName;
    }
    /* var init = () => {
        var name = 'inner';
        var obj = {
            name: 'fanny',
            sex: 'female',
            sayName: function () {
                return this.name;
            }
        }

        return obj.sayName;
    } */

console.log(init()())