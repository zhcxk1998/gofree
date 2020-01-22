# GoFree自在行客(前端):sunny:~

## 介绍
自在行客是一款基于人工智能技术的个性化推荐引擎网站，可以根据每个用户的兴趣、出游偏好以及消费能力等多个维度进行自助游行程的推荐与规划。目的是力图解决用户在安排行程规划过程中，旅游信息过载、难以做出最佳出游决策等痛点，达到个性化定制的目的。依靠AI技术代替用户扎入到过剩的网络出游信息中，将用户从大数据的汪洋大海中真正解救出来，能够真正的做到轻轻松的说走就走。:pig:

在线地址：[https://gofree.algbb.fun/](https://gofree.algbb.fun/)（已过期）

## 技术选型

前端：React + Antd

后端：Python + Django + spark + kafka + flume + MySql + docker + redis

## 功能
1. 用户可以自由定制旅游喜好、地点、时间等信息
2. 基于图论的算法为用户推荐出若干条符合喜好的旅游路线
3. 创建用户画像，针对用户定制标签，构建特征库

## 运行截图

### 行程推荐
![](http://cdn.algbb.cn/screenshots/gofree/推荐.png)

### 行程概览
![](http://cdn.algbb.cn/screenshots/gofree/行程概览.png)

### 行程详情
![](http://cdn.algbb.cn/screenshots/gofree/行程详情.png)

### 行程替换
![](http://cdn.algbb.cn/screenshots/gofree/行程替换.png)

## 安装运行

* ##### 第一步
    * 克隆项目到本地`git clone http://github.com/zhcxk1998/gofree
* #### 第二步
    * `npm i`安装依赖
* #### 第三步
    * 构建运行服务`npm run dev`
* #### 第四部
    * 浏览器输入`localhost:8080`

## 目录结构

    |-- [build]                   // webpack构建
    |-- [public]                  // 静态资源
    |-- [src]                     // 客户端代码
        -- [component]            // 组件代码
        -- [page]                 // 页面代码
        -- [data]                 // 运行数据
        -- [mock]                 // mock数据
        -- [util]                 // 工具函数
    |-- .gitignore                // git忽略配置
    |-- package-lock.json         // npm
    |-- package.json              // npm
    ...
