import { Document, Packer, Paragraph, TextRun } from "docx";
import { Buffer } from "buffer";

export default async function handler(req, res) {
  // 创建个人简历Word文档（嵌入你的完整信息，优化排版）
  const doc = new Document({
    sections: [
      {
        children: [
          // 简历标题（居中、加粗、放大）
          new Paragraph({
            children: [
              new TextRun({
                text: "个人简历 (Software Technology Graduate)",
                bold: true,
                size: 32,
              }),
            ],
            alignment: "center"
          }),
          new Paragraph({ text: "" }), // 空行分隔

          // 基本信息（左对齐，清晰排版）
          new Paragraph({
            children: [
              new TextRun({ text: "姓名：仇棋", bold: true }),
              new TextRun({ text: "  |  电话：19573052612  |  邮箱：1747189657@qq.com" })
            ]
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "求职意向：", bold: true }),
              new TextRun({ text: "Java 开发工程师、前端开发工程师、软件开发助理、AI智能工程师" })
            ]
          }),
          new Paragraph({ text: "" }), // 空行分隔

          // 教育背景（标题加粗，内容左对齐）
          new Paragraph({
            children: [
              new TextRun({
                text: "教育背景",
                bold: true,
                size: 24,
              }),
            ]
          }),
          new Paragraph("长沙南方职业学院 | 软件技术专业 | 大专"),
          new Paragraph("主修课程：Java 程序设计、数据结构、计算机网络、MySQL 数据库、Web 前端开发、软件工程"),
          new Paragraph({ text: "" }), // 空行分隔

          // 核心技能（标题加粗，分点清晰）
          new Paragraph({
            children: [
              new TextRun({
                text: "核心技能",
                bold: true,
                size: 24,
              }),
            ]
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "后端开发：", bold: true }),
              new TextRun({ text: "掌握 Java 基础语法，熟悉 Spring Boot、MyBatis 框架，能独立完成基础接口开发与数据处理。" })
            ]
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "前端开发：", bold: true }),
              new TextRun({ text: "熟悉 HTML5、CSS3、JavaScript，掌握 Vue.js 框架及 Element UI 组件库，可实现响应式页面搭建。" })
            ]
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "小程序开发：", bold: true }),
              new TextRun({ text: "了解 微信小程序 原生开发规范，能够完成页面布局、逻辑编写及基础接口对接。" })
            ]
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "数据库：", bold: true }),
              new TextRun({ text: "熟练掌握 MySQL 数据库，可完成表结构设计、增删改查（CRUD）及基础 SQL 优化。" })
            ]
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "工具与环境：", bold: true }),
              new TextRun({ text: "熟练使用 IntelliJ IDEA、HBuilderX、Navicat、Postman，掌握 Git 版本控制基础。" })
            ]
          }),
          new Paragraph({ text: "" }), // 空行分隔

          // 项目经验（标题加粗，每个项目清晰分隔）
          new Paragraph({
            children: [
              new TextRun({
                text: "项目经验",
                bold: true,
                size: 24,
              }),
            ]
          }),
          // 项目一
          new Paragraph({
            children: [
              new TextRun({ text: "项目一：京东高仿电商平台 (前后端分离项目)", bold: true })
            ]
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "技术栈：", bold: true }),
              new TextRun({ text: "Vue + Spring Boot + MySQL + Element UI" })
            ]
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "项目描述：", bold: true }),
              new TextRun({ text: "基于京东首页与商品流转逻辑，开发的高仿电商平台，包含用户登录、商品展示、购物车等核心模块。" })
            ]
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "个人职责：", bold: true })
            ]
          }),
          new Paragraph("1. 负责前端商品列表、详情页及购物车页面的搭建与样式实现。"),
          new Paragraph("2. 使用 Spring Boot 开发后端接口，完成用户登录验证、商品数据查询等功能。"),
          new Paragraph("3. 设计并维护 MySQL 数据库表，完成前后端联调与基础测试。"),
          new Paragraph({ text: "" }), // 空行分隔

          // 项目二
          new Paragraph({
            children: [
              new TextRun({ text: "项目二：校园交流平台", bold: true })
            ]
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "技术栈：", bold: true }),
              new TextRun({ text: "Spring Boot + Vue + MySQL" })
            ]
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "项目描述：", bold: true }),
              new TextRun({ text: "面向校园场景开发的交流社区，支持帖子发布、评论互动、用户管理等功能。" })
            ]
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "个人职责：", bold: true })
            ]
          }),
          new Paragraph("1. 负责后端业务逻辑编写，实现帖子的发布、查询与删除接口。"),
          new Paragraph("2. 参与前端页面开发，使用 Vue 组件化开发思想完成页面渲染与交互。"),
          new Paragraph("3. 优化数据库查询语句，提升平台数据加载速度与系统稳定性。"),
          new Paragraph({ text: "" }), // 空行分隔

          // 项目三
          new Paragraph({
            children: [
              new TextRun({ text: "项目三：微信小程序", bold: true })
            ]
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "技术栈：", bold: true }),
              new TextRun({ text: "微信小程序原生 + 云开发 / 后端 API 接口" })
            ]
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "项目描述：", bold: true }),
              new TextRun({ text: "开发一款具备信息展示与交互功能的微信小程序，适用于校园或个人使用场景。" })
            ]
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "个人职责：", bold: true })
            ]
          }),
          new Paragraph("1. 独立完成小程序页面架构设计，实现美观的 UI 布局与交互效果。"),
          new Paragraph("2. 编写业务逻辑代码，完成用户授权、数据列表展示、表单提交等核心功能。"),
          new Paragraph("3. 对接后端接口或云数据库，实现数据的增删改查操作。"),
          new Paragraph({ text: "" }), // 空行分隔

          // 自我评价（标题加粗，内容完整）
          new Paragraph({
            children: [
              new TextRun({
                text: "自我评价",
                bold: true,
                size: 24,
              }),
            ]
          }),
          new Paragraph("本人性格踏实严谨，具备良好的团队协作与沟通能力。作为应届毕业生，拥有扎实的软件技术专业基础，掌握 Java 及前端开发核心技能，具备多个完整项目的开发与实践经验。学习能力强，乐于钻研新技术，对待工作认真负责，渴望在实战岗位上积累成长，立志成为一名优秀的技术工程师。")
        ],
      },
    ],
  });

  // 生成 Word 文件（文件名改为“仇棋-个人简历.docx”，更贴合求职场景）
  const buffer = await Packer.toBuffer(doc);

  // 设置响应头，实现浏览器直接下载（修复中文文件名报错）
  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  );
  res.setHeader("Content-Disposition", `attachment; filename*=UTF-8''${encodeURIComponent("仇棋-个人简历.docx")}`);
  res.send(buffer);
}

// 关闭bodyParser，避免影响二进制文件生成
export const config = {
  api: {
    bodyParser: false,
  },
};