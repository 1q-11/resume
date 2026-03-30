// 引入express框架，启动本地服务
const express = require('express');
const app = express();
const port = 3000; // 本地服务端口，访问地址：http://localhost:3000
// 新增：引入打开浏览器的模块（Node.js内置，无需额外安装）
const { exec } = require('child_process');

// 引入生成Word简历的核心接口
const generateWord = require('./api/generate-word.js').default;

// 核心修改：根路由直接显示完整可视化简历网页（带样式、排版清晰，彻底解决挤在一起问题）
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    仇棋 - 个人简历
                姓名：仇棋 | 电话：19573052612 | 邮箱：1747189657@qq.com
            Software Technology Graduate求职意向Java 开发实习生、前端开发实习生、软件开发助理、技术支持教育背景长沙南方职业学院 | 软件技术专业 | 大专主修课程：Java 程序设计、数据结构、计算机网络、MySQL 数据库、Web 前端开发、软件工程核心技能后端开发：掌握 Java 基础语法，熟悉 Spring Boot、MyBatis 框架，能独立完成基础接口开发与数据处理。前端开发：熟悉 HTML5、CSS3、JavaScript，掌握 Vue.js 框架及 Element UI 组件库，可实现响应式页面搭建。小程序开发：了解微信小程序原生开发规范，能够完成页面布局、逻辑编写及基础接口对接。数据库：熟练掌握 MySQL 数据库，可完成表结构设计、增删改查（CRUD）及基础 SQL 优化。工具与环境：熟练使用 IntelliJ IDEA、HBuilderX、Navicat、Postman，掌握 Git 版本控制基础。项目经验项目一：京东高仿电商平台 (前后端分离项目)技术栈：Vue + Spring Boot + MySQL + Element UI项目描述：基于京东首页与商品流转逻辑，开发的高仿电商平台，包含用户登录、商品展示、购物车等核心模块。个人职责：1. 负责前端商品列表、详情页及购物车页面的搭建与样式实现。2. 使用 Spring Boot 开发后端接口，完成用户登录验证、商品数据查询等功能。3. 设计并维护 MySQL 数据库表，完成前后端联调与基础测试。项目二：校园交流平台技术栈：Spring Boot + Vue + MySQL项目描述：面向校园场景开发的交流社区，支持帖子发布、评论互动、用户管理等功能。个人职责：1. 负责后端业务逻辑编写，实现帖子的发布、查询与删除接口。2. 参与前端页面开发，使用 Vue 组件化开发思想完成页面渲染与交互。3. 优化数据库查询语句，提升平台数据加载速度与系统稳定性。项目三：微信小程序技术栈：微信小程序原生 + 云开发 / 后端 API 接口项目描述：开发一款具备信息展示与交互功能的微信小程序，适用于校园或个人使用场景。个人职责：1. 独立完成小程序页面架构设计，实现美观的 UI 布局与交互效果。2. 编写业务逻辑代码，完成用户授权、数据列表展示、表单提交等核心功能。3. 对接后端接口或云数据库，实现数据的增删改查操作。自我评价本人性格踏实严谨，具备良好的团队协作与沟通能力。作为应届毕业生，拥有扎实的软件技术专业基础，掌握 Java 及前端开发核心技能，具备多个完整项目的开发与实践经验。学习能力强，乐于钻研新技术，对待工作认真负责，渴望在实战岗位上积累成长，立志成为一名优秀的技术工程师。<!-- 下载按钮：点击即可下载Word简历，样式统一美观 -->
            📥 下载个人简历（Word格式）
  `);
});

// 配置接口路由，访问该地址即可触发下载（供页面按钮调用）
app.get('/api/generate-word', (req, res) => {
  generateWord(req, res).catch(err => {
    console.error('生成简历失败：', err);
    res.status(500).send('简历生成失败，请检查代码或依赖');
  });
});

// 启动本地服务，自动打开浏览器，直接显示完整简历网页（不会关闭、排版清晰）
app.listen(port, () => {
  const homeUrl = `http://localhost:${port}`; // 根路由地址（完整简历网页）
  const downloadUrl = `http://localhost:${port}/api/generate-word`; // 下载接口地址
  console.log(`本地服务已启动！浏览器已自动打开，显示你的个人简历`);
  console.log(`简历网页地址：${homeUrl}`);
  console.log(`点击网页中的下载按钮，即可下载Word版简历，文件保存在电脑「下载」文件夹`);
  
  // 自动打开浏览器访问根路由（完整简历网页），稳定不关闭
  if (process.platform === 'win32') {
    exec(`start ${homeUrl}`); // Windows系统打开浏览器
  } else if (process.platform === 'darwin') {
    exec(`open ${homeUrl}`); // Mac系统打开浏览器
  } else {
    exec(`xdg-open ${homeUrl}`); // Linux系统打开浏览器
  }
});