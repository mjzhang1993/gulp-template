# gulp-simple-template
> 简单的 gulp 项目配置，适用于一般简单的xiang项目

- gulp 自动化
- sass 编写样式
- eslint 代码检查
- browser-sync 浏览器实时刷新
- html、css、js 代码压缩，添加MD5
- gulp-autoprefixer 浏览器私有前缀自动补全

## 运行

### 1. 编译并生成开发版本

> `npm run dev` 或者 `gulp dev`

### 2. 本地运行开发版本，支持实时刷新

> `npm run run` 或者 `gulp run`

### 3. 输出生产版本，添加 MD5

> `npm run build`

### 4. 生产版本运行测试，只能查看，不能修改

> `npm run build-test`

## 注意
> /app/libs 用来放置插件或者类库，需要定义全局变量的，要在 .eslintrc --> globals 下 开启，否则 eslint 会提示
