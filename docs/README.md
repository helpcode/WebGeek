# WEB挑战赛

## 比赛规范

考虑到是技术性比赛，这里绝对不支持移动端访问！同时建议通过PC端`webkit`内核浏览器访问(首选谷歌浏览器，其次国内基于webkit内核的360浏览器...等)

每一关都需要32位通关密钥，至于如何拿到密钥就要看你的能力了。关卡不难，主要考验综合能力！

> 在线地址：[https://helpcode.github.io/WebGeek/dist](https://helpcode.github.io/WebGeek/dist/#/welcome)

> 项目地址：[https://github.com/helpcode/WebGeek](https://github.com/helpcode/WebGeek)

> 项目文档：[https://helpcode.github.io/WebGeek/docs](https://helpcode.github.io/WebGeek/docs/#/)



## 前端

### 前端技术选型

- 前端数据渲染：[Vue.js 2.0](http://cn.vuejs.org/)
> 渐进式JavaScript 框架

- UI层：[element-ui](http://element.eleme.io/#/zh-CN)
> Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型。

- 脚手架：[Vue-cli](https://github.com/vuejs/vue-cli)
> A simple CLI for scaffolding Vue.js projects.

- 打包工具：[WebPack](http://webpack.github.io/)
> 最火的一款模块加载器兼打包工具，它能把各种资源，例如JS（含JSX）、coffee、样式（含less/sass）、图片等都作为模块来使用和处理

- 依赖管理：[npm](https://www.npmjs.com/)
> node包管理器。顾名思义，它的主要功能就是管理node包，包括：安装、卸载、更新、查看、搜索、发布等。

- 网络请求：[vue-resource](https://github.com/pagekit/vue-resource)
> The HTTP client for Vue.js

- Token验证：[node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
> An implementation of JSON Web Tokens

- 前端路由：[vue-router](https://router.vuejs.org/zh-cn/)
> Vue官方前端路由插件

### 前端设计思路

挑战者第一次访问`welcome.vue`显示欢迎信息，单击`挑战赛 / Start`后`vue-resource`向`Node.js`后端请求`token`，后端随机生成6位数字符串然后通过密钥加密设置过期时间后(token限制了接口的有效访问时间，失效后重新从`welcome.vue`组件进入关卡，这时候程序已经记录你闯关的关卡，不必担心丢失进度)，通过网络请求`header`携带`token`字段发送给前端，前端拿到`token`拼接到下一个页面：

```javascript
http://xxxx.com/#/barrier?t=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiIzNTQ5NTkiLCJpYXQiOjE0OTY4MDM4ODQsImV4cCI6MTQ5NjgwNDAwNH0.5MPH2kQ_J2Tg_Cu9kBqejqem-sYjV4OBRlhJjSG0ALA
```

其中`barrier`路由对应代码里面组件`problem.vue`，这是父组件`import`导入各个关卡子组件，通过`Vue`指令`v-if`判断`currentView`的数值切换引入对应关卡组件。

```javascript
<div v-if="currentView == '1' ">
  <transition name="el-fade-in-linear">
    <first-component ref="first" @changes="ChangeTitle"></first-component>
  </transition>
</div>


<div v-else-if="currentView == '2' ">
  <transition name="el-zoom-in-top">
    <two-component ref="two" @changes="ChangeTitle"></two-component>
  </transition>
</div>

...

```

同时通过父子组件通讯，子组件提交`changes`事件触发父组件方法`ChangeTitle`更改对应关卡布局，关卡标题，关卡提示

```javascript
//提交事件
this.$emit('changes', '1')
```
```javascript
//更改父组件对应关卡布局，关卡标题，关卡提示
 ChangeTitle(View){
        switch (View) {
          case '1':
            this.$ChangeView('1', '第一关', '提示：源码面前，了无密码')
            break;
            
            ...
        }
}
```

子组件主要负责各个关卡输入框的呈现，和与后端交互处理各关卡不同的业务逻辑等。

## 后端

### 后端技术选型

- 后端语言：[Node.js](https://nodejs.org/en/)

> Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。Node.js 的包管理器 npm，是全球最大的开源库生态系统。

- REST API：[express](http://www.expressjs.com.cn/)

> 基于 Node.js 平台，快速、开放、极简的 web 开发框架，本项目中主要作为REST API。

- Https：[阿里云-云盾证书服务](https://yundun.console.aliyun.com/?p=cas#/cas/home)

> 阿里云免费提供的免费`https`域名证书，提供已备案的域名即可快速简单的拿到证书文件。**至于整套的部署事项稍后博客公开完善教程敬请期待！！**

- 服务器环境：[Ubuntu 16.04 ](http://cn.ubuntu.com/)

> 较为好用的`Linux`发行版本之一，在阿里云购买(总价54.85 - 代金券支付50.00 = 最后4.85买入)。

```javascript
操作系统：Ubuntu 16.04 64位
实例名称：iZuf6bzricg7h0r5jqgy4uZ
实例ID：i-uf6bzricg7h0r5jqgy4u	
地域：华东 2（China East 2 Zone B）	
付费类型：包年包月
实例系列：系列 II	实例规格：1 核 1GB（通用型 n1，ecs.n1.tiny）	I/O 优化：I/O 优化实例
网络类型：专有网络	虚拟交换机：vsw-uf6jkbcrn4d7ihg8wk260	
安全组：sg-uf6cercflxm40u4pz1dm	
内网 IP：172.19.35.18	
弹性公网 IP：106.14.224.122(自行购买)
公网带宽：按固定带宽	当前使用带宽 ：1Mbps
系统盘：40GB 高效云盘	
```

### 后端设计思路

后端主要作用就是为前端生成`token`，验证`token`有效性，处理前端用户输入通关密钥的正确与否，感觉没有什么好说的！

其次是基于`nodejs`实现整站的`https`访问，主要为了解决前端项目部署到`Github Page`默认`https`对服务器`http`导致的资源和接口无法访问的问题。

主要实现思路如下是`www`文件中`require`引入内置的`fs(读取从阿里云拿到的免费证书)`和`https(nodejs内置https服务)`

```javascript
//引入模块
var https = require('https');
var fs= require('fs');

//引入阿里云https证书
var options = {
    key: fs.readFileSync('./ssl/geekhelp.key'),
    cert: fs.readFileSync('./ssl/geekhelp.pem')
}
```

接着创建https服务引入配置项，然后设置端口。这里端口是`324`，我自己生日3月24号，同时还需要在阿里云服务器的后台配置`安全组配置`允许访问`324`端口。

```javascript
var httpsport = normalizePort(process.env.PORT || '324');
var httpserver = https.createServer(options,app);
httpserver.listen(httpsport);

//配置 安全组配置

允许	 自定义TCP	324/324	 地址段访问 	0.0.0.0/0  -   1	2017-06-10  22:05:00
```

最后打包后端代码`scp(就是不喜欢ftp)`上传到服务器你喜欢的路径下，然后先`npm install`解决项目依赖，再`npm start`运行后端项目即可，记住这里可以直接退出服务器终端环境，不要`Ctrl+C`停止后台服务，否则前端访问不了接口，你懂得！

```javascript
//http服务，端口我媳妇生日
Http Web Server Run Is，http://www.xxxx.cn:49
//https服务，端口我生日
Https Web Server Run Is，https://www.xxxx.cn:324
```

