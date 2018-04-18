# gulp构建前端项目

##### 备注：

​	针对目前项目组大多数项目都是基于前后端未分离模式，前端页面是纯静态的jsp、html、ftl文件，通过ajax调用接口获取数据后，进行页面渲染，对于JavaScript部分目前没有模块化处理，所以采用gulp进行前端的工程化处理。

##### **目前利用gulp主要做了2件事:压缩静态资源文以及添加版本号：**

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



**开发完成的项目或者正在迭代开发项目的目录结构：**适用于项目预发布或发布前打包，可以在本地对静态资源文件进行打包压缩添加版本化操作，当时考虑到图片处理问题，所以打包完后的静态资源文件是覆盖了源文件的，测试脚本对js、css可以加上sourcemap，方便调试，上线时脚本去掉添加源代码操作。



|—node_modules	 **//对应的包**

|—gulpfile.js      		 **//配置脚本文件**

|—package.json		**//对应的依赖**

|—package-lock.json

|—.babelrc 			**//babel兼容插件**

|—project			**//静态文件**

​	|—js

​	|—css

​	|—images

|—views		      **//html、ftl、jsp文件**

|—dist

模块预发布/发布阶段：

​	执行gulpfile.js中的脚本，执行命令：npm run build,相对应地压缩静态资源文件并添加版本化操作。



**新项目开发最终项目目录结构：**使用于开发时进行实时打包操作，开发时执行devGulpfile.js脚本,会实时监听静态资源文件，全部放在src中，而实际页面(html、ftl、jsp)引入的是压缩打包之后对应的dist文件下的资源，上线测试阶段执行prodGulpfile.js中的脚本，相应地只添加版本化操作即可。

|—node_modules	 **//对应的包**

|—gulpfile.js      		 **//配置脚本文件**

|—package.json		**//对应的依赖**

|—package-lock.json

|—.babelrc 			**//babel兼容插件**

|—project			**//静态文件**

​	|—src

​		|—js

​		|—css

​		|—less

 		|—sass

​		|—images

​	|—dist

​		|—js

​		|—css

​		|—images

|—views		      **//html、ftl、jsp文件**

|—dist



开发阶段： 

​	 执行devGulpfile.js中的脚本，执行命令：npm run build，编译sass/less，并实时编译转css  —>对应的src中的静态资源文件压缩之后生成一份新的到dist文件中   —>watcher实时监听静态资源变化dist文件相对应地变化

模块预发布/发布阶段：

​	执行prodGulpfile.js中的脚本，执行命令：npm run build,相对应地压缩静态资源文件并添加版本化操作，此时dist文件其实和开发中的dist文件一样，只是文件名加上了版本化命名。



-