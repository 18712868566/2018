## UI事件

>-  DOMActivate 不建议使用 dom3级中废弃

>-  load 

>-  unload

>-  abort 

>-  error

>-  select

>-  resize

>-  scroll

要确定浏览器是否支持DOM2级事件规定的HTML事件,使用如下代码
```
var isSupported = document.implementation.hasFeature("UIEvent","3.0")
```

**1.load事件**
```
EventUtil.addHandler(window,"load",function(event){
    alert("Loaded");
})
```

**图像上也可以触发load事件**
```
<img src="smile.gif" id="myImage" onload="alert('Image loaded')">

//js实现

var image = document.getElementById('myImage');
EventUtil.addHandler(image,"load",function(event){
    event = EventUtil.getEvent(event);
    alert(EventUtil.getTarget(event).src)
})

EventUtil.addHandler(window,"load",function(event){    
    var image = document.createElement("img");

    EventUtil.addHandler(image,"load",function (event){
        event = EventUtil.getEvent(event);
        alert(EventUtil.getTarget(event).src);
    });

    document.body.appendChild(image);
    image.src = "smile.gif"
})

// DOM0 级 设置, 不能添加到dom树中
EventUtil.addHandler(window, "load", function () {
    var image = new Image();

    EventUtil.addHandler(image, "load", function (event) {
        alert("Image loaded!")
    });
    image.src = "r2.png"
})
```

**2.unload事件**

**3.resize事件**
>-  窗口宽度和高度变化的时候就会触发,
>-  最大化和最小化的时候也会触发
```
EventUtil.addhandler(window,"resize",function(event){
    alert("Resized")
})
```
**4.srcoll事件**
```
EventUtil.addHandler(window,"scroll",function(event){
    if(document.compatMode == "CSS1Compat"){
        alert(document.documentElement.scrollTop);
    }else{
        alert(document.body.scrollTop);
    }
})
```

**5.焦点事件**

> document.hasFocus()
> document.activeElement 属性配合,可以知晓用户在页面上的行踪

>-  **blur**
>-  DOMFocusIn
>-  DOMFocusOut
>-  **focus**
>-  focusin
>-  focusout

**6.鼠标和滚轮事件**

>-  click
>-  dbclick      ie8- bug 
>-  mousedown
>-  mouseenter  -不冒泡 ie9+
>-  mouseleave  -不冒泡  ie9+
>-  mousemove       鼠标在元素中移动
>-  mouseout        
>-  mouseover
>-  mouseup

要确定浏览器是否支持以上DOM2级事件,使用如下代码
```
var isSupported = document.implementation.hasFeature("MouseEvents","2.0");

// 除 dbclick/mouseenter/mouseleave
var isSupported = document.implementation.hasFeature("MouseEvent","2.0");
```


客户区坐标位置



