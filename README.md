##2018

## 2018-4-11 

>- 原型式继承
>- 寄生式继承
>- 寄生组合式继承

复习了经典继承

--------------------------------

## 2018-4-12 

添加SVG

作者：富途web开发团队
链接：https://juejin.im/post/5acd7c316fb9a028c813348d
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```
设置你的 <svg> 元素来包裹你的整个图形。
使用 <line> 和 <polyline> 来创造线。
使用 <rect>, <ellipse> 和 <polygon> 来创造闭合的图形。
使用 <path> 来创造你想要的任何形状。
使用 <g> 来组合形状。
对于需要有额外特性的组合使用 <symbol>
使用 <defs> 元素定义组合和模板。
使用 <use> 元素来放置你定义的组合和模板。

```

[基础svg学习] (http://www.runoob.com/svg/svg-circle.html)

>- 矩形 `<rect>`
>- 圆形 `<circle>`
>- 椭圆 `<ellipse>`
>- 线 `<line>`
>- 折线 `<polyline>`
>- 多边形 `<polygon>`
>- 路径 `<path>`

## rect - 矩形
```
rect 元素的 width 和 height 属性可定义矩形的高度和宽度
style 属性用来定义 CSS 属性
CSS 的 fill 属性定义矩形的填充颜色（rgb 值、颜色名或者十六进制值）
CSS 的 stroke-width 属性定义矩形边框的宽度
CSS 的 stroke 属性定义矩形边框的颜色

x 属性定义矩形的左侧位置（例如，x="0" 定义矩形到浏览器窗口左侧的距离是 0px）
y 属性定义矩形的顶端位置（例如，y="0" 定义矩形到浏览器窗口顶端的距离是 0px）
CSS 的 fill-opacity 属性定义填充颜色透明度（合法的范围是：0 - 1）
CSS 的 stroke-opacity 属性定义笔触颜色的透明度（合法的范围是：0 - 1）

CSS opacity 属性用于定义了元素的透明值 (范围: 0 到 1)。

rx 和 ry 属性可使矩形产生圆角。
```

## circle - 圆形
```
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <circle cx="100" cy="50" r="40" stroke="black"
  stroke-width="2" fill="red"/>
</svg>
```
>- cx和cy属性定义圆点的x和y坐标。如果省略cx和cy，圆的中心会被设置为(0, 0)
>- r属性定义圆的半径

## ellipse - 椭圆

```
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <ellipse cx="240" cy="50" rx="220" ry="30" style="fill:yellow"/>
  <ellipse cx="220" cy="50" rx="190" ry="20" style="fill:white"/>
</svg>
```

>- CX属性定义的椭圆中心的x坐标
>- CY属性定义的椭圆中心的y坐标
>- RX属性定义的水平半径
>- RY属性定义的垂直半径

## line - 直线

```
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <line x1="0" y1="0" x2="200" y2="200"
  style="stroke:rgb(255,0,0);stroke-width:2"/>
</svg>
```

>- x1 属性在 x 轴定义线条的开始
>- y1 属性在 y 轴定义线条的开始
>- x2 属性在 x 轴定义线条的结束
>- y2 属性在 y 轴定义线条的结束


## polygon

```
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <polygon points="100,10 40,180 190,60 10,60 160,180"
  style="fill:lime;stroke:purple;stroke-width:5;fill-rule:nonzero;" />
</svg>
```
>- points 属性定义多边形每个角的 x 和 y 坐标

SVG的图形填充规则通过fill-rule属性来指定。

>- fill-rule有效值: nonzero | evenodd | inherit

## path - 路径

`<path>` 元素用于定义一个路径。

下面的命令可用于路径数据：
```
M = moveto
L = lineto
H = horizontal lineto
V = vertical lineto
C = curveto
S = smooth curveto
Q = quadratic Bézier curve
T = smooth quadratic Bézier curveto
A = elliptical Arc
Z = closepath

注意：以上所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位。

复杂吗？是的！！由于在绘制路径时的复杂性，强烈建议使用SVG编辑器来创建复杂的图形。

淘宝 fonticon
```

## Stroke 属性 -边框(画笔)

SVG提供了一个范围广泛stroke 属性。在本章中，我们将看看下面：

```
//Stroke属性定义一条线，文本或元素轮廓颜色：
stroke

//Tstroke- width属性定义了一条线，文本或元素轮廓厚度：
stroke-width

//strokelinecap属性定义不同类型的开放路径的终结：
stroke-linecap

//strokedasharray属性用于创建虚线：
stroke-dasharray
```

