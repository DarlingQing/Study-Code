//引入gulp和gulp插件
var gulp = require('gulp'),
    runSequence = require('run-sequence'),  //同步执行任务
    rev = require('gulp-rev'),              
    assetRev = require('gulp-asset-rev'), //对应生成rev映射文件，对文件名加MD5后缀
    revCollector = require('gulp-rev-collector'), //从mainfests中获取静态资源版本，替换html中的链接
    imagemin = require('gulp-imagemin'),        //压缩图片
    minifyCss  = require('gulp-minify-css'),   //css压缩
    uglify  = require('gulp-uglify'),   //js压缩
    del =  require('del'),
    clean = require('gulp-clean'),      //删除文件和文件夹
    sourcemaps = require('gulp-sourcemaps'),  //生成源代码
    htmlreplace = require('gulp-html-replace'), //替换html中的路径
    watch = require('gulp-watch'),
    babel = require('gulp-babel'),
    less = require('gulp-less'),  //编译less代码
    sass = require('gulp-sass');    //编译sass代码

   //定义less、sass源文件路径
var sassSrc = 'project/src/sass/**/*.scss',
    lessSrc = 'project/src/less/**/*.less';

//定义less、sass目标文件路径
var cssDest = './project/src/css/';

//编译sass代码
gulp.task('sass',function(){
    return gulp.src(sassSrc)
        .pipe(sass())
        .pipe(gulp.dest(cssDest))
});

//编译less代码
gulp.task('less',function(){
    return gulp.src(lessSrc)
        .pipe(less())
        .pipe(gulp.dest(cssDest))
});

//定义css、js,images,html,源文件路径
var cssSrc = 'project/src/css/**/*.css',
    jsSrc = 'project/src/js/**/*.js',
    imgSrc = 'project/src/images/**/*',
    templateSrc = 'views/**/*.html';

//定义css、js,images,html,目标文件路径
var cssDest = './project/dist/css',
    jsDest = 'project/dist/js',
    imgDest = './project/dist/images',
    templateDest = './views/';

//先清理文件
gulp.task('clean',function(){
    return gulp.src(['./project/dist','./rev'], {read: false})
        .pipe(clean())
});

//压缩图片
gulp.task('revImages', function(){
    return gulp.src(imgSrc)  //该任务针对的文件
        .pipe(gulp.dest(imgDest))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDest))
});

//CSS生成文件hash编码并生成 rev-manifest.json文件名对照映射
gulp.task('revCss', function(){
    return gulp.src(cssSrc)
        .pipe(sourcemaps.init())
        .pipe(minifyCss())       //- 压缩处理成一行
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(cssDest))
});

//为css中引入的图片/字体等添加hash编码
gulp.task('assetRev', function(){
    return gulp.src(['./rev/images/*.json','./dist/css/**/*.css'])  //该任务针对的文件
        .pipe(revCollector({
            replaceReved: true
        }))
        .pipe(gulp.dest(cssDest)); //编译后的路径
});


//js生成文件hash编码并生成 rev-manifest.json文件名对照映射
gulp.task('revJs', function(){
    return gulp.src(jsSrc)
        .pipe(babel())
        .pipe(sourcemaps.init())
        .pipe(uglify())                       //- 压缩处理成一行
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(jsDest))
});

gulp.task('watch',function () {
    gulp.watch(sassSrc,['sass']);
    gulp.watch(lessSrc,['less']);
    gulp.watch(imgSrc,['revImages']);
    gulp.watch(cssSrc,['revCss']);
    gulp.watch(jsSrc,['revJs']);
});

//开发构建
gulp.task('dev', function (done) {
    condition = false;
    runSequence(        //同步执行任务
        ['sass'],
        ['less'],
        ['clean'],
        ['revImages'],
        ['revCss'],
        ['revJs'],
        ['watch'],
        done);
});

gulp.task('default', ['dev']);
