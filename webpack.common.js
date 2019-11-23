
module.exports = {
    mode: 'development',
    // devtool: 'none',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    'html-loader',
                ]
            },{
                test: /\.(svg|png)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'imgs'
                    }
                }
            }
        ]
    }
}    