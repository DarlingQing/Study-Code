//引入gulp和gulp插件
var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    rev = require('gulp-rev'),  //对文件名加MD5后缀
    revCollector = require('gulp-rev-collector'),
    imagemin = require('gulp-imagemin'),        //压缩图片
    minifyCss  = require('gulp-minify-css'),   //css压缩
    uglify  = require('gulp-uglify'),   //js压缩
    del =  require('del'),
    clean = require('gulp-clean'),
    sourcemaps = require('gulp-sourcemaps'),
    htmlreplace = require('gulp-html-replace'),
    assetRev = require('gulp-asset-rev');

//定义css、js,images,html,源文件路径
var cssSrc = './css/**/*.css',
    jsSrc = './js/**/*.js',
    imgSrc = './images/**/*',
    htmlSrc = './**/*.html';

//定义css、js,images,html,目标文件路径
var cssDest = './dist/css',
    jsDest = './dist/js',
    imgDest = './dist/images',
    htmlDest = './dist/view';

gulp.task('clean',function(){
    return gulp.src(['./dist','./rev'], {read: false})
        .pipe(clean())
})

gulp.task('revImages', function(){
    return gulp.src(imgSrc)  //该任务针对的文件
       // .pipe(rev())
        .pipe(gulp.dest(imgDest))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDest))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./rev/images')); //编译后的路径
});

//CSS生成文件hash编码并生成 rev-manifest.json文件名对照映射
gulp.task('revCss', function(){
    return gulp.src(cssSrc)
        .pipe(sourcemaps.init())
        .pipe(minifyCss())       //- 压缩处理成一行
        .pipe(rev())
        .pipe(sourcemaps.write())
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
        .pipe(sourcemaps.init())
        //.pipe(uglify())                       //- 压缩处理成一行
        .pipe(rev())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(jsDest))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./rev/js'));
});

//Html替换css、js文件版本
gulp.task('revHtml', function () {
    return gulp.src(['./rev/**/*.json', htmlSrc])
        .pipe(revCollector({
            replaceReved: true,
            dirReplacements: {
                'css/':'../css/',
                'js/': '../js/'
            }
        }))
        .pipe(gulp.dest(htmlDest));
});

//开发构建
gulp.task('dev', function (done) {
    condition = false;
    runSequence(        //同步执行任务
        ['clean'],
        ['revImages'],
        ['revCss'],
        ['assetRev'],
        ['revJs'],
        ['revHtml'],
        done);
});

gulp.task('default', ['dev']);
