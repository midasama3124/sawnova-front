const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: "development",
    devServer: {
        contentBase: path.resolve(__dirname,'dist'),
        compress:true,
        publicPath: "dist",
        writeToDisk:true
    },
    entry: './src/js/app.js',
    output:{
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist/js'),
        publicPath: 'dist'
    },
    module:{
        rules:[
            {
                test: /\.(scss)$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'resolve-url-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options:{
                            postcssOptions: {
                                plugins: [
                                  [
                                    "autoprefixer"
                                  ]
                                ]
                              }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../fonts/',
                            publicPath: '../fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|ico)(\?\S*)?$/,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../image/',
                            publicPath: '../image/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/app.css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
}