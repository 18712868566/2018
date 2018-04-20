//dist是生成版本的目标文件夹,就是最终要部署到线上的文件夹
var dist = "./dist";
//src目录是我们的源代码
var src = "./App";

let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-clean-css'),
    babel = require('gulp-babel'),
    rev = require('gulp-rev'),
    revReplace = require('gulp-rev-replace'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    spritesmith = require("gulp.spritesmith"),
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del'); //清空dist文件夹

// Browser Sync 帮助我们搭建简单的本地服务器并能实时刷新浏览器，它还能 同时刷新多个设备
gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: src
        }
    })
});

// 编译sass下的.scss文件,输出到 App/css 目录下
gulp.task('sass', function() {
    return gulp.src(src + '/sass/**/*.scss') //用gulp.src获取源文件
        .pipe(sass()) //将sass转换为css并使用gulp-sass
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove: true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(gulp.dest(src + '/css')) //处理完毕,生成到 开发环境 css目录下
        // .pipe(gulp.dest(dist + '/css')) //处理完毕,生成到 生产环境 css目录下
        .pipe(browserSync.reload({
            stream: true
        }));
})

// 删除dist下的所有文件
gulp.task('delete', function(cb) {
    return del([dist + '/*', dist + '/images'], cb);
});

// 压缩js文件
gulp.task('jsmin', function() {
    return gulp.src(src + '/js/**.*')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dist + '/js'))
});

// ES6语法转换ES5语法 js
gulp.task('es6', function() {
    return gulp.src(src + '/js/style.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('newStyleES6.js'))
        .pipe(uglify())
        .pipe(gulp.dest(src + '/js'))
});


// 雪碧图
gulp.task('sprite', function() {
    gulp.src(src + '/images/**.*')
        .pipe(spritesmith({
            imgName: 'images/sprite.png', //合并后大图的名称
            cssName: 'css/sprite.css',
            padding: 2, // 每个图片之间的间距，默认为0px
            cssTemplate: (data) => {
                // data为对象，保存合成前小图和合成打大图的信息包括小图在大图之中的信息
                let arr = [],
                    width = data.spritesheet.px.width,
                    height = data.spritesheet.px.height,
                    url = data.spritesheet.image
                    // console.log(data)

                data.sprites.forEach(function(sprite) {
                    arr.push(
                        ".icon-" + sprite.name +
                        "{" +
                        "background: url('" + url + "') " +
                        "no-repeat " +
                        sprite.px.offset_x + " " + sprite.px.offset_y + ";" +
                        "background-size: " + width + " " + height + ";" +
                        "width: " + sprite.px.width + ";" +
                        "height: " + sprite.px.height + ";" +
                        "}\n"
                    )
                });
                return arr.join("")
            }
        }))
        .pipe(gulp.dest(src))
})


// 压缩css
gulp.task('minCss', function() {
    return gulp.src(src + '/css/**.*')
        .pipe(cssmin({
            advanced: true, //类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: 'ie7', //保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: false, //类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*' //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))
        .pipe(concat('main.css'))
        .pipe(gulp.dest(dist + '/css'));
});

//不用编译的文件复制到生成环境中
gulp.task('copy', function() {
    gulp.src(src + '/*.html')
        .pipe(useref()) // 替换HTML中引用的css和js
        .pipe(gulp.dest(dist));
    gulp.src(src + '/images/**.*')
        .pipe(gulp.dest(dist + '/images'));
    // gulp.src(src + '/css/**.*')
    // .pipe(gulp.dest(dist + '/css'));
    // gulp.src(src + '/js/**.*')
    // .pipe(gulp.dest(dist + '/js'));
    gulp.src(src + '/fonts/**.*')
        .pipe(gulp.dest(dist + '/fonts'));
});

// gulp 默认执行
gulp.task('default', ['delete', 'browserSync', 'jsmin', 'sass', 'minCss', 'copy'], function() {
    console.log('welcome gulp!');
    // watch监视的使用
    // 监听scss文件的变化
    gulp.watch(src + '/sass/**/*.scss', ['sass']);
    // 监听html文件的变化
    gulp.watch(src + '/*.html', ['copy']);
    // 监听images文件的变化
    gulp.watch(src + '/images/**.*', ['copy']);
    // 监听css文件的变化
    gulp.watch(src + '/css/**.*', ['minCss']);
    // 监听js文件的变化
    gulp.watch(src + '/js/**.*', ['jsmin']);
    // 监听字体,字体图标
    gulp.watch(src + '/fonts/**.*', ['copy']);

    // 每当html或js|css|images|fonts文件更改时重新加载浏览器
    gulp.watch(src + '/*.html', browserSync.reload);
    gulp.watch(src + '/css/**.*', browserSync.reload);
    gulp.watch(src + '/js/**.*', browserSync.reload);
    gulp.watch(src + '/js/**.*', browserSync.reload);
    gulp.watch(src + '/images/**.*', browserSync.reload);

});