const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {


    entry: './public/javascripts/index.js',
    output: {
        path: path.resolve(__dirname, './public/dist'),
        filename: 'bundle.js'
    },


    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({ 
                    use:'css-loader',
                }) 
            },

            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css',
            disable: false,
            allChunks: true
        })
    ],

    // plugins: [
    //     new ExtractTextPlugin('styles.css')
    // ],

    // resolve: {
    //   extensions: ['.js', '.json', '.jsx']
    // }

}