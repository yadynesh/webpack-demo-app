const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(common, {
    mode: 'development',
    // devtool: 'none',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [ new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    module: {
        rules:[
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // Inject styles into DOM using style tag
                    'css-loader', // 2. Turns css into commonjs
                    'sass-loader' // 1. Turns sass into css
                ]
            },
        ]
    }
    
});
