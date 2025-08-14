const webpack = require('webpack')
const miniCss = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bandle.js',
    },
    devServer: {
        port: 5000,
        static: './public',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/, use: [
                    miniCss.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new miniCss({
            filename: 'styles.css'
        })
    ]
}