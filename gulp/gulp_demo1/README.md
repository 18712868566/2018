
## 准备工作

[参考链接](https://w3ctrain.com/2015/12/22/gulp-for-beginners/?utm_source=tuicool&utm_medium=referral)
[gulp的Github主页](https://github.com/gulpjs/gulp)
[npm上得gulp组件](https://www.npmjs.com/search?q=gulpplugin)
[精通gulp常用插件](https://www.cnblogs.com/linxin/p/6482513.html)

## 目录结构说明

## gulp 插件说明

* gulp-uglify           //- 压缩JS
* gulp-minify-css || gulp-clean-css      //- 压缩CSS为一行； gulp-minify-css已经被废弃
* gulp-concat           //- 文件合并
* gulp-rev              //- 对文件名加MD5后缀 给css,js,html加上hash版本号
* gulp-rev-collector    //- 路径替换
* gulp-autoprefixer     //- 自动为css添加浏览器前缀。
* gulp-useref           //- 它可以把html里零碎的这些引入合并成一个文件，但是它不负责代码压缩。
* gulp-babel            //- 将ES6代码编译成ES5。
* babel-preset-es2015   //- //es2015转码规则
* babel-core            //- gulp-babel的依赖文件
* gulp-rev-replace      //- 重写被gulp-rev重命名的文件名。
* gulp-if               //- 有条件地运行一个任务。



** gulp-rev-replace未成功使用--待研究--随机生产hash,能解决换成问题!! **
> 例子参考
```
gulp-rev-replace
描述：重写被gulp-rev重命名的文件名。

var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var useref = require('gulp-useref');

gulp.src('index.html')
    .pipe(useref())                         // 替换HTML中引用的css和js
    .pipe(rev())                            // 给css,js,html加上hash版本号
    .pipe(revReplace())                     // 把引用的css和js替换成有版本号的名字
    .pipe(gulp.dest('./dist'))

```    