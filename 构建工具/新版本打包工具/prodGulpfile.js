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
        .pipe(rev.manifest())
        .pipe(gulp.dest('./rev/images')); //编译后的路径
});

//CSS生成文件hash编码并生成 rev-manifest.json文件名对照映射
gulp.task('revCss', function(){
    return gulp.src(cssSrc)
        .pipe(minifyCss())       //- 压缩处理成一行
        .pipe(rev())
        .pipe(gulp.dest(cssDest))
        .pipe(rev.manifest())       //必须有这个方法 生成一个rev-manifest.json
        .pipe(gulp.dest('./rev/css'));  //将rev-manifest.json 保存到 dist/css 目录内
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
        .pipe(uglify())                       //- 压缩处理成一行
        .pipe(rev())
        .pipe(gulp.dest(jsDest))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./rev/js') );
});

gulp.task('watch',function () {
    gulp.watch(sassSrc,['sass']);
    gulp.watch(lessSrc,['less']);
    gulp.watch(imgSrc,['revImages']);
    gulp.watch(cssSrc,['revCss']);
    gulp.watch(jsSrc,['revJs']);
});

//Html替换css、js文件版本
gulp.task('revHtml', function () {
    return gulp.src(['./rev/**/*.json', templateSrc])
        .pipe(revCollector({
            replaceReved: true,
            dirReplacements: {
                //'src/css/':'dist/css/',
                //'src/js/': 'dist/js/'
            }
        }))
        .pipe(gulp.dest(templateDest));
});

//开发构建
gulp.task('dev', function (done) {
    condition = false;
    runSequence(        //同步执行任务
        ['clean'],
        ['revImages'],
        ['revCss'],
        ['revJs'],
        ['revHtml'],
        done);
});

gulp.task('default', ['dev']);
