# gulp构建前端项目 #

##### 备注：

​	针对目前项目组大多数项目都是基于前后端未分离模式，前端页面是纯静态的jsp、html、ftl文件，通过ajax调用接口获取数据后，进行页面渲染，对于JavaScript部分目前没有模块化处理，所以采用gulp进行前端的工程化处理。

#####**目前利用gulp主要做了2件事:压缩静态资源文以及添加版本号：**

​		1：压缩静态文件，css、image、js

​		2：为静态资源文件添加版本号

​		3：html根据文件的变化添加版本号

目前我们已经安装了对应以下的包 **（持续更新，若在项目开发阶段缺少其他的包需要下载更新）**



1：**同步执行任务：** npm install --save-dev run-sequence	

​	gulp默认使用最大并发数执行任务，所有的任务几乎都是同时执行，而不会等待其他任务，但是比如先清理目标目录，然后再执行打包，就需要先后次序。

2：**对文件名加MD5后缀：** npm install --save-dev gulp-rev

​	打包出来的文件名会加上md5值，同时会生成json用来保存文件名路径对应关系

3：**压缩图片：** npm install --save-dev gulp-imagemin

4:   **压缩css：** npm install --save-dev gulp-minify-css

​	目前其实安装了gulp-minify-css和gulp-clean-css，但是实践过程中，发现使用gulp-clean-css时压缩的代码在生rev映射表的时候，对应的html中css路径不会被替换

5:   **压缩js：** npm install --save-dev gulp-uglify

6:   **获取静态资源版本数据，替换html中的链接：**npm install --save-dev gulp-rev-collector

7： **生成source-map文件：**npm install --save-dev gulp-sourcemaps

​	简单说，Source map就是一个信息文件，里面储存着位置信息，也就是说，转换后的代码的每一个位置，所对应的转换前的位置，有了它，出错的时候，出错工具直接显示原始代码，而不是转换后的代码，这无疑给开发者带来了很大方便。

8:   **删除和删除文件夹：**　npm install --save-dev gulp-clean/del

9：**实现html上的路径替换：** npm install --save-dev gulp-html-replace

10：**支持es6语法并支持babel转码：** npm install --save-dev babel-core babel-preset-env

​	而非 `babel-pre-env` 预设存在的问题在于它们往往做得太多。例如，大多数现代浏览器都支持ES6生成器。如果您使用 `babel-preset-es2015` 这些预设，ES6生成器函数将始终被转换为复杂的ES5代码。

​	.babelrc配置文件如下：

​	`"presets":[`

​		[

​			"env",{

​				"targets":{

​					"browers:"['last 2 versions','ie>=7']  //支持最近两个版本的浏览器和IE7以上的浏览器

​				}

​			}

​		]

​	`]`

11：**去除es6转码之后的严格模式：** npm  install --save-dev babel-plugin-transform-remove-strict-mode

12：**gulp编译LESS：**  npm install gulp-less

13：**gulp编译Sass：** npm install gulp-sass