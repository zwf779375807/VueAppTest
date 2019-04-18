
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'), filename: 'bundle.js'
    },
    plugins: [new htmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
        filename: 'index.html'
    }),
    new VueLoaderPlugin()],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=21784&name=[hash]-[name].[ext]' },
            { test: /\.(ttf)$/, use: 'url-loader' },
            { test: /\.vue$/, use: 'vue-loader' },
        ]
    }
}
