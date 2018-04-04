/* 
EventUtil

    addHandler('要操作的元素','事件名称','事件处理程序函数')

    removeHandler()

*/

var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) { //  如果存在
            element.addEventListener(type, handler, false);
        } else if (element.attechEvent) {
            element.attechEvent('on' + type, handler);
        } else {
            element['on' + type] = handler;
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detchEvent) {
            element.detchEvent('on' + type, handler);
        } else {
            element['on' + type] = null;
        }
    }
}