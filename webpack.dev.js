const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path')
const root = __dirname

module.exports = merge(common, {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client',
        'webpack/hot/only-dev-server',
        path.resolve(root, 'src/index.js')
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(root, 'dist'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true, // 激活服务器的HMR
        contentBase: './src/',
        compress: true,
        publicPath: '/',
        port: 8000,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // 热替换插件
        new webpack.NamedModulesPlugin() // 执行热替换时打印模块名字
    ]
});