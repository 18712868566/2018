/* 
EventUtil

    addHandler('要操作的元素','事件名称','事件处理程序函数')

    removeHandler()

*/

var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attechEvent) {
            element.attechEvent('on' + type, handler);
        } else {
            element['on' + type] = handler;
        }
    },
    removeEventListener: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detchEvent) {
            element.detchEvent('on' + type, handler);
        } else {
            element['on' + type] = handler;
        }
    },
    getEvent: function (event) {
        return event ? event : window.event;
    },
    getTarget: function (event) {
        return event.target ? event.target : event.srcElement;
    },
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    stopPropagetion: function (event) {
        if (event.stopPropagetion) {
            event.stopPropagetion();
        } else {
            event.cancelBubble = true;
        }
    }
}