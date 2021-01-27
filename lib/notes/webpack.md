# 使用

webpack 动态打包所有依赖，并生成依赖图，使每个模块明确表述它自身的依赖，避免打包未使用的模块。

## 基础

创建目录结构如下：

```diff
  |- package.json
  |- /dist
  	|- index.html
  |- /src
  	|- index.js
```



`webpack.config.js` 基础配置：

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

Tip： 如果 `webpack.config.js` 存在，则 `webpack` 命令将默认选择使用它。 使用 `--config` 选项则可以传递任何名称的配置文件。 



## 管理

 webpack 最出色的功能之一就是，除了引入 JavaScript，还可以通过 loader 或内置的 [Asset Modules](https://webpack.docschina.org/guides/asset-modules/) 引入任何其他类型的文件。 



### 加载CSS

要在JS中 import CSS文件，首先需要安装 **style-loader** 和 **css-loader**：

```shell
npm install --save-dev style-loader css-loader
```

webpack.config.js 添加配置：

```javascript
module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-lader', 'css-loader']
      }
    ],
  },
```

 webpack 根据正则表达式，来确定要查找的文件，并提供给指定的 loader。此示例中，所有以 `.css` 结尾的文件，都将被提供给 `style-loader` 和 `css-loader`。  模块 loader 可以**链式调用**。链中的每个 loader 都将对资源进行转换。链会逆序执行。第一个 loader 将其结果（被转换后的资源）传递给下一个 loader，所以，要保证loder的先后顺序。最后，webpack 期望链中的**最后的 loader 返回 JavaScript**。 

*其他loader使用方法相似，以此类推。*



### 分离入口

在entry中添加新路径作为入口起点，修改output为对应生成的文件名。如：

```JavaScript
module.exports = {
  entry: './src/index.js',
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
   output: {
    filename: 'bundle.js',
    filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
 };
```



### HtmlWebpackPlugin 

HtmlWebpackPlugin 可以生成项目的主入口HTML文件，并管理其中引入的JS，CSS等资源。安装如下：

```shell
npm install --save-dev html-webpack-plugin
```

webpack.config.js 添加配置：

```javascript
plugins: [
    new HtmlWebpackPlugin({
      title: 'HtmlWebpackPlugin的输出',
    }),
  ]
```

