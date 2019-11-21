const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    // devtool: 'none',
    entry: './src/index.js',
    plugins: [ new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // Inject styles into DOM using style tag
                    'css-loader', // 2. Turns css into commonjs
                    'sass-loader' // 1. Turns sass into css
                ]
            }
        ]
    }
}    